import $ from "jquery";

import { pythonGetRequest } from '../../../../serverComponent/python/python'
import {markerStyle} from './marker_style'
import {createIframe} from '../../../../pageComponent/modal/modals/iframeForm'

let marker

export var getDataCaptured=(markerPlugin,photo)=>{
    markerPlugin.clearMarkers();
    setTimeout(function () {
        function showData(data) {
            data.features.map((row,id)=>{
                let e=row.properties.data_360
                // console.log(row.properties)
                marker= markerStyle('captured'+id,Number(e.longituder), Number(e.latituder),'#ff030b','rgba(1, 0, 0, 0.5)','')
                markerPlugin.addMarker(marker);    
            })
            
            markerPlugin.on('select-marker', (e, marker) => {
                let id=marker.id.split("#captured")[1]
                console.log(data.features[id].properties)
                // console.log(`Cursor is over marker ${id}`);
                let feat=data.features[id].properties
                createIframe(`&F_79=${feat.placa_cercana}&F_57=${feat.zun}&F_78=${feat.codigo_nuevo}&F_63=${feat.tipo_acceso}&F_80=${feat.identificacion_acceso}&F_81=${feat.observaciones_visualizacion}&F_82=${feat.direccion}&F_83=${feat.tipologia_placa}&F_86=${feat.materializacion_placa}&F_85=${feat.observaciones_placa}&F_87=${feat.propiedad_horizontal}&F_88=${feat.observaciones_tipologia}&F_90=${feat.observaciones_generales}&F_145=${feat.streetview}&F_146=${feat.data_360}&F_147=${feat.coordenadas}&F_151=${feat.estado_acceso}&F_58=${feat.tipo_via_principal}&F_59=${feat.numero_via_principal}&F_65=${feat.letra_via_principal}&F_66=${feat.bis_via_principal}&F_64=${feat.cuadrante_via_principal}&F_152=${feat.nomeclatura_via_principal}&F_60=${feat.tipo_via_generadora}&F_61=${feat.numero_via_generadora}&F_67=${feat.letra_via_generadora}&F_68=${feat.bis_via_generadora}&F_69=${feat.cuadrante_via_generadora}&F_62=${feat.mts_acceso}&F_153=${feat.nomeclatura_generadora}&F_156=${feat.propuesta_direccion}&F_175=${feat.usuario}`,data.features[id])
                  
                $('#captureModal').show()
            });
        }
        pythonGetRequest(showData,'api/nomenclatura/capturas_panorama/'+photo)
        // 
    }, 1000);

}