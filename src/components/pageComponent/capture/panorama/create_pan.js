import { Viewer } from 'photo-sphere-viewer';
import 'photo-sphere-viewer/dist/plugins/markers.css';
import MarkersPlugin from 'photo-sphere-viewer/dist/plugins/markers';
import GyroscopePlugin from 'photo-sphere-viewer/dist/plugins/gyroscope'

export var PSViewer=(date_photo,url_psv)=>{
  try {
    const View = new Viewer({
      container: 'psv_viewer',
      panorama: url_psv,
      defaultZoomLvl: 90,
      autorotateDelay: 3000,
      navbar: [
      'autorotate',
      'zoom',
      'download',
      'fullscreen',
      {
        id: 'medirfoto',
        title: 'Medir',
        className: 'medir-button',
        onClick: function() {
          clickMeasure()
        }
      },
      'caption',
      ],
      lang: {
        autorotate: 'Autorotar',
        zoom      : 'Zoom',
        zoomOut   : 'Alejar',
        zoomIn    : 'Acercar',
        download  : 'Descargar',
        fullscreen: 'Pantalla completa',
        menu      : 'Menu',
        twoFingers: 'Usar dos dedos para navegar',
        ctrlZoom  : 'Usa ctrl + scroll para hacer zoom',
        loadError : 'El panorama no pudo ser cargado',
        gyroscope : 'Giroscopio',
      },
      mousemove: true,
      loadingTxt:'Cargando..',
      autorotateDelay: false,
      caption    : date_photo,
      touchmoveTwoFingers: true,
      plugins: [
        [MarkersPlugin,GyroscopePlugin]
      ]
    });
 
    var clickMeasure=()=>{
      var markerPlugin=View.getPlugin(MarkersPlugin);
      document.getElementsByClassName("medir-button")[0].classList.toggle("psv-button--active");
      markerPlugin.markers["#2"]&&markerPlugin.removeMarker("#2")
      markerPlugin.markers["#1"]&&markerPlugin.removeMarker("#1")
      markerPlugin.markers["#distance"]&&markerPlugin.removeMarker("#distance")
    }

    return View
  } catch (error) {
    console.log(error)
    alert('Se presentó un error, intente nuevamente')
    return null
  }
}