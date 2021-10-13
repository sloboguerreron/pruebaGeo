import $ from "jquery";
import { pythonGetRequest } from "../../../serverComponent/python/python";
import { prediosModal } from "./prediosModal";



import { createModal } from "../createModal";

//MODAL DEL BARRIO
export var propietariosModal=(data)=>{    

    var {nombre_completo,tipo_documento,numero_documento,predios}=data
    var columnaPro=''

    var table = document.createElement("table")    
    table.innerHTML = "";
    table.setAttribute('class','table table-striped table-bordered table-condensed')  
    var row = table.insertRow(0);
    

    var select = [];
    var sel = [];   
    var fecha = new Date();
    select[0] = "<b>Fecha:</b>&nbsp"+(fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear());
    select[1] = "<b>Nombre completo:</b>"; 
    select[2] = "<b>Número documento:</b>"; 
    
    sel[0] = "<b>Hora:</b>&nbsp&nbsp" + fecha.getHours()+":"+fecha.getMinutes(); 
    sel[1] = nombre_completo;
    sel[2] = tipo_documento +'- '+numero_documento;

    for (var i = 0; i < select.length; i++) {
        row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.style = "border-right:0; border-left:0; text-align:left;";
        cell1.innerHTML = select[i];
        cell2.style = "border-right:0; border-left:0; text-align:left;";
        cell2.innerHTML = sel[i];
    } 
    row = table.insertRow();
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell1.style = "border-right:0; border-left:0; text-align:left;";
    cell1.innerHTML = '<b>Predios:</b>';
    cell2.style = "border-right:0; border-left:0; text-align:left;";
    cell2.innerHTML = '';

    for(let i=0;i<predios.length;i++){
        row = table.insertRow();
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell1.style = "border-right:0; border-left:0; text-align:left;";
        cell1.innerHTML = '';
        cell2.style = "border-right:0; border-left:0; text-align:left;";
        cell2.innerHTML= `<a href="#"  style="font-weight:bold" id="${i}" class="pp">${predios[i].direccion_predio}</a>`
    
               
    }
    
    var propietariosInfo={
        "title":"INFORMACIÓN DEL PROPIETARIO",
        "body":[
            {
                "html":`
                <div class='container'>
                ${table.outerHTML}
                </div>
                `          
            }]
    }
    if($('#propietariosModal')){
    createModal('propietarios',propietariosInfo,null,cerrar,true)

    }
    var predioSelection = document.getElementsByClassName('pp');
    for (let i = 0; i < predioSelection.length; i++) {
        predioSelection[i].addEventListener("click", function () {
            let url='api/consulta_geojson/codigo_catastral/'+predios[i].codigo_catastral.trim()
            pythonGetRequest(searchData,url)
            //console.log(predios[i].codigo_catastral)

        })
    }
    var searchData=(data)=>{ 
        //console.log(data) 
        prediosModal(null,data.features[0],'search')    
        cerrar()         
      }
    

    
}

    
//funcion cerrar el modal y remover seleccion
export function cerrar(){  
    $('#propietariosModal').remove()
    document.getElementById('search-input').disabled=false //habilitar input
    document.getElementById('search-collapse').disabled=false  //habilitar boton
    document.getElementById('dropdown-items').disabled=false //habilitar drop

    
}