import $ from "jquery";
import { User } from "../../../../configComponent/update-vars";
import {addDrawData} from './drawDataServer'
import {removeAllInLayer,addToMap,removeToMap} from '../../../map'
import {drawnItems,drawnServer} from '../../../layers/control-layers'

import {wfsInsert} from '../../../geoserver/wfs-insert'
// save the draw
export var onSave=(feat)=>{
    var data=[
        {"name":"id_user","value":User},
        {"name":"observacion","value":$('#obs_draw').val()}
    ]
    // console.log(data)
    // save data in geoserver    
    wfsInsert(feat.layerType,'capture_draw',feat.layer,data)
    // remove drawing feature
    removeAllInLayer(drawnItems)
    // remove drawing modal
    $('#drawModal').remove();

    // refresh features on map
    addDrawData()
    

}
// cancel the modal
export var onCancel=()=>{
    removeAllInLayer(drawnItems)
    $('#drawModal').remove();
}