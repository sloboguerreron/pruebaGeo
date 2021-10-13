import $ from "jquery";
import {GEOSERVER_URL,GEOSERVER_STORE} from './urls'

export function wfsInsert(type,layer,feature,data) {
    let geom, coord = '';

    if(type=='marker'){
        coord = [feature._latlng.lng + "," + feature._latlng.lat] + " " ;
        geom=`<gml:Point srsName="http://www.opengis.net/gml/srs/epsg.xml#4326"><gml:coordinates decimal="." cs="," ts=" ">${coord}</gml:coordinates></gml:Point>`
    }else if (type=='polyline'){
        let coordinates=feature._latlngs;
        for (let i = 0; i < coordinates.length; i++) {
            coord+= [coordinates[i].lng + "," + coordinates[i].lat] + " ";
        }
        geom=`<gml:MultiLineString srsName="http://www.opengis.net/gml/srs/epsg.xml#4326">
                <gml:lineStringMember>
                    <gml:LineString>
                        <gml:coordinates decimal="." cs="," ts=" ">${coord}</gml:coordinates>
                    </gml:LineString>
                </gml:lineStringMember>
              </gml:MultiLineString>`
    }else if(type=='polygon'){
        let coordinates=feature._latlngs[0];
        for (let i = 0; i < coordinates.length; i++) {
            coord += [coordinates[i].lng + "," + coordinates[i].lat] + " ";
        }
        coord +=[coordinates[0].lng + "," + coordinates[0].lat] + " ";

        geom=`<gml:MultiPolygon srsName="http://www.opengis.net/gml/srs/epsg.xml#4326">
                <gml:polygonMember>
                    <gml:Polygon srsName="http://www.opengis.net/gml/srs/epsg.xml#4326">
                        <gml:outerBoundaryIs>
                            <gml:LinearRing>
                                <gml:coordinates decimal="." cs="," ts=" ">${coord}</gml:coordinates>
                            </gml:LinearRing>
                        </gml:outerBoundaryIs>
                    </gml:Polygon>
                </gml:polygonMember>
            </gml:MultiPolygon>`
    }

    let params='';
    for (let j = 0; j < data.length; j++) {
        params+=`<${GEOSERVER_STORE}:${data[j].name}>${data[j].value}</${GEOSERVER_STORE}:${data[j].name}>`
        
    }

    var payload = `<wfs:Transaction service="WFS" version="1.0.0" xmlns:wfs="http://www.opengis.net/wfs" xmlns:${GEOSERVER_STORE}="http://${GEOSERVER_STORE}"
    xmlns:gml="http://www.opengis.net/gml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <wfs:Insert>
      <${GEOSERVER_STORE}:${layer}>
        <${GEOSERVER_STORE}:geom>${geom}</${GEOSERVER_STORE}:geom>
        ${params}
      </${GEOSERVER_STORE}:${layer}>
    </wfs:Insert>
  </wfs:Transaction>`;
    
    $.ajax(GEOSERVER_URL+GEOSERVER_STORE+'/ows', {
        type: 'POST',
        dataType: 'xml',
        processData: false,
        contentType: 'text/xml',
        data: payload,
        success: function (xml) {
            console.log(feature)
        },
        error: function (xml) {
            console.log(xml);
            alert('Error al guardar')
        }
    });
}