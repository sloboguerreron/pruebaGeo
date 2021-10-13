const L =require ('leaflet');
// icon as marker
// example:faIcon('<i class="far fa-dot-circle"></i>',[20, 20],'geolocate');
export var faIcon =(url,size,className)=> L.divIcon({
    html: url,
    iconSize: size,
    className: className
});