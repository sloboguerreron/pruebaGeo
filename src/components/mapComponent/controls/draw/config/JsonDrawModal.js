// initialize the content inside the modal
// title of modal
// jsonModal.body is the modal content, it can be as much as you need. ControlType defines the html tag it could be div
// jsonModal.feature is the data you could send for saving data 
// layer is the name of the layer you will modify
export var jsonModal=(layer,type)=>{
    return{
        "title":"INFORMACIÓN DEL DIBUJO",
        "body":[
            {
                "id":"obs_draw",
                "controlType":"textarea",
                "class": "form-control",
                "placeholder":"Diligencie cualquier tipo de información",
                "html":null
            }
        ],
        "footer":{
            "saveButtonText":"Guardar"
        },
        "feature":{
            "layer":layer,
            "layerType":type
        }  
    }     
}