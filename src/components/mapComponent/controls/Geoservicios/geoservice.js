import 'leaflet/dist/leaflet.css';

import $ from "jquery"
const L =require ('leaflet');
//Components
import {createModal} from '../../../pageComponent/modal/createModal'
import {createItemButton} from'../floatingMenu/buttonItem'
import {jsonModal} from './JsonGeoModal'


//Modulos de Node
var JSZip = require("jszip");
var fs = require("fs");

const shp = require("shpjs");
import '../../../../assets/lib_modified/leaflet-shapefile/leaflet.shpfile'

//Mapas y funcionalidads
import { map } from "../../map";
import { agregar_capa_LayerTree } from "../tree-layers";

//Libs Modificadas o Descargas (Assets)
import "../../../../assets/lib_modified/Leaflet-WMS/Leaflet-WMS.min.js"
import "leaflet.nontiledlayer";
import "../../../../assets/lib_modified/Leaflet-NonTiledLayer-WCS/NonTiledLayerWCS.js";  

var geojsonMarkerOptions = {
  radius: 10,
  fillColor: "#3c94f7",
  color: "#3c94f7",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
}

// change the option shp/wms/wfs/wcs
export var onSelectChange=(e)=>{
  let optionSelected=$("#system_ref_geos option:selected" ).val()
  $('.form-geos-sys').hide();
  $('#'+optionSelected).show();
}

