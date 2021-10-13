import 'leaflet-measure/dist/leaflet-measure.es'
import './leaflet-measure.scss'
const L =require ('leaflet');

import {mapOnEvent,addToMap,removeToMap} from '../../map'
import {createItemButton} from '../floatingMenu/buttonItem'
import {desactivateControls} from '../floatingMenu/changeItem'

import $ from "jquery";

// options measure control
let options={ 
    position: 'topright', 
    primaryLengthUnit: 'meters',
    secondaryLengthUnit: 'kilometers',
    primaryAreaUnit: 'sqmeters', 
    secondaryAreaUnit: 'hectares',
    activeColor: '#FFF00E',
    completedColor: '#000fff',
    popupOptions: {
        closeButton: false,
        className: 'leaflet-measure-resultpopup' // Keep leaflet-measure-resultpopup to support default styling
    }
}
// measure leaflet control 
let measureControl = new L.Control.Measure(options);

// onclick event
let addMeasureControl =()=>{
    // desactivate layer comparison control
    desactivateControls();

    if(!measureControl._map){
        $('#measureButton').addClass('active');
        addToMap(measureControl);
        $('.leaflet-control-measure-toggle').css('display','none');
        $('.leaflet-control-measure-interaction').css('display','block');
    }else{
        desactivateMeasure()
    }
}
// on finish measuring
mapOnEvent('measurefinish', function(e) {
    $('.leaflet-control-measure-toggle').css('display','none');
    $('.leaflet-control-measure-interaction').css('display','block');
});

// create  button on fab menu
createItemButton('fa-ruler', 'Medir',addMeasureControl,'measure')

// desactivate measure control
export var desactivateMeasure=()=>{
    $('#measureButton').removeClass('active');
    removeToMap(measureControl)
    $('.leaflet-control-measure-toggle').css('display','none');
}