import $ from "jquery";

let sideBar=$('#side-nav')

// create stadistics item
export var createItemStadistics=(id,icon,name,idpredios,idregistros)=>{
    // create list
    let li = document.createElement("li");     
    li.setAttribute('class','nav-item centerLiIcons');
    li.innerHTML = ` 
    <a href="#dropdown-chart-${id}" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="dropdown-chart-${id}" id="chart-${id}" class="chart-nav"><i class="fas fa-fw ${icon}"></i> <span class="sideBarSpanNoActive">Predios ${name}</span></a>
    
    <div class="dropdown-chart collapse hide" id="dropdown-chart-${id}">
        <a class="row mx-2 chart-row"  data-parent="#chart-${id}" href="#" id="${idpredios}"  data-toggle="modal" data-target="#modalStadistics" value='Predios ${name}'>Predios</a>
        <a class="row mx-2 chart-row"  data-parent="#chart-${id}" href="#" id="${idregistros}"  data-toggle="modal" data-target="#modalStadistics" value='Registros ${name}'>Registros</a>
    </div>`

    sideBar.append(li);   

}
