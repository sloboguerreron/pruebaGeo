import $ from "jquery";
import {GEOSERVER_URL} from './urls'

export function wfsSearch(param, request, request1, request2) {
    $('#loading-spinner').removeClass('hide').addClass('show');
    /*if (request === undefined || request === '') {
        return;
    } else*/
    if (request === undefined && request1 === undefined && request2 === undefined) {
        var viewParamsStr = viewparamsToStr({});
    }
    else if (request1 === undefined && request2 === undefined) {
        var viewParamsStr = viewparamsToStr({
            query: request
        });
    } else if (request2 === undefined) {
        var viewParamsStr = viewparamsToStr({
            query: request,
            query1: request1
        });
    } else {
        var viewParamsStr = viewparamsToStr({
            query: request,
            query1: request1,
            query2: request2
        });
    }
    var wfsParams = {
        service: 'WFS',
        version: '2.0.0',
        request: 'GetFeature',
        typeName: param,
        outputFormat: 'application/json',
        // srsname: 'EPSG:3857',
        viewparams: viewParamsStr
    };

    var result='';

    $.ajax({
        url: GEOSERVER_URL +'ows',
        data: wfsParams,
        type: "GET",
        crossDomain: true,
        // detrimental effects
        async: false,
        dataType: "json",
        success: function (data, status, xhr) {
            // console.log('geoserver search', data)
            result= data;
        },
        error: function (jqXHR, exception) {
            console.log(jqXHR);
            console.log(exception);

            //console.log(msg);
        },
        complete: function(){
            $('#loading-spinner').removeClass('show').addClass('hide');
        }
    });
    
    return result;
}

export function wfsSearchArray(param, request, request1, request2){
    var temp= wfsSearch(param, request, request1, request2);
    var arr = [];
    for (i = 0; i < temp.responseJSON.features.length; i++) {
        arr[i] = [];
        for (j = 0; j < Object.keys(temp.responseJSON.features[i].properties).length; j++) {
            var a = Object.keys(temp.responseJSON.features[i].properties)[j];
            arr[i][j] = temp.responseJSON.features[i].properties[a];
        }
    }
    console.log('wfsSearchArray',arr);
    return arr;
}

//FORMAT STRING
export function viewparamsToStr(obj) {
    var str = '';
    $.each(obj, function (k, v) {
        str.length && (str += ';');
        str += k + ':' + v;
    });
    return str;
}
