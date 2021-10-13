import $ from "jquery";

import {addDataToLayer,searchLayer} from '../../layers/control-layers'
import { prediosModal } from '../../../pageComponent/modal/modals/prediosModal'
import {barriosModal} from '../../../pageComponent/modal/modals/barriosModal'
import { pythonGetRequest } from "../../../serverComponent/python/python";

import { propietariosModal } from "../../../pageComponent/modal/modals/propietariosModal";

var jsonFeatureSelected='';
var tipoModal='' //para saber cual modal mostrar
// create dropdown with result of search
export function createDropdown(title,name,data){
    tipoModal=name
    name==='consulta_barrios'?name='barrios':name // si es consulta por barrios 
    
    jsonFeatureSelected=data
    // create dropdown
    let menuItems = $('#dropdown-items');
    menuItems.empty();
    let lengthData= 0
    if(data!=null)  lengthData= data.length          
   
    
    if(lengthData>0 ){
      for (let i = 0; i < lengthData; i++) {
        // dropdown items
        let dropdownItems = document.createElement('option');
        dropdownItems.id= i;
        if(name==='nombre_completo'){
          dropdownItems.textContent=data[i].nombre_completo;
        }
        else if(name==='direccion_interna'){
          dropdownItems.textContent=data[i].properties.registros[0].direccion;
        }
        else{
          if(name==='numero_documento'){                      
            dropdownItems.textContent=data[i].numero_documento;
          }else{
            if(name==='codigo_interno'){
              dropdownItems.textContent=data[i].properties.registros[0].codigo_int;
            }else{
          dropdownItems.textContent=data[i].properties[name];}
            }
        
        }
        dropdownItems.setAttribute('class','dropdown-item');
        dropdownItems.setAttribute('type', 'button');
        menuItems.append(dropdownItems);
      }

    }else{
      console.log(lengthData)
      let dropdownFail = document.createElement('div');
      dropdownFail.setAttribute('class','dropdown-header dropdown_empty');
      dropdownFail.innerHTML ='No hay ninguna coincidencia'
      menuItems.append(dropdownFail);
    }

}
// selection of dropdown item
$('#menu-items-results').find('.dropdown-items').on('click', function(e) {

  var feat=jsonFeatureSelected[e.target.id] 
   
  if(tipoModal!='nombre_completo'&& tipoModal!='numero_documento'){
    addDataToLayer(feat)        
  }
  if(tipoModal=='consulta_barrios'){
    barriosModal(null,feat,1)
  }
  else if(tipoModal=='direccion_interna'){
    let urlReq='api/consulta_geojson/codigo_catastral/'+feat.properties.codigo_nuevo
    pythonGetRequest(getfeat,urlReq)
    function getfeat(data){
      prediosModal(null,data.features[0],'search')
    }
  }
  else{
    if(tipoModal=='codigo_interno'){
       // console.log(feat.properties.codigo_nuevo)
        let urlReq='api/consulta_geojson/codigo_catastral/'+feat.properties.codigo_nuevo
        pythonGetRequest(getfeat,urlReq)
        function getfeat(data){
          //console.log(data)
          prediosModal(null,data.features[0],'search')
        }

    }else{
      if(tipoModal=='nombre_completo'||tipoModal=='numero_documento'){
        propietariosModal(feat)
      }else{
    prediosModal(null,feat,1,'search')
      }
    }
  }

  $('#dropdown-menu-results').hide()
})

