const L =require ('leaflet');
import 'leaflet-marker-rotation/src/rotatedMarker';

// dynamicMarker
export var dynamicMarker=(icono, coords,angle,drag)=>{
    return L.rotatedMarker(coords, {
        icon: icono,
        rotationOrigin:'center',
        rotationAngle: angle,
        draggable: drag
    });
}
