const L =require ('leaflet');
import 'leaflet-easybutton/src/easy-button.css'

import {addToMap} from '../map'
import 'leaflet-easybutton/src/easy-button'

export var leafletButton=(icon,callback,id,position)=>{
    return addToMap(L.easyButton(icon, function(){
        callback()
    },{ position: position, id: id}));
}