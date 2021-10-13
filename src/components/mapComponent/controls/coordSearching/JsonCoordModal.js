// initialize the content inside the modal
// title of modal
// jsonModal.body is the modal content, it can be as much as you need. ControlType defines the html tag it could be div
// jsonModal.feature is the data you could send for saving data 
// layer is the name of the layer you will modify
export var jsonModal=(onAction)=>{
    return{
        "title":"BÚSQUEDA POR COORDENADAS",
        "body":[
            {
                "id":"coord_sys_label",
                "controlType":"label",
                "class": "",
                "html":`Seleccione un Sistema de referencia`
            },
            {
                "id":"system_ref_coord",
                "controlType":"select",
                "class": "form-control form-control-sm",
                "onchange":onAction,
                "html":` <option value='sin' selected>Seleccione...</option>
                <option value='wgs84'>Coordenadas geográficas (Decimales)</option>
                <option value='wgs84sexa'>Coordenadas geográficas (Grados sexagesimales)</option>
                <option value='msbogota'>Coordenadas Magna Colombia Bogotá</option>
                <option value='ctm12'>Coordenadas Magna Sirgas Origen Nacional</option>`
            },
            {
                "id":"wgs84",
                "controlType":"form",
                "class": 'form-coord-sys my-3',
                "html":`
                <div class="form-group row">
                    <label for="latwgs84" class="col-md-4 col-form-label coord-form-label" >Latitud:</label>
                    <div class="col-md-6">
                        <input class="coord-form form-control form-control-sm" type='number' min='0' id='latwgs84' name='latwgs84'  placeholder='10.829468'>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="longwgs84" class="col-md-4 col-form-label coord-form-label" >Longitud:</label>
                    <div class="col-md-6">
                        <input class="coord-form form-control form-control-sm" type='number' id='longwgs84' name='latwgs84' placeholder='-75.034609'>
                    </div>
                </div>`
            },
            {
                "id":"wgs84sexa",
                "controlType":"div",
                "class": 'form-coord-sys my-3',
                "html":`
                <div class="form-group row">
                    <label for="latwgs84sexa" class="col-md-2 col-sm-12 col-form-label coord-form-label" >Latitud:</label>
                    <div class="col-md-10 col-sm-12">
                        <input class="coord-form form-control form-control-sm" type='number' min='0' id='latwgs84sexa' name='latwgs84sexa' style=' width:7em;' placeholder='10'><H9 style='tex'>&nbsp°&nbsp</H9><input class="coord-form form-control form-control-sm" type='number' min='0' max='59' id='latwgs84s1m' name='latwgs84s1m' style=' width:6em; 'placeholder='49'><H9>&nbsp'&nbsp</H9><input class="coord-form form-control form-control-sm" type='number' min='0' max='59' id='latwgs84s1s' name='latwgs84s1s' style=' width:8em; 'placeholder='46'><H9>&nbsp'' N &nbsp</H9>
                    </div>
                </div>
                <div class="form-group row w-80">
                    <label for="longwgs84sexa" class="col-md-2 col-sm-12 col-form-label coord-form-label" >Longitud:</label>
                    <div class="col-md-10 col-sm-12">
                        <input class="coord-form form-control form-control-sm" type='number' id='longwgs84sexa' name='longwgs84sexa' style=' width:7em; 'placeholder='75'><H9 style='tex'>&nbsp°&nbsp</H9><input class="coord-form form-control form-control-sm" type='number' min='0' max='59' id='longwgs84s1m' name='longwgs84s1m' style=' width:6em; 'placeholder='2'><H9>&nbsp'&nbsp</H9><input class="coord-form form-control form-control-sm" type='number' min='0' max='59' id='longwgs84s1s' name='longwgs84s1s' style=' width:8em; 'placeholder='4'><H9>&nbsp'' W &nbsp</H9>
                    </div>
                </div>                
                `
            },
            {
                "id":"msbogota",
                "controlType":"form",
                "class": 'form-coord-sys my-3',
                "html":`
                <div class="form-group row">
                    <label for="longmagnabog" class="col-md-4 col-form-label coord-form-label" >X:</label>
                    <div class="col-md-6">
                        <input class="coord-form form-control form-control-sm" type='number' id='longmagnabog' name='longmagnabog'  placeholder='1185887.08'>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="latmagnabog" class="col-md-4 col-form-label coord-form-label" >Y:</label>
                    <div class="col-md-6">
                        <input class="coord-form form-control form-control-sm" type='number' min='0' id='latmagnabog' name='latmagnabog' placeholder='1080979.46'>
                    </div>
                </div>`
            },
            {
                "id":"ctm12",
                "controlType":"form",
                "class": 'form-coord-sys my-3',
                "html":`
                <div class="form-group row">
                    <label for="longmagnabog" class="col-md-4 col-form-label coord-form-label" >X:</label>
                    <div class="col-md-6">
                        <input class="coord-form form-control form-control-sm" type='number' id='longctm12' name='longctm12'  placeholder='4777649.978'>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="latmagnabog" class="col-md-4 col-form-label coord-form-label" >Y:</label>
                    <div class="col-md-6">
                        <input class="coord-form form-control form-control-sm" type='number' min='0' id='latctm12' name='longctm12' placeholder='2755436.214'>
                    </div>
                </div>`
            }
        ],
        "footer":{
            "saveButtonText":"Buscar Coordenada"
        },
        "feature":{
            // "layer":layer,
            // "layerType":type
        }  
    }     
}