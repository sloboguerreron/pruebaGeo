import $ from "jquery";

let actionMenuFab=$('#actionMenuFab')

export var createItemButton=(icon,text,clickFunction,id)=>{
    // create col
    let col = document.createElement("div");     
    col.setAttribute('class','col-md-1 center-col');
    actionMenuFab.append(col);   
    
    // create fab button
    let button = document.createElement("button");     
    button.setAttribute('class','btn-floating btn-sm btn-fab btn-submenu');
    button.id=id+'Button';
    button.onclick =function(){
        $('#floatingMenu').hasClass('active')&&$('#floatingMenu').removeClass('active')
        clickFunction()
    };
    button.innerHTML='<i class="fa '+icon+'"></i>';
    col.appendChild(button);   

    // create text description
    let badge = document.createElement("div");     
    badge.setAttribute('class','badge badge-light');
    badge.textContent=text;
    col.appendChild(badge);

}
