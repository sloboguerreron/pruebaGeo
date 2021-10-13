import $ from "jquery";
import {addToMap,removeToMap} from '../../../mapComponent/map'
import {dynamicMarker} from '../../../mapComponent/controls/markers'
import { pythonGetRequest } from '../../../serverComponent/python/python'
import {createIframe,updateIframe} from '../../modal/modals/iframeForm'

import {User} from '../../../configComponent/update-vars'

let marker,coordMarker,photography,captureData;


// open modal event
export var openModal=(icon, coords,photo,dataCaptura)=>{
    photo==null?photography='':photography=photo //
    dataCaptura==null?captureData='':captureData=dataCaptura//
    
    if(marker!=undefined && !photo) removeToMap(marker) //si es captura por boton borra el merker anterior

    marker= photo? dynamicMarker(icon,coords,0,true):dynamicMarker(icon,coords,0);
    coordMarker=marker._latlng.lng+','+marker._latlng.lat;

    // request to the server and callback data for sending to form
    interactionCaptureForm(marker._latlng.lng,marker._latlng.lat,callbackCreateData)

    
    addToMap(marker)
    
    marker.on('dragend', function (e) {
        coordMarker=marker.getLatLng().lng+','+marker.getLatLng().lat;

        // request to the server and callback data for sending to form
        interactionCaptureForm(marker.getLatLng().lng,marker.getLatLng().lat,callbackUpdateData)
    });
}

// interact with data form
export var interactionCaptureForm=(lng,lat,func)=>{
    // request to the server and callback data for sending to form
    let urlReq=`api/consulta_reconocimiento_360/${lng}/${lat}`
    pythonGetRequest(func,urlReq)
}

// --------------------------------------------------------------------------------

// asign data to nomenclatura first form 
var callbackCreateData=(data)=>{
    // openModal 
    let identificacion_360=''  
    photography==''?identificacion_360="N":identificacion_360="S"
    
    createIframe(`&F_80=${identificacion_360}&F_145=${photography}&F_146=${captureData}&F_147=${coordMarker}&F_78=${data.codigo_catastral}&F_57=${data.zun}&F_82=${data.direccion_predio}&F_87=${data.flag_ph}&F_59=${data.Principal.Numero}&F_58=${data.Principal.Tipo_Via}&F_61=${data.Segundaria.Numero}&F_67=${data.Segundaria.Letra}&F_65=${data.Principal.Letra}&F_68=${data.Segundaria.Bis}&F_60=${data.Segundaria.Tipo_Via}&F_66=${data.Principal.Bis}&F_79=${data.Placa_Dom}&F_156=${data.Propuesta.Direccion}&F_152=${data.Propuesta.Nmct_principal}&F_153=${data.Propuesta.Nmct_principal}&F_175=${User}`)
    $('#captureModal').show()
    

}

// ----------------------------------------------------------------------------------

// update data to nomenclatura form
var callbackUpdateData=(data)=>{
    
    updateIframe('F_57' , data.zun);
    updateIframe('F_58' , data.Principal.Tipo_Via);
    updateIframe('F_59' , data.Principal.Numero);
    updateIframe('F_60' , data.Segundaria.Tipo_Via);
    updateIframe('F_61' , data.Segundaria.Numero);
    updateIframe('F_65' , data.Principal.Letra);
    updateIframe('F_66' , data.Principal.Bis);
    updateIframe('F_67' , data.Segundaria.Letra);
    updateIframe('F_68' , data.Segundaria.Bis);
    updateIframe('F_78' , data.codigo_catastral);
    updateIframe('F_79' , data.Placa_Dom);
    updateIframe('F_82' , data.direccion_predio);
    updateIframe('F_87' , data.flag_ph);
    updateIframe('F_147' , coordMarker);
   
}

  
// cerrar el modal
//export var closeModal=()=>{
//    marker&&removeToMap(marker)
//    $('#captureModal').hide()
//}
export function closeModal(){
    $('#captureModal').remove()
    if(marker)removeToMap(marker) //sborra el marker al cerrar el modal
    // $('.psv-marker').hide()

    document.getElementById('search-input').disabled=false //habilitar input
    document.getElementById('search-collapse').disabled=false  //habilitar boton
    document.getElementById('dropdown-items').disabled=false //habilitar drop

}