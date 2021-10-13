import $ from "jquery";

import { desactivateComparison } from '../layersComparison';

import {desactivateDraw} from '../draw/config/drawControl'
import {desactivateMeasure} from '../measure/measure'

// desactivate comparison or the other controls that generate conflicts
export var desactivateControls=()=>{
    if($('#comparisonButton').hasClass('active')){
        desactivateComparison();
    }
}

// when activate comparison or the other controls that generate conflicts
export var desactivateComparisonControls=()=>{
    if(!$('#comparisonButton').hasClass('active')){
        desactivateDraw()
        desactivateMeasure()
    }
}