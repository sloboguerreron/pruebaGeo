import '../../../assets/lib_modified/leaflet-control-layers-tree/L.Control.Layers.Tree'

import {zun_yopal,wfs_point,standard_osm,carto_light,hikebike,esri_worldtopomap,esri_worldimagery,
        cartoDB_voyager,mapa_base, perimetro_urbano,perimetro_rural,barrio,
        predios,construccion,recorrido360,u_nomenclatura_domiciliaria,
        ypl_pot_estaciones,ypl_pot_estaciones_precipitaciones,ypl_pot_estaciones_temperatura,
        ypl_pot_isoterma, ypl_pot_isoyeta,ypl_pot_nuevas_estaciones4,
        ypl_pot_unidades_clima,ypl_pot_aeropuerto,ypl_pot_perimetro_urbano,
        ypl_pot_predial_yopal,ypl_pot_usos_propuestos, u_nomenclatura_vial,
        ypl_pot_aislamiento_lagunas_project,ypl_pot_banco_de_arena,ypl_pot_cuencas,
        ypl_pot_drenaje_doble,ypl_pot_drenaje_sencillo,ypl_pot_lagos,ypl_pot_islas,
        ypl_pot_lagunas_de_oxidacion,ypl_pot_lagunasoxida1000metros,ypl_pot_amenazas_inundacion,
        ypl_pot_nuevas_estaciones3,ypl_pot_rio_doble,ypl_pot_bosques, ypl_pot_bosques_riparios,
        ypl_pot_canos,ypl_pot_canos_rurales, ypl_pot_cerros, ypl_pot_parque_laiguana,ypl_pot_pnr_la_tablona,
        ypl_pot_predios_adquiridos, ypl_pot_ronda100, ypl_pot_ronda200, ypl_pot_avenidas_torrencialesdef,
        ypl_pot_inundacion, ypl_pot_remocion, ypl_pot_ronda30b, ypl_pot_ronda50_niata, ypl_pot_canteras_lari,
        ypl_pot_centro_relleno, ypl_pot_equipamientos_amenaza, ypl_pot_perencogeo, ypl_pot_planchas_25000,
        ypl_pot_sitios_gorefenenciados, ypl_pot_division_veredal, ypl_pot_limiter_2012, ypl_pot_veredas_formulacion,
        ypl_pot_carburos, ypl_pot_corredoresequion_noconstruidos, ypl_pot_infraestructuras,
        ypl_pot_lineasdeflujoexistente, ypl_pot_lineasdeflujoproyectadaequion, ypl_pot_citygates_tgi_clip_yopal_1,
        ypl_pot_municipios_tgi_select_yopal_1, ypl_pot_pks_tgi_clip_yopal_1, ypl_pot_red_tgi_v10_clip_yopal_1,
        ypl_pot_trampas_tgi_clip_yopal_1, ypl_pot_veredas_tgi_select_yopal_1, ypl_pot_oleoducto,
        ypl_pot_anillos_viales, ypl_pot_nom_vias_proyectadas, ypl_pot_vias, ypl_pot_vias_exp,
        ypl_pot_vias_proyect_periurb_ppales, ypl_pot_vias_rural, ypl_pot_viascopy, ypl_pot_cuevas400,
        ypl_pot_curva1000, ypl_pot_curvas,  ypl_pot_cobertura, ypl_pot_deslizamientos, ypl_pot_formas,
        ypl_pot_geologia, ypl_pot_geomorfologia, ypl_pot_socavamientos, ypl_pot_conflictos,
        ypl_pot_aeas_influencia_euip_alto_impacto, ypl_pot_areas_amortuguacion, ypl_pot_at,
        ypl_pot_ejesregionales, ypl_pot_petroleo_proyectado, ypl_pot_suelos, ypl_pot_suelos_potencial,
        ypl_pot_zonificacion_rural,ypl_pot_areas_plan_maestro2, ypl_pot_modelacion_ruido_ldn,ypl_pot_obstaculos_aeronavegacion,
        ypl_pot_pista_aeropuerto, ypl_pot_a_torreurbna, ypl_pot_parques, ypl_pot_parques_2020,
        ypl_pot_ronda, ypl_pot_cementerio_mpal,ypl_pot_estacionesdeserviciourbanas, ypl_pot_paramento,
        ypl_pot_plazademercado,ypl_pot_sitios_interes_shp, ypl_pot_barrios, ypl_pot_limitecomunas,ypl_pot_perimetro_diagnosticodef,
        ypl_pot_perimetro_formulacion, ypl_pot_periurb_cp_pbot, ypl_pot_ptos_perimetro_urbano2,ypl_pot_ptos_suelo_expansion_urb,
        ypl_pot_suelo_expansion_urb,ypl_pot_zonas,  ypl_pot_ciclocarriles, ypl_pot_estacionamientos,
        ypl_pot_jerarquia_vial, ypl_pot_malla_vial, ypl_pot_paraderos, ypl_pot_parqueaderos,
        ypl_pot_rutas, ypl_pot_variante_marginal, ypl_pot_toponimia, ypl_pot_comercial, ypl_pot_dotacional,
        ypl_pot_mixto, ypl_pot_resicencial,ypl_pot_areas_de_act, ypl_pot_clasif_suelo2007,ypl_pot_tratamientos_urb,
        r_construccion, r_nomenclatura_domiciliaria, r_sector, r_terreno, r_unidad, r_vereda,u_construccion,
        u_manzana, u_perimetro, u_sector, u_terreno, u_unidad, ypl_pot_top_predio_b_achagua, ypl_pot_urb_general_b_achagua,
        ypl_pot_canaguate, ypl_pot_canaguate_puntos,  ypl_pot_perimetros_centros_poblados,  ypl_pot_ptos_perimetro_cp_chaparrera,
        ypl_pot_ptos_perimetro_cp_guafilla, ypl_pot_ptos_perimetro_cp_morro,ypl_pot_ptos_perimetro_cp_niata,
        ypl_pot_ptos_perimetro_cp_puntonuevo, ypl_pot_ptos_perimetro_cp_quebradaseca,  ypl_pot_ptos_perimetro_cp_tilodiran,
        ypl_pot_morich_u_acueducto, ypl_pot_morich_u_alcantarillado_m, ypl_pot_morich_u_alcantarillado_jose_gonzalez,
        ypl_pot_morich_u_alcantarillado, ypl_pot_morich_u_amenazas, ypl_pot_morich_u_barrios, ypl_pot_morich_u_base,
        ypl_pot_morich_curvas_morichal, ypl_pot_morich_u_electricas, ypl_pot_morich_u_emisario_final,
        ypl_pot_morich_u_equipamietos, ypl_pot_morich_u_esp_publ,  ypl_pot_morich_u_expansion,  ypl_pot_morich_u_hidrografia,
        ypl_pot_morich_u_linderos_jose_gonzalez, ypl_pot_morich_u_lotes_jose_gonzalez, ypl_pot_morich_moricahal_cor,
        ypl_pot_morich_u_paramento_manz,  ypl_pot_morich_u_perimetro_urbano_cp_morichal,  ypl_pot_morich_u_perimetro,
        ypl_pot_morich_u_perimetro_area_desarrollo, ypl_pot_morich_u_placemarks_polygon,ypl_pot_morich_predial_rural,
        ypl_pot_morich_u_predios, ypl_pot_morich_u_prop_urbana, ypl_pot_ptos_perimetro_cp_morichal,
        ypl_pot_morich_u_puntos_, ypl_pot_morich_u_puntos_perimetro_adesarrollo, ypl_pot_morich_u_sist_vial,
        ypl_pot_morich_u_topografia, ypl_pot_morich_u_tratamientos_del_suelo, ypl_pot_morich_u_trazado_red_de_acueducto,
        ypl_pot_morich_u_urbanistico,  ypl_pot_morich_u_usivar, ypl_pot_morich_u_uso_del_suelo,ypl_pot_morich_u_uso_propuesto,
        ypl_pot_morich_u_uso_actual,  ypl_pot_morich_u_vegetacio, ypl_pot_morich_veredas,
        ypl_pot_morich_u_vias,   ypl_pot_morich_vias, ypl_pot_morich_u_vias_pro, ypl_pot_curvas_brazo_del_rio,
        ypl_pot_curvas_chaparral,  ypl_pot_curvas_cravo_sur, ypl_pot_curvas_deslizamiento_en_roca, ypl_pot_curvas_dz2,
        ypl_pot_curvas_dz3, ypl_pot_curvas_morro_2, ypl_pot_curvas_morro1,  ypl_pot_curvas_dz4,ypl_pot_curvas_planta_rio,
        ypl_pot_planes_parciales,  ypl_pot_aurora_alcantarillado_propuesto,  ypl_pot_aurora_arbolado, ypl_pot_aurora_cercas,
        ypl_pot_aurora_curvas, ypl_pot_aurora_escorrentia, ypl_pot_aurora_limite_pp_aurora,ypl_pot_aurora_perfiles2,
        ypl_pot_aurora_predios_pp_aurora, ypl_pot_aurora_propuesta_urbana,  ypl_pot_aurora_propuesta_urbana2,
        ypl_pot_aurora_propuesta_urbana3, ypl_pot_aurora_propuesta_urbana4,  ypl_pot_aurora_propuesta_urbana5,
        ypl_pot_aurora_propuesta_urbana6, ypl_pot_aurora_ptos_delimitacion, ypl_pot_aurora_ptos_topo,ypl_pot_aurora_sitios_interes,
        ypl_pot_aurora_vias_rurales,  ypl_pot_caste_acueducto, ypl_pot_caste_alcantarillado,ypl_pot_caste_cano,
        ypl_pot_caste_cargas_urb, ypl_pot_caste_clas_vias, ypl_pot_caste_curvas_de_nivel2,ypl_pot_caste_limite_pp,
        ypl_pot_caste_limite_predio, ypl_pot_caste_localizacion_ptap,  ypl_pot_caste_localizacion_ptar, ypl_pot_caste_paramento_manz,
        ypl_pot_caste_pendientes, ypl_pot_caste_perfiles_terreno, ypl_pot_caste_predios_pp,ypl_pot_caste_prop_urbana,
        ypl_pot_caste_prop_urbana_areas2,  ypl_pot_caste_ptos_delimitacion_pp, ypl_pot_caste_ronda_cano,ypl_pot_caste_terreno_castellana_surfacesl,
        ypl_pot_caste_uso_prop,  ypl_pot_caste_vias_actuales, ypl_pot_llano_8_unidades_de_gestion, ypl_pot_llano_areas_de_manejo_ambiental,
        ypl_pot_llano_bosques, ypl_pot_llano_bufer, ypl_pot_llano_cano, ypl_pot_llano_cober_ult, ypl_pot_llano_construccion,
        ypl_pot_llano_curvas_de_nivel, ypl_pot_llano_diseno_acueductos_pp, ypl_pot_llano_diseno_alc_aguas_lluvias_p_p,
        ypl_pot_llano_diseno_alc_aguas_negras_p_p, ypl_pot_llano_ejes_viales,  ypl_pot_llano_geologia, ypl_pot_llano_geomorfologia,
        ypl_pot_llano_limite_plan, ypl_pot_llano_nomenclatura, ypl_pot_llano_predios_pp, ypl_pot_llano_proetcion,
        ypl_pot_llano_propuesta_urb, ypl_pot_llano_propuesta_urb1,  ypl_pot_llano_ronda_proteccion, ypl_pot_llano_sector_cri_inun,
        ypl_pot_llano_sistemas_grales,ypl_pot_llano_suelos_,  ypl_pot_llano_uso_modif, ypl_pot_llano_vias,
        ypl_pot_llano_vias_pot, ypl_pot_llano_zma,ypl_pot_manoa_ciudad_manoa_perimetro, ypl_pot_manoa_puntos_de_coordenadas,
        ypl_pot_manoa_usos, ypl_pot_mata_delimitacion,ypl_pot_mata_limite_pp_matalarga, ypl_pot_mata_predial,
        ypl_pot_mata_topofinal,  ypl_pot_mata_usos, ypl_pot_palma_limite_palmarito, ypl_pot_rivarca_getsemani,   ypl_pot_rivarca_getsemani_predio,
        ypl_pot_sanp_limite_san_pablo_polig

    } from '../layers/control-layers'
