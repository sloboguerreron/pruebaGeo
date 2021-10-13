import {mapOnEvent} from '../../../map'

import {jsonModal} from './JsonDrawModal'
import {createModal} from '../../../../pageComponent/modal/createModal'
import {onSave,onCancel} from './drawModal'

import $ from "jquery";

// draw events on map 

mapOnEvent('draw:created', function(e) {
    if($('#drawButton').hasClass('active')){
        var type = e.layerType, 
            layer = e.layer;
        // add drawing layer
        //addLayer(drawnItems,layer);
        // create modal 
        let json=jsonModal(layer,type)
        createModal('draw',json,onSave,onCancel);
            
    }

});

mapOnEvent('draw:drawstop', function(e) {
})


mapOnEvent('draw:deletestart', function(e) {
})







