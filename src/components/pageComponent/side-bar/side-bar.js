import './sidebar.scss';

import $ from "jquery";
import {sizeInvalid} from '../../mapComponent/map';

// functions that toogle the sideBar
$('#sideBar').on( "mouseenter touchstart", function() {
  $('#sideBar').removeClass('nonactive');
    $('#sideBar').addClass('active');
    $('#closebtn').addClass('active');

    $('.sideBarSpanNoActive').addClass('sideBarSpanActive').removeClass('sideBarSpanNoActive');
    // map resize when change view
    setTimeout(function(){ sizeInvalid()}, 100);
    sideBarDropdown('.dropdown-chart');
})


document.addEventListener("touchstart", function() {}, true);

$('#sideBar').on( "mouseleave touchend", function(ev) {
  closeSideBar()
});


$('.chart-nav').on( "mouseleave touchend", function(ev) {
  sideBarDropdown('.dropdown-chart');
});

// functions
const closeSideBar=()=>{
  $('#sideBar').removeClass('active');
  $('#sideBar').addClass('nonactive');
  $('#closebtn').removeClass('active');
  $('.sideBarSpanActive').addClass('sideBarSpanNoActive').removeClass('sideBarSpanActive');
  sideBarDropdown('.dropdown-chart');
  
  // document.getElementById("closebtn").style.display = "none"; 
  setTimeout(function(){ sizeInvalid()}, 100);
}

var sideBarDropdown=(div)=>{
  if ($(div).hasClass('show')) {
    $(div).removeClass('show');
    $(div).addClass('hide');
  } else {
    $(div).removeClass('hide');
    // $(div).addClass('show');
  }
}


// events
$('#closebtn').on('click', function(){
  closeSideBar()
});


const logOut=()=>{
  if(window.confirm("Desea Cerrar la Sesión?")){
      sessionStorage.setItem('access-juan-de-acosta', '');
      sessionStorage.setItem('User-juan-de-acosta', '');
      window.location.href = "http://34.138.222.96/index.php/";
      
  }
}

$('#log-out').on('click',function(){
  logOut();
})

