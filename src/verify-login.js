/* Algoritmo que permite el acceso a un geovisor 
si se encuentra logueado, de lo contrario redirige al login */
import $ from "jquery";

//Import lib of node js
import{PYTHON_URL} from './components/serverComponent/urls'

//Funcion para verificar si existe un usuario logueado. 
function verify_login(){
    const token_id = sessionStorage.getItem('access-juan-de-acosta');    
    if (token_id != undefined){
        $.ajax({
            method: 'POST',
            url: PYTHON_URL +'api/token/verify/',
            data: {
              token: token_id,  
            }
          }).then(function (response) {
              null
            })
            .catch(function(error){
                document.location.href="./login.html"
            })
    }
    else{
        document.location.href = "./login.html"
    };
};

//Metodo para ejecutar el codigo al cargar la pagina.
document.addEventListener("DOMContentLoaded", verify_login, false);