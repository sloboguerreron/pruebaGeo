import pdfkit from 'pdfkit'
import { jsPDF } from "jspdf";
import 'jspdf-autotable'
import fs from 'fs'

import $ from "jquery";

var fecha = new Date();
var datosPredio = []
var datosProietarios = []


export function downloaldata(predio){
    
    var {area_construida,
        area_terreno,
        destino_economico,
        direccion_predio,
        propietarios,
        codigo_catastral,
        codigo_catastral_anterior,
        matricula_inmobiliaria,
        avaluo,
        tipo_predio} = predio


        datosPredio.push(["Hora",fecha.getHours()+":"+fecha.getMinutes()]);
        datosPredio.push(["Fecha",fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear()]);
        datosPredio.push(["Supervisor","Geoproyecciones"]);
        datosPredio.push(["Codigo catastral",codigo_catastral]);
        datosPredio.push(["Codigo catastral anteriror",codigo_catastral_anterior]);
        datosPredio.push(["Matricula inmobiliaria",matricula_inmobiliaria]);
        datosPredio.push(["Tipo de predio",tipo_predio]);
        datosPredio.push(["Dirección",direccion_predio]);
        datosPredio.push(["Destino economico",destino_economico]);
        datosPredio.push(["Avalúo",avaluo]);
        datosPredio.push(["Area de terreno",area_terreno+" m²"]);
        datosPredio.push(["Area construida",area_construida+" m²"]);

        datosProietarios.push(["Nombre","Numero de identificación"])
        for(var i of propietarios){
            datosProietarios.push([i.Nombre,i.Tipo+":"+i.Numero])
        }

}


function createPDF(){
    const doc = new jsPDF();
   
    doc.autoTable({
        body: [['Información predial']],
        margin: {horizontal:45,top:20},
        styles: { halign: 'center', fontSize: 14,},
        theme:"grid"           
    })
    doc.autoTable({
        body: datosPredio,
        styles: { halign: 'left', fontSize: 10,},
        margin: {horizontal:45},
        theme:"grid"
    })
    doc.autoTable({
        body: [['Propietario (s)']],
        margin: {horizontal:45},
        styles: { halign: 'center', fontSize: 10,},
        theme:"grid"           
    })
    doc.autoTable({
        body: datosProietarios,
        margin: {horizontal:45},
        theme:"grid",
    })
    doc.save("datospredio.pdf");
  
}



$("#form-download-btn").on('click',function() {
    createPDF()  
})

$('#closeForm').on('click',function(){
    datosPredio = [];
    datosProietarios = [];    
})