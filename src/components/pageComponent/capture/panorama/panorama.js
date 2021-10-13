import 'photo-sphere-viewer/dist/photo-sphere-viewer.css'
import MarkersPlugin from 'photo-sphere-viewer/dist/plugins/markers';
import 'photo-sphere-viewer/dist/plugins/markers.css';

import {addToMap,removeToMap} from '../../../mapComponent/map'
import {giropsv} from '../controls/giro_psv'
import {psvLanguage} from './plugins/psv_lang'

import {PSViewer} from './create_pan' 
import {MeasureInteract,CaptureInteract} from './onclick_pan' 

import { getDataCaptured } from './plugins/dataCaptured'

var PSV=null;
var markerPlugin;
var notification;
var psvMarker=null;
var coordsLeaflet=null
export var setPsvMarker=(giro,heading)=>{
    // console.log(giro+' <-giro '+ heading + ' heading ' + (giro * Math.PI) / 180)
        // marker psv on map
        psvMarker&&removeToMap(psvMarker);
        psvMarker= giropsv(giro,heading,coordsLeaflet,psvMarker);
        PSV.rotate({
            longitude: giro,
            latitude: 0.3,
        });
}

export var panorama=(photo,heading,latitude,longitude)=>{
    coordsLeaflet=coordsLeaflet&&null
    coordsLeaflet=[latitude, longitude];
    let coords=[longitude,latitude];
    let numCapture=1000;

    // url pruebas locales
    let url_psv='http://35.236.226.40/panoramas/'+photo+'.jpg';
    // let url_psv='../../panoramas/'+photo+'.jpg';
    let date_photo = photo.slice(7, 15).replace( /(\d{4})(\d{2})(\d{2})/, "$3-$2-$1");
    PSV&&PSV.destroy()
    // draw PSV
    // create viewer 360 psv once
    PSV=PSViewer(date_photo,url_psv);
    psvLanguage();
    markerPlugin=PSV.getPlugin(MarkersPlugin);
    // notifications on psv
    notification=(content)=> PSV.notification.show({
        content: content,
        timeout: 1000,
    });

    
    PSV.on('click', function(e,data) {
        let checkBoxmedir = document.getElementsByClassName("medir-button")[0].classList.contains('psv-button--active');
        if (!checkBoxmedir == false) {
            /** Create a new marker and do measure interaction when the user clicks somewhere*/
            MeasureInteract(markerPlugin,data,heading,notification)
        }else{
            /** Create a new marker and do capture 360 interaction when the user clicks somewhere*/
            CaptureInteract(markerPlugin,data,numCapture,coords,heading,photo)
            numCapture+=1;
        }

    })

    document.getElementsByClassName("medir-button")[0].classList.remove("psv-button--active");
    
    // clear markers from 360
    markerPlugin.clearMarkers();


    // marker psv on map
    let giro = PSV.getPosition().longitude;
    psvMarker&&removeToMap(psvMarker);
    psvMarker= giropsv(giro,heading,coordsLeaflet,psvMarker);
    addToMap(psvMarker);

    //posicion del giroscopio de las img
    PSV.on('position-updated', ()=> {
        // marker psv on map
        giro = PSV.getPosition().longitude;
        psvMarker&&removeToMap(psvMarker);
        psvMarker= giropsv(giro,heading,coordsLeaflet,psvMarker);
        addToMap(psvMarker); 
        console.log(giro,heading,coordsLeaflet,psvMarker)
    });

    // prevent repeat onclick event deleting the last event create on change position
    PSV.__events.click.length==3&&PSV.__events.click.splice(-1,1)

    PSV.on('ready', function () {
        getDataCaptured(markerPlugin,photo)
    });
    
}

