import 'leaflet/dist/leaflet.css';

// configure library
import{addDrawControl} from './config/drawControl'
// draw map events
import  './config/drawMap'

// create the fab button menu 
import {createItemButton} from '../floatingMenu/buttonItem'

createItemButton('fa-draw-polygon','Dibujar',addDrawControl,'draw')



