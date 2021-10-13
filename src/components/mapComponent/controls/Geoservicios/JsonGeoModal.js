export var jsonModal=(change1)=>{
  var verdadero = "show";
  var falso = "hide";
  var shp_status = falso;
  var wms_stattus = falso;
  var wfs_status = falso;
  var wcs_status = falso;

  try {
    var opcion = document.getElementById('system_ref_geos').value;    
  } catch (error) {
    var opcion = "sin";
  }
  if(opcion=="sin"){
    var shp_status = falso;
    var wms_status = falso;
    var wfs_status = falso;
    var wcs_status = falso;
  }
  else if (opcion=="SHP"){
    shp_status=verdadero;
  }
  else if (opcion=="WMS"){
    wms_status=verdadero;
  }
  else if (opcion=="WFS"){
    wfs_status=verdadero;
  }
  else if (opcion=="WCS"){
    wcs_status=verdadero;
  }
  
  
    return{
        "title":"Geoservicios",
        "body":[
            {
                "id":"geos_sys_label",
                "controlType":"label",
                "class": "",
                "html":`Seleccione una opción`
            },
            {
                "id":"system_ref_geos",
                "controlType":"select",
                "class": "form-control form-control-sm",
                "onchange":change1,
                "html":` <option value='sin' selected>Seleccione...</option>
                <option value='SHP'>Cargar Shapefile (ZIP)</option>
                <option value='WMS'>Cargar WMS </option>
                <option value='WFS'>Cargar WFS</option>
                
                `
                // <option value='WCS'>Cargar WCS</option>
            },
            {
                "id":"SHP",
                "controlType":"form",
                "class": 'form-geos-sys my-3 '+shp_status,  
                "hidden":"true",              
                "html":`
                
                <div id="map"></div>
                <label for="input">Select a zipped shapefile:</label> <input type="file" id="file"> <br>
                                
                `
            },

            {
                "id":"WMS",
                "controlType":"form",
                "class": 'form-geos-sys my-3 '+wms_status,                
                "html":`

                <h3>Cargar Web Map Service</h3>
                <div id="div-wms-1" class="show">
                <p>&nbsp;&nbsp;Introduzca enlace al servicio WMS a cargar:</p>
      
                    <div class="row" style="margin-left: 2em; margin-bottom: 1em;">
                    <div class="col-lg-10">
                    <div class="input-group">
                    <input type="text" class="form-control" id="urlservice" placeholder="">
                  
                    </span>
                    </div>
                    
              </div>
            </div>
            </div>

            <div id="div-wms-2" class="hide">
            <p>&nbsp;&nbsp;Selecciones la capa WMS a cargar:</p>
  
                <div class="row" style="margin-left: 2em; margin-bottom: 1em;">
                <div class="col-lg-10">                    
                <div class="input-group">                       
                  <select name="select_capa_wms" id="select_capa_wms">
                    
                  </select>                  
                  </span>
                  </div>
                  </div>  
                  <div class="row mt-2">
                     <div class="col-6"> 
                       <button type="button" class="btn btn-success" id="boton_carga_wms">Cargar</button>
                      </div>
                      <div class="col-6"> 
                       <button type="button" class="btn btn-danger" id="boton_salir_carga_wms">Terminado</button>
                      </div>
                  </div>
          </div>
          </div>
               `
            },

            {
                "id":"WFS",
                "controlType":"form",
                "class": 'form-geos-sys my-3 '+wfs_status,
                "html":`

                <h3>Cargar Web Feature Service</h3>
                <div id="div-wfs-1" class="show">
                <p>&nbsp;&nbsp;Introduzca enlace al servicio WFS a cargar:</p>
      
                    <div class="row" style="margin-left: 2em; margin-bottom: 1em;">
                    <div class="col-lg-10">
                    <div class="input-group">
                    <input type="text" class="form-control" id="urlservicewfs" placeholder="">
                  
                    </span>
                    </div>
                    
              </div>
            </div>
            </div>

            <div id="div-wfs-2" class="hide">
            <p>&nbsp;&nbsp;Selecciones la capa WFS a cargar:</p>
  
                <div class="row" style="margin-left: 2em; margin-bottom: 1em;">
                <div class="col-lg-10">                    
                <div class="input-group">                       
                  <select name="select_capa_wfs" id="select_capa_wfs">
                    
                  </select>                  
                  </span>
                  </div>
                  </div>  
                  <div class="row mt-2">
                     <div class="col-6"> 
                       <button type="button" class="btn btn-success" id="boton_carga_wfs">Cargar</button>
                      </div>
                      <div class="col-6"> 
                       <button type="button" class="btn btn-danger" id="boton_salir_carga_wfs">Terminado</button>
                      </div>
                  </div>
          </div>
          </div>
               `
            },

          //   {
          //       "id":"WCS",
          //       "controlType":"form",
          //       "class": 'form-geos-sys my-3 '+wcs_status,
          //       "html":`

          //       <h3>Cargar Web Feature Service</h3>
          //       <div id="div-wcs-1" class="show">
          //       <p>&nbsp;&nbsp;Introduzca enlace al servicio WCS a cargar:</p>
      
          //           <div class="row" style="margin-left: 2em; margin-bottom: 1em;">
          //           <div class="col-lg-10">
          //           <div class="input-group">
          //           <input type="text" class="form-control" id="urlservicewcs" placeholder="">
                  
          //           </span>
          //           </div>
                    
          //     </div>
          //   </div>
          //   </div>

          //   <div id="div-wcs-2" class="hide">
          //   <p>&nbsp;&nbsp;Selecciones la capa WCS a cargar:</p>
  
          //       <div class="row" style="margin-left: 2em; margin-bottom: 1em;">
          //       <div class="col-lg-10">                    
          //       <div class="input-group">                       
          //         <select name="select_capa_wcs" id="select_capa_wcs">
                    
          //         </select>                  
          //         </span>
          //         </div>
          //         </div>  
          //         <div class="row mt-2">
          //            <div class="col-6"> 
          //              <button type="button" class="btn btn-success" id="boton_carga_wcs">Cargar</button>
          //             </div>
          //             <div class="col-6"> 
          //              <button type="button" class="btn btn-danger" id="boton_salir_carga_wcs">Terminado</button>
          //             </div>
          //         </div>
          // </div>
          // </div>
          //       `
          //   },
            
            ],
            "footer":{                
                "saveButtonText":"Cargar"
                
            },
         
    }     
}