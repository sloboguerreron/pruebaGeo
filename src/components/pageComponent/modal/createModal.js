import $ from "jquery";

import './modal'

// create dynamic modal with the basic structure see how drawcontrol works
export var createModal=(id,jsonModal,saveEvent,cancelEvent,move)=>{
     let input = document.getElementById('search-input') 
     let button=document.getElementById('search-collapse') 
     let drop = document.getElementById('dropdown-items')
    input.disabled=true //deshabilitar input
    button.disabled=true //deshabilitar boton
    drop.disabled=true  //deshabilitar drop
    let content=$('#content')
    let modalClass='modal fade show'
    //move boolean 
    !move? modalClass='modal fade show': modalClass='modal-dialog'

    let modal=document.createElement("div");  
    modal.setAttribute('class',modalClass);
    modal.setAttribute('tabindex','-1');
    modal.setAttribute('role','dialog');
    modal.setAttribute('aria-hidden','true');
    modal.id=id+'Modal';
    content.append(modal); 
    
    

    let modaldialog = document.createElement("div");     
    modaldialog.setAttribute('class','modal-dialog');
    modaldialog.setAttribute('role','document');
    modaldialog.setAttribute('style','z-index: 1500;');
    modaldialog.id=id+'ModalDialog';
    modal.append(modaldialog);  

    let modalcontent = document.createElement("div");     
    modalcontent.setAttribute('class','modal-content');
    modalcontent.id=id+'ModalContent';
    modaldialog.append(modalcontent);  

    let modalheader = document.createElement("div");     
    modalheader.setAttribute('class','modal-header');
    modalheader.id=id+'ModalHeader';
    modalcontent.append(modalheader);  

    let modalTitle = document.createElement("h5");
    modalTitle.setAttribute('class','modal-title');
    modalTitle.innerHTML=jsonModal.title
    modalheader.append(modalTitle); 

    let modalClose = document.createElement("button");
    modalClose.setAttribute('class','close');
    modalClose.setAttribute('type','button');
    modalClose.setAttribute('data-dismiss','modal');
    modalClose.setAttribute('aria-label','Close');
    modalClose.id=id+'close';
    modalClose.innerHTML='<span aria-hidden="true">&times;</span>'
    modalClose.onclick=function(){
        cancelEvent();
        input.disabled=false //deshabilitar input
        button.disabled=false//deshabilitar boton
        drop.disabled=false //deshabilitar drop
    }
    modalheader.append(modalClose); 
 
    let modalbody = document.createElement("div");     
    (saveEvent || move)?modalbody.setAttribute('class','modal-body'):modalbody.setAttribute('class','modal-body mb-3');
    modalbody.id=id+'ModalBody';
    modalcontent.append(modalbody);  

    for (let i = 0; i < jsonModal.body.length; i++) {
        let item = document.createElement(jsonModal.body[i].controlType);     
        item.setAttribute('class',jsonModal.body[i].class);
        if(jsonModal.body[i].controlType=='textarea'){
            item.setAttribute('placeholder',jsonModal.body[i].placeholder);
        }
        if(jsonModal.body[i].controlType=='select'){
            item.onchange=function(){
                jsonModal.body[i].onchange()
            } 
        }
        item.innerHTML=jsonModal.body[i].html
        item.id=jsonModal.body[i].id;
        modalbody.append(item); 
    }
    
    if(saveEvent){
        let modalfooter = document.createElement("div");     
        modalfooter.setAttribute('class','modal-footer');
        modalfooter.id=id+'ModalFooter';
        modalcontent.append(modalfooter);  
        
        let modalsave = document.createElement("button"); 
        jsonModal.footer.class?modalsave.setAttribute('class', jsonModal.footer.class):modalsave.setAttribute('class','btn btn-primary');    
        modalsave.setAttribute('type','button');
        modalsave.setAttribute('data-dismiss','modal');
        modalsave.onclick=function(){
            saveEvent(jsonModal.feature);
        }
        modalsave.innerText=jsonModal.footer.saveButtonText
        
        modalsave.id=id+'Save';
        modalfooter.append(modalsave);
    }
 

    // dragg the modal
    move 
    &&
    $("#"+id+"Modal").draggable({
        handle: ".modal-header",
        content: [-500,-30,window.screen.width-800,window.screen.height-300] //limitar movimiento
    }); 

    
    $('.modal-content').resizable({
        //alsoResize: ".modal-dialog",
       minHeight: $("#"+id+"Modal").height(),
       minWidth: $("#"+id+"Modal").width()
    });
    
}
