import L from 'leaflet'

import {GEOSERVER_URL,GEOSERVER_STORE} from './urls'

//Geoserver Web Map Service
export function wmsGeoserverLayers(geoserver_layer,min_zoom,filter){
	let cql_filter= filter==undefined?'INCLUDE':filter
	var WMS = new L.TileLayer.WMS(GEOSERVER_URL+GEOSERVER_STORE+'/wms', {
		layers: GEOSERVER_STORE+':'+geoserver_layer,
		format: 'image/png',
		transparent: true,
		version: '1.3.0',
		crs: L.CRS.EPSG4326,
		maxZoom: 28,
		minZoom: min_zoom,
		CQL_FILTER: cql_filter
      });
    return WMS
}
