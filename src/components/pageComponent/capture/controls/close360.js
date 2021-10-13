import $ from "jquery";
import {sizeInvalid,removeToMap} from '../../../mapComponent/map'
import {psvMarker} from '../panorama/panorama'
import {streetViewMarker} from '../street_view/init_streetview'
import { closeModal } from "./capture_modal";

export var close360=()=>{
    $("#marco").addClass( "nonactive")
    $("#psv_viewer").addClass( "nonactive")

    $("#drag_me").removeClass('drag_me_on').addClass('drag_me_off')

    $("#right_panel").addClass( "nonactive");
    $("#marco").addClass( "nonactive");
    $("#psv_viewer").addClass( "nonactive");
    $("#left_panel").removeClass('init-capture');

    $("#map").removeClass('init-capture').addClass('nonactive');
    $('#map').css('width', ($('#content').width()-46)*100/$('#content').width()+'%');

    $('#floatingMenu').removeClass('openView') // clase para controlar responsive en 360 abierto

    sizeInvalid();

    
    psvMarker&&removeToMap(psvMarker);
    streetViewMarker&&removeToMap(streetViewMarker);


    closeModal()
    
}

$('#close-360').on('click',()=>{
    close360()
})