import { User } from '../../../../configComponent/update-vars';
import { geoserverGetRequest } from '../../../geoserver/geoserver-getRequest'

const L =require ('leaflet');
import 'leaflet-draw/dist/leaflet.draw'

import {AwesomeMarkersIcon} from '../../icons/famIcon'
import {drawnServer} from '../../../layers/control-layers'

import {addToMap,addLayer,removeAllInLayer} from '../../../map'

import {wfsDelete} from '../../../geoserver/wfs-delete'

export var addDrawData=()=>{
    var errorHandle=()=>{alert('No fue posible cargar los dibujos')}
    // get features from geoserver url
    geoserverGetRequest(getDraws,`/yopal/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=yopal%3Acapture_draw&maxFeatures=50&outputFormat=application%2Fjson&CQL_FILTER=id_user='${User}'`,errorHandle)
}

var getDraws=(data)=>{
    removeAllInLayer(drawnServer)
    if(data){

        let options={
            // point style
            pointToLayer:function (feature, latlng) {
                return L.marker(latlng, {icon: AwesomeMarkersIcon('fa','map-marked-alt','green')});
            },
            
            // features style and actions
            onEachFeature: function(feature, layer) {
                let btnDiv = document.createElement('div')
    
                let btnDataFeat = document.createElement('div');
                btnDataFeat.innerHTML='<strong>Id:</strong>'+feature.properties.id+'<br><strong>Observación:</strong>'+feature.properties.observacion
                btnDiv.append(btnDataFeat)
    
                let btnDelete = document.createElement('button');
                btnDelete.setAttribute('type','button');
                btnDelete.className = 'btn btn-danger mt-2';
                btnDelete.innerHTML = "Eliminar Dibujo";
                btnDelete.onclick =function(){deleteDraw(feature.properties.id)} 
                btnDiv.append(btnDelete)
                
                layer.bindPopup(btnDiv);
    
                if(layer.feature.geometry.type=='MultiPolygon' || layer.feature.geometry.type=='MultiLineString'){
                    layer.setStyle({fillColor :'green', color:'green'})
                }

                addLayer(drawnServer,layer);
            }
        }
 
        // create geojson with features and style
        var geojson = L.geoJson(data,options)
        geojson.addTo(drawnServer);
        

    }
}


var deleteDraw=(id_draw)=>{
    var data={"name":"id","value":id_draw}
    wfsDelete('capture_draw',data,addDrawData)
}
