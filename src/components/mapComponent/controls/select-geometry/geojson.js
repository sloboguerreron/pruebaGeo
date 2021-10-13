//the following code generates the format for a geojson.
//It receives two parameters, the coordinates and the type of geometry

export var estatesGeojson=(predios)=>{
    return{
      "type": "FeatureCollection",
      "crs":{
        "properties":{
          "name":"urn:ogc:def:crs:EPSG::4326"},
        "type":"name"
      },
      "features":predios,
    }
    
};

export function extractJson(json,typegeometry){
  const Feature = json["gml:featureMember"]["juanDeAcosta:table_selection"]
  if (typegeometry == "marker"){
      var coord = []
      var CodCatastral = Feature["juanDeAcosta:codigo_catastral"]
      var CodCatastralant = Feature["juanDeAcosta:codigo_catastral_anterior"]
      var Manzana = Feature["juanDeAcosta:codigo_manzana"]
      var Barrio = Feature["juanDeAcosta:barrio"]
      var Muncipio = Feature["juanDeAcosta:municipio"]
      var geometry = Feature["juanDeAcosta:geom"]["gml:MultiPolygon"]["gml:polygonMember"]["gml:Polygon"]["gml:outerBoundaryIs"]["gml:LinearRing"]
      var coordinates = geometry["gml:coordinates"].split([" "])
      for (var i of coordinates){
        var n = (i).split([","])
        var lng = parseFloat(n[0])
        var lat = parseFloat(n[1])
        coord.push([lng,lat]) 
      }
      var Predio = [{
        "type": "Feature",
        "properties": {
          "codigo": CodCatastral,
          "codigo_ant": CodCatastralant,
          "codigo_manzana":Manzana,
          "barrio":Barrio,
          "municipio":Muncipio
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [coord]
        },
        
      }]
      return estatesGeojson(Predio)
      
  }
  else if(typegeometry == "polygon"){
    const Feature = json["gml:featureMember"]
    var predios = []
    for(var file of Feature){
      var CodCatastral = file['juanDeAcosta:table_selection']["juanDeAcosta:codigo_catastral"]
      var CodCatastralant = file['juanDeAcosta:table_selection']["juanDeAcosta:codigo_catastral_anterior"]
      var Manzana = file['juanDeAcosta:table_selection']["juanDeAcosta:codigo_manzana"]
      var Barrio = file['juanDeAcosta:table_selection']["juanDeAcosta:barrio"]
      var Muncipio = file['juanDeAcosta:table_selection']["juanDeAcosta:municipio"]
      var geometry = file['juanDeAcosta:table_selection']["juanDeAcosta:geom"]["gml:MultiPolygon"]["gml:polygonMember"]["gml:Polygon"]["gml:outerBoundaryIs"]["gml:LinearRing"]
      var coordinates = geometry["gml:coordinates"].split([" "])
      var coord = []
      for(var i of coordinates ){
        var n = (i).split([","])
        var lng = parseFloat(n[0])
        var lat = parseFloat(n[1])
        coord.push([lng,lat])
      }
      predios.push({
        "type": "Feature",
        "properties": {
          "codigo": CodCatastral,
          "codigo_ant": CodCatastralant,
          "codigo_manzana":Manzana,
          "barrio":Barrio,
          "municipio":Muncipio
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [coord]
        }
      })
    }
    return estatesGeojson(predios)
  }
      
}