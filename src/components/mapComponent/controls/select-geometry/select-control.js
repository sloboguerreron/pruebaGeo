import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css'

import $ from "jquery";


const L =require ('leaflet');

import 'leaflet-draw/dist/leaflet.draw'
import drawLocales from 'leaflet-draw-locales'

import {AwesomeMarkersIcon} from '../icons/famIcon'
import {selectItems,highlightLayerRemove} from '../../layers/control-layers'

import {desactivateControls} from '../floatingMenu/changeItem'

import {addLayer,mapOnEvent} from '../../map'
import {mapAddControl,mapRemoveControl,addToMap,removeToMap,removeAllInLayer,refreshLayer} from '../../map'
import {polygon_style} from '../../../mapComponent/layers/style/polygon'


var PluginOptions= {
    position: 'bottomright',
    draw: {
        polygon: {
            shapeOptions: {
                color: 'orange'
            },
            allowIntersection: true,
            drawError: {
                color: 'red',
                timeout: 1000
            },
            showArea: true,
            metric: false,
            repeatMode: false
        },
        polyline: {
            shapeOptions: {
                color: 'orange'
            },
            repeatMode: false
        },
        marker: {
            icon:AwesomeMarkersIcon('fa','fa-dot-circle','orange')
        },
        circle: false,
        circlemarker:false,
        rectangle: false
    },
    edit: {
        featureGroup: selectItems,
        remove: false,
        edit: false
    }
};
// Automatically defines Leaflet.draw to the specified language
drawLocales('es')

// Initialize the draw control and pass it the FeatureGroup of editable layers
export var selectControl = new L.Control.Draw(PluginOptions);
export var drawfilter =  new L.geoJson('',{style:polygon_style('green')})

export var addselectControl=()=>{
    // desactivate layer comparison control
    desactivateControls();
    if(!selectControl._map){
        //add plugin to map
        mapAddControl(selectControl);
        //Activate plugin
        $('#SelectButton').addClass('active');
        $("#download-excel-btn").hide();
        // Add complements to map 
        addToMap(selectItems);
        addToMap(drawfilter)
        
    }else{
        desactivateselect();
    }

};

// desactivate select filter control
export var desactivateselect=()=>{
    $('#SelectButton').removeClass('active');
    $("#download-excel-btn").show();
    removeToMap(drawfilter);
    removeAllInLayer(drawfilter);
    removeAllInLayer(selectItems);
    mapRemoveControl(selectControl);
    
};





// on click on footer fab menu
/* export var addselectControl=()=>{
    // desactivate layer comparison control
    console.log("Iniciado")
    desactivateControls();
    
    if(!selectControl._map){
        // add plugin to map
        mapAddControl(selectControl);
        $('#SelectButton').addClass('active');

        mapOnEvent('draw:created', function(e) {
    
            highlightLayerRemove();
            removeAllInLayer(drawfilter)
            
            if($('#SelectButton').hasClass('active')){
                var type = e.layerType, 
                    layer_select = e.layer;
                
                // add drawing layer
                removeAllInLayer(selectItems)  
                addLayer(selectItems,layer_select);
                const layer = 'yopal:gc_predios_catastro'
        
                if(type == "marker"){
                    //LayerRemove(tablefilter)
                    
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
                    })
                    .catch(function (error) { 
                        removeAllInLayer(selectItems)
                        tablefilter = createtable(null)
                        
                    })
                }
                else if(type == "polygon"){
                    //LayerRemove(tablefilter)
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
                    }) 
                    .catch(function (error) { 
                        removeAllInLayer(selectItems)
                        tablefilter = createtable(null)
                        
                    })
                }
            }
            
        });
        // Add complements to map 
        addToMap(selectItems);
        addToMap(drawfilter)
        
    }else{
        desactivateselect()
        
    }
} */




