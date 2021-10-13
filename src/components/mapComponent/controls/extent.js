import $ from "jquery";
import {createItemButton} from'../controls/floatingMenu/buttonItem'
import {fitBounds,bound} from '../map'
import {mapAddControl} from '../map'

var addEntentControl=()=>{
    // console.log(bound)
    fitBounds(bound);
}

$("#vista-map-btn").on('click',function() {
    addEntentControl() 
})

//mapAddControl(new Coordinates({position: 'topright'}));
//createItemButton('fa-globe-americas', 'Vista inicial',addEntentControl,'extent')

// coordinates control mouse move
