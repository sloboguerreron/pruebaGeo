import $ from "jquery";
import {highlightPredio,layerAdd,layerRemove} from '../../../mapComponent/layers/control-layers'
import {addToMap,fitBounds} from '../../../mapComponent/map'

import {addTableSelected} from './predio'
import {addPHTableSelected} from './ph'

import { pythonGetRequest } from "../../../serverComponent/python/python";

import {downloaldata} from './downloadData'



//MODAL DEL PREDIO
export var prediosModal=(feats,feat,length,type)=>{
    let props=feat.properties;
    

    if(type==='onclick'){
        var urlRequest='api/consulta_cod_terreno/'+props.codigo_catastral

        var getR1Props=(data) =>{

            var lengthR1=data.length            
            // console.log(lengthR1,data)
            // create modal if have alphanumeric info
            if(lengthR1===1){
                // create predio modal 
                addTableSelected(data[0])
                downloaldata(data[0])
                              
            }else{
                // concatenate prop
                // if(props.flag_ph=='NPH'){
                //     let propietarios=props.nombre_completo
                //     for(let i=1;i<length;i++){
                //         propietarios+=' , '+feats[i].properties.nombre_completo
                //     }
                //     props.nombre_completo=propietarios
                //     addTableSelected(props)
                // }else{
                    // create ph modal
                    if(data.codigo_catastral_anterior=="Sin Información"){
                        addTableSelected(props)  
                        console.log(props)                     
                    }else{
                        addPHTableSelected(lengthR1,data)                        
                    }

                    
                // }
            }

        }
        
        var getR1Error =()=>{
            addTableSelected(props)
            
        }
        // api for getting r1 data
        try {
            pythonGetRequest(getR1Props,urlRequest,getR1Error)
        } catch (error) {
            console.log(error)
            addTableSelected(props)
            
        }



    }else{
        // create predio modal on searching
        addTableSelected(props)
        downloaldata(props)
        
    }

    // if(length==1){
    //     // create predio modal 
    //     addTableSelected(props)
    // }else{
    //     // create ph modal
    //     addPHTableSelected(length,feats)
    // }

    // add to map if have geometry
    if(feat.geometry){
        addPredioSelected(feat);
    }

    $('#formModal').modal('show');
    $('#formModal').addClass('visible');
     
}



$('#closeForm').on('click',function(){
    layerRemove(highlightPredio);
    $('#formModal').removeClass('visible');
})
// add to map
var addPredioSelected=(feat)=>{
    layerRemove(highlightPredio);
    layerAdd(feat,highlightPredio);
    fitBounds(highlightPredio.getBounds())
    
    addToMap(highlightPredio);
}