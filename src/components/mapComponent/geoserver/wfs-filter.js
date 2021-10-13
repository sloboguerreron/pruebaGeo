import $ from "jquery";
import {GEOSERVER_URL,GEOSERVER_STORE} from './urls'



export function FilterPoint(coordinate,layer){
    return  `<wfs:GetFeature service="WFS" version="1.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.opengis.net/wfs"
    xmlns:gml="http://www.opengis.net/gml" xmlns:wfs="http://www.opengis.net/wfs"
    xmlns:ogc="http://www.opengis.net/ogc">
    <wfs:Query typeName="${layer}">
        <ogc:Filter>
            <ogc:Intersects>
                <ogc:PropertyName>geom</ogc:PropertyName>
                <gml:Point>
                    <gml:coordinates>${coordinate}</gml:coordinates>
                </gml:Point>
            </ogc:Intersects>
        </ogc:Filter>
    </wfs:Query>
    </wfs:GetFeature>`
};

export function FIlterPolyline(coordinates,layer){
    return `<wfs:GetFeature service="WFS" version="1.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.opengis.net/wfs"
    xmlns:gml="http://www.opengis.net/gml" xmlns:wfs="http://www.opengis.net/wfs"
    xmlns:ogc="http://www.opengis.net/ogc">
    <wfs:Query typeName="${layer}">
        <ogc:Filter>
            <ogc:Intersects>
                <ogc:PropertyName>geom</ogc:PropertyName>
                    <gml:outerBoundaryIs>
                        <gml:LineString>
                            <gml:coordinates decimal="." cs="," ts=" ">
                               ${coordinates}
                            </gml:coordinates>
                        </gml:LineString>
                    </gml:outerBoundaryIs>
            </ogc:Intersects>
        </ogc:Filter>
    </wfs:Query>
    </wfs:GetFeature>`
};

export function FIlterPolygon(coordinates,layer){
    return `<wfs:GetFeature service="WFS" version="1.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.opengis.net/wfs"
    xmlns:gml="http://www.opengis.net/gml" xmlns:wfs="http://www.opengis.net/wfs"
    xmlns:ogc="http://www.opengis.net/ogc">
    <wfs:Query typeName="${layer}">
        <ogc:Filter>
            <ogc:Intersects>
                <ogc:PropertyName>geom</ogc:PropertyName>
                <gml:Polygon srsName="http://www.opengis.net/gml/srs/epsg.xml#4326">
                        <gml:outerBoundaryIs>
                            <gml:LinearRing>
                                <gml:coordinates decimal="." cs="," ts=" ">
                                  ${coordinates}
                                </gml:coordinates>
                            </gml:LinearRing>
                        </gml:outerBoundaryIs>
                </gml:Polygon>
            </ogc:Intersects>
        </ogc:Filter>
    </wfs:Query>
    </wfs:GetFeature>`
};

export const GeoserverPOST=(postgeoserver)=>{
    return $.ajax(GEOSERVER_URL+GEOSERVER_STORE+'/wfs', {
        type: 'POST',
        dataType: 'xml',
        processData: false,
        contentType: 'xml',
        data: postgeoserver,
    });
};
