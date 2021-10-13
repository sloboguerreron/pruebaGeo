import 'bootstrap-table/dist/bootstrap-table.min.css'
import '../../../pageComponent/table/table/table.scss'

import $ from "jquery";
import {drawfilter} from './select-control'
import {polygon_style} from '../../../mapComponent/layers/style/polygon'
import {fitBounds,mapMoveEnd,mapClick,hasLayer,mapContains,addToMap,removeAllInLayer,mapRemoveControl,removeToMap} from '../../../mapComponent/map';
import {tableLayer,highlightLayerRemove,highlightLayer,highlightLayerAdd} from '../../../mapComponent/layers/control-layers'


import 'bootstrap-table/dist/bootstrap-table';
import 'bootstrap-table/dist/locale/bootstrap-table-es-ES.min';
import 'bootstrap-table/dist/extensions/mobile/bootstrap-table-mobile';


export function createtable(geojson){
    var tableLayerfilter=(filter,onEachFeature)=> new L.geoJson(geojson,{ 
      style:polygon_style('green'),
      filter:filter,
      onEachFeature:onEachFeature
      }
    );
    var config = {
        title: "Predios Asignados",
        hoverProperty: "codigo",
        sortProperty: "codigo",
        sortOrder: "desc"
      };
      
      var properties = [{
        value: "codigo",
        label: "Codigo Nuevo",
        table: {
          visible: true,
          sortable: true
        }
      },
      {
        value: "codigo_ant",
        label: "Codigo Anterior",
        table: {
          visible: true,
          sortable: true
        }
      },
      {
        value: "codigo_manzana",
        label: "Manzana",
        table: {
          visible: true,
          sortable: true
        }
      },
      {
        value: "barrio",
        label: "Barrio",
        table: {
          visible: true,
          sortable: true
        }
      },
      {
        value: "municipio",
        label: "Municipio",
        table: {
          visible: true,
          sortable: true
        }
      },
      ];

      var featureLayer = tableLayerfilter(
        function(feature, layer) {
          // console.log(feature,buttonFilters);
          if(feature.geometry){
            return feature.geometry.coordinates[0] !== 0 && feature.geometry.coordinates[1] !== 0;
          }else{
            return null
          }
          
        },
        function (feature, layer) {
          // zoom al feature
          if (feature.properties) {
          layer.on({
            click: function (e) {
            // console.log(e);
              identifyFeature(L.stamp(layer));
              highlightLayerRemove();
              highlightLayerAdd(featureLayer.getLayer(L.stamp(layer)).toGeoJSON());
            },
            mouseover: function (e) {
            if (config.hoverProperty) {
              $(".info-control").html(feature.properties[config.hoverProperty]);
              $(".info-control").show();
            }
            },
            mouseout: function (e) {
            $(".info-control").hide();
            }
          });
          }
        }
      )
      function buildConfig() {
        var filters = [];
        var table =[];
      
        $.each(properties, function(index, value) {
          // Filter config
          //console.log(properties);
          if (value.filter) {
            var id;
            if (value.filter.type == "integer") {
              id = "cast(properties->"+ value.value +" as int)";
            }
            else if (value.filter.type == "double") {
              id = "cast(properties->"+ value.value +" as double)";
            }
            else {
              id = "properties->" + value.value;
            }
            filters.push({
              id: gid,
              label: value.label
            });
          }
          // Table config
          if (value.table) {
            table.push({
              field: value.value,
              title: value.label,
              sortable: value.table.sortable
            });
            $.each(value.table, function(key, val) {
              if (table[index+1]) {
                table[index+1][key] = val;
              }
            });
          }
        });
        
        buildTable(table);
      }
      
      
      function identifyFeature(id) {
        var featureProperties = featureLayer.getLayer(id).feature.properties;
        var content = "<table class='table table-striped table-bordered table-condensed'>";
        $.each(featureProperties, function(key, value) {
          if (!value) {
            value = "";
          }
          if (typeof value == "string" && (value.indexOf("http") === 0 || value.indexOf("https") === 0)) {
            value = "<a href='" + value + "' target='_blank'>" + value + "</a>";
          }
          $.each(properties, function(index, property) {
            if (key == property.value) {
              if (property.info !== false) {
                content += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
              }
            }
          });
        });
        content += "<table>";
        $("#feature-info").html(content);
        $("#featureModal").modal("show");
      }
      
      mapClick(highlightLayerRemove);
      
      function buildTable(table) {
        $("#table").bootstrapTable('destroy').bootstrapTable({   
          cache: false,
          height:$("#table-container").height(),
          locale: "es-ES",
          undefinedText: "",
          showExport:true,
          pagination:true,
          //paginationVAlign:"top",
          sortable:false,
          buttonsClass: "btn-light",
          minimumCountColumns: 1,
          sortName: config.sortProperty,
          sortOrder: config.sortOrder,
          toolbar: "#toolbar",
          search: false,
          trimOnSearch: false,
          showColumns: true,
          showToggle: true,
          largeColumns:true,
          iconSize: 'sm',
          columns:table,
          mobileResponsive:true,
          smartDisplay: true,
          checkOnInit:true,
          pageList:"[10, 25, 50, All]",
          onClickRow: function (row) {
            try{
              fitBounds(featureLayer.getLayer(row.leaflet_stamp).getBounds(), {padding: [50, 50]});
              highlightLayerRemove();
              highlightLayerAdd(featureLayer.getLayer(row.leaflet_stamp).feature);
              addToMap(highlightLayer);
            }catch{
              null;
            }
            
          },
          onDblClickRow: function (row) {
          // do something!
              null
          }
        });

        // map.fitBounds(featureLayer.getBounds());
        $(window).on("resize",function () {
            $("#table").bootstrapTable("resetView", {
              height:$("#table-container").height(),
            });
        });

        if ($("#table-container").height()<150){
          $("#table").bootstrapTable("resetView", {
            height: window.innerHeight * 0.55,
          });
          
        }


        if (document.body.clientWidth <= 767) {
          $("#table").bootstrapTable("refreshOptions", {
            pagination: false,
            showColumns: false,
            showToggle: false,
          });
        }
        
        else{   
          $("#table").bootstrapTable("refreshOptions", {
            pagination: true,
            showColumns: true,
            showToggle: true,
          });
        
          
        }
      }
      
      
      function syncTable() {
        var tableFeatures = [];
        
        featureLayer.eachLayer(function (layer) {
          layer.feature.properties.leaflet_stamp = L.stamp(layer);
          if (hasLayer(featureLayer)) {
            // show only the visible features on map
            // if (mapContains(layer.getBounds().getCenter())) {
              tableFeatures.push(layer.feature.properties);
            // }
          }
        });
      
        $("#table").bootstrapTable("load", JSON.parse(JSON.stringify(tableFeatures)));
        var featureCount = tableFeatures.length;
        if (featureCount == 0) {
          $("#feature-count").html( " Sin registros");
        } else if (featureCount == 1) {
          $("#feature-count").html($("#table").bootstrapTable("getData").length + " Registro visible");
        } else {
          $("#feature-count").html($("#table").bootstrapTable("getData").length + " Registros visibles");
        }
        //
        /*
        $("#extent-btn").on('click',function() {
            fitBounds(featureLayer.getBounds());
            $(".navbar-collapse.in").collapse("hide");
            return false;
        });
        */
    }
    


    addToMap(featureLayer)
    buildConfig()
    syncTable()
    return featureLayer
   
    
    
};




