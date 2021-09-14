import 'leaflet/dist/leaflet.css';
import './map.scss';

const L =require ('leaflet');

import {carto_light} from './layers/control-layers'

export var map = L.map('map', {
    center: [5.337628, -72.394055],
    zoom: 13.8,
    layers: [carto_light]
});

L.control.zoom({position: 'topright'}).addTo(map);

// scale control
new L.control.scale({imperial: false}).addTo(map)

