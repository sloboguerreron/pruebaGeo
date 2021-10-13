import {GEOSERVER_STORE} from '../geoserver/urls'

import {wmsBetter} from '../geoserver/wms-click'

//recorrido360 on click do something
export var recorrido = wmsBetter(GEOSERVER_STORE+'/wms',{
	layers:GEOSERVER_STORE+':gesstorstreetviews',
	transparent: true,
    format: 'image/png',
	version: '1.1.1',
	maxZoom: 30,
	minZoom: 18,
	info_format: 'application/json',
	wmsName: 'recorrido360'
});

//predios on click do something
export var prediosCatastro = wmsBetter(GEOSERVER_STORE+'/wms',{
	layers:GEOSERVER_STORE+':gc_predios_catastro',
	transparent: true,
    format: 'image/png',
	version: '1.1.1',
	maxZoom: 30,
	minZoom: 12,
	info_format: 'application/json',
	wmsName: 'predios'
});


//capture points on click do something
export var wfs_capture = wmsBetter(GEOSERVER_STORE+'/wms',{
	layers:GEOSERVER_STORE+':capture_nomenclatura',
	transparent: true,
    format: 'image/png',
	version: '1.1.1',
	maxZoom: 30,
	minZoom: 12,
	info_format: 'application/json',
	wmsName: 'capture'
});
