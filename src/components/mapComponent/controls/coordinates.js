const L =require ('leaflet');

import {mapAddControl} from '../map'

var Coordinates = L.Control.extend({
        onAdd: map => {
        const container = L.DomUtil.create("div", 'vistaInical');
        map.addEventListener("mousemove", e => {
            container.innerHTML = `lat: ${e.latlng.lat.toFixed(4)} lng:  ${e.latlng.lng.toFixed(4)}`;
        });
        return container;
    }
});

// coordinates control mouse move
mapAddControl(new Coordinates({position: 'topright'}));
