import proj4 from 'proj4';

import {faIcon} from '../../../../mapComponent/controls/icons/faIcon'
import {openModal} from '../../controls/capture_modal'

export var save_capture=(coordPan,coordClick,textureY,photo,e) =>{

    if (textureY < 1800 || textureY > 2800){
        alert("Fuera de rango de captura, por favor seleccione una fotografía que este mejor ubicada respecto al objeto");
    }else{
        let EPSG4326 = new proj4.Proj('EPSG:4326');
        let EPSG3857 = new proj4.Proj('EPSG:3857');    
        let coordPanEPSG3857= proj4.transform(EPSG4326, EPSG3857, coordPan);

        let coordx=coordPanEPSG3857.x-coordClick[0];
        let coordy=coordPanEPSG3857.y+coordClick[1];
        let coordClickEPSG4326= proj4.transform(EPSG3857,EPSG4326, [coordx,coordy]);
        const icon = faIcon('<i class="fas fa-circle" style="color:#0af242"></i>',[20, 20],'capture');
      
        // clientX:${e.clientX}; clientY:${e.clientY};
        let data360=`latituder:${e.latitude}; longituder:${e.longitude}; textureX:${e.textureX}; textureY:${e.textureY}; viewerX:${e.viewerX}; viewerY:${e.viewerY}`

        openModal(icon,[coordClickEPSG4326.y,coordClickEPSG4326.x],photo,data360);
        // console.log(coordClick,coordPanEPSG3857,coordx,coordy,coordPan,coordClickEPSG4326)
    }

}