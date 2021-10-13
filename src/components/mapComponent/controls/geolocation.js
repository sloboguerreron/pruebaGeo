import{faIcon} from './icons/faIcon'
import {dynamicMarker} from './markers';
import {addToMap} from '../map';

var getLocation=() =>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    let coords=[position.coords.latitude,position.coords.longitude];
    const fasIcon = faIcon('<i class="far fa-dot-circle"></i>',[20, 20],'geolocate');
    let marker=dynamicMarker(fasIcon,coords,0);
    addToMap(marker);
}

// geolocation
// getLocation();