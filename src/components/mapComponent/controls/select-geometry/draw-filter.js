import {mapAddControl,mapRemoveControl,addToMap,removeToMap,removeAllInLayer,refreshLayer,addLayer,mapOnEvent} from '../../map'
import {selectItems,highlightLayerRemove} from '../../layers/control-layers'

import {extractJson} from './geojson';
import {convertirXmlEnObjeto} from './xml-json'
import {createtable,LayerRemove} from './filter-geometry'
import {splitTableGeometry,splitTable} from '../../../pageComponent/view-change'
import {FilterPoint,FIlterPolygon,FIlterPolyline,GeoserverPOST} from '../../geoserver/wfs-filter'

import {drawfilter} from './select-control'


import $ from "jquery";

//Event select feature in the map and draw select

mapOnEvent('draw:created', function(e) {

    highlightLayerRemove();
    removeAllInLayer(drawfilter)

    if($('#SelectButton').hasClass('active')){
        var type = e.layerType, 
            layer_select = e.layer;

            removeAllInLayer(selectItems)  
            
            // add drawing layer
            addLayer(selectItems,layer_select);
            const layer = 'juanDeAcosta:table_selection'
    
            if(type == "marker"){
                var latitud = layer_select["_latlng"]["lat"];
                var longitud = layer_select["_latlng"]["lng"];
                var coord = [longitud+","+latitud]+" ";
                var filter = FilterPoint(coord,layer)
                var request = GeoserverPOST(filter)
                request.then(function(xml){
                    var json = convertirXmlEnObjeto(xml)
                    var geojson = extractJson(json,type)
                    drawfilter.addData(geojson)
                    var tablefilter = createtable(geojson)
                    splitTable()
                    removeAllInLayer(selectItems)
                    removeToMap(tablefilter)
                    
                })
                .catch(function (error) { 
                    removeAllInLayer(selectItems)
                    tablefilter = createtable(null)
                    
                })
            }    
            else if(type == "polyline"){
                var coord = ''
                for (var i of layer_select["_latlngs"]){
                    coord += [i["lng"]+ "," +i["lat"] ] + " ";
                }
                var filter = FIlterPolyline(coord,layer)
                var request = GeoserverPOST(filter)
                request.then(function(xml){
                    var json = convertirXmlEnObjeto(xml)
                    var geojson = extractJson(json,'polygon')
                    drawfilter.addData(geojson)
                    var tablefilter = createtable(geojson)
                    splitTable()
                    removeAllInLayer(selectItems)
                    removeToMap(tablefilter)
                    $("#table").bootstrapTable("resetView")
                })
                .catch(function (error) { 
                    removeAllInLayer(selectItems)
                    tablefilter = createtable(null)
                    
                })
            }
            else if(type == "polygon"){
                var coord = ''
                var coordinates = layer_select["_latlngs"]["0"]["0"]
                for (var i of layer_select["_latlngs"]["0"]){
                    coord += [i["lng"]+ "," +i["lat"] ] + " ";
                }
                coord += [coordinates["lng"]+ "," +coordinates["lat"] ] + " ";
                var filter = FIlterPolygon(coord,layer)
                var request = GeoserverPOST(filter)
                request.then(function(xml){
                    var json = convertirXmlEnObjeto(xml)
                    var geojson = extractJson(json,type)
                    drawfilter.addData(geojson)
                    var tablefilter = createtable(geojson)
                    splitTable()
                    removeAllInLayer(selectItems)
                    removeToMap(tablefilter)
                    $("#table").bootstrapTable("resetView")
                }) 
                .catch(function (error) { 
                    removeAllInLayer(selectItems)
                    tablefilter = createtable(null)
                    
                })
            }

    };

});

mapOnEvent('draw:drawstop', function(e) {
})


mapOnEvent('draw:deletestart', function(e) {
})