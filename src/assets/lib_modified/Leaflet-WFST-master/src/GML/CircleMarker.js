L.CircleMarker.include({
  toGml: function(crs) {
    var node = L.XmlUtil.createElementNS('gml:Point', {srsName: crs.code});
    node.appendChild(L.GmlUtil.posNode(L.Util.project(crs, this.getLatLng())));
    return node;
  }
});
