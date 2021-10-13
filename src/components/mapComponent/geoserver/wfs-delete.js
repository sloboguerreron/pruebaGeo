import $ from "jquery";
import {GEOSERVER_URL,GEOSERVER_STORE} from './urls'

export function wfsDelete(layer,data,callback) {

  var payload = `<wfs:Transaction service="WFS" version="1.0.0"
  xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:wfs="http://www.opengis.net/wfs"
  xmlns:${GEOSERVER_STORE}="http://${GEOSERVER_STORE}">
  <wfs:Delete typeName="${GEOSERVER_STORE}:${layer}">
    <ogc:Filter>
      <ogc:PropertyIsEqualTo>
        <ogc:PropertyName>${GEOSERVER_STORE}:${data.name}</ogc:PropertyName>
        <ogc:Literal>${data.value}</ogc:Literal>
      </ogc:PropertyIsEqualTo>
    </ogc:Filter>
  </wfs:Delete>
</wfs:Transaction>`

    $.ajax(GEOSERVER_URL+GEOSERVER_STORE+'/ows', {
        type: 'POST',
        dataType: 'xml',
        processData: false,
        contentType: 'text/xml',
        data: payload,
        success: function (xml) {
            // console.log(xml)
            callback()
        },
        error: function (xml) {
            // console.log(xml);
            alert('Error al eliminar')
        }
    });
}