import 'leaflet/dist/leaflet.css'
import "leaflet-compare/dist/leaflet-compare.css"
import "leaflet-compare/dist/leaflet-compare"

import L from 'leaflet'
import $ from "jquery";

import {createItemButton} from'./floatingMenu/buttonItem'
import{desactivateComparisonControls} from './floatingMenu/changeItem'

import {addToMap,removeToMap} from '../map'
import {carto_light,mapa_base,standard_osm,construccion,esri_worldimagery} from '../layers/control-layers'

// comparison layers leaflet control
let comparisonControl = new L.control.compare([mapa_base,construccion], esri_worldimagery);

// on click event
var addComparisonControl=()=>{

    if(!comparisonControl._map){
        // desactivate controls if comparison
        desactivateComparisonControls()

        $('#comparisonButton').addClass('active');
        removeToMap(carto_light);
        addToMap(mapa_base);
        addToMap(construccion);
        addToMap(esri_worldimagery);
        addToMap(comparisonControl);
    }else{
        desactivateComparison();
    }
    
}
// create  button on fab menu 
if(!comparisonControl._map){
    createItemButton('fa-object-group', 'Comparación',addComparisonControl,'comparison')
}

// desactivate comparison control
export var desactivateComparison=()=>{
    $('#comparisonButton').removeClass('active');

    removeToMap(comparisonControl)
    removeToMap(esri_worldimagery);
    removeToMap(construccion);
    removeToMap(standard_osm);
}
