import 'bootstrap-table/dist/bootstrap-table.min.css'
import './table.scss';

import $ from "jquery";
import "../../../configComponent/jquery-global.js";

import {tableLayer,highlightLayerRemove,highlightLayer,highlightLayerAdd} from '../../../mapComponent/layers/control-layers'
import {fitBounds,mapMoveEnd,mapClick,hasLayer,mapContains,addToMap,removeToMap} from '../../../mapComponent/map';
import 'bootstrap-table/dist/bootstrap-table';
import 'bootstrap-table/dist/locale/bootstrap-table-es-ES.min';
import 'bootstrap-table/dist/extensions/mobile/bootstrap-table-mobile';

import 'FileSaver';
import 'tableexport.jquery.plugin';

import '../filter/modal-filter'

var config = {
  title: "Predios Capturados",
  hoverProperty: "fecha",
  sortProperty: "fecha",
  sortOrder: "desc"
};

var properties = [{
    value: "usuario",
    label: "Usuario",
    table: {
      visible: true,
      sortable: true
    }
  },
  {
    value: "fecha",
    label: "Fecha",
    table: {
      visible: true,
      sortable: true
    }
},
];
var featureLayer = tableLayer(
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

// var featureLayer = new L.geoJson(null, {
// 	style: function(feature) {
// 		// console.log(feature.properties);
// 		switch (feature.properties) {
// 			// case 'Republican': return polygon_style("red");
// 			// case 'Democrat':   return polygon_style("blue");
// 			default: return polygon_style("green");
// 		}
// 	},
// 	filter: function(feature, layer) {
// 		// console.log(feature,buttonFilters);
// 		return feature.geometry.coordinates[0] !== 0 && feature.geometry.coordinates[1] !== 0;
// 	},
// 	onEachFeature: function (feature, layer) {
// 		// zoom al feature
// 		if (feature.properties) {
// 		layer.on({
// 			click: function (e) {
// 			console.log(e);
// 			identifyFeature(L.stamp(layer));
// 			highlightLayerRemove();
// 			highlightLayerAdd(featureLayer.getLayer(L.stamp(layer)).toGeoJSON());
// 			},
// 			mouseover: function (e) {
// 			if (config.hoverProperty) {
// 				$(".info-control").html(feature.properties[config.hoverProperty]);
// 				$(".info-control").show();
// 			}
// 			},
// 			mouseout: function (e) {
// 			$(".info-control").hide();
// 			}
// 		});
// 		}
// 	}
// });

function buildConfig() {
  var filters = [];
  var table =[];

  $.each(properties, function(index, value) {
    // Filter config
    // console.log(index,value);
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
// // Larger screens get expanded layer control
// if (document.body.clientWidth <= 767) {
//   var isCollapsed = true;
// } else {
//   var isCollapsed = false;
// }

// Filter table to only show features in current map bounds
// mapMoveEnd(syncTable);

mapClick(highlightLayerRemove);

function buildTable(table) {
  $("#table").bootstrapTable('destroy').bootstrapTable({   
    cache: false,
    height: $("#table-container").height(),
    locale: "es-ES",
    undefinedText: "",
    // striped: false,
    pagination: true,
    buttonsClass: "btn-light",
    minimumCountColumns: 1,
    sortName: config.sortProperty,
    sortOrder: config.sortOrder,
    toolbar: "#toolbar",
    search: true,
    trimOnSearch: false,
    showColumns: true,
    showToggle: true,
    largeColumns:true,
    iconSize: 'sm',
    columns: table,
    mobileResponsive:true,
    smartDisplay: true,
    checkOnInit:true,
    pageList:"[10, 25, 50, 100, All]",
    onClickRow: function (row) {
      try{
        fitBounds(featureLayer.getLayer(row.leaflet_stamp).getBounds(), {padding: [50, 50]});
        console.log(featureLayer.getLayer)
        highlightLayerRemove();
        highlightLayerAdd(featureLayer.getLayer(row.leaflet_stamp).feature);
        addToMap(highlightLayer);
      }catch{
        alert('Para visualizar el predio debe estar en un zoom válido');
      }
      
    },
    onDblClickRow: function (row) {
    // do something!
      console.log(table)
    }
  });

  // map.fitBounds(featureLayer.getBounds());

  $(window).on("resize",function () {
      $("#table").bootstrapTable("resetView", {
      height: $("#table-container").height()
      });
  });
  if (document.body.clientWidth <= 767) {
    $("#table").bootstrapTable("refreshOptions", {
      pagination: false,
      showColumns: false,
      showToggle: false,
    });
  }else{
    $("#table").bootstrapTable("refreshOptions", {
      pagination: true,
      showColumns: true,
      showToggle: true,
    });
  }
}


// console.log($("#table").bootstrapTable());
// if (document.body.clientWidth <= 767) {

//   $("table#table").bootstrapTable("togglePagination");
//   $("table#table").bootstrapTable('toggleView');

  
// //   $("#table").bootstrapTable({
// //       cardView: true,
// //   });
//   $("#table").bootstrapTable('resetView');
// } else {
//   console.log('console.log(')
// }

export function syncTable() {
  var tableFeatures = [];
  
  // featureLayer.clearLayers();
  // featureLayer.addData(config.geojson);

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
}

export function activeLayer(){
  try{
    addToMap(featureLayer);
    buildConfig();
  }catch{
    alert('Error de layer')
  }

}
/*
$("#extent-btn").on('click',function() {
  fitBounds(featureLayer.getBounds());
  $(".navbar-collapse.in").collapse("hide");
  return false;
});
*/

// export table
$("#download-csv-btn").on('click',function() {
  $("#table").tableExport({
    type: "csv",
    ignoreColumn: [0],
    fileName: "data"
  });
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#download-excel-btn").on('click',function() {
  $("#table").tableExport({
    type: "excel",
    ignoreColumn: [0],
    fileName: "data"
  });
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

// remove geojson table layer
export function featureLayerRemove (){
  if(featureLayer._leaflet_id){
    removeToMap(featureLayer);
  }
}   