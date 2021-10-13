import $ from "jquery";

import {PYTHON_URL} from '../urls'


export const pythonGetRequest=(handleData,param,handleError)=>{
    $.ajax({
        url: PYTHON_URL+param,
        type: "GET",
        crossDomain : true,
        success: function (data, status, xhr) {
            handleData(data);
        },
        error: function (jqXHR, exception) {
            handleError(exception)
            // console.log(jqXHR,exception);
            handleError(exception) ?handleError(exception): alert('Se presentó un error, favor intente nuevamente')
        }
    });
}

//Eliminar captura

export const deleteCapture=(params)=>{
    $.ajax({
        url:PYTHON_URL+params,
        type:"DELETE",
        success:function(data, status, xhr){
            alert('Captura eliminada con exito')
        },
        error: function(jqXHR, exception){
            console.log(jqXHR,exception);
        }
    });
}





