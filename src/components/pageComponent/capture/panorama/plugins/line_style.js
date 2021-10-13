export var lineStyle =(id,textureX1,textureY1,textureX2,textureY2,color,tooltip)=>{
    return {
        id: id,
        polylinePx: [textureX1, textureY1, textureX2, textureY2],
        svgStyle: {
          stroke: color,
          strokeDasharray: '4 1',
          strokeLinejoin: 'round',
          strokeWidth: '3px'
        },
        tooltip: tooltip
    }
}
