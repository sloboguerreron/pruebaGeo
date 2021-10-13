import $ from "jquery";
import "../../../configComponent/jquery-global.js";
import './init-filter'

  // Create object to store filter for each group
var buttonFilters = {Acueducto: "noservice", Aseo: "noservice", Energia: "noservice", Alcantarillado: "noservice", Gas: "noservice"};

// Look inside element with .filters class for any clicks on elements with .btn
$('.filters').on( 'click', '.btn', function() {
  var $this = $(this);
  // Get group key from parent btn-group (e.g. data-filter-group="color")
  var $buttonGroup = $this.parents('.btn-group');
  var filterGroup = $buttonGroup.attr('data-filter-group');
  // set filter for group
  buttonFilters[ filterGroup ] = $this.attr('data-filter');
  // Log out current filter to check that it's working when clicked
  // console.log( buttonFilters );

  $buttonGroup.find('.checked').removeClass('checked');
  $this.addClass('checked');
});

$("#apply-filter-btn").on('click',function() {
  applyFilter();
});


function applyFilter() {
  console.log(buttonFilters);
  // var sql = $("#query-builder").queryBuilder("getSQL", false, false).sql;
  // if (sql.length > 0) {
  //   query += " WHERE " + sql;
  // }
  // alasql(query, [geojson.features], function(features){
    // featureLayer.clearLayers();
    // featureLayer.addData(features);
    // syncTable();
  // });
}
