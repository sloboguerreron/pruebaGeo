import { GEOSERVER_URL } from "./urls";

export const download=(params)=>{
    window.open(GEOSERVER_URL+params,'_blank')
}