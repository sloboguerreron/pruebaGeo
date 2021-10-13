export var pixelm=(textureY)=>{
    let pixelmx
    if(textureY>2500 || textureY<2015){
        pixelmx=(2800-textureY)/10000
    }else {
        pixelmx=(2800-textureY)/20000
    }
    console.log(pixelmx)
    return pixelmx
}


// var pixelm;

// if(textureY<= 2800 && textureY> 2700 ){
//     pixelm=0.033
// }else if(textureY<= 2700 && textureY> 2600 ){
//     pixelm=0.031
// }else if(textureY<= 2600 && textureY> 2500 ){
//     pixelm=0.029
// }else if(textureY<= 2500 && textureY> 2400 ){
//     pixelm=0.030
// }else if(textureY<= 2400 && textureY> 2350 ){
//     pixelm=0.0305
// }else if(textureY<= 2350 && textureY> 2280 ){
//     pixelm=0.0306
// }else if(textureY<= 2280 && textureY> 2250 ){
//     pixelm=0.03065
// }else if(textureY<= 2250 && textureY> 2280 ){
//     pixelm=0.0307
// }else if(textureY<= 2280 && textureY> 2240 ){
//     pixelm=0.0309
// }else if(textureY<= 2240 && textureY> 2215 ){
//     pixelm=0.031
// }else if(textureY<= 2215 && textureY> 2210 ){
//     pixelm=0.0311
// }else if(textureY<= 2210 && textureY> 2188 ){
//     pixelm=0.03112
// }else if(textureY<= 2188 && textureY> 2165 ){
//     pixelm=0.0313
// }else if(textureY<= 2165 && textureY> 2151 ){
//     pixelm=0.0314
// }else if(textureY<= 2151 && textureY> 2140 ){
//     pixelm=0.032
// }else if(textureY<= 2140 && textureY> 2135 ){
//     pixelm=0.0325
// }else if(textureY<= 2135 && textureY> 2110  ){
//     pixelm=0.0335
// }else if(textureY<= 2110 && textureY> 2100 ){
//     pixelm=0.0345
// }else if(textureY<= 2100 && textureY> 2085 ){
//     pixelm=0.038
// }else if(textureY<= 2085 && textureY> 2076 ){
//     pixelm=0.039
// }else if(textureY<= 2076 && textureY> 2068 ){
//     pixelm=0.040
// }else if(textureY<= 2068 && textureY> 2060 ){
//     pixelm=0.042
// }else if(textureY<= 2060 && textureY> 2055 ){
//     pixelm=0.043
// }else if(textureY<= 2055 && textureY> 2049 ){
//     pixelm=0.045
// }else if(textureY<= 2049 && textureY> 2045 ){
//     pixelm=0.047
// }else if(textureY<= 2045 && textureY> 2035 ){
//     pixelm=0.058
// }else if(textureY<= 2035 && textureY> 2020 ){
//     pixelm=0.0585
// }else if(textureY<= 2020 ){
//     pixelm=0.080
// }