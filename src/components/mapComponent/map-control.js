import 'leaflet/dist/leaflet.css';
import './map.scss';

import $ from "jquery";
const L =require ('leaflet');

import {mapAddControl,mapRemoveControl,addToMap} from './map'
import './controls/coordinates';
import './controls/tree-layers'

import './controls/logo';

import './controls/geolocation';
import './controls/zoom';
import './controls/draw/draw';
import './controls/floatingMenu/buttonsMenu';
import './controls/measure/measure';
import './controls/print';
import './controls/extent';
import './controls/Geoservicios/geoservice';
import './controls/layersComparison';
import './controls/coordSearching/coordSearching';
import './controls/capture/captureControl'
import './controls/select-geometry/selectbygeometry'

import {minimap} from './controls/minimap';

import './controls/search/search';

import 'leaflet.browser.print/dist/leaflet.browser.print.min.js';

// zoom
addToMap(L.control.zoom({position: 'topleft'}));

// scale control
addToMap(L.control.scale({position: 'bottomleft',imperial: false}))

// minimap
addToMap(minimap);

//Print
addToMap(L.control.browserPrint({    
    
    printModes: [ "Landscape" ],

})); 
 