import {addToMap,removeToMap} from '../map'
const L =require ('leaflet');

export var custom_layers = {
    label: 'Capas Personalizadas',
    selectAllCheckbox: false,
    children: []
}


// Mapas base 
var baseTree = {
    label: 'Capas base',
    selectAllCheckbox: false,
    children: [
        {
            label: 'Openstreet',
            selectAllCheckbox: false,
            children: [
                
                {label: 'Ortofoto', layer: mapa_base, name: 'mapa_base'},
                {label: 'Mapa estandar', layer: standard_osm, name: 'streets'},
                {label: 'Mapa Light', layer: carto_light, name: 'carto_light'},
                {label: 'Mapa hikebike', layer: hikebike, name: 'hikebike'},
                {label: 'Mapa Esri Worldtopomap', layer: esri_worldtopomap, name: 'esri_worldtopomap'},
                {label: 'Mapa CartoDB voyager', layer: cartoDB_voyager, name: 'cartoDB_voyager'},
                {label: 'Mapa Esri Worldimagery', layer: esri_worldimagery, name: 'esri_worldimagery'},
                
            ]
        },
        // {
        //     label: 'Bing',
        //     children: [
        //         {label: 'Satelital', layer: aerial, name: 'aerial'},
        //         {label: 'Canvas Oscuro', layer: canvas_dark, name: 'canvas_dark'},
        //         {label: 'Vias', layer: road, name: 'road'},
        //     ]
        // },
        // {
        //     label: 'Fuentes propias',
        //     children: [
        //         {label: 'Ortofoto', layer: mapa_base, name: 'mapa_base_amco'},
        //     ]
        // },
    ]
};

