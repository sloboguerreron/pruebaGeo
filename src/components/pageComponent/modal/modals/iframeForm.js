import $ from "jquery";
import { PHP_FORM } from "../../../serverComponent/urls";
import {createModal} from '../createModal'
import { closeModal } from "../../capture/controls/capture_modal";

// asign data to nomenclatura first form 

import { confirmModal } from "./confirmModal";

export var createIframe=(data,feat)=>{
    $('#captureModal')&&$('#captureModal').remove()
    // json create modal
    var jsonModal=feat?
        {
        "title":"Captura",
        "body":[
            {
                "id":"iframeCapt",
                "controlType":"div",
                "class": "m-0 p-0",
                "html":`
                <iframe id="iframe-capture" width="100%" height="500px" src="${PHP_FORM}id_form=6${data}" frameborder="0" style="border:0" allowfullscreen></iframe>
               
                `          
            }],
            "footer":{
                "saveButtonText":"Eliminar",
                "class":"btn btn-danger"
            },
            "data":data  
        }:
        {
        "title":"Captura",
        "body":[
            {
                "id":"iframeCapt",
                "controlType":"div",
                "class": "m-0 p-0",
                "html":`
                <iframe id="iframe-capture" width="100%" height="500px" src="${PHP_FORM}id_form=6${data}" frameborder="0" style="border:0" allowfullscreen></iframe>
               
                `          
            }],
            "data":data  
        }
    //Boton eliminar 
    function eliminar(){
        //$('#captureModal').remove()
        confirmModal(feat.id)
        
    }

    //funcion cerrar el modal y remover seleccion

    // openModal  <!-- modal captura 360 -->
    feat?createModal('capture',jsonModal,eliminar,cerrar,true,feat):createModal('capture',jsonModal,null,cerrar,true,feat)

    function cerrar(){
        //$('#captureModal').remove()
        closeModal()
    }

    // $('#dataCapture').html(`<iframe id="iframe-capture" width="100%" height="500px" src="http://35.188.231.22/formulario_yopal/indexForm.php?id_form=6${data}" frameborder="0" style="border:0" allowfullscreen></iframe>`)
}

// UPDATE IFRAME FORM
// update form iframe
export var updateIframe=(id, val)=>{
    document.getElementById('iframe-capture').contentWindow.document.getElementById(id).value=val; 
}