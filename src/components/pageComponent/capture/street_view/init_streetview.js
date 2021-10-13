import {girostreet} from '../controls/giro_streetview'
import {addToMap,removeToMap} from '../../../mapComponent/map'

import { setPsvMarker } from '../panorama/panorama';

export var streetViewMarker;

export var initialize=(lookTo,heading)=>{
    return new google.maps.StreetViewPanorama(
        document.getElementById('marco'),{
        position:lookTo,
        panControl: false,
        imageDateControl: true,
        linksControl:false,
        motionTracking: false,
        motionTrackingControl: false,
        streetViewControl:false,
        clickToGo:false,
        pov: {heading: heading, pitch: 0},
    });
}

//events and management info
export function mapposi(coord, giro,heading,type) {
    let coords=[coord.lat(), coord.lng()];

    // show the correct direction street maps icon 
    streetViewMarker&&removeToMap(streetViewMarker);
    streetViewMarker= girostreet(giro,coords,streetViewMarker);
    addToMap(streetViewMarker);

    // //girar panorama con el streetview

    // setPsvMarker(coord.lng(),heading,'true')

    // giroPSVCorrection(heading2,giro);
    //muestra el icono giro psv y configura todo lo relacionado a él
    // PSV.on('position-updated', function(e) {	
    //     if(e.longitude!= 0){
    //         // console.log(type,'  position-updated rotation e.longitude!= 0',e,e.longitude,headingPSV,giro);
    //         rotation(e.longitude, heading2);
    //     }else{
    //         //girar panorama con el streetview
    //         var giropsv= giroPSVCorrection(heading2,headingPSV);
    //         // console.log(type,'  position-updated rotation e.longitude== 0',e.longitude,giropsv,headingPSV,giro);
    //         rotation(giropsv, heading2);
    //     }
    //     zoompsv();
    // });
    
}

// //depends on the heading move the psv icon to the center point
// function giroPSVCorrection(heading2,giro){
//     if (heading2 >=0 && heading2 <= 60){
//         return giroHeading2(heading2,35,giro);
//     } else if (heading2 >=61 && heading2 <= 90){
//         return giroHeading2(heading2,120,giro); 
//     } else if (heading2 >=91 && heading2 <= 120){
//         return giroHeading2(heading2,210,giro);  
//     } else if (heading2 >=121 && heading2 <= 170){
//         return giroHeading2(heading2,300,giro);
//     } else if (heading2 >=171 && heading2 <= 220){
//         return giroHeading2(heading2,30,giro);
//     } else if (heading2 >=221 && heading2 <= 270){
//         return giroHeading2(heading2,120,giro);  
//     } else if (heading2 >=271 && heading2 <= 300){
//         return giroHeading2(heading2,210,giro);	
//     } else if (heading2 >=301 && heading2 <= 350){
//         return giroHeading2(heading2,300,giro);
//     } else if (heading2 >=351 && heading2 <= 360){
//         return giroHeading2(heading2,30,giro);
//     }
// };

// //rota el psv con el streetview
// function giroHeading2(heading2,value,giro){
//     try {
//         var constg = heading2 - value;     
//         var girops = ((giro+constg) * Math.PI) / 180;
//         // console.log('giroHeading2 constg girops', constg,girops);
//         PSV.rotate({latitude: 0.3, longitude: girops});
//         return girops
//     } catch (error) {
//         return 0
//     }

// }