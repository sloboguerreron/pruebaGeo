import {wmsGeoserverLayers} from '../geoserver/wms-search'
// import {wfsSearch} from '../geoserver/wfs-search'

// import {GEOSERVER_STORE} from '../geoserver/urls'

import {recorrido,prediosCatastro,wfs_capture} from './clickable-layers'
import {polygon_style} from './style/polygon'
import {point_style} from './style/point'


//BASEMAPS 

export var standard_osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '©OpenStreetMap, ©Standard',minZoom: 0, maxZoom: 19});
export var standard_osm_mm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '©OpenStreetMap, ©Standard',minZoom: 0, maxZoom: 19});

export var stadia_outdoors = L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png', {attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',minZoom: 0, maxZoom: 20});
export var hikebike = L.tileLayer('http://toolserver.org/tiles/hikebike/{z}/{x}/{y}.png', {attribution: '©OpenStreetMap, ©Standard',minZoom: 0, maxZoom: 20});
export var esri_worldtopomap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {attribution: 'Tiles &copy; Esri &mdash'});
export var cartoDB_voyager = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains: 'abcd',maxZoom: 19});

export var esri_worldimagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {attribution: 'Tiles &copy; Esri &mdash', maxZoom: 17});
// export var esri_worldimagery = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
//     maxZoom: 20,
//     subdomains:['mt0','mt1','mt2','mt3']
// });
export var carto_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {attribution: '©OpenStreetMap, ©CartoDB',subdomains: 'abcd',maxZoom: 24});


export var mapa_base = L.tileLayer('http://35.236.226.40/mapa_base/{z}/{x}/{y}.png', {attribution: '©Yopal, ©Mapa Base',maxZoom: 24});

//LAYERS

export var perimetro_urbano = wmsGeoserverLayers('u_perimetro',7);
export var perimetro_rural = wmsGeoserverLayers('r_perimetro',7);


// export var barrio = wmsGeoserverLayers('barrios',13);
// var manzanas = wmsGeoserverLayers('manzanas_amco');
export var construccion= wmsGeoserverLayers('u_construccion',18);

// export var predios= wmsGeoserverLayers('u_terreno',17);

export var u_nomenclatura_domiciliaria= wmsGeoserverLayers('u_nomenclatura_domiciliaria_',19);



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////Capas Geoserver Anteriores

export var ypl_pot_estaciones= wmsGeoserverLayers('ypl_pot_estaciones',7);
export var ypl_pot_estaciones_precipitaciones= wmsGeoserverLayers('ypl_pot_estaciones_precipitaciones',7);
export var ypl_pot_estaciones_temperatura= wmsGeoserverLayers('ypl_pot_estaciones_temperatura',7);
export var ypl_pot_isoterma= wmsGeoserverLayers('ypl_pot_isoterma',7);
export var ypl_pot_isoyeta= wmsGeoserverLayers('ypl_pot_isoyeta',7);
export var ypl_pot_nuevas_estaciones4= wmsGeoserverLayers('ypl_pot_nuevas_estaciones4',7);
export var ypl_pot_unidades_clima= wmsGeoserverLayers('ypl_pot_unidades_clima',7);
export var ypl_pot_aeropuerto= wmsGeoserverLayers('ypl_pot_aeropuerto',7);
export var ypl_pot_perimetro_urbano= wmsGeoserverLayers('ypl_pot_perimetro_urbano',7);
//export var ypl_pot_predial_yopal= wmsGeoserverLayers('ypl_pot_predial_yopal',19);
export var ypl_pot_usos_propuestos= wmsGeoserverLayers('ypl_pot_usos_propuestos',7);
export var u_nomenclatura_vial= wmsGeoserverLayers('u_nomenclatura_vial',10);

////////Capas Nuevas


