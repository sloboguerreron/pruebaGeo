import 'leaflet/dist/leaflet.css';

//Configure Library
import {addselectControl} from './select-control'

//Draw filter geometry to map
import './draw-filter'

//Module to generate a new button
import {createItemButton} from '../floatingMenu/buttonItem'

createItemButton('fas fa-hand-pointer','Seleccionar',addselectControl,'Select')