export var onSearch=()=>{    
  var optionSelected=$("#system_ref_geos").val();
  
  if(optionSelected=="sin"){
      alert('No ha seleccionado una opcion!')
      return;
  }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  else if (optionSelected=="SHP"){
    var files = document.getElementById('file').files;
    if (files.length == 0) {
      return; //do nothing if no file given yet
    }
    
    var file = files[0];
    
    if (file.name.slice(-3) != 'zip'){ //Demo only tested for .zip. All others, return.
      alert('Error. Seleccione un archivo .zip')
      return;
    } else {
      handleZipFile(file);
    }
    let nombreCapaZipFile //nombre archivo shp 

    //More info: https://developer.mozilla.org/en-US/docs/Web/API/FileReader
    function handleZipFile(file){
      var reader = new FileReader();
      nombreCapaZipFile=file.name.slice(0,-4)
      reader.onload = function(){
        if (reader.readyState != 2 || reader.error){
          alert('Hubo un error. Intente nuevamente'+reader.error)
          return;
        } else {
          convertToLayer(reader.result);
        }
      }
      reader.readAsArrayBuffer(file);
    }
    
    function convertToLayer(buffer){      
      shp(buffer).then(function(geojson){	//More info: https://github.com/calvinmetcalf/shapefile-js
        var layer = L.shapefile(geojson,{
          pointToLayer: function (feature, latlng) {
              return L.circleMarker(latlng, geojsonMarkerOptions);}
            }).addTo(map);//More info: https://github.com/calvinmetcalf/leaflet.shapefile
        alert('Se cargo con éxito el shapefile : '+nombreCapaZipFile)
        $('#geoserviceModal').remove();
        //
        agregar_capa_LayerTree(layer,nombreCapaZipFile,nombreCapaZipFile)  //agregar a control
      });
    }

  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  else if (optionSelected=="WMS"){        

      var url_wms = $('#urlservice').val();
      
      try{
        var wms_layer = new L.TileLayer.WMS(url_wms,{
          format: 'image/png',
          transparent: true,
          version: '1.3.0',
          crs: L.CRS.EPSG4326
        });

      }catch(err){
        console.log('Error');
        alert('El servicio no puede ser conectado');
        return;
      }
      
      wms_layer.getCapabilities({
        done: function(capabilities) {          
        var capablt = capabilities.getElementsByTagName('Capability')[0];
        capablt = capablt.getElementsByTagName('Layer')[0];
        var capas = capablt.getElementsByTagName('Layer');         
        var arr_capas = [];
        for (let index = 0; index < capas.length; index++) {          
          var capa_titulo = capas[index].getElementsByTagName('Title')[0].innerHTML;
          var capa_nombre = capas[index].getElementsByTagName('Name')[0].innerHTML;            
          const opcion = document.createElement('option');
          opcion.value = capa_nombre;
          opcion.text= capa_titulo;
          opcion.id = capa_nombre;
          // opcion.onclick=traer_capa_wms(capa_nombre)
          $('#select_capa_wms').append(opcion);
          arr_capas.push([capa_titulo,capa_nombre]);            
        }
        console.log(arr_capas[1]);
        $('#div-wms-2').removeClass('hide');
        $('#div-wms-2').addClass('show');
        
        $('#div-wms-1').removeClass('show');
        $('#div-wms-1').addClass('hide');

        $('#system_ref_geos').prop('disabled', 'disabled');

        $('#boton_salir_carga_wms').on('click', ()=>{
          $('#geoserviceModal').remove();
          $('#geoserviceButton').toggleClass('active');
        });
        $('#geoserviceSave').addClass('hide');    

        $('#boton_carga_wms').on('click',()=>{            
          var nombre_capa=$('#select_capa_wms').val();
          var titulo_capa = $('#select_capa_wms option:selected').text();
          // var nombre_capa2 = titulo_capa.replace('<![CDATA[','');
          // nombre_capa2 = nombre_capa.replace(']]>','');
          console.log(nombre_capa);
          $('#select_capa_wms option:selected').attr('disabled','disabled');
          carga_capa_wms(url_wms,nombre_capa,titulo_capa); 
        });
        },
        fail: function(errorThrown) {
        console.log('getCapabilitiesfailed: ', errorThrown);
        alert('El servicio no puede ser conectado');
        },
        always: function() {
        console.log('getCapabilitiesfinished');
        }
      });        
    
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  else if (optionSelected=="WFS"){
      // console.log(optionSelected);
      var url_wfs = $('#urlservicewfs').val();
      try{
        var wms_layer = new L.TileLayer.WMS(url_wfs,{
          format: 'image/png',
          transparent: true,
          version: '1.3.0',
          crs: L.CRS.EPSG4326
        });
        
      }catch(err){
        console.log('Error');
        alert('El servicio no puede ser conectado');
        return;
      }
      console.log(url_wfs);
      wms_layer.getCapabilities({
        done: function(capabilities) {
        // console.log(capabilities);
        var capablt = capabilities.getElementsByTagName('Capability')[0];
        capablt = capablt.getElementsByTagName('Layer')[0];
        var capas = capablt.getElementsByTagName('Layer');         
        var arr_capas = [];
        for (let index = 0; index < capas.length; index++) {          
          var capa_titulo = capas[index].getElementsByTagName('Title')[0].innerHTML;
          var capa_nombre = capas[index].getElementsByTagName('Name')[0].innerHTML;            
          const opcion = document.createElement('option');
          opcion.value = capa_nombre;
          opcion.text= capa_titulo;
          opcion.id = capa_nombre;
          // opcion.onclick=traer_capa_wms(capa_nombre)
          $('#select_capa_wfs').append(opcion);
          arr_capas.push([capa_titulo,capa_nombre]);            
        }
        console.log(arr_capas);
        $('#div-wfs-2').removeClass('hide');
        $('#div-wfs-2').addClass('show');
        
        $('#div-wfs-1').removeClass('show');
        $('#div-wfs-1').addClass('hide');

        $('#system_ref_geos').prop('disabled', 'disabled');

        $('#boton_salir_carga_wfs').on('click', ()=>{
          $('#geoserviceModal').remove();
          $('#geoserviceButton').toggleClass('active');
        });
        $('#geoserviceSave').addClass('hide');    

        $('#boton_carga_wfs').on('click',()=>{            
          var nombre_capa=$('#select_capa_wfs').val();
          var titulo_capa = $('#select_capa_wfs option:selected').text();
          console.log(nombre_capa);
          $('#select_capa_wfs option:selected').attr('disabled','disabled');
          carga_capa_wms(url_wfs,nombre_capa,titulo_capa); 
        });
        },
        fail: function(errorThrown) {
        console.log('getCapabilitiesfailed: ', errorThrown);
        alert('El servicio no puede ser conectado');
        },
        always: function() {
        console.log('getCapabilitiesfinished');
        }
      });        
      
  }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
  else if (optionSelected=="WCS"){

    var longlist = document.getElementById("nombresservwcs").options.length;

    for (let i = longlist; i >= 0; i--) {
        var sel = document.getElementById("nombresservwcs");
        sel.remove(sel.selectedIndex[i]);
    }
    var urlwcs = document.getElementById("urlservicewcs").value;
    var parser = new ol.format.WMSCapabilities();
    var nombreswcs = [];
    //urlwcs = "'https://cors-anywhere.herokuapp.com/" + urlwcs + 'SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities' + "'";
    urlwcs = "'" + urlwcs + 'SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities' + "'";
    fetch(eval(urlwcs)/*, { mode: 'no-cors'}*/).then(function (response) {
        return response.text();
    }).then(function (text) {
        var result = parser.read(text);
        select = document.getElementById("nombresservwcs");
        for (var i = 0; i < result.Capability.Layer.Layer.length; i++) {
            nombreswcs[i] = [result.Capability.Layer.Layer[i].Name];
            option = document.createElement("option");
            option.value = result.Capability.Layer.Layer[i].Name;
            option.text = result.Capability.Layer.Layer[i].Title;
            select.appendChild(option);

        }
        if (tamañopantalla==true){quitgif(); }
        else{document.getElementById("carga3").style.display = "none"; }
    }).catch(function(){
        alert('La URL no es válida')
    });

    document.getElementById("listawcs").style.display = "block";

      // var url_wcs = $('#urlservicewcs').val();
      // console.log(url_wcs);

      // var req = new XMLHttpRequest();
      // req.open('GET', url_wcs+"&request=GetCapabilities", false);
      // req.send(null);
      // var arr_capas = []; 
      // if (req.status == 200){
      //   var xml_wcs = req.responseXML;
      //   console.log(xml_wcs);
      //   var capas = xml_wcs.getElementsByTagName('wcs:Contents')[0];
      //   capas = capas.getElementsByTagName('wcs:CoverageSummary');
      //   // capas = capas.getElementsByTagName('wcs:CoverageSummary');
      //   for (var i = 0; i<capas.length;i++){
      //     var titulo = capas[i].getElementsByTagName('wcs:CoverageId')[0].innerHTML;
      //     const opcion = document.createElement('option');
      //     opcion.value = titulo;
      //     opcion.text= titulo;
      //     opcion.id = titulo;
      //       // opcion.onclick=traer_capa_wms(capa_nombre)
      //       $('#select_capa_wcs').append(opcion);
      //     arr_capas.push(titulo)
      //   }
      //   console.log(arr_capas);
      //   $('#div-wcs-2').removeClass('hide');
      //   $('#div-wcs-2').addClass('show');
        
      //   $('#div-wcs-1').removeClass('show');
      //   $('#div-wcs-1').addClass('hide');

      //   $('#system_ref_geos').prop('disabled', 'disabled');
      //   $('#boton_salir_carga_wcs').on('click', ()=>{
      //     $('#geoserviceModal').remove();
      //     $('#geoserviceButton').toggleClass('active');
      //   });
      //   $('#geoserviceSave').addClass('hide');    

      //   $('#boton_carga_wcs').on('click',()=>{            
      //     var nombre_capa=$('#select_capa_wcs').val();
      //     var titulo_capa = $('#select_capa_wcs option:selected').text();
      //     console.log(nombre_capa);
      //     $('#select_capa_wcs option:selected').attr('disabled','disabled');
      //     cargar_capa_wcs(url_wcs,nombre_capa,titulo_capa);
      //     // carga_capa_wms(url_wfs,nombre_capa,titulo_capa); 
      //   });
      //   ////////IMPORTANTE
      //   ////Ejemplo para Describir las capas para obtener las propiedades individuales
      //   ////URL wcs descripcion :
      //   ////  http://geoapps.ideam.gov.co/geoserver/Escenario_Cambio_Climatico/wcs?request=DescribeCoverage&%3Bservice=WCS&version=2.0.0&coverageId=Escenario_Cambio_Climatico__GDBIDEAM.ECC_PRCP_1976_2005_100K_2015
      // }
          
  }  
};
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export var onCancel=()=>{
    $('#geoserviceModal').remove();
    $('#geoserviceButton').toggleClass('active');
}

var addGeoControl=()=>{
    $('#geoserviceButton').toggleClass('active');
    let json=jsonModal(onSelectChange)
    createModal('geoservice',json,onSearch,onCancel,true);
    // $('#geoserviceModalFooter').addClass('hide');    
    }

var carga_capa_wms = (url_wms,nombre_capa,titulo_capa)=>{
      try {
          var wmsLayer = L.tileLayer.wms(url_wms,{
                layers:nombre_capa,
                format: 'image/png',
                transparent: true,
             }).addTo(map);    
      } catch (error) {
        console.log('Error');
        alert("Error!, La capa "+titulo_capa+" no ha podido ser cargada.");
        return;
      }
      // var nombre_capa2 = titulo_capa.replace('<![CDATA[','');
          // nombre_capa2 = nombre_capa.replace(']]>','');
      nombre_capa = titulo_capa.replace('<![CDATA[','');
      nombre_capa = nombre_capa.replace(']]>','');
      titulo_capa = nombre_capa;

      console.log(nombre_capa);
      agregar_capa_LayerTree(wmsLayer,nombre_capa,titulo_capa);
      alert("La capa "+titulo_capa+" ha sido cargado correctamente");
    };

var carga_capa_wfs = (url_wfs,nombre_capa,titulo_capa)=>{
  var capa_wfs = new L.WFS({
      url: url_wfs,
      typeNS: titulo_capa,
      typeName: nombre_capa,
      crs: L.CRS.EPSG4326,
      style: {
          color: 'blue',
          weight: 2
      }
    }).addTo(map);
}

var cargar_capa_wcs = (url_wcs,nombre_capa,titulo_capa)=>{
  try{
    var capa_wcs = L.nonTiledLayer.wcs(url_wcs,{
                wcsOptios:{
                  // layers:nombre_capa,
                  format: 'image/png',
                  // transparent: true,
                },
    }).addTo(map);
    // agregar_capa_LayerTree(wmsLayer,nombre_capa,titulo_capa);

  }catch(e){
    console.log("error  ",e);
  }
}
function loadShpZip(file) {
  var reader = new FileReader();
  zip = new JSZip(reader);
  
  shpString =  zip.file(/.shp$/i)[0].name,
  dbfString = zip.file(/.dbf$/i)[0].name,
  prjString = zip.file(/.prj$/i)[0];

//   new JSZip.external.Promise(function (resolve, reject) {
//     fs.readFile(file, function(err, data) {
//         if (err) {
//             reject(e);
//         } else {
//             resolve(data);
//         }
//     });
// }).then(function (data) {
//     return JSZip.loadAsync(data);
// })
// .then((data)=>{
//   console.log(data);
// })
}
/*
    $('#geoserviceButton').on('click',()=>{
        console.log("pb1");
        

    });
*/
////// IMPORTANTE! ///////////////
///Ejecución Creación Botón
createItemButton('fa-globe','Geoservicios',addGeoControl,'geoservice');