export var ypl_pot_aislamiento_lagunas_project= wmsGeoserverLayers('ypl_pot_aislamiento_lagunas_project',7);
export var ypl_pot_banco_de_arena=wmsGeoserverLayers('ypl_pot_banco_de_arena',7);
export var ypl_pot_cuencas= wmsGeoserverLayers('ypl_pot_cuencas',7);
export var ypl_pot_drenaje_doble= wmsGeoserverLayers('ypl_pot_drenaje_doble',7);
export var ypl_pot_drenaje_sencillo= wmsGeoserverLayers('ypl_pot_drenaje_sencillo',7);
export var ypl_pot_islas= wmsGeoserverLayers('ypl_pot_islas',7);
export var ypl_pot_lagos= wmsGeoserverLayers('ypl_pot_lagos',7);
export var ypl_pot_lagunas_de_oxidacion= wmsGeoserverLayers('ypl_pot_lagunas_de_oxidacion',7);
export var ypl_pot_lagunasoxida1000metros= wmsGeoserverLayers('ypl_pot_lagunasoxida1000metros',7);
export var ypl_pot_amenazas_inundacion= wmsGeoserverLayers('ypl_pot_amenazas_inundacion',7);
// export var ypl_pot_estaciones_precipitaciones= wmsGeoserverLayers('ypl_pot_estaciones_precipitaciones',7);
// export var ypl_pot_estaciones_temperatura= wmsGeoserverLayers('ypl_pot_estaciones_temperatura',7);
// export var ypl_pot_estaciones= wmsGeoserverLayers('ypl_pot_estaciones',7);
// export var ypl_pot_isoterma= wmsGeoserverLayers('ypl_pot_isoterma',7);
// export var ypl_pot_isoyeta= wmsGeoserverLayers('ypl_pot_isoyeta',7);
export var ypl_pot_nuevas_estaciones3= wmsGeoserverLayers('ypl_pot_nuevas_estaciones3',7);
// export var ypl_pot_unidades_clima= wmsGeoserverLayers('ypl_pot_unidades_clima',7);
export var ypl_pot_rio_doble= wmsGeoserverLayers('ypl_pot_rio_doble',7);
export var ypl_pot_bosques= wmsGeoserverLayers('ypl_pot_bosques',7);
export var ypl_pot_bosques_riparios= wmsGeoserverLayers('ypl_pot_bosques_riparios',7);
export var ypl_pot_canos= wmsGeoserverLayers('ypl_pot_canos',7);
export var ypl_pot_canos_rurales= wmsGeoserverLayers('ypl_pot_canos_rurales',7);
export var ypl_pot_cerros= wmsGeoserverLayers('ypl_pot_cerros',7);
export var ypl_pot_parque_laiguana= wmsGeoserverLayers('ypl_pot_parque_laiguana',7);
export var ypl_pot_pnr_la_tablona= wmsGeoserverLayers('ypl_pot_pnr_la_tablona',7);
export var ypl_pot_predios_adquiridos= wmsGeoserverLayers('ypl_pot_predios_adquiridos',7);
export var ypl_pot_ronda100= wmsGeoserverLayers('ypl_pot_ronda100',7);
export var ypl_pot_ronda200= wmsGeoserverLayers('ypl_pot_ronda200',7);
export var ypl_pot_avenidas_torrencialesdef= wmsGeoserverLayers('ypl_pot_avenidas_torrencialesdef',7);
export var ypl_pot_inundacion= wmsGeoserverLayers('ypl_pot_inundacion',7);
export var ypl_pot_remocion= wmsGeoserverLayers('ypl_pot_remocion',7);
export var ypl_pot_ronda30b= wmsGeoserverLayers('ypl_pot_ronda30b',7);
export var ypl_pot_ronda50_niata= wmsGeoserverLayers('ypl_pot_ronda50_niata',7);
export var ypl_pot_canteras_lari= wmsGeoserverLayers('ypl_pot_canteras_lari',7);
export var ypl_pot_centro_relleno= wmsGeoserverLayers('ypl_pot_centro_relleno',7);
export var ypl_pot_equipamientos_amenaza= wmsGeoserverLayers('ypl_pot_equipamientos_amenaza',7);
export var ypl_pot_perencogeo= wmsGeoserverLayers('ypl_pot_perencogeo',7);
export var ypl_pot_planchas_25000= wmsGeoserverLayers('ypl_pot_planchas_25000',7);
export var ypl_pot_sitios_gorefenenciados= wmsGeoserverLayers('ypl_pot_sitios_gorefenenciados',7);
export var ypl_pot_division_veredal= wmsGeoserverLayers('ypl_pot_division_veredal',7);
export var ypl_pot_limiter_2012= wmsGeoserverLayers('ypl_pot_limiter_2012',7);
export var ypl_pot_veredas_formulacion= wmsGeoserverLayers('ypl_pot_veredas_formulacion',7);
export var ypl_pot_carburos= wmsGeoserverLayers('ypl_pot_carburos',7);
export var ypl_pot_corredoresequion_noconstruidos= wmsGeoserverLayers('ypl_pot_corredoresequion_noconstruidos',7);
export var ypl_pot_infraestructuras= wmsGeoserverLayers('ypl_pot_infraestructuras',7);
export var ypl_pot_lineasdeflujoexistente= wmsGeoserverLayers('ypl_pot_lineasdeflujoexistente',7);
export var ypl_pot_lineasdeflujoproyectadaequion= wmsGeoserverLayers('ypl_pot_lineasdeflujoproyectadaequion',7);
export var ypl_pot_citygates_tgi_clip_yopal_1= wmsGeoserverLayers('ypl_pot_citygates_tgi_clip_yopal_1',7);
export var ypl_pot_municipios_tgi_select_yopal_1= wmsGeoserverLayers('ypl_pot_municipios_tgi_select_yopal_1',7);
export var ypl_pot_pks_tgi_clip_yopal_1= wmsGeoserverLayers('ypl_pot_pks_tgi_clip_yopal_1',7);
export var ypl_pot_red_tgi_v10_clip_yopal_1= wmsGeoserverLayers('ypl_pot_red_tgi_v10_clip_yopal_1',7);
export var ypl_pot_trampas_tgi_clip_yopal_1= wmsGeoserverLayers('ypl_pot_trampas_tgi_clip_yopal_1',7);
export var ypl_pot_veredas_tgi_select_yopal_1= wmsGeoserverLayers('ypl_pot_veredas_tgi_select_yopal_1',7);
export var ypl_pot_oleoducto= wmsGeoserverLayers('ypl_pot_oleoducto',7);
export var ypl_pot_anillos_viales= wmsGeoserverLayers('ypl_pot_anillos_viales',7);
export var ypl_pot_nom_vias_proyectadas= wmsGeoserverLayers('ypl_pot_nom_vias_proyectadas',7);
export var ypl_pot_vias= wmsGeoserverLayers('ypl_pot_vias',7);
export var ypl_pot_vias_exp= wmsGeoserverLayers('ypl_pot_vias_exp',7);
export var ypl_pot_vias_proyect_periurb_ppales= wmsGeoserverLayers('ypl_pot_vias_proyect_periurb_ppales',7);
export var ypl_pot_vias_rural= wmsGeoserverLayers('ypl_pot_vias_rural',7);
export var ypl_pot_viascopy= wmsGeoserverLayers('ypl_pot_viascopy',7);
export var ypl_pot_cuevas400= wmsGeoserverLayers('ypl_pot_cuevas400',7);
export var ypl_pot_curva1000= wmsGeoserverLayers('ypl_pot_curva1000',7);
export var ypl_pot_curvas= wmsGeoserverLayers('ypl_pot_curvas',7);
export var ypl_pot_cobertura= wmsGeoserverLayers('ypl_pot_cobertura',7);
export var ypl_pot_deslizamientos= wmsGeoserverLayers('ypl_pot_deslizamientos',7);
export var ypl_pot_formas= wmsGeoserverLayers('ypl_pot_formas',7);
export var ypl_pot_geologia= wmsGeoserverLayers('ypl_pot_geologia',7);
export var ypl_pot_geomorfologia= wmsGeoserverLayers('ypl_pot_geomorfologia',7);
export var ypl_pot_socavamientos= wmsGeoserverLayers('ypl_pot_socavamientos',7);
export var ypl_pot_conflictos= wmsGeoserverLayers('ypl_pot_conflictos',7);
export var ypl_pot_aeas_influencia_euip_alto_impacto= wmsGeoserverLayers('ypl_pot_aeas_influencia_euip_alto_impacto',7);
export var ypl_pot_areas_amortuguacion= wmsGeoserverLayers('ypl_pot_areas_amortuguacion',7);
export var ypl_pot_at= wmsGeoserverLayers('ypl_pot_at',7);
export var ypl_pot_ejesregionales= wmsGeoserverLayers('ypl_pot_ejesregionales',7);
export var ypl_pot_petroleo_proyectado= wmsGeoserverLayers('ypl_pot_petroleo_proyectado',7);
export var ypl_pot_suelos= wmsGeoserverLayers('ypl_pot_suelos',7);
export var ypl_pot_suelos_potencial= wmsGeoserverLayers('ypl_pot_suelos_potencial',7);
export var ypl_pot_zonificacion_rural= wmsGeoserverLayers('ypl_pot_zonificacion_rural',7);
// export var ypl_pot_aeropuerto= wmsGeoserverLayers('ypl_pot_aeropuerto',7);
export var ypl_pot_areas_plan_maestro2= wmsGeoserverLayers('ypl_pot_areas_plan_maestro2',7);
export var ypl_pot_modelacion_ruido_ldn= wmsGeoserverLayers('ypl_pot_modelacion_ruido_ldn',7);
export var ypl_pot_obstaculos_aeronavegacion= wmsGeoserverLayers('ypl_pot_obstaculos_aeronavegacion',7);
export var ypl_pot_pista_aeropuerto= wmsGeoserverLayers('ypl_pot_pista_aeropuerto',7);
export var ypl_pot_a_torreurbna= wmsGeoserverLayers('ypl_pot_a_torreurbna',7);
export var ypl_pot_parques= wmsGeoserverLayers('ypl_pot_parques',7);
export var ypl_pot_parques_2020= wmsGeoserverLayers('ypl_pot_parques_2020',7);
export var ypl_pot_ronda= wmsGeoserverLayers('ypl_pot_ronda',7);
export var ypl_pot_cementerio_mpal= wmsGeoserverLayers('ypl_pot_cementerio_mpal',7);
export var ypl_pot_estacionesdeserviciourbanas= wmsGeoserverLayers('ypl_pot_estacionesdeserviciourbanas',7);
export var ypl_pot_paramento= wmsGeoserverLayers('ypl_pot_paramento',7);
export var ypl_pot_plazademercado= wmsGeoserverLayers('ypl_pot_plazademercado',7);
export var ypl_pot_sitios_interes_shp= wmsGeoserverLayers('ypl_pot_sitios_interes',7);/////////////////////////////////////////
export var ypl_pot_barrios= wmsGeoserverLayers('ypl_pot_barrios',7);
export var ypl_pot_limitecomunas= wmsGeoserverLayers('ypl_pot_limitecomunas',7);
export var ypl_pot_perimetro_diagnosticodef= wmsGeoserverLayers('ypl_pot_perimetro_diagnosticodef',7);
export var ypl_pot_perimetro_formulacion= wmsGeoserverLayers('ypl_pot_perimetro_formulacion',7);
// export var ypl_pot_perimetro_urbano= wmsGeoserverLayers('ypl_pot_perimetro_urbano',7);
export var ypl_pot_periurb_cp_pbot= wmsGeoserverLayers('ypl_pot_periurb_cp_pbot',7);
export var ypl_pot_ptos_perimetro_urbano2= wmsGeoserverLayers('ypl_pot_ptos_perimetro_urbano2',7);
export var ypl_pot_ptos_suelo_expansion_urb= wmsGeoserverLayers('ypl_pot_ptos_suelo_expansion_urb',7);
export var ypl_pot_suelo_expansion_urb= wmsGeoserverLayers('ypl_pot_suelo_expansion_urb',7);
export var ypl_pot_zonas= wmsGeoserverLayers('ypl_pot_zonas',7);
export var ypl_pot_ciclocarriles= wmsGeoserverLayers('ypl_pot_ciclocarriles',7);
export var ypl_pot_estacionamientos= wmsGeoserverLayers('ypl_pot_estacionamientos',7);
export var ypl_pot_jerarquia_vial= wmsGeoserverLayers('ypl_pot_jerarquia_vial',7);
export var ypl_pot_malla_vial= wmsGeoserverLayers('ypl_pot_malla_vial',7);
export var ypl_pot_paraderos= wmsGeoserverLayers('ypl_pot_paraderos',7);
export var ypl_pot_parqueaderos= wmsGeoserverLayers('ypl_pot_parqueaderos',7);
export var ypl_pot_rutas= wmsGeoserverLayers('ypl_pot_rutas',7);
export var ypl_pot_variante_marginal= wmsGeoserverLayers('ypl_pot_variante_marginal',7);
export var ypl_pot_toponimia= wmsGeoserverLayers('ypl_pot_toponimia',7);
export var ypl_pot_comercial= wmsGeoserverLayers('ypl_pot_comercial',7);
export var ypl_pot_dotacional= wmsGeoserverLayers('ypl_pot_dotacional',7);
export var ypl_pot_mixto= wmsGeoserverLayers('ypl_pot_mixto',7);
export var ypl_pot_resicencial= wmsGeoserverLayers('ypl_pot_resicencial',7);
// export var ypl_pot_usos_propuestos= wmsGeoserverLayers('ypl_pot_usos_propuestos',7);
export var ypl_pot_areas_de_act= wmsGeoserverLayers('ypl_pot_areas_de_act',7);
export var ypl_pot_clasif_suelo2007= wmsGeoserverLayers('ypl_pot_clasif_suelo2007',7);
export var ypl_pot_tratamientos_urb= wmsGeoserverLayers('ypl_pot_tratamientos_urb',7);
export var r_construccion= wmsGeoserverLayers('r_construccion',7);
export var r_nomenclatura_domiciliaria= wmsGeoserverLayers('r_nomenclatura_domiciliaria',7);
export var r_sector= wmsGeoserverLayers('r_sector',7);
export var r_terreno= wmsGeoserverLayers('r_terreno',7);
export var r_unidad= wmsGeoserverLayers('r_unidad',7);
export var r_vereda= wmsGeoserverLayers('r_vereda',7);
export var ypl_pot_predial_yopal= wmsGeoserverLayers('ypl_pot_predial_yopal',19);
export var u_construccion= wmsGeoserverLayers('u_construccion',7);
export var u_manzana= wmsGeoserverLayers('u_manzana',7);
// export var u_nomenclatura_domiciliaria= wmsGeoserverLayers('u_nomenclatura_domiciliaria',7);
// export var u_nomenclatura_vial= wmsGeoserverLayers('u_nomenclatura_vial',10);
export var u_perimetro= wmsGeoserverLayers('u_perimetro',7);
export var u_sector= wmsGeoserverLayers('u_sector',7);
export var u_terreno= wmsGeoserverLayers('u_terreno',7);
export var u_unidad= wmsGeoserverLayers('u_unidad',7);
export var ypl_pot_top_predio_b_achagua= wmsGeoserverLayers('ypl_pot_top _ predio b-achagua',7);  /////////////////////////////
export var ypl_pot_urb_general_b_achagua= wmsGeoserverLayers('ypl_pot_urb _ general b-achagua',7);////////////////////////////
export var ypl_pot_canaguate= wmsGeoserverLayers('ypl_pot_canaguate',7);
export var ypl_pot_canaguate_puntos= wmsGeoserverLayers('ypl_pot_canaguate_puntos',7);
export var ypl_pot_perimetros_centros_poblados= wmsGeoserverLayers('ypl_pot_perimetros_centros_poblados',7);
export var ypl_pot_ptos_perimetro_cp_chaparrera= wmsGeoserverLayers('ypl_pot_ptos_perimetro_cp_chaparrera',7);
export var ypl_pot_ptos_perimetro_cp_guafilla= wmsGeoserverLayers('ypl_pot_ptos_perimetro_cp_guafilla',7);
export var ypl_pot_ptos_perimetro_cp_morro= wmsGeoserverLayers('ypl_pot_ptos_perimetro_cp_morro',7);
export var ypl_pot_ptos_perimetro_cp_niata= wmsGeoserverLayers('ypl_pot_ptos_perimetro_cp_niata',7);
export var ypl_pot_ptos_perimetro_cp_puntonuevo= wmsGeoserverLayers('ypl_pot_ptos_perimetro_cp_puntonuevo',7);
export var ypl_pot_ptos_perimetro_cp_quebradaseca= wmsGeoserverLayers('ypl_pot_ptos_perimetro_cp_quebradaseca',7);
export var ypl_pot_ptos_perimetro_cp_tilodiran= wmsGeoserverLayers('ypl_pot_ptos_perimetro_cp_tilodiran',7);
export var ypl_pot_morich_u_acueducto= wmsGeoserverLayers('ypl_pot_morich_u_acueducto',7);
export var ypl_pot_morich_u_alcantarillado_m= wmsGeoserverLayers('ypl_pot_morich_u_alcantarillado (m)',7);
export var ypl_pot_morich_u_alcantarillado_jose_gonzalez= wmsGeoserverLayers('ypl_pot_morich_u_alcantarillado_jose_gonzalez',7);
export var ypl_pot_morich_u_alcantarillado= wmsGeoserverLayers('ypl_pot_morich_u_alcantarillado',7);
export var ypl_pot_morich_u_amenazas= wmsGeoserverLayers('ypl_pot_morich_u_amenazas',7);
export var ypl_pot_morich_u_barrios= wmsGeoserverLayers('ypl_pot_morich_u_barrios',7);
export var ypl_pot_morich_u_base= wmsGeoserverLayers('ypl_pot_morich_u_base',7);
export var ypl_pot_morich_curvas_morichal= wmsGeoserverLayers('ypl_pot_morich_curvas_morichal',7);
export var ypl_pot_morich_u_electricas= wmsGeoserverLayers('ypl_pot_morich_u_electricas',7);
export var ypl_pot_morich_u_emisario_final= wmsGeoserverLayers('ypl_pot_morich_u_emisario final',7); /////////////////////////////////
export var ypl_pot_morich_u_equipamietos= wmsGeoserverLayers('ypl_pot_morich_u_equipamietos',7);
export var ypl_pot_morich_u_esp_publ= wmsGeoserverLayers('ypl_pot_morich_u_esp_publ',7);
export var ypl_pot_morich_u_expansion= wmsGeoserverLayers('ypl_pot_morich_u_expansion',7);
export var ypl_pot_morich_u_hidrografia= wmsGeoserverLayers('ypl_pot_morich_u_hidrografia',7);
export var ypl_pot_morich_u_linderos_jose_gonzalez= wmsGeoserverLayers('ypl_pot_morich_u_linderos jose gonzalez',7);//////////////////////////
export var ypl_pot_morich_u_lotes_jose_gonzalez= wmsGeoserverLayers('ypl_pot_morich_u_lotes jose gonzalez',7);//////////////////////////////
export var ypl_pot_morich_moricahal_cor= wmsGeoserverLayers('ypl_pot_morich_moricahal cor',7);/////////////////////////////////////////
export var ypl_pot_morich_u_paramento_manz= wmsGeoserverLayers('ypl_pot_morich_u_paramento_manz',7);
export var ypl_pot_morich_u_perimetro_urbano_cp_morichal= wmsGeoserverLayers('ypl_pot_morich_u_perimetro urbano cp morichal',7);///////////////////
export var ypl_pot_morich_u_perimetro= wmsGeoserverLayers('ypl_pot_morich_u_perimetro',7);
export var ypl_pot_morich_u_perimetro_area_desarrollo= wmsGeoserverLayers('ypl_pot_morich_u_perimetro_area_desarrollo',7);
export var ypl_pot_morich_u_placemarks_polygon= wmsGeoserverLayers('ypl_pot_morich_u_placemarks_polygon',7);
export var ypl_pot_morich_predial_rural= wmsGeoserverLayers('ypl_pot_morich_predial_rural',7);
export var ypl_pot_morich_u_predios= wmsGeoserverLayers('ypl_pot_morich_u_predios',7);
export var ypl_pot_morich_u_prop_urbana= wmsGeoserverLayers('ypl_pot_morich_u_prop_urbana',7);
export var ypl_pot_ptos_perimetro_cp_morichal= wmsGeoserverLayers('ypl_pot_ptos_perimetro_cp_morichal',7);
export var ypl_pot_morich_u_puntos_= wmsGeoserverLayers('ypl_pot_morich_u_puntos_',7);
export var ypl_pot_morich_u_puntos_perimetro_adesarrollo= wmsGeoserverLayers('ypl_pot_morich_u_puntos_perimetro_adesarrollo',7);
export var ypl_pot_morich_u_sist_vial= wmsGeoserverLayers('ypl_pot_morich_u_sist vial',7);////////////////////////////
export var ypl_pot_morich_u_topografia= wmsGeoserverLayers('ypl_pot_morich_u_topografia',7);
export var ypl_pot_morich_u_tratamientos_del_suelo= wmsGeoserverLayers('ypl_pot_morich_u_tratamientos del suelo',7);/////////////////////////////////
export var ypl_pot_morich_u_trazado_red_de_acueducto= wmsGeoserverLayers('ypl_pot_morich_u_trazado red de acueducto',7);///////////////////////////
export var ypl_pot_morich_u_urbanistico= wmsGeoserverLayers('ypl_pot_morich_u_urbanistico',7);
export var ypl_pot_morich_u_usivar= wmsGeoserverLayers('ypl_pot_morich_u_usivar',7);
export var ypl_pot_morich_u_uso_del_suelo= wmsGeoserverLayers('ypl_pot_morich_u_uso del suelo',7);////////////////////////////////
export var ypl_pot_morich_u_uso_propuesto= wmsGeoserverLayers('ypl_pot_morich_u_uso_propuesto',7);
export var ypl_pot_morich_u_uso_actual= wmsGeoserverLayers('ypl_pot_morich_u_uso_actual',7);
export var ypl_pot_morich_u_vegetacio= wmsGeoserverLayers('ypl_pot_morich_u_vegetacio',7);
export var ypl_pot_morich_veredas= wmsGeoserverLayers('ypl_pot_morich_veredas',7);
export var ypl_pot_morich_u_vias= wmsGeoserverLayers('ypl_pot_morich_u_vias',7);
export var ypl_pot_morich_vias= wmsGeoserverLayers('ypl_pot_morich_vias',7);
export var ypl_pot_morich_u_vias_pro= wmsGeoserverLayers('ypl_pot_morich_u_vias_pro',7);
export var ypl_pot_curvas_brazo_del_rio= wmsGeoserverLayers('ypl_pot_curvas_brazo_del_rio',7);
export var ypl_pot_curvas_chaparral= wmsGeoserverLayers('ypl_pot_curvas_chaparral',7);
export var ypl_pot_curvas_cravo_sur= wmsGeoserverLayers('ypl_pot_curvas_cravo_sur',7);
export var ypl_pot_curvas_deslizamiento_en_roca= wmsGeoserverLayers('ypl_pot_curvas_deslizamiento_en_roca',7);
export var ypl_pot_curvas_dz2= wmsGeoserverLayers('ypl_pot_curvas_dz2',7);
export var ypl_pot_curvas_dz3= wmsGeoserverLayers('ypl_pot_curvas_dz3',7);
export var ypl_pot_curvas_morro_2= wmsGeoserverLayers('ypl_pot_curvas_morro_2',7);
export var ypl_pot_curvas_morro1= wmsGeoserverLayers('ypl_pot_curvas_morro1',7);
export var ypl_pot_curvas_dz4= wmsGeoserverLayers('ypl_pot_curvas_dz4',7);
export var ypl_pot_curvas_planta_rio= wmsGeoserverLayers('ypl_pot_curvas_planta_rio',7);
export var ypl_pot_planes_parciales= wmsGeoserverLayers('ypl_pot_planes_parciales',7);
export var ypl_pot_aurora_alcantarillado_propuesto= wmsGeoserverLayers('ypl_pot_aurora_alcantarillado propuesto',7);
export var ypl_pot_aurora_arbolado= wmsGeoserverLayers('ypl_pot_aurora_arbolado',7);
export var ypl_pot_aurora_cercas= wmsGeoserverLayers('ypl_pot_aurora_cercas',7);
export var ypl_pot_aurora_curvas= wmsGeoserverLayers('ypl_pot_aurora_curvas',7);
export var ypl_pot_aurora_escorrentia= wmsGeoserverLayers('ypl_pot_aurora_escorrentia',7);
export var ypl_pot_aurora_limite_pp_aurora= wmsGeoserverLayers('ypl_pot_aurora_limite_pp_aurora',7);
export var ypl_pot_aurora_perfiles2= wmsGeoserverLayers('ypl_pot_aurora_perfiles2',7);
export var ypl_pot_aurora_predios_pp_aurora= wmsGeoserverLayers('ypl_pot_aurora_predios_pp_aurora',7);
export var ypl_pot_aurora_propuesta_urbana= wmsGeoserverLayers('ypl_pot_aurora_propuesta_urbana',7);
export var ypl_pot_aurora_propuesta_urbana2= wmsGeoserverLayers('ypl_pot_aurora_propuesta_urbana2',7);
export var ypl_pot_aurora_propuesta_urbana3= wmsGeoserverLayers('ypl_pot_aurora_propuesta_urbana3',7);
export var ypl_pot_aurora_propuesta_urbana4= wmsGeoserverLayers('ypl_pot_aurora_propuesta_urbana4',7);
export var ypl_pot_aurora_propuesta_urbana5= wmsGeoserverLayers('ypl_pot_aurora_propuesta_urbana5',7);
export var ypl_pot_aurora_propuesta_urbana6= wmsGeoserverLayers('ypl_pot_aurora_propuesta_urbana6',7);
export var ypl_pot_aurora_ptos_delimitacion= wmsGeoserverLayers('ypl_pot_aurora_ptos_delimitacion',7);
export var ypl_pot_aurora_ptos_topo= wmsGeoserverLayers('ypl_pot_aurora_ptos_topo',7);
export var ypl_pot_aurora_sitios_interes= wmsGeoserverLayers('ypl_pot_aurora_sitios_interes',7);
export var ypl_pot_aurora_vias_rurales= wmsGeoserverLayers('ypl_pot_aurora_vias_rurales',7);
export var ypl_pot_caste_acueducto= wmsGeoserverLayers('ypl_pot_caste_acueducto',7);
export var ypl_pot_caste_alcantarillado= wmsGeoserverLayers('ypl_pot_caste_alcantarillado',7);
export var ypl_pot_caste_cano= wmsGeoserverLayers('ypl_pot_caste_cano',7);
export var ypl_pot_caste_cargas_urb= wmsGeoserverLayers('ypl_pot_caste_cargas_urb',7);
export var ypl_pot_caste_clas_vias= wmsGeoserverLayers('ypl_pot_caste_clas_vias',7);
export var ypl_pot_caste_curvas_de_nivel2= wmsGeoserverLayers('ypl_pot_caste_curvas_de_nivel2',7);
export var ypl_pot_caste_limite_pp= wmsGeoserverLayers('ypl_pot_caste_limite_pp',7);
export var ypl_pot_caste_limite_predio= wmsGeoserverLayers('ypl_pot_caste_limite_predio',7);
export var ypl_pot_caste_localizacion_ptap= wmsGeoserverLayers('ypl_pot_caste_localizacion_ptap',7);
export var ypl_pot_caste_localizacion_ptar= wmsGeoserverLayers('ypl_pot_caste_localizacion_ptar',7);
export var ypl_pot_caste_paramento_manz= wmsGeoserverLayers('ypl_pot_caste_paramento_manz',7);
export var ypl_pot_caste_pendientes= wmsGeoserverLayers('ypl_pot_caste_pendientes',7);
export var ypl_pot_caste_perfiles_terreno= wmsGeoserverLayers('ypl_pot_caste_perfiles_terreno',7);
export var ypl_pot_caste_predios_pp= wmsGeoserverLayers('ypl_pot_caste_predios_pp',7);
export var ypl_pot_caste_prop_urbana= wmsGeoserverLayers('ypl_pot_caste_prop_urbana',7);
export var ypl_pot_caste_prop_urbana_areas2= wmsGeoserverLayers('ypl_pot_caste_prop_urbana_areas2',7);
export var ypl_pot_caste_ptos_delimitacion_pp= wmsGeoserverLayers('ypl_pot_caste_ptos_delimitacion_pp',7);
export var ypl_pot_caste_ronda_cano= wmsGeoserverLayers('ypl_pot_caste_ronda_cano',7);
export var ypl_pot_caste_terreno_castellana_surfacesl= wmsGeoserverLayers('ypl_pot_caste_terreno_castellana_surfacesl',7);
export var ypl_pot_caste_uso_prop= wmsGeoserverLayers('ypl_pot_caste_uso_prop',7);
export var ypl_pot_caste_vias_actuales= wmsGeoserverLayers('ypl_pot_caste_vias_actuales',7);
export var ypl_pot_llano_8_unidades_de_gestion= wmsGeoserverLayers('ypl_pot_llano_8_unidades_de_gestion',7);
export var ypl_pot_llano_areas_de_manejo_ambiental= wmsGeoserverLayers('ypl_pot_llano_areas_de_manejo_ambiental',7);
export var ypl_pot_llano_bosques= wmsGeoserverLayers('ypl_pot_llano_bosques',7);
export var ypl_pot_llano_bufer= wmsGeoserverLayers('ypl_pot_llano_bufer',7);
export var ypl_pot_llano_cano= wmsGeoserverLayers('ypl_pot_llano_cano',7);
export var ypl_pot_llano_cober_ult= wmsGeoserverLayers('ypl_pot_llano_cober_ult',7);
export var ypl_pot_llano_construccion= wmsGeoserverLayers('ypl_pot_llano_construccion',7);
export var ypl_pot_llano_curvas_de_nivel= wmsGeoserverLayers('ypl_pot_llano_curvas_de_nivel',7);
export var ypl_pot_llano_diseno_acueductos_pp= wmsGeoserverLayers('ypl_pot_llano_diseno acueductos-pp',7);///////////////////////////////
export var ypl_pot_llano_diseno_alc_aguas_lluvias_p_p= wmsGeoserverLayers('ypl_pot_llano_diseno alc.aguas lluvias-p.p',7);//////////////////////////
export var ypl_pot_llano_diseno_alc_aguas_negras_p_p= wmsGeoserverLayers('ypl_pot_llano_diseno alc.aguas negras-p.p',7);//////////////////////////
export var ypl_pot_llano_ejes_viales= wmsGeoserverLayers('ypl_pot_llano_ejes_viales',7);
export var ypl_pot_llano_geologia= wmsGeoserverLayers('ypl_pot_llano_geologia',7);
export var ypl_pot_llano_geomorfologia= wmsGeoserverLayers('ypl_pot_llano_geomorfologia',7);
export var ypl_pot_llano_limite_plan= wmsGeoserverLayers('ypl_pot_llano_limite_plan',7);
export var ypl_pot_llano_nomenclatura= wmsGeoserverLayers('ypl_pot_llano_nomenclatura',7);
export var ypl_pot_llano_predios_pp= wmsGeoserverLayers('ypl_pot_llano_predios_pp',7);
export var ypl_pot_llano_proetcion= wmsGeoserverLayers('ypl_pot_llano_proetcion',7);
export var ypl_pot_llano_propuesta_urb= wmsGeoserverLayers('ypl_pot_llano_propuesta_urb',7);
export var ypl_pot_llano_propuesta_urb1= wmsGeoserverLayers('ypl_pot_llano_propuesta_urb1',7);
export var ypl_pot_llano_ronda_proteccion= wmsGeoserverLayers('ypl_pot_llano_ronda_proteccion',7);
export var ypl_pot_llano_sector_cri_inun= wmsGeoserverLayers('ypl_pot_llano_sector_cri_inun',7);
export var ypl_pot_llano_sistemas_grales= wmsGeoserverLayers('ypl_pot_llano_sistemas_grales',7);
export var ypl_pot_llano_suelos_= wmsGeoserverLayers('ypl_pot_llano_suelos_',7);
export var ypl_pot_llano_uso_modif= wmsGeoserverLayers('ypl_pot_llano_uso_modif',7);
export var ypl_pot_llano_vias= wmsGeoserverLayers('ypl_pot_llano_vias',7);
export var ypl_pot_llano_vias_pot= wmsGeoserverLayers('ypl_pot_llano_vias_pot',7);
export var ypl_pot_llano_zma= wmsGeoserverLayers('ypl_pot_llano_zma',7);
export var ypl_pot_manoa_ciudad_manoa_perimetro= wmsGeoserverLayers('ypl_pot_manoa_ciudad_manoa_perimetro',7);
export var ypl_pot_manoa_puntos_de_coordenadas= wmsGeoserverLayers('ypl_pot_manoa_puntos_de_coordenadas',7);
export var ypl_pot_manoa_usos= wmsGeoserverLayers('ypl_pot_manoa_usos',7);
export var ypl_pot_mata_delimitacion= wmsGeoserverLayers('ypl_pot_mata_delimitacion',7);
export var ypl_pot_mata_limite_pp_matalarga= wmsGeoserverLayers('ypl_pot_mata_limite_pp_matalarga',7);
export var ypl_pot_mata_predial= wmsGeoserverLayers('ypl_pot_mata_predial',7);
export var ypl_pot_mata_topofinal= wmsGeoserverLayers('ypl_pot_mata_topofinal',7);
export var ypl_pot_mata_usos= wmsGeoserverLayers('ypl_pot_mata_usos',7);
export var ypl_pot_palma_limite_palmarito= wmsGeoserverLayers('ypl_pot_palma_limite_palmarito',7);
export var ypl_pot_rivarca_getsemani= wmsGeoserverLayers('ypl_pot_rivarca_getsemani',7);
export var ypl_pot_rivarca_getsemani_predio= wmsGeoserverLayers('ypl_pot_rivarca_getsemani_predio',7);
export var ypl_pot_sanp_limite_san_pablo_polig= wmsGeoserverLayers('ypl_pot_sanp_limite_san_pablo_polig',7);

