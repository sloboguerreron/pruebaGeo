/* Algoritmo para trabajar la verificacion de usuarios mediante
 un login, ademas genera diferentes interacciones con el formulario */


//Import lib of node js
import '@fortawesome/fontawesome-free/css/all.css';
import{PostRequest_Login,GetRequest_CheckPort,ID_GEOVISOR} from './components/serverComponent/python/pythonAxios'
import{dependence_id} from './components/configComponent/update-vars'


//Función para cambiar el logo de mostrar contraseña
document.addEventListener('DOMContentLoaded', function () {
  $('i').on('click', function () {
    $(this)
      .find('[data-fa-i2svg]')
      .toggleClass('far fa-eye-slash')
      .toggleClass('far fa-eye');
  });
});



//Interacción para mostar la contraseña
var Password = document.getElementById('password'); 
var see_password = document.getElementById("see-password");
see_password.addEventListener("click", reveal_password);

//Función que descodifica la contraseña 
function reveal_password(){
  if(Password.type == "password"){
    Password.type = "text";   
  }
  else{
    Password.type ="password";
  };
};

//Create interaction login botton, import data
let Botton = document.getElementById("botton");
Botton.onclick = Login;

//Función para crear un mensaje de error. 
function error_message(mensaje,icon){
  return Swal.fire({
    title: 'Error!',
    text: mensaje,
    icon: icon,
    confirmButtonText: 'OK'
  });
};


//Función para generar la conexion con la API y verifica los usuarios. 
function Login(){
  var Email = document.getElementById('email').value;
  var Password = document.getElementById('password').value; 
    if (Email=="" | Password==""){
        document.getElementById("email").focus();
        document.getElementById("password").focus();
    }
    else{
        const Api_Login = PostRequest_Login(Email,Password)
        const Api_check = GetRequest_CheckPort(Email)
        Api_check.then(function (res1) {
          if((res1.data).length == 1){
            Api_Login.then(function (res2) {
              if (res2.statusText == "OK"){
                var web_id = res1.data["0"]["dependencia"]["accesos"];
                var ingreso = false
                for(var i  of web_id){
                  if(i["id"] == dependence_id){
                    ingreso = true
                  }         
                }
                if(ingreso == true){
                  sessionStorage.setItem('access-juan-de-acosta',res2.data["access"]);
                  sessionStorage.setItem('User-juan-de-acosta',Email);    
                  document.location.href="./index.html";
                }
                else if(ingreso == false){
                  error_message("No tiene acceso a la dependencia.","info");
                  document.getElementById("email").value="";
                  document.getElementById("password").value="";
                }
              }
              
            })
            Api_Login.catch(function (error){
              error_message("La contraseña ingresada es incorrecta.","error")
            });
          } 
          else if((res1.data).length == 0){
            error_message("Usuario no registrado.","error")
            document.getElementById("email").value="";
            document.getElementById("password").value="";
          }
            
        })
      }
};








