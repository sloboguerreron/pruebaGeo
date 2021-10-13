import './search.scss'

import $ from "jquery";


import {jsonQueries} from './jsonqueries'
import {createDropdown} from './dropdown'

import {pythonGetRequest} from '../../../serverComponent/python/python'

//
import {addToMap,removeToMap,flyToBounds} from '../../map'
import { ypl_pot_barrios } from '../../layers/control-layers';

import{AwesomeMarkersIcon} from '../icons/famIcon'
import { dynamicMarker } from '../markers';
// active search query
var querySearch='direccion_predio';

//cerrar resultados
$('#button-search').on('click',function(e){
  $('#dropdown-menu-results').hide()
  
})


// on query type changes, define the placeholder of input and the parameter that will pass to backend
$('.dropdown-menu').on('click',function(e){  
  $('#search-input').val('') //
  removeToMap(ypl_pot_barrios)
  for (let i in jsonQueries) {
    if(e.target.id===jsonQueries[i].id){
      querySearch=jsonQueries[i].name
      $('#search-input').attr("placeholder", jsonQueries[i].placeholder)
      $('#search-input').attr("title", jsonQueries[i].message)
       if(jsonQueries[i].name=='consulta_barrios'){addToMap(ypl_pot_barrios)} //agrega capa barrios
       else{removeToMap(ypl_pot_barrios)}
      
    }    
  }
    
  
});

let icon=AwesomeMarkersIcon('fa', 'search','green')
var marker=null
 // on input query to de server
$('#search-input').on('input',(e)=>{
  if($('#search-input').val().length>0){
    let timeout = null;
    // clearTimeout(timeout);
    timeout = setTimeout(()=> {  
    if(querySearch=='consulta_barrios'){
      let urlReq=`api/${querySearch}/${e.target.value}`
      pythonGetRequest(searchData,urlReq)
      
    } else if (querySearch=='consulta_sitio'){
      var geocoder = new google.maps.Geocoder();

      geocoder.geocode({'address': `Colombia, Juan de Acosta, ${e.target.value}`}, function (results, status) {
        if (status === 'OK') {       
          var resultado=results[0].geometry.viewport;
          var keys = Object.keys(resultado);

          let long1 = resultado[keys[0]].i;
          let long2 = resultado[keys[0]].g;
          let long = (long2 + long1) / 2;
          let lat1 = resultado[keys[1]].i;
          let lat2 = resultado[keys[1]].g;
          let lat = (lat2 + lat1) / 2;
          let coords=[long,lat]

          marker&&removeToMap(marker);
          marker=dynamicMarker(icon,coords,0);
          flyToBounds([[long1,lat1],[long2,lat2]])
          addToMap(marker);

        } else {
            alert("Sitio no encontrado");
        }
     })
      
    } else{
      if(querySearch=='nombre_completo') {
        let urlReq='api/consulta_geojson/propietario/nombre_completo/'+e.target.value;
        pythonGetRequest(searchData,urlReq)

      }else{
        if(querySearch=='numero_documento'){
          let urlReq='api/consulta_geojson/propietario/numero_documento/'+e.target.value;
          pythonGetRequest(searchData,urlReq)
        }else{
      let urlReq=`api/consulta_geojson/${querySearch}/${e.target.value}`
      pythonGetRequest(searchData,urlReq);}
     } 
    }
        
    }, 100);
  }
})

//click
$('#search-input').on('click',(e)=>{
  if($('#search-input').val().length>0){
    let timeout = null;
    // clearTimeout(timeout);
    timeout = setTimeout(()=> {  
    if(querySearch=='consulta_barrios'){
      let urlReq=`api/${querySearch}/${e.target.value}`
      pythonGetRequest(searchData,urlReq)
    }else if (querySearch=='consulta_sitio'){
      var geocoder = new google.maps.Geocoder();

      geocoder.geocode({'address': `Colombia, Juan de Acosta, ${e.target.value}`}, function (results, status) {
        if (status === 'OK') {       
          var resultado=results[0].geometry.viewport;
          var keys = Object.keys(resultado);

          let lont1 = resultado[keys[0]].i;
          let lont2 = resultado[keys[0]].g;
          let lont = (lont2 + lont1) / 2;
          let lat1 = resultado[keys[1]].i;
          let lat2 = resultado[keys[1]].g;
          let lat = (lat2 + lat1) / 2;
          let coords=[lat, lont]
          console.log(coords);

          marker&&removeToMap(marker);
          marker=dynamicMarker(icon,coords,0);
  
          addToMap(marker);

        } else {
            alert("Sitio no encontrado");
        }
     })
      
    }  else{
    let urlReq='api/consulta_geojson/'+querySearch+'/'+e.target.value; 
    pythonGetRequest(searchData,urlReq); 
    }
        
    }, 100);
  }
})

$('#search-input').on('keyup',(e)=>{
  if($('#search-input').val().length===0){
      $('#dropdown-menu-results').hide()
  }
})

// ten results dropdown
var searchData=(data)=>{
  let result
  querySearch==='consulta_barrios'? result=data[0].features: querySearch==='nombre_completo'?result=data:querySearch==='numero_documento'?result=data:result=data.features;  
  
  $('#dropdown-menu-results').show()
  // create the result dropdown
  createDropdown('resultado',querySearch,result)
}

$('#search-collapse').on('click',function(e){
  alert('Seleccione una opción de búsqueda y mientras digita le van a aparecer los datos con la información requerida')
})   

 