export var zun_yopal= wmsGeoserverLayers('zun_yopal',7);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// on click do something
export var recorrido360 = recorrido;
export var predios=prediosCatastro
export var wfs_point = wfs_capture;


// // Create layers instances
//interactive layers
// predio
export var highlightPredio = new L.geoJson(null, {style: polygon_style('green')});

//barrio
export var highlightBarrio = new L.geoJson(null, {style: polygon_style('blue')});

// mupio selection on table
export var highlightLayer = new L.geoJson(null, {style: polygon_style('green')});

export var highlightLayerRemove =()=>{highlightLayer.clearLayers()}   
export var highlightLayerAdd =(feature)=>{highlightLayer.addData(feature)}   

export var layerRemove =(layer)=>{layer.clearLayers()}   
export var layerAdd =(feature,layer)=>{layer.addData(feature)}   

// mupio table on
//interactive layers info table

// function geojsonTable() {
// 	let tableJson=wfsSearch(GEOSERVER_STORE+':capture_nomenclatura')
// 	return tableJson
// } 

// export var geojsonInfo=null;

export var tableLayer=(data,filter,onEachFeature)=> new L.geoJson(data,{ 
	style:point_style('green'),
	filter:filter,
	onEachFeature:onEachFeature
	}
);


// draw feature
export var selectItems = new L.FeatureGroup();
export var drawnItems = new L.FeatureGroup();
export var drawnServer = new L.FeatureGroup();

//searchlayer
export var searchLayer = L.geoJson(null, {style: {fillOpacity: 0, color:'0'}});

export var addDataToLayer=(data)=>{
	searchLayer.addData(data)
}

// stadistics layers
export var predios_rurales_urbanos= wmsGeoserverLayers('predios_rurales_urbanos',7);
export var predios_destinacion_economica_16= wmsGeoserverLayers('predios_destinacion_economica_16',7);
