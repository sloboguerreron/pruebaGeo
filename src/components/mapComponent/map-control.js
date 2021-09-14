import 'leaflet/dist/leaflet.css';
import './map.scss';

const L =require ('leaflet');

import {carto_light} from './layers/control-layers'
import {minimap} from './controls/minimap.js'
import {dynamicMarker} from './controls/markers.js'

export var map = L.map('map', {
    center: [5.337628, -72.394055],
    zoom: 14,
    layers: [carto_light]
});




L.control.zoom({position: 'topright'}).addTo(map);


//mini mapa
minimap.addTo(map);

new L.control.scale({imperial: false}).addTo(map);

// scale control

var marker = L.marker([5.337628, -72.394055]).addTo(map);
var circle = L.circle([5.332673, -72.400943], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 100
}).addTo(map);

