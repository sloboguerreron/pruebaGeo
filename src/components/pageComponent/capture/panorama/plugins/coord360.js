import {pixelm} from './pixelVal'
// cartesian coordinate point on 360 image
export var coordPoint=(e,heading,type)=>{
    // distancia de captura
    const maxTexture=2800;

    var pixellenght=type='capture'?pixelm(e.textureY):0.0162601626016

    // var pixellenght=pixelm(e.textureY)
    
    let distanceToPoint = pixellenght * (maxTexture-e.textureY);
    // let distanceToPoint = 0.0162601626016 * (maxTexture - e.textureY);

    // angulo de captura
    let heading_rad=(270-heading)*(Math.PI/180)
    let a = e.longitude-heading_rad;

    console.log('textura',e.textureY)
    let coordx = distanceToPoint * Math.cos(a).toFixed(4);
    let coordy = distanceToPoint * Math.sin(a).toFixed(4);
    return[coordx,coordy]
}