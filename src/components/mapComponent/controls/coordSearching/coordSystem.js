import {project3115,project3116,project3117,projectCTM12} from './defineCoordSystem'
export function coordSystem(optionSelected,inputsCoord){
    //calculate marker coords 
    let lat=0;
    let long=0;

    if(optionSelected=='wgs84'){
        // decimal coordinates
        lat=inputsCoord[0].value
        long=inputsCoord[1].value
    }else if(optionSelected=='wgs84sexa'){
        // transform degrees to decimal coordinates
        let latdegrees=Number(inputsCoord[0].value)
        let latsegs=inputsCoord[2].value!=''?Number(inputsCoord[2].value)/3600:0;
        let latmins=inputsCoord[1].value!=''?Number(inputsCoord[1].value)/60:0;
        lat= latdegrees+latmins+latsegs

        let longdegrees=Number(inputsCoord[3].value)
        let longsegs=inputsCoord[5].value!=''?Number(inputsCoord[5].value)/3600:0;
        let longmins=inputsCoord[4].value!=''?Number(inputsCoord[4].value)/60:0;
        // longitude is in the north axis, so you should *-1
        long= (longdegrees+longmins+longsegs)*-1

    }else if(optionSelected=='mseste'){
        let x=Number(inputsCoord[0].value)
        let y=Number(inputsCoord[1].value)

        var coords=project3115([x,y])

        lat=coords[1]
        long=coords[0]
        
    }else if(optionSelected=='msbogota'){
        let x=Number(inputsCoord[0].value)
        let y=Number(inputsCoord[1].value)

        var coords=project3117([x,y])

        lat=coords[1]
        long=coords[0]

    }else if(optionSelected=='ctm12'){
        let x=Number(inputsCoord[0].value)
        let y=Number(inputsCoord[1].value)

        var coords=projectCTM12([x,y])

        lat=coords[1]
        long=coords[0]
    }
    return [lat,long]  
}