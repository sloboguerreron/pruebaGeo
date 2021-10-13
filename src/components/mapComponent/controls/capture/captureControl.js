import 'leaflet/dist/leaflet.css';

const L =require ('leaflet');
import $ from "jquery";

import { openModal } from '../../../pageComponent/capture/controls/capture_modal';
import { addToMap,removeToMap , map} from "../../map"

import {AwesomeMarkersIcon} from '../../controls/icons/famIcon'
import {desactivateControls} from '../../controls/floatingMenu/changeItem'

import {createItemButton} from'../floatingMenu/buttonItem'

import '../../../../assets/lib_modified/leaflet-easybutton/src/easy-button.js'
import '../../../../assets/lib_modified/leaflet-easybutton/src/easy-button.css'
import { download } from '../../geoserver/shapeDownload';



//boton para descargar
var downloadButton=L.easyButton('fa-download',function(btn,map){
    alert('Se descargarán todos los datos')    
    let params='yopal/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=yopal%3Acapture_nomenclatura&outputFormat=csv&PropertyName=(fecha,usuario,placa_cercana,zun,codigo_nuevo,tipo_acceso,identificacion_acceso,observaciones_visualizacion,direccion,tipologia_placa,materializacion_placa,observaciones_placa,propiedad_horizontal,observaciones_tipologia,observaciones_generales,coordenadas,estado_acceso,propuesta_direccion,tipo_via_principal,numero_via_principal,letra_via_principal,bis_via_principal,cuadrante_via_principal,nomeclatura_via_principal,tipo_via_generadora,numero_via_generadora,letra_via_generadora,bis_via_generadora,cuadrante_via_generadora,mts_acceso,nomeclatura_generadora,geom)'
    download(params)        
},'Descargar datos','bntDesDatos')


export var clickCapture=()=>{
    
    if(!$('#capButton').hasClass('active')){        
        desactivateControls();
        $('#capButton').addClass('active')
        addToMap(downloadButton)
        map.on('click',markerMap)       
        
      
    }else{
        desactivar()        

    }

}
var markerMap=(e)=>{
    var icon= AwesomeMarkersIcon('fa','map-pin','blue')
    openModal(icon,e.latlng)
   

    
}

export var desactivar=()=>{
    $('#capButton').removeClass('active');
    map.off('click',markerMap)  //retirar el evento clic
    removeToMap(downloadButton)
        

}
 //creacion botón capturar
 createItemButton('fa-map-marked-alt','Capturar',clickCapture,'cap')

    
    
    




