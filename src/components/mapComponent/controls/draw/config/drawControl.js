import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css'

import './../../../../../assets/lib_modified/leaflet-easybutton/src/easy-button'
import './../../../../../assets/lib_modified/leaflet-easybutton/src/easy-button.css'

import $ from "jquery";

const L =require ('leaflet');
import 'leaflet-draw/dist/leaflet.draw'
import drawLocales from 'leaflet-draw-locales'
import {addDrawData} from './drawDataServer'

import {AwesomeMarkersIcon} from '../../icons/famIcon'
import {drawnItems,drawnServer} from '../../../layers/control-layers'

import {mapAddControl,mapRemoveControl,addToMap,removeToMap} from '../../../map'

import {desactivateControls} from '../../floatingMenu/changeItem'
import { User } from '../../../../configComponent/update-vars';
import { download } from '../../../geoserver/shapeDownload';


var drawPluginOptions= {
    position: 'bottomright',
    draw: {
        polygon: {
            shapeOptions: {
                color: 'green'
            },
            allowIntersection: true,
            drawError: {
                color: 'orange',
                timeout: 1000
            },
            showArea: true,
            metric: false,
            repeatMode: false
        },
        polyline: {
            shapeOptions: {
                color: 'green'
            },
            repeatMode: false
        },
        marker: {
            icon:AwesomeMarkersIcon('fa','map-marked-alt','green')
        },
        circle: false,
        circlemarker:false,
        rectangle: false
    },
    edit: {
        featureGroup: drawnItems,
        remove: false,
        edit: false
    }
};
// Automatically defines Leaflet.draw to the specified language
drawLocales('es')

// Initialize the draw control and pass it the FeatureGroup of editable layers
export var drawControl = new L.Control.Draw(drawPluginOptions);



//boton para descargar
var downloadButton=L.easyButton('fa-download',function(btn,map){
    alert('Se descargaran todos los dibujos')    
    let params=`yopal/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=yopal%3Acapture_draw&maxFeatures=50&outputFormat=SHAPE-ZIP&CQL_FILTER=id_user='${User}'`
    download(params)        
},'Descargar dibujos','bntDes')

var updateButton=L.easyButton('fa-sync-alt',function(btn,map){
    addDrawData();
    addToMap(drawnServer);   
},'Refrescar','bntDes')

export function updateDraw(){
    addDrawData(); 
    addToMap(drawnServer);
}


// on click on footer fab menu
export var addDrawControl=()=>{
    // desactivate layer comparison control
    desactivateControls();
    // data from server
    addDrawData();
    addToMap(drawnServer);
    if(!drawControl._map){
        // add plugin to map
        mapAddControl(drawControl);
        $('#drawButton').addClass('active');
        // draw on map
        addToMap(drawnItems);
        addToMap(downloadButton) //add dowload button
        addToMap(updateButton)
        
    }else{
        desactivateDraw()
    }
}

// desactivate draw control
export var desactivateDraw=()=>{
    $('#drawButton').removeClass('active');
    removeToMap(drawnItems)
    removeToMap(drawnServer)
    mapRemoveControl(drawControl)
    removeToMap(downloadButton) 
    removeToMap(updateButton)
}
