import {markerStyle} from './plugins/marker_style'
import {lineStyle} from './plugins/line_style'

import {coordPoint} from './plugins/coord360'
import {medirfotografias} from './plugins/measure'
import {save_capture} from './plugins/capture'
import { getDataCaptured } from './plugins/dataCaptured'
var texture1x,texture1y,coord1,coord2;
// Create a new marker when the user clicks somewhere
export var CaptureInteract=(markerPlugin,e,numerCapt,coords,heading,photo)=>{
    try {

        if(markerPlugin){
            if(markerPlugin.markers){
                getDataCaptured(markerPlugin,photo)
                let keysJson=Object.keys(markerPlugin.markers)
                keysJson.map((res)=>{
                    if(!res.includes("captured")){
                        // delete previus capture point
                        markerPlugin.markers[res]&&markerPlugin.removeMarker(res)
                    }
                })
            }
        }
        let marker;
        
        // capture
        marker= markerStyle(numerCapt,e.longitude, e.latitude,'#0af242','rgba(1, 0, 0, 0.5)','Capturado','','capturado')
        markerPlugin.addMarker(marker);
        let coord=coordPoint(e,heading,'capture')
        save_capture(coords,coord,e.textureY,photo,e)

    } catch (error) {
        console.log(error)
    }
}


export var MeasureInteract=(markerPlugin,e,heading,notification)=>{
    try {
        let marker;
        let numerDist;

        // console.log('entro',markerPlugin.markers)
        // measure on psv
        if(!markerPlugin.markers["#2"]){
            if(!markerPlugin.markers["#1"]){
                numerDist=1
                texture1x=e.textureX;
                texture1y=e.textureY;
                coord1=coordPoint(e,heading)
            }else{
                numerDist=2
    
                coord2=coordPoint(e,heading)
                let distancia= medirfotografias(coord1,coord2);
                notification(distancia)
                let lineMarker= lineStyle('#distance',e.textureX, e.textureY, texture1x, texture1y,'rgba(255, 255, 0, 0.5)',distancia)
                markerPlugin.addMarker(lineMarker)
            }
            
            marker= markerStyle(numerDist,e.longitude, e.latitude,'#ffff00','rgba(1, 0, 0, 0.5)','')
            markerPlugin.addMarker(marker);
            
        }else{
            markerPlugin.removeMarker("#1")
            markerPlugin.removeMarker("#2")
            markerPlugin.removeMarker("#distance")
        }
        
    } catch (error) {
        console.log(error)
    }
}