import $ from "jquery";
import "../configComponent/jquery-global.js";



import {sizeInvalid} from '../mapComponent/map'
import {highlightLayerRemove} from '../mapComponent/layers/control-layers'

import {panorama} from './capture/panorama/panorama'
import {streetview} from './capture/street_view/streetview'
import {close360} from './capture/controls/close360'

import './stadistics/stadistics'
import './modal/modal'

export var splitTable=()=>{
    // dismissRightPanel();
    if(!$('#right_panel').hasClass('nonactive')){
        close360();
    }

    $("#table-container").removeClass('table-hide').removeClass( "split-table-full").addClass( "split-table" );
    $("#map").removeClass( "split-map-full").addClass( "split-map");

    $(window).on("resize");

    sizeInvalid();

}


export var mapView=()=>{   
    // removeToMap(tableLayer) 

    $("#map").removeClass( "split-map").addClass( "split-map-full" );
    $("#table-container").removeClass( "split-table").removeClass( "split-table-full" ).addClass('table-hide');

    highlightLayerRemove();
    sizeInvalid();
}

export var tableView=()=>{
    $("#table-container").removeClass('table-hide').removeClass( "split-table").addClass( "split-table-full" );
    $("#map").removeClass( "split-map-full").removeClass( "split-map" ).addClass('map-hide');

    $(window).on("resize");
}

export var view360=(data)=>{    
    $("#container_360").removeClass("nonactive")
    $("#table-container").removeClass( "split-table").removeClass( "split-table-full" ).addClass('table-hide')
    $("#map").removeClass( "split-map").addClass( "split-map-full" );

    $("#right_panel").removeClass( "nonactive");
    $("#marco").removeClass( "nonactive");
    $("#psv_viewer").removeClass( "nonactive");
    $("#drag_me").removeClass('drag_me_off').addClass('drag_me_on');
  
    $("#left_panel").addClass('init-capture');

    $('#map').removeClass('nonactive').removeClass('map-hide').removeClass('split-map-full').addClass('init-capture')
    
    $('#floatingMenu').addClass('openView') //clase para controlar responsive en 360 abierto

    try{
        panorama(data.streetview,data.heading,data.latitude,data.longitude);
        streetview(data.latitude,data.longitude,data.heading);

        highlightLayerRemove();
   
    }catch{
        console.log('Error')
        close360();
    }

}


// export var ChartView=()=>{
//     $("#table-container").removeClass( "split-table").removeClass( "split-table-full" ).addClass('table-hide')

//     if(!$('#right_panel').hasClass('nonactive')){
//         close360();
//     }
//     $("#chart-container").removeClass('nonactive');
    
//     $("#left_panel").addClass('init-capture');
//     $('#map').removeClass('nonactive').removeClass('map-hide').removeClass('split-map-full').addClass('init-capture')
//     $("#right_panel").removeClass( "nonactive");
// }