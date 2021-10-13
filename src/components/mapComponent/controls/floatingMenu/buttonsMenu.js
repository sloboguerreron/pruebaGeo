import './buttonsMenu.scss'

import $ from "jquery";
// button onclick show or hide the submenu buttons
$("#floatOptions").on('click',function(){
    $(this).closest('div.floating-action-menu').toggleClass('active')
})
