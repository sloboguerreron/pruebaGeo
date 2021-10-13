import $ from "jquery";
import {createItemButton} from'../controls/floatingMenu/buttonItem'
import{desactivateControls} from './floatingMenu/changeItem'

import 'leaflet.browser.print/dist/leaflet.browser.print.min.js';

import { map } from '../map'

var addPrintControl=()=>{
    desactivateControls();
    
}
createItemButton('fa-print', 'Imprimir',addPrintControl,'print');

$('#printButton').on('click', ()=>{
    if($('#formModal').hasClass('visible')) {
        $('#tblatt').attr('leaflet-browser-print-pages',true)
        
    }else{
        $('#tblatt').removeAttr('leaflet-browser-print-pages')
    }
    
    
    
    var modeToUse=L.control.browserPrint.mode.landscape({
        manualMode:false
    });
    map.printControl.print(modeToUse);

});
