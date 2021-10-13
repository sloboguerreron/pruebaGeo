import $ from "jquery";
import './stadistics.scss';
import {predios_rurales_urbanos,predios_destinacion_economica_16} from '../../mapComponent/layers/control-layers';
import {addToMap,removeToMap} from '../../mapComponent/map';
import { createModal } from '../modal/createModal'
import { createItemStadistics } from '../side-bar/side-bar-item'
$('#stadisticsModal').modal('handleUpdate')


createItemStadistics('1','fa-file-invoice','Destinación Económica',"a210a88a-203d-4285-9b9e-e27db00f1f16/page/qluTC","a210a88a-203d-4285-9b9e-e27db00f1f16/page/qluTC")
createItemStadistics('2','fa-city','Predios Rural - Urbano',"76ba810b-7f84-403c-940f-45b0883d2f6b/page/JMuTC","76ba810b-7f84-403c-940f-45b0883d2f6b/page/JMuTC")

export var jsonModal=(title,id)=>{
    return{
        "title":title,
        "body":[
            {
                "id":"datastudioChart",
                "controlType":"div",
                "class": "",
                "placeholder":"",
                "html":'<iframe width="100%" height="400px" src="https://datastudio.google.com/embed/reporting/'+id+'" frameborder="0" style="border:0" allowfullscreen></iframe>'
            }
        ] 
    }     
}
var onCancel=()=>{
    $("#stadisticsModal").remove();
    
    removeToMap(predios_rurales_urbanos)
    removeToMap(predios_destinacion_economica_16)
}
$('.chart-row').on("mousedown",(e)=>{
 
    var json=jsonModal('Estadística ' +e.target.textContent,e.currentTarget.id)
    $('#stadisticsModal').remove()
    createModal('stadistics',json,null,onCancel,true);

    if(e.target.textContent=='Predios Rural - Urbano'){
        addToMap(predios_rurales_urbanos)
    }else{
        addToMap(predios_destinacion_economica_16)
    }
});

