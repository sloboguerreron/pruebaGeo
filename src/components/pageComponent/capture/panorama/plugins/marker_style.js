export var markerStyle =(id,long,lat,color,colorFill,tooltip,contenido,classn)=>{
    return {
        id: '#' + id,
        longitude: long,
        latitude: lat,
        circle: 5,
        svgStyle: {
            fill       : colorFill,
            stroke     : color,
            strokeWidth: '2px'
        },
        tooltip: tooltip,
        data: {
            generated: true
        },
        content:contenido,
        className:classn
    }
}
