

const L =require ('leaflet');

import {mapa_base,carto_light,perimetro_urbano,perimetro_rural,predios,recorrido360,u_nomenclatura_domiciliaria,wfs_point} from './layers/control-layers'

export var map = L.map('map', {
    center: [10.829468, -75.034609],
    zoom: 16,
    layers: [carto_light, perimetro_rural, perimetro_urbano, predios,u_nomenclatura_domiciliaria,recorrido360,wfs_point],
    zoomControl: false,
    compare:true
});


// map events
export var sizeInvalid =() => {return map.invalidateSize()};

export var fitBounds =(featureLayerBounds) => {map.fitBounds(featureLayerBounds)};
export var bound= [[10.825052, -75.044363],[10.831988, -75.027739]];

export var flyToBounds =(featureLayerBounds) => {map.flyToBounds(featureLayerBounds)};


export var mapMoveEnd =(callback)=>{map.on("moveend", function (e) {callback()})};
export var mapClick =(callback)=>{map.on("click", function (e) {callback();})};
export var mapZoomEnd =(callback)=>{map.on("zoomend", function (e) {callback();})};
export var mapOnEvent =(event,callback)=>{map.on(event, function (e) {callback(e);})};


export var mapAddControl=(callback)=>{return map.addControl(callback)};
export var mapRemoveControl=(callback)=>{return map.removeControl(callback)};

export var hasLayer =(layer)=>{return map.hasLayer(layer)}
export var mapContains =(layer)=>{return map.getBounds().contains(layer)}

export var addToMap=(layer)=>{layer.addTo(map)}
export var removeToMap=(layer)=>{layer.remove(map)}

export var addLayer=(layer,feat)=>{layer.addLayer(feat)}
export var removeAllInLayer=(layer)=>{layer.eachLayer(function(l){layer.removeLayer(l);})}
export var refreshLayer=(layer)=>{layer.setParams({}, false)}


export var mapView=()=>{return map.getView()}
export var currZoom=()=>{return map.getZoom()}

export var setView=(latlng, zoom)=>{return map.setView(latlng, zoom)}

