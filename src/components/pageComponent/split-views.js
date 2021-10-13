import $ from "jquery";
import "../configComponent/jquery-global.js";

import {fitBounds,removeAllInLayer} from '../mapComponent/map';

import {drawfilter} from '../mapComponent/controls/select-geometry/select-control'

import {splitTable,mapView,tableView} from './view-change'
import {syncTable,featureLayerRemove} from './table/table/table'


import './capture/capture'
import './stadistics/stadistics'

function switchView(view) {
  if($('#SelectButton').hasClass('active')){
    if (view == "split-table") {
      splitTable();
      $("#table").bootstrapTable("resetView", {
        height: $("#table-container").height()
      });
      console.log('Utilizado')
    } else if (view == "map") {
      mapView();
      removeAllInLayer(drawfilter);
    } else if (view == "table") {
        tableView();
        $("#table").bootstrapTable("resetView", {
          height: $("#table-container").height()
        });
  
    }
  }
  else{
    if (view == "split-table") {
      splitTable();
      // activeLayer();
      syncTable();
    } else if (view == "map") {
      mapView();
      featureLayerRemove();
    } else if (view == "table") {
      tableView();
      // activeLayer();
      syncTable();
    }
    // else if(view == "split-chart"){
    //   ChartView();
    // }
  }
  
}


// split page
$("[name='view']").on('click',function() {
  $(".in,.open").removeClass("in open");
  // console.log(this.id)
  if (this.id === "map-table") {
    switchView("split-table");
    return false;
  } else if (this.id === "map-only") {
    switchView("map");
    return false;
  } else if (this.id === "table-only") {
    if($('i#table-resize-icon').hasClass('fa-expand-alt')){
      switchView("table");
      $('i#table-resize-icon').removeClass("fa-expand-alt").addClass("fa-compress-alt");
   
    }else {
      switchView("split-table");
      $('i#table-resize-icon').removeClass("fa-compress-alt").addClass("fa-expand-alt");
    }
   return false;
  }
  // else if (this.id === "map-chart") {
  //   switchView("split-chart");
  //   return false;
  // }
});

/*
$("#extent-btn").on('click',function() {
  fitBounds(featureLayer.getBounds());
  $(".navbar-collapse.in").collapse("hide");
  return false;
});
*/

