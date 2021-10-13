import proj4 from 'proj4';

proj4.defs("EPSG:3115","+proj=tmerc +lat_0=4.596200416666666 +lon_0=-77.07750791666666 +k=1 +x_0=1000000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
proj4.defs("EPSG:3116","+proj=tmerc +lat_0=4.596200416666666 +lon_0=-74.07750791666666 +k=1 +x_0=1000000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
proj4.defs("EPSG:3117","+proj=tmerc +lat_0=4.596200416666666 +lon_0=-71,077507916666 +k=1 +x_0=1000000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
proj4.defs("CTM12","+proj=tmerc +lat_0=4 +lon_0=-73 +k=0.9992 +x_0=5000000 +y_0=2000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");

export var project3115=(coords)=> proj4('EPSG:3115','EPSG:4326',coords)  
export var project3116=(coords)=> proj4('EPSG:3116','EPSG:4326',coords)
export var project3117=(coords)=> proj4('EPSG:3117','EPSG:4326',coords)
export var projectCTM12=(coords)=> proj4('CTM12','EPSG:4326',coords)
    