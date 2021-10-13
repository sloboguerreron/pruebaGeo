import $ from "jquery";

import {GEOSERVER_URL} from './urls'

// get request from geoserver
export const geoserverGetRequest=(handleData,param,handleError)=>{
    $.ajax({
        url: GEOSERVER_URL+param,
        type: "GET",
        crossDomain : true,
        success: function (data, status, xhr) {
            handleData(data);
        },
        error: function (jqXHR, exception) {
            // console.log(jqXHR,exception);
            handleError ?handleError(exception): alert('Se presentó un error, favor intente nuevamente')
        }
    });
}
