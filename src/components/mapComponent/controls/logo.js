const L =require ('leaflet');

import {mapAddControl} from '../map'
import logo from '../../../assets/icons/logos/logo-small.png';

export const Logo = L.Control.extend({
    onAdd: () => {
        var img = L.DomUtil.create('img', 'logo_on_map');
        img.src = logo;
        img.style.height = '40px';
        img.alt='logo_map';
        img.addEventListener('click', function(e) {
            window.open('https://www.ambq.gov.co/');
           
        });
        return img;
   }
});

// logo on map
mapAddControl(new Logo({position: 'bottomright'}))
