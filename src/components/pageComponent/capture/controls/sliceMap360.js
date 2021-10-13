import $ from "jquery";
import {sizeInvalid} from '../../../mapComponent/map'
import {close360} from './close360'

var isResizing = false,
    lastDownX = 0,
    offsetRight='30%';

$(function () {
    var container = $('#content'),
        left = $('#left_panel'),
        right = $('#right_panel'),
        handle = $('#drag_me'),
        map= $('#map');

    handle.on('mousedown', function (e) {
        isResizing = true;
        lastDownX = e.clientX;
    });

    $('#drag_me').on('dblclick',function(e){
        if(!$("marco").hasClass('nonactive')){
            close360();
        }
    });

    $(document).on('mousemove', function (e) {
      
        if(!$("#right_panel").hasClass('nonactive')){
            // we don't want to do anything if we aren't resizing.
            if (!isResizing) 
            return;
            offsetRight = container.width() - (e.clientX - container.offset().left);

            left.css('width', e.clientX*100/container.width()+'%');
            map.css('width', (e.clientX-46)*100/container.width()+'%');
            right.css('width', offsetRight);

            // photosphere viewer
            // console.log($(".psv-canvas").length);
            $(".psv-canvas").eq(0).css("width",offsetRight+"px");
            // $(".psv-canvas").eq(0).attr('width', offsetRight);
            // console.log($(".widget-scene-canvas").length);
            // street maps
            $(".widget-scene-canvas").css("width","100%");
            $(".widget-scene-canvas").attr('width', offsetRight);
        }
        
        sizeInvalid()
    }).on('mouseup', function (e) {
        // stop resizing
        isResizing = false;
    });  
});