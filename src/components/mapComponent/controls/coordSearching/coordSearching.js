import './coordSearching.scss'
import L from 'leaflet'
import $ from "jquery";

import {createItemButton} from'../floatingMenu/buttonItem'
import{desactivateControls} from '../floatingMenu/changeItem'


import {createModal} from '../../../pageComponent/modal/createModal'
import { jsonModal } from './JsonCoordModal';
import {addToMap,removeToMap,setView} from '../../map'

import{AwesomeMarkersIcon} from '../icons/famIcon'
import{dynamicMarker} from '../markers'
import {coordSystem} from './coordSystem'

// selection options change on click in list 
export var onSelectChange=()=>{
    let optionSelected=$("#system_ref_coord option:selected" ).val()
    $('.form-coord-sys').hide();
    $('#'+optionSelected).show();
}

// go to the coordinate 
let icon=AwesomeMarkersIcon('fa', 'search','orange')
let marker=dynamicMarker(icon,null,0);

export var onSearch=()=>{
    // get the coord system and their inputs
    let optionSelected=$("#system_ref_coord option:selected" ).val();
    let inputsCoord=$('#'+optionSelected+ ' :input')

    // go to the coordinate
    let coords= coordSystem(optionSelected,inputsCoord);
    // set and replace 
    marker.setLatLng(coords);

    // deleting button popup
    var link = $('<button class="btn btn-danger btn-sm" type="button" id="markerDelete" onclick="">Eliminar</button>').on('click',function() {
        removeToMap(marker)
    })[0];
    marker.bindPopup(link).openPopup();

    addToMap(marker);
    setView(coords,15);
    onCancel();
}

// close modal 
export var onCancel=()=>{
    $('#coordSearchModal').remove();
}

// on click in fab menu button, do an action
var addCoordControl=()=>{
    // desactivate layer comparison control
    desactivateControls();

    let json=jsonModal(onSelectChange)
    createModal('coordSearch',json,onSearch,onCancel);
}
// create  button on fab menu 
createItemButton('fa-search-location', 'Coordenadas',addCoordControl,'coordinates')
