import {standard_osm,carto_light} from '../layers/control-layers'
import {mapZoomEnd,addToMap,removeToMap,currZoom} from '../map'

import $ from "jquery";

// var changeBasemap=(currentbm,newbm)=>{
//     removeToMap(currentbm);
//     addToMap(newbm);
// }
// change base map on less zoom
var zoomChangeBasemap=()=>{
    // if(!$('#comparisonButton').hasClass('active')){
        // if(currZoom() < 20){
        //     changeBasemap(carto_light,standard_osm)
        // }else{
        //     changeBasemap(standard_osm,carto_light)
        // }
    // }
}

// change the base map on zoom
mapZoomEnd(zoomChangeBasemap);

