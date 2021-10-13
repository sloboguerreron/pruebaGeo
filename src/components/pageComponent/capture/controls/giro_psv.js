import {dynamicMarker} from '../../../mapComponent/controls/markers'
import psvIcons from '../../../../assets/icons/giropsv/1.png'
import {imgIcon} from '../../../mapComponent/controls/icons/imgIcon'

//giro del rango que se visualiza de 360 en el mapa
const sizeIcon=[100, 100];

export var giropsv=(giropsv,heading,coords,psvMarker) =>{
      // direccion del marker, y conv de rad a degrees
      let degrees= heading+((giropsv)* 180/Math.PI);

      let icon= imgIcon(psvIcons,sizeIcon);
      psvMarker= dynamicMarker(icon,coords,degrees);
          
      return psvMarker
}