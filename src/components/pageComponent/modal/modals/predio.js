
// create modal table from data
export var addTableSelected=(info)=>{
    
    // get info from GeoJSON
    var {area_construida,
    area_terreno,
    destino_economico,
    direccion_predio,
    propietarios,
    codigo_catastral,
    codigo_catastral_anterior,
    matricula_inmobiliaria,
    avaluo,
    tipo_predio} = info
    // console.log(info)
    var table = document.getElementById("tblatt");
    table.innerHTML = "";
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.colSpan = 2;
    cell1.style = "background-color: #fcfcfc; text-align:center; font-size:20px";
    cell1.innerHTML = "<b>Datos Sobre Recolección</b>";

    var select = [];
    var sel = [];   
    var fecha = new Date();
    select[0] = "<b>Fecha:</b>&nbsp"+(fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear());
    select[1] = "<b>Supervisor:</b>"; 
    select[2] = "<b>Estado:</b>"; 
    select[3] = "<b>Código Catastral:</b>"; 
    select[4] = "<b>Código Catastral Anterior:</b>"; 
    select[5] = "<b>Matricula inmobiliaria:</b>"; 
    select[6] = "<b>Tipo de predio:</b>"; 
    select[7] = "<b>Dirección:</b>";  
    select[8] = "<b>Destino Economico:</b>";    
    select[9] = "<b>Avalúo:</b>";
    select[10] = "<b>Area de Terreno:</b>";
    select[11] = "<b>Area de Construcción:</b>";
    
    sel[0] = "<b>Hora:</b>&nbsp&nbsp" + fecha.getHours()+":"+fecha.getMinutes(); 
    sel[1] = "Geoproyecciones";
    sel[2] = "NO SELECCIONADO";
    sel[3] = codigo_catastral;
    sel[4] = codigo_catastral_anterior;
    sel[5] = !matricula_inmobiliaria?'Sin Información': matricula_inmobiliaria;
    sel[6] = !tipo_predio?'Sin Información': tipo_predio;
    sel[7] = !direccion_predio?'Sin Información':direccion_predio;                           
    sel[8] = !destino_economico?'Sin Información':destino_economico;
    sel[9] = !avaluo?'Sin Información':avaluo;    
    sel[10] = area_terreno=='Sin Información'|| area_terreno==null ?'Sin información' :area_terreno +' m2';
    sel[11] = area_construida=='Sin Información' || area_construida==null ?'Sin información' :area_construida +' m2'; 

    for (var i = 0; i < select.length; i++) {
        row = table.insertRow(i + 1);
        // console.log(i+1)
        cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.style = "border-right:0; border-left:0; text-align:left;";
        cell1.innerHTML = select[i];
        cell2.style = "border-right:0; border-left:0; text-align:left;";
        cell2.innerHTML = sel[i];
    }    
    
    if(propietarios!=null){   
        row=table.insertRow();
        cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.style = "border-right:0; border-left:0; text-align:left;";
        cell1.innerHTML = '<b>Propietario/s:</b>'
        cell2.style = "border-right:0; border-left:0; text-align:left;";
        cell2.innerHTML = propietarios.length<1?'Sin Información':'';
       
        row=table.insertRow();            
        var cell2 = row.insertCell(0); 
        cell2.colSpan=2;                
                       
            cell2.style = "border-right:0; border-left:0; text-align:left;";
            cell2.innerHTML =`<div class="accordion" id="accordionExample" >
            <div class="card">`
            for(let i =0;i<propietarios.length;i++){
                cell2.innerHTML +=`<div class="card-header" id="heading${i}p">
                <h2 class="mb-0">
                  <button class="btn btn-link btn-block collapsed" type="button" data-toggle="collapse" id="btnColl" data-target="#collapse${i}p" aria-expanded="false" aria-controls="collapse${i}p">
                    ${propietarios[i].Nombre} 
                    <i class="fa fa-angle-up"></i>
                  </button>
                </h2>
              </div>
          
              <div id="collapse${i}p" class="collapse " aria-labelledby="heading${i}p" data-parent="#accordionExample">
                <div class="card-body">
                <div class='row'>
                <div class="col">
                    <p><b>Nombre completo:</b></p>
                </div>
                <div class="col">
                    <p>${propietarios[i].Nombre}</p>
                </div>
                </div>
                <div class='row'>
                <div class="col">
                    <p><b>Tipo de documento:</b></p>
                </div>
                <div class="col">
                    <p>${propietarios[i].Tipo} </p>
                </div>
                </div>
                <div class='row'>
                <div class="col">
                    <p><b>Número de documento:</b></p>
                </div>
                <div class="col">
                    <p>${propietarios[i].Numero} </p>
                </div>
                </div>
               
                
                </div>
              </div>`
            }            
              `</div>`;
    
    }
}