// capas base
var capas = {
    label: 'Capas',
    selectAllCheckbox: true,
    children: [
        // zonas de nomenclatura
        {   label:'Zonas de nomenclatura',
            layer:zun_yopal
        },
        {   
            label: 'Cartograf??a Rural',
            selectAllCheckbox: true,
            children: [
                {label: 'Predios', layer: predios},
                {label:'Ambiental',children:[
                    {label:'Sistema H??drico',children: [
                        
                        {label:'Aislamiento lagunas',layer:ypl_pot_aislamiento_lagunas_project},
                        {label:'Banco de arena',layer:ypl_pot_banco_de_arena},
                        {label:'Cuencas',layer:ypl_pot_cuencas},
                        {label:'Drenaje doble',layer:ypl_pot_drenaje_doble},
                        {label:'Drenaje sencillo',layer:ypl_pot_drenaje_sencillo},
                        {label:'Islas',layer:ypl_pot_islas},
                        {label:'Lagos',layer:ypl_pot_lagos},
                        {label:'Lagunas de oxidaci??n',layer:ypl_pot_lagunas_de_oxidacion},
                        {label:'Lagunas de oxidaci??n ??rea afectaci??n 1000mts',layer:ypl_pot_lagunasoxida1000metros},
                        {label:'R??o doble',layer:ypl_pot_rio_doble},
                        
                    ]},

                    {label:'Riesgo y Amenaza', children:[
                        {label:'Amenaza inundaci??n ',layer:ypl_pot_amenazas_inundacion},
                        {label:'Amenaza avenidas torrenciales',layer:ypl_pot_avenidas_torrencialesdef},
                        {label:'Amenaza inundaci??n',layer:ypl_pot_inundacion},
                        {label:'Amenaza remoaci??n en masa',layer:ypl_pot_remocion},

                    ]},

                    {label:'Clima',children:[
                        {label:'Estaciones Precipitacion',layer:ypl_pot_estaciones_precipitaciones},
                        {label:'Estaciones temperatura',layer:ypl_pot_estaciones_temperatura},
                        {label:'Estaciones de monitoreo',layer:ypl_pot_estaciones},
                        {label:'Isoterma',layer:ypl_pot_isoterma},
                        {label:'Isoyeta',layer:ypl_pot_isoyeta},
                        {label:'Nuevas estaciones de monitoreo',layer:ypl_pot_nuevas_estaciones3},
                        {label:'Unidades clima',layer:ypl_pot_unidades_clima},
                    ]},

                    {label:'Estructura Ecol??gica', children:[
                        {label:'Bosques',layer:ypl_pot_bosques},
                        {label:'Bosques riparios',layer:ypl_pot_bosques_riparios},
                        {label:'Ca??os',layer:ypl_pot_canos},
                        {label:'Ca??os rurales',layer:ypl_pot_canos_rurales},
                        {label:'Cerros',layer:ypl_pot_cerros},
                        {label:'Parque La Iguana',layer:ypl_pot_parque_laiguana},
                        {label:'Reserva forestal protectora de La Tablona',layer:ypl_pot_pnr_la_tablona},
                        {label:'Predios adquiridos',layer:ypl_pot_predios_adquiridos},
                        {label:'Ronda r??o zona de afectaci??n 100mts',layer:ypl_pot_ronda100},
                        {label:'Ronda r??o zona de afectaci??n 200mts',layer:ypl_pot_ronda200},
                        {label:'Ronda ??rea de afectaci??n 30mts',layer:ypl_pot_ronda30b},
                        {label:'Ronda La Niata',layer:ypl_pot_ronda50_niata},

                        
                    ]},
                    
                ]},

                {label:'Cartograf??a Base', children:[
                    {label:'Canteras lari',layer:ypl_pot_canteras_lari},
                    {label:'Centro relleno',layer:ypl_pot_centro_relleno},
                    {label:'Equipamientos amenaza',layer:ypl_pot_equipamientos_amenaza},
                    {label:'Puntos Perenco georreferenciados',layer:ypl_pot_perencogeo},
                    {label:'Planchas catastrales escala 25.000',layer:ypl_pot_planchas_25000},
                    {label:'Sitios georreferenciados',layer:ypl_pot_sitios_gorefenenciados},

                ]},

                {label:'Divisi??n Pol??tica y administrativa', children:[
                    {label:'Divisi??n veredal',layer:ypl_pot_division_veredal},
                    {label:'L??mite rural 2012',layer:ypl_pot_limiter_2012},
                    {label:'Veredas formulaci??n',layer:ypl_pot_veredas_formulacion},
                ]},

                {label:'Hidrocarburos',children:[
                    {label:'TGI',children:[
                        {label:'Citygates tgi',layer:ypl_pot_citygates_tgi_clip_yopal_1},
                        {label:'Municipios tgi',layer:ypl_pot_municipios_tgi_select_yopal_1},
                        {label:'pks tgi',layer:ypl_pot_pks_tgi_clip_yopal_1},
                        {label:'Red tgi',layer:ypl_pot_red_tgi_v10_clip_yopal_1},
                        {label:'Trampas tgi',layer:ypl_pot_trampas_tgi_clip_yopal_1},
                        {label:'Veredas tgi',layer:ypl_pot_veredas_tgi_select_yopal_1},
                    ]},
                    {label:'Carburos',layer:ypl_pot_carburos},
                    {label:'Corredores Equion no construidos',layer:ypl_pot_corredoresequion_noconstruidos},
                    {label:'Infraestructuras',layer:ypl_pot_infraestructuras},
                    {label:'L??neas de flujo existente',layer:ypl_pot_lineasdeflujoexistente},
                    {label:'L??neas de flujo proyectadas Equion',layer:ypl_pot_lineasdeflujoproyectadaequion},                   
                    {label:'Oleoducto',layer:ypl_pot_oleoducto},
                ]},

                {label:'Movilidad',children:[
                    {label:'Anillos viales',layer:ypl_pot_anillos_viales},
                    {label:'V??as proyectadas',layer:ypl_pot_nom_vias_proyectadas},
                    {label:'V??as',layer:ypl_pot_vias},
                    {label:'V??as expansi??n',layer:ypl_pot_vias_exp},
                    {label:'Per??emtro urbano planes parciales',layer:ypl_pot_vias_proyect_periurb_ppales},
                    {label:'V??as rurales',layer:ypl_pot_vias_rural},
                    {label:'V??as expansi??n l??nea',layer:ypl_pot_viascopy},
                ]},

                {label:'Topograf??a',children:[
                    {label:'Curvas de nivel cada 400m',layer:ypl_pot_cuevas400},
                    {label:'Curvas de nivel cada 1.000mts',layer:ypl_pot_curva1000},
                    {label:'Curvas de nivel',layer:ypl_pot_curvas},
                ]},

                {label:'Uso y cobertura del suelo',children:[
                    {label:'Coberturas',children:[
                        {label:'Cobertura',layer:ypl_pot_cobertura},
                    ]},
                    {label:'Geomorfolog??a',children:[                        
                        {label:'Deslizamientos',layer:ypl_pot_deslizamientos},
                        {label:'Formas',layer:ypl_pot_formas},
                        {label:'Geolog??a',layer:ypl_pot_geologia},
                        {label:'Geomorfolog??a',layer:ypl_pot_geomorfologia},
                        {label:'Socavamientos',layer:ypl_pot_socavamientos},
                    ]},
                    {label:'Uso del Suelo',children:[
                        {label:'Conflictos del suelo',layer:ypl_pot_conflictos},
                    ]},

                ]},

                {label:'Zonificaci??n del suelo ', children:[
                    {label:'??reas de influencia equipamientos alto impacto',layer:ypl_pot_aeas_influencia_euip_alto_impacto},
                    {label:'??reas amortiguaci??n',layer:ypl_pot_areas_amortuguacion},
                    {label:'??reas tur??sticas',layer:ypl_pot_at},
                    {label:'Ejes regionales',layer:ypl_pot_ejesregionales},
                    {label:'Petroleo proyectado',layer:ypl_pot_petroleo_proyectado},
                    {label:'Suelos',layer:ypl_pot_suelos},
                    {label:'Potencial suelos',layer:ypl_pot_suelos_potencial},
                    {label:'Zonificaci??n rural',layer:ypl_pot_zonificacion_rural},
                ]},


                // {label: 'Perimetro Urbano', layer: perimetro_urbano},
                // {label: 'Perimetro Rural', layer: perimetro_rural},
                // // {label: 'Barrios', layer: barrio},
                
                // {label: 'Construcciones', layer: construccion},
                // {label: 'Nomenclatura domiciliaria', layer: u_nomenclatura_domiciliaria}

            ]
        },
        {   label: 'Cartograf??a Urbano',
            selectAllCheckbox: true,
            children: [
                {label:'Aerocivil',children:[
                    {label:'Aeropuerto',layer:ypl_pot_aeropuerto},
                    {label:'??reas plan maestro',layer:ypl_pot_areas_plan_maestro2},
                    {label:'Modelaci??n ruido ldn',layer:ypl_pot_modelacion_ruido_ldn},
                    {label:'Obst??culos aeronavegaci??n',layer:ypl_pot_obstaculos_aeronavegacion},
                    {label:'Pista aeropuerto',layer:ypl_pot_pista_aeropuerto},
                ]},

                {label:'Ambiental',children:[
                    {label:'Riesgo y Amenaza',children:[
                        {label:'Avenida torrencial urbana',layer:ypl_pot_a_torreurbna},
                    ]},
                    {label:'Estructura Ecol??gica',children:[
                        {label:'Parques',layer:ypl_pot_parques},
                        {label:'Parques 2020',layer:ypl_pot_parques_2020},
                        {label:'Ronda r??o',layer:ypl_pot_ronda},
                    ]},
                ]},
                {label:'Cartograf??a base',children:[
                    {label:'Cementerio municipal',layer:ypl_pot_cementerio_mpal},
                    {label:'Estaciones de servicio urbanas',layer:ypl_pot_estacionesdeserviciourbanas},
                    {label:'Paramento',layer:ypl_pot_paramento},
                    {label:'Plaza de mercado',layer:ypl_pot_plazademercado},
                    {label:'Sitios inter??s',layer:ypl_pot_sitios_interes_shp},
                ]},
                {label:'Divisi??n Pol??tica y administrativa',children:[
                    {label:'Barrios',layer:ypl_pot_barrios},
                    {label:'L??mite comunas',layer:ypl_pot_limitecomunas},
                    {label:'Per??metro diagn??stico',layer:ypl_pot_perimetro_diagnosticodef},
                    {label:'Per??metro formulaci??n',layer:ypl_pot_perimetro_formulacion},
                    {label:'Per??metro urbano',layer:ypl_pot_perimetro_urbano},
                    {label:'Per??metro urbano centros poblados',layer:ypl_pot_periurb_cp_pbot},
                    {label:'Per??metro urbano',layer:ypl_pot_ptos_perimetro_urbano2},
                    {label:'Suelo expansi??n urbana',layer:ypl_pot_ptos_suelo_expansion_urb},
                    {label:'Suelo expansi??n urbana',layer:ypl_pot_suelo_expansion_urb},
                    {label:'Zonas',layer:ypl_pot_zonas},
                ]},
                {label:'Movilidad',children:[
                    {label:'Ciclocarriles',layer:ypl_pot_ciclocarriles},
                    {label:'Estacionamientos',layer:ypl_pot_estacionamientos},
                    {label:'Jerarqu??a vial',layer:ypl_pot_jerarquia_vial},
                    {label:'Malla vial',layer:ypl_pot_malla_vial},
                    {label:'Paraderos',layer:ypl_pot_paraderos},
                    {label:'Parqueaderos',layer:ypl_pot_parqueaderos},
                    {label:'Rutas',layer:ypl_pot_rutas},
                    {label:'Variante Marginal',layer:ypl_pot_variante_marginal},
                ]},
                {label:'Toponimia',children:[
                    {label:'Tiopon??mia',layer:ypl_pot_toponimia},
                ]},
                {label:'Uso y cobertura del suelo',children:[
                        {label:'Uso y cobertura del suelo',children:[
                            {label:'Uso comercial',layer:ypl_pot_comercial},
                            {label:'Uso dotacional',layer:ypl_pot_dotacional},
                            {label:'Uso mixto',layer:ypl_pot_mixto},
                            {label:'Uso residencial',layer:ypl_pot_resicencial},
                            {label:'Usos propuestos',layer:ypl_pot_usos_propuestos},
                        ]},
                ]},
                {label:'Zonificaci??n del suelo ',children:[
                    {label:'??reas de actuaci??n',layer:ypl_pot_areas_de_act},
                    {label:'Clasificai??n del suelo 2007',layer:ypl_pot_clasif_suelo2007},
                    {label:'Tratmientos urbanos',layer:ypl_pot_tratamientos_urb},
                ]},

                
            ]
        },

        {   label:'Catastro',
            selectAllCheckbox:true,
            children:[
                {label:'Catastro Rural',children:[
                    {label:'Construcciones ',layer:r_construccion},
                    {label:'Nomenclatura domiciliaria',layer:r_nomenclatura_domiciliaria},
                    {label:'Sectores ',layer:r_sector},
                    {label:'Terreno',layer:r_terreno},
                    {label:'Unidad',layer:r_unidad},
                    {label:'Veredas',layer:r_vereda},
                ]},
                {label:'Catastro Urbano',children:[
                    {label:'Predial Yopal',layer:ypl_pot_predial_yopal},
                    {label:'Construcciones ',layer:u_construccion},
                    {label:'Manzanas',layer:u_manzana},
                    {label:'Nomenclatura domiciliaria',layer:u_nomenclatura_domiciliaria},
                    {label:'Nomenclatura vial',layer:u_nomenclatura_vial},
                    {label:'Per??metro',layer:u_perimetro},
                    {label:'Sectores ',layer:u_sector},
                    {label:'Terreno',layer:u_terreno},
                    {label:'Unidad',layer:u_unidad},
                ]},
            ]    
        },

        {   label:'Centros Poblados',
            selectAllCheckbox:true,
            children:[
                {label:'Bosques de Achagua', children:[
                    {label:'Predio Bosques de Achagua',layer:ypl_pot_top_predio_b_achagua},
                    {label:'Urbano general Bosques de Achagua',layer:ypl_pot_urb_general_b_achagua},
                ]},

                {label:'Ca??aguate II',children:[
                    {label:'Predio Ca??aguate II',layer:ypl_pot_canaguate},
                    {label:'Puntos l??mite predio Ca??aguate II',layer:ypl_pot_canaguate_puntos},
                ]},

                {label:'Divisi??n Pol??tica y administrativa',children:[
                    {label:'Per??metros centros poblados',layer:ypl_pot_perimetros_centros_poblados},
                    {label:'Puntos per??metro centro poblado Chaparrera',layer:ypl_pot_ptos_perimetro_cp_chaparrera},
                    {label:'Puntos per??metro centro poblado Guafilla',layer:ypl_pot_ptos_perimetro_cp_guafilla},
                    {label:'Puntos per??metro centro poblado Morro',layer:ypl_pot_ptos_perimetro_cp_morro},
                    {label:'Puntos per??metro centro poblado Niata',layer:ypl_pot_ptos_perimetro_cp_niata},
                    {label:'Puntos per??metro centro poblado Punto nuevo',layer:ypl_pot_ptos_perimetro_cp_puntonuevo},
                    {label:'Puntos per??metro centro poblado Quebradaseca',layer:ypl_pot_ptos_perimetro_cp_quebradaseca},
                    {label:'Puntos per??metro centro poblado Tilodiran',layer:ypl_pot_ptos_perimetro_cp_tilodiran},
                ]},

                {label:'Morichal',children:[
                    {label:'Rural',children:[
                        {label:'Crvas de nivel',layer:ypl_pot_morich_curvas_morichal},
                        {label:'L??mite',layer:ypl_pot_morich_moricahal_cor},
                        {label:'Predial rural',layer:ypl_pot_morich_predial_rural},
                        {label:'Veredas',layer:ypl_pot_morich_veredas},
                        {label:'V??as',layer:ypl_pot_morich_vias},
                    ]},
                    {label:'Urbano',children:[
                        {label:'Acueducto',layer:ypl_pot_morich_u_acueducto},
                        {label:'Alcantarillado ??rea desarrollo',layer:ypl_pot_morich_u_alcantarillado_m},
                        {label:'Alcantarillado Jose Gonz??lez',layer:ypl_pot_morich_u_alcantarillado_jose_gonzalez},
                        {label:'Alcantarillado',layer:ypl_pot_morich_u_alcantarillado},
                        {label:'Amenazas',layer:ypl_pot_morich_u_amenazas},
                        {label:'Barrios',layer:ypl_pot_morich_u_barrios},
                        {label:'Base',layer:ypl_pot_morich_u_base},
                        {label:'Red el??ctrica',layer:ypl_pot_morich_u_electricas},
                        {label:'Emisario ',layer:ypl_pot_morich_u_emisario_final},
                        {label:'Equipamientos',layer:ypl_pot_morich_u_equipamietos},
                        {label:'Espacio p??blico',layer:ypl_pot_morich_u_esp_publ},
                        {label:'??rea expansi??n',layer:ypl_pot_morich_u_expansion},
                        {label:'Hidrograf??a',layer:ypl_pot_morich_u_hidrografia},
                        {label:'Linderos Jose Gonz??lez',layer:ypl_pot_morich_u_linderos_jose_gonzalez},
                        {label:'Lotes Jose Gonz??lez',layer:ypl_pot_morich_u_lotes_jose_gonzalez},
                        {label:'Paramento manzana',layer:ypl_pot_morich_u_paramento_manz},
                        {label:'Per??metro urbano centro poblado Morichal',layer:ypl_pot_morich_u_perimetro_urbano_cp_morichal},
                        {label:'Per??metro urbano',layer:ypl_pot_morich_u_perimetro},
                        {label:'??rea desarrollo',layer:ypl_pot_morich_u_perimetro_area_desarrollo},
                        {label:'Pol??gono industrial',layer:ypl_pot_morich_u_placemarks_polygon},
                        {label:'Predios',layer:ypl_pot_morich_u_predios},
                        {label:'Propuesta urbana',layer:ypl_pot_morich_u_prop_urbana},
                        {label:'Puntos per??metro centro poblado Morichal',layer:ypl_pot_ptos_perimetro_cp_morichal},
                        {label:'Puntos l??mite',layer:ypl_pot_morich_u_puntos_},
                        {label:'Puntos per??metro ??rea desarrollo',layer:ypl_pot_morich_u_puntos_perimetro_adesarrollo},
                        {label:'Sistema vial',layer:ypl_pot_morich_u_sist_vial},
                        {label:'Topograf??a',layer:ypl_pot_morich_u_topografia},
                        {label:'Tratamientos del suelo',layer:ypl_pot_morich_u_tratamientos_del_suelo},
                        {label:'Red de acueducto',layer:ypl_pot_morich_u_trazado_red_de_acueducto},
                        {label:'Urban??stico',layer:ypl_pot_morich_u_urbanistico},
                        {label:'Ca??o Usivar',layer:ypl_pot_morich_u_usivar},
                        {label:'Uso del suelo',layer:ypl_pot_morich_u_uso_del_suelo},
                        {label:'Uso propuesto',layer:ypl_pot_morich_u_uso_propuesto},
                        {label:'Uso actual',layer:ypl_pot_morich_u_uso_actual},
                        {label:'Vegetaci??n',layer:ypl_pot_morich_u_vegetacio},
                        {label:'V??as',layer:ypl_pot_morich_u_vias},
                        {label:'V??as proyectadas',layer:ypl_pot_morich_u_vias_pro},
                    ]}
                ]},

                {label:'Topograf??a',children:[
                    {label:'Curvas de nivel Brazo del r??o',layer:ypl_pot_curvas_brazo_del_rio},
                    {label:'Curvas de nivel Chaparral',layer:ypl_pot_curvas_chaparral},
                    {label:'Curvas de nivel Cravo sur',layer:ypl_pot_curvas_cravo_sur},
                    {label:'Curvas de nivel Deslizamiento en roca',layer:ypl_pot_curvas_deslizamiento_en_roca},
                    {label:'Curvas de nivel deslizamiento antigua PTAR',layer:ypl_pot_curvas_dz2},
                    {label:'Curvas de nivel deslizamiento v??a Buena Vista',layer:ypl_pot_curvas_dz3},
                    {label:'Curvas de nivel El Morro 1',layer:ypl_pot_curvas_morro_2},
                    {label:'Curvas de nivel El Morro 2',layer:ypl_pot_curvas_morro1},
                    {label:'Curvas de nivel deslizamiento puente La Cabuya',layer:ypl_pot_curvas_dz4},
                    {label:'Curvas planta r??o',layer:ypl_pot_curvas_planta_rio},
                ]},

            ]
        },

        {   label:'Planes Parciales',
            selectAllCheckbox:true,
            children:[
                {label:'Divisi??n Pol??tica y administrativa',children:[
                    {label:'Planes parciales',layer:ypl_pot_planes_parciales},
                ]},

                {label:'Plan parcial La Aurora',children:[
                    {label:'Alcantarillado propuesto',layer:ypl_pot_aurora_alcantarillado_propuesto},
                    {label:'Arbolado',layer:ypl_pot_aurora_arbolado},
                    {label:'Cercas',layer:ypl_pot_aurora_cercas},
                    {label:'Curvas',layer:ypl_pot_aurora_curvas},
                    {label:'Escorrentia',layer:ypl_pot_aurora_escorrentia},
                    {label:'L??mite plan parcial',layer:ypl_pot_aurora_limite_pp_aurora},
                    {label:'Perfiles terreno',layer:ypl_pot_aurora_perfiles2},
                    {label:'Predios',layer:ypl_pot_aurora_predios_pp_aurora},
                    {label:'Cobertura',layer:ypl_pot_aurora_propuesta_urbana},
                    {label:'Tipo suelo',layer:ypl_pot_aurora_propuesta_urbana2},
                    {label:'Aprovechamiento',layer:ypl_pot_aurora_propuesta_urbana3},
                    {label:'Usos del suelo',layer:ypl_pot_aurora_propuesta_urbana4},
                    {label:'Alturas',layer:ypl_pot_aurora_propuesta_urbana5},
                    {label:'Unidades de gesti??n',layer:ypl_pot_aurora_propuesta_urbana6},
                    {label:'Puntos delimitaci??n plan parcial',layer:ypl_pot_aurora_ptos_delimitacion},
                    {label:'Puntos topogr??ficos superficie',layer:ypl_pot_aurora_ptos_topo},
                    {label:'Sitios de inter??s',layer:ypl_pot_aurora_sitios_interes},
                    {label:'V??as rurales',layer:ypl_pot_aurora_vias_rurales},
                ]},

                {label:'Plan parcial La Castellana',children:[
                    {label:'Acueducto',layer:ypl_pot_caste_acueducto},
                    {label:'Alcantarillado',layer:ypl_pot_caste_alcantarillado},
                    {label:'Ca??o',layer:ypl_pot_caste_cano},
                    {label:'Cargas urbn??sticas',layer:ypl_pot_caste_cargas_urb},
                    {label:'Clase v??as',layer:ypl_pot_caste_clas_vias},
                    {label:'Curvas de nivel',layer:ypl_pot_caste_curvas_de_nivel2},
                    {label:'L??mite plan parcial',layer:ypl_pot_caste_limite_pp},
                    {label:'L??mite predio',layer:ypl_pot_caste_limite_predio},
                    {label:'Localizaci??n PTAP',layer:ypl_pot_caste_localizacion_ptap},
                    {label:'Localizaci??n PTAR',layer:ypl_pot_caste_localizacion_ptar},
                    {label:'Paramento manzana',layer:ypl_pot_caste_paramento_manz},
                    {label:'Pendientes',layer:ypl_pot_caste_pendientes},
                    {label:'Perfiles terreno',layer:ypl_pot_caste_perfiles_terreno},
                    {label:'Predios plan parcial',layer:ypl_pot_caste_predios_pp},
                    {label:'Propuesta urbana delimitaci??n',layer:ypl_pot_caste_prop_urbana},
                    {label:'Propuesta urbana',layer:ypl_pot_caste_prop_urbana_areas2},
                    {label:'Puntos delimitaci??n plan parcial',layer:ypl_pot_caste_ptos_delimitacion_pp},
                    {label:'Ronda ca??o',layer:ypl_pot_caste_ronda_cano},
                    {label:'Superficie de terreno',layer:ypl_pot_caste_terreno_castellana_surfacesl},
                    {label:'Uso propuesto',layer:ypl_pot_caste_uso_prop},
                    {label:'V??as actuales',layer:ypl_pot_caste_vias_actuales},
                ]},

                {label:'Plan parcial Llano real',children:[
                    {label:'Unidades de gesti??n',layer:ypl_pot_llano_8_unidades_de_gestion},
                    {label:'??reas de manejo ambiental',layer:ypl_pot_llano_areas_de_manejo_ambiental},
                    {label:'Bosques',layer:ypl_pot_llano_bosques},
                    {label:'Ca??os ??rea afectaci??n',layer:ypl_pot_llano_bufer},
                    {label:'Ca??o',layer:ypl_pot_llano_cano},
                    {label:'Coberturas',layer:ypl_pot_llano_cober_ult},
                    {label:'Construcciones ',layer:ypl_pot_llano_construccion},
                    {label:'Curvas de nivel',layer:ypl_pot_llano_curvas_de_nivel},
                    {label:'Dise??o acueductos',layer:ypl_pot_llano_diseno_acueductos_pp},
                    {label:'Dise??o alcantarillado aguas lluvias',layer:ypl_pot_llano_diseno_alc_aguas_lluvias_p_p},
                    {label:'Dise??o alcantarillado aguas negras',layer:ypl_pot_llano_diseno_alc_aguas_negras_p_p},
                    {label:'Ejes viales',layer:ypl_pot_llano_ejes_viales},
                    {label:'Geolog??a',layer:ypl_pot_llano_geologia},
                    {label:'Geomorfolog??a',layer:ypl_pot_llano_geomorfologia},
                    {label:'L??mite plan parcial',layer:ypl_pot_llano_limite_plan},
                    {label:'Nomenclatura',layer:ypl_pot_llano_nomenclatura},
                    {label:'Predios plan parcial',layer:ypl_pot_llano_predios_pp},
                    {label:'??rea de protecci??n',layer:ypl_pot_llano_proetcion},
                    {label:'Propuesta urban??stica',layer:ypl_pot_llano_propuesta_urb},
                    {label:'Usos del suelo',layer:ypl_pot_llano_propuesta_urb1},
                    {label:'Ronda protecci??n ',layer:ypl_pot_llano_ronda_proteccion},
                    {label:'Sector cr??tico inundaci??n',layer:ypl_pot_llano_sector_cri_inun},
                    {label:'Sistemas generales',layer:ypl_pot_llano_sistemas_grales},
                    {label:'Suelos',layer:ypl_pot_llano_suelos_},
                    {label:'Usos del suelo 2',layer:ypl_pot_llano_uso_modif},
                    {label:'V??as',layer:ypl_pot_llano_vias},
                    {label:'V??as POT',layer:ypl_pot_llano_vias_pot},
                    {label:'Zonas de manejo ambiental',layer:ypl_pot_llano_zma},
                ]},

                {label:'Plan parcial Manoa',children:[
                    {label:'Per??metro',layer:ypl_pot_manoa_ciudad_manoa_perimetro},
                    {label:'Puntos de coordenadas',layer:ypl_pot_manoa_puntos_de_coordenadas},
                    {label:'Usos',layer:ypl_pot_manoa_usos},
                ]},

                {label:'Plan parcial Matalarga',children:[
                    {label:'Delimitaci??n',layer:ypl_pot_mata_delimitacion},
                    {label:'L??mite plan parcial',layer:ypl_pot_mata_limite_pp_matalarga},
                    {label:'Predial',layer:ypl_pot_mata_predial},
                    {label:'Curvas de nivel',layer:ypl_pot_mata_topofinal},
                    {label:'Usos',layer:ypl_pot_mata_usos},
                ]},

                {label:'Plan Parcial Palmarito',children:[
                    {label:'L??mite',layer:ypl_pot_palma_limite_palmarito},
                ]},

                {label:'Plan parcial Rivarca', children:[
                    {label:'Puntos l??mite predio',layer:ypl_pot_rivarca_getsemani},
                    {label:'L??mite predio',layer:ypl_pot_rivarca_getsemani_predio},
                ]},

                {label:'Plan parcial San Pablo II',children:[
                    {label:'L??mite plan parcial',layer:ypl_pot_sanp_limite_san_pablo_polig},
                ]},

            ]
        },

        {   label: 'Capas recorrido 360',
            selectAllCheckbox: true,
            children: [
                {label: 'Recorrido', layer: recorrido360},
                {label: 'wfs_capture', layer: wfs_point}
            ]
        },                   
        custom_layers,
    ]
};

