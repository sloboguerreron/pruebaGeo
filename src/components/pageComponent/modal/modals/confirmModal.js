import $ from "jquery";
import { deleteCapture } from "../../../serverComponent/python/python";



import { createModal } from "../createModal";

//MODAL CONFIRMACIÓN
export var confirmModal=(id)=>{
    

    var confirmJson={
        "title":`¿Desea eliminar la captura con el ID: ${id}?`,
        "body":[
            {
                "html":`
                <div class='container'>
                <div class="modal-body text-right">
                    <button type="button" class="btn btn-success" id="modal-btn-si">Si</button>
                    <button type="button" class="btn btn-danger" id="modal-btn-no">No</button>
                </div>                
                </div>
                `          
            }]
    }
    if($('#confirmModal')){
    createModal('confirm',confirmJson,null,cerrar,false)

    }

    $('#modal-btn-no').on('click',function(){
        $('#confirmModal').remove()
    
    })

    $('#modal-btn-si').on('click',function(){
        let params= 'api/delete_capture/'+id
        deleteCapture(params)
        $('#confirmModal').remove()
        $('#captureModal').remove()
        document.getElementById('search-input').disabled=false //habilitar input
        document.getElementById('search-collapse').disabled=false  //habilitar boton
        document.getElementById('dropdown-items').disabled=false //habilitar drop
     
        

    })

}

    
//funcion cerrar el modal 
function cerrar(){
    
    $('#confirmModal').remove()
    
}

