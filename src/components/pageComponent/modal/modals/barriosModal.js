import $ from "jquery";
import {highlightBarrio,layerAdd,layerRemove} from '../../../mapComponent/layers/control-layers'
import {addToMap,fitBounds} from '../../../mapComponent/map'



import { createModal } from "../createModal";

//MODAL DEL BARRIO
export var barriosModal=(feats,feat,length)=>{
    let props=feat.properties;
    var {area,barrios}= props

    var barrioInfo={
        "title":"INFORMACIÓN DEL BARRIO",
        "body":[
            {
                "html":`
                <div class='container'>
                <div class='row'>
                <div class="col">
                    <p><b>Nombre del barrio:</b></p>
                </div>
                <div class="col">
                    <p>${barrios}</p>
                </div>
                </div>
                <div class='row'>
                <div class="col">
                    <p><b>Area:</b></p>
                </div>
                <div class="col">
                    <p>${area.toFixed(2)} m2</p>
                </div>
                </div>
                </div>
                `          
            }]
    }
    if($('#barriosModal')){
    createModal('barrios',barrioInfo,null,cerrar,true)

    }

    if(feat.geometry){
        addBarrioSelected(feat);
    }
}

    
//funcion cerrar el modal y remover seleccion
function cerrar(){
    layerRemove(highlightBarrio);
    $('#barriosModal').remove()
    
}

// add to map
var addBarrioSelected=(feat)=>{
    layerRemove(highlightBarrio);
    layerAdd(feat,highlightBarrio);
    fitBounds(highlightBarrio.getBounds())
    
    addToMap(highlightBarrio);
} 