export var Layertree= L.control.layers.tree(baseTree,capas)

// layerTree on map
addToMap(Layertree);

export var actualiza_layer_tree=()=>{
    removeToMap(Layertree);    
    Layertree= L.control.layers.tree(baseTree,capas,custom_layers);
    addToMap(Layertree);
}

export var agregar_capa_LayerTree=(capa_wms,nombre_capa,titulo_capa)=>{
    var capas_arr_temp = custom_layers.children;
    capas_arr_temp.push({label: titulo_capa, layer: capa_wms, name: nombre_capa})
    // console.log(custom_layers);
    custom_layers.children=capas_arr_temp;
    actualiza_layer_tree();
}

// estilo controles del control layer
// var ctl = L.control.layers.tree(baseTree, null,
//     {
//         namedToggle: true,
//         expandAll: '<button type="button" class="btn btn-outline-secundary btn-sm" data-toggle="tooltip" data-placement="top" title="Expandir Capas"><i class="fa fa-expand-alt" aria-hidden="true"></i></button>',
//         collapseAll: '<button type="button" class="btn btn-outline-secundary btn-sm" data-toggle="tooltip" data-placement="top" title="Contraer Capas"><i class="fas fa-compress-alt" aria-hidden="true"></i></button> ',
//         collapsed: true,
//     });

// collapse control layer
// ctl.addTo(map).collapseTree().expandSelected();

// var hasAllUnSelected = function() {
//     return function(ev, domNode, treeNode, map) {
//         var anySelected = false;
//         function iterate(node)
//         {
//             if (node.layer && !node.radioGroup) {
//                 anySelected = anySelected || map.hasLayer(node.layer);
//             }
//             if (node.children && !anySelected) {
//                 node.children.forEach(function(element) { iterate(element); });
//             }
//         }
//         iterate(treeNode);
//         return !anySelected;
//     };
// };


// /* ends aiports */
// var makePopups = function(node) {
//     if (node.layer) {
//         node.layer.bindPopup(node.label);
//     }
//     if (node.children) {
//         node.children.forEach(function(element) { makePopups(element); });
//     }
// };
// makePopups(capas);

// ctl.setOverlayTree(airportsEurope).collapseTree(true).expandSelected(true);
