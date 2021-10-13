import { addTableSelected } from "./predio";

export var addPHTableSelected=(length,feats)=>{
    var table = document.getElementById("tblatt");
    table.innerHTML = "";
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.colSpan = 2;
    cell1.style = "background-color: #fcfcfc; text-align:center; font-size:20px";
    cell1.innerHTML = "<b>INFORMACIÓN DEL PREDIO</b>";

    var select = [];
    var sel = [];  
    
    var tablaph = ("<table min-width=20 border=1 id='tablaph'>");
    for (let i = 0; i < length; i++) {
        // console.log(feats[i].cod_ph,feats[i].codigo_catastral)
        tablaph += ("<tr>");
        try {
            tablaph += ("<td id=tt" + i + " class=tt > <a href='#' style='font-weight:bold'>" + feats[i].direccion_predio + "</a> </td>");
        } catch (error) {
            tablaph += ("<td id=tt" + i + "><b>Sin Información</td>");
        }
        tablaph += ("</tr>");
    }
    tablaph += ("</table>");

    select[0] = "<b>Tipo de predio:</b>";
    select[1] = "<b>Número de Unidades:</b>";
    select[2] = "<b>Código catastral Matriz:</b>";
    select[3] = "<b>Área del Lote Matriz:</b>"; 
    select[4] = "<b>Direcciones</b>";

    sel[0] = feats[0].cod_ph; 
    sel[1] = length; 
    sel[2] = feats[0].codigo_catastral;
    sel[3] = feats[0].area_terreno=='No_tiene_informacion'?'No tiene informacion' :feats[0].area_terreno +' m2';
    sel[4] =tablaph;


    for (let i = 0; i < select.length; i++) {
        row = table.insertRow(i + 1);

        cell1 = row.insertCell(0);
        cell1.style = "border-right:0; border-left:0; text-align:left;";
        cell1.innerHTML = select[i];

        var cell2 = row.insertCell(1);
        cell2.style = "border-right:0; border-left:0; text-align:left;";
        cell2.innerHTML = sel[i];
    }
    
    var predioSelection = document.getElementsByClassName('tt');
    for (let i = 0; i < predioSelection.length; i++) {
        predioSelection[i].addEventListener("click", function () {
            addTableSelected(feats[i]);
        })
    }
}