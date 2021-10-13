import $ from "jquery";
const L =require ('leaflet');

import {GEOSERVER_URL} from './urls'

import {view360} from '../../pageComponent/view-change'
import {prediosModal} from '../../pageComponent/modal/modals/prediosModal'

import { createIframe } from "../../pageComponent/modal/modals/iframeForm";

var BetterWMS = L.TileLayer.WMS.extend({
  
    onAdd: function (map) {
      // Triggered when the layer is added to a map.
      //   Register a click listener, then do all the upstream WMS things
      L.TileLayer.WMS.prototype.onAdd.call(this, map);
      map.on('click', this.getFeatureInfo, this);
    },
    
    onRemove: function (map) {
      // Triggered when the layer is removed from a map.
      //   Unregister a click listener, then do all the upstream WMS things
      L.TileLayer.WMS.prototype.onRemove.call(this, map);
      map.off('click', this.getFeatureInfo, this);
    },
    
    getFeatureInfo: function (evt) {
      // activar cuando no se está dibujando
      if(!$('#drawButton').hasClass('active') && !$('#comparisonButton').hasClass('active')&& !$('#capButton').hasClass('active')&& !$('#SelectButton').hasClass('active')){///
        // Make an AJAX request to the server and hope for the best
        $('#loading-spinner').removeClass('hide').addClass('show');
        var url = this.getFeatureInfoUrl(evt.latlng),
            showResults = L.Util.bind(this.showGetFeatureInfo, this);
        var typeName = this.wmsParams.wmsName;
        $.ajax({
          url: url,
          async: true,
          success: function (data, status, xhr) {
            let feats=data.features;
            if(feats){
              if(feats.length>0){
                let feat=feats[0].properties
                showResults(data);
                // onclick recorrido open capture div
                typeName==='recorrido360'&&view360(feat);
                // onclick predios open modal
                let length=feats.length;

                typeName==='predios'&&prediosModal(feats,feats[0],length,'onclick');

                if(typeName==='capture'){
                  // asign data to wfs nomenclatura capture 
                  //   // openModal
                  createIframe(`&F_79=${feat.placa_cercana}&F_57=${feat.zun}&F_78=${feat.codigo_nuevo}&F_63=${feat.tipo_acceso}&F_80=${feat.identificacion_acceso}&F_81=${feat.observaciones_visualizacion}&F_82=${feat.direccion}&F_83=${feat.tipologia_placa}&F_86=${feat.materializacion_placa}&F_85=${feat.observaciones_placa}&F_87=${feat.propiedad_horizontal}&F_88=${feat.observaciones_tipologia}&F_90=${feat.observaciones_generales}&F_145=${feat.streetview}&F_146=${feat.data_360}&F_147=${feat.coordenadas}&F_151=${feat.estado_acceso}&F_58=${feat.tipo_via_principal}&F_59=${feat.numero_via_principal}&F_65=${feat.letra_via_principal}&F_66=${feat.bis_via_principal}&F_64=${feat.cuadrante_via_principal}&F_152=${feat.nomeclatura_via_principal}&F_60=${feat.tipo_via_generadora}&F_61=${feat.numero_via_generadora}&F_67=${feat.letra_via_generadora}&F_68=${feat.bis_via_generadora}&F_69=${feat.cuadrante_via_generadora}&F_62=${feat.mts_acceso}&F_153=${feat.nomeclatura_generadora}&F_156=${feat.propuesta_direccion}&F_175=${feat.usuario}`,feat)
                  
                  $('#captureModal').show()
                  
                };
              }
            }
            $('#loading-spinner').removeClass('show').addClass('hide');
          },
          error: function (xhr, status, error) {
            showResults(error);  
            $('#loading-spinner').removeClass('show').addClass('hide');
          }
        });
      }
    },
    
    getFeatureInfoUrl: function (latlng) {
      // Construct a GetFeatureInfo request URL given a point

      var point = this._map.latLngToContainerPoint(latlng, this._map.getZoom()),
      size = this._map.getSize(),
      
      params = {
        request: 'GetFeatureInfo',
        service: 'WMS',
        srs: 'EPSG:4326',
        styles: this.wmsParams.styles,
        transparent: this.wmsParams.transparent,
        version: this.wmsParams.version,      
        format: this.wmsParams.format,
        bbox: this._map.getBounds().toBBoxString(),
        height: size.y,
        width: size.x,
        layers: this.wmsParams.layers,
        query_layers: this.wmsParams.layers,
        info_format: this.wmsParams.info_format,
        feature_count: 1000
      };

      params[params.version === '1.3.0' ? 'i' : 'x'] = Math.round(point.x);
      params[params.version === '1.3.0' ? 'j' : 'y'] = Math.round(point.y);

      return this._url + L.Util.getParamString(params, this._url, true);
      
    },
    
    showGetFeatureInfo: function (err, latlng, content) {
      // if (err) { console.log(err); return; } // do nothing if there's an error
      // // Otherwise show the content in a popup, or something.
      // L.popup({ maxWidth: 800})
      //   .setLatLng(latlng)
      //   .setContent(content)
      //   .openOn(this._map);
    }
});
  
export var wmsBetter = function (url, options) {
    return new BetterWMS(GEOSERVER_URL+url, options);  
};