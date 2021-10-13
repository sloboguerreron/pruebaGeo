import $ from "jquery";
import './google_maps.scss';
import {mapposi, initialize} from './init_streetview';

export var streetview=(latitude,longitude,heading)=>{
    //OPEN 3D GOOGLE MAPS
    var lookTo={lat:latitude,lng:longitude};
    
    var panorama=initialize(lookTo,heading)
    
    panorama.addListener('pov_changed',function (){
        mapposi(panorama.getPosition(),panorama.getPov().heading,heading,'pov');
    });

    panorama.addListener('position_changed',function(){
        mapposi(panorama.getPosition(),panorama.getPov().heading,heading,'pos')
    });
}
