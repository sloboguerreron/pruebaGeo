import {imgIcon} from '../../../mapComponent/controls/icons/imgIcon'
import {dynamicMarker} from '../../../mapComponent/controls/markers'

import streetIcons from '../../../../assets/icons/street/*.png'

//giro del rango que se visualiza de 360 en el mapa
const sizeIcon=[40, 40];

export var girostreet=(giro,coords,streetViewMarker) =>{
    // define icon depends on direction
    let idIcon;
    
    if (giro >= 348.75 || giro <= 11.25) {
        idIcon='1';
    } else if (giro >= 11.25 && giro <= 33.75) {
        idIcon='2';
    } else if (giro >= 33.75 && giro <= 56.25) {
        idIcon='3';
    } else if (giro >= 56.25 && giro <= 78.75) {
        idIcon='4';
    } else if (giro >= 78.75 && giro <= 101.25) {
        idIcon='5';
    } else if (giro >= 101.25 && giro <= 123.75) {
        idIcon='6';
    } else if (giro >= 123.75 && giro <= 146.25) {
        idIcon='7';
    } else if (giro >= 146.25 && giro <= 168.75) {
        idIcon='8';
    } else if (giro >= 168.75 && giro <= 191.25) {
       idIcon='9';
    } else if (giro >= 191.25 && giro <= 213.75) {
        idIcon='10';
    } else if (giro >= 213.75 && giro <= 236.25) {
        idIcon='11';
    } else if (giro >= 236.25 && giro <= 258.75) {
        idIcon='12';
    } else if (giro >= 258.75 && giro <= 281.25) {
        idIcon='13';
    } else if (giro >= 281.25 && giro <= 303.75) {
        idIcon='14';
    } else if (giro >= 303.75 && giro <= 326.25) {
        idIcon='15';
    } else if (giro >= 326.25 && giro <= 348.75) {
        idIcon='16';
    }
    let icon= imgIcon(`${streetIcons[idIcon]}`,sizeIcon);
    streetViewMarker= dynamicMarker(icon,coords,0);
        
    return streetViewMarker
}