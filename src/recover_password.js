import{GetRequest_Email} from './components/serverComponent/python/pythonAxios'
import '@fortawesome/fontawesome-free/css/all.css';
//import $ from "jquery"

let Botton2 = document.getElementById("recover-password");
Botton2.onclick = recover_password;

function error_message(){
    return Swal.fire({
      title: 'Error!',
      text: 'El Correo Ingresado No Se Encuentra Registrado.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
};

function success_message(){
    return Swal.fire({
      title: 'Verificación Exitosa',
      text: 'Se han enviado las credenciales al correo ingresado.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
};
  

function recover_password(){
    var Email = document.getElementById('check_mail').value;
    if (Email==""){
        document.getElementById("check_mail").focus();
    }
    else{
        const Api_Recover = GetRequest_Email(Email)
        Api_Recover.then(function(response){
            console.log(response.data["Estatus"])
            if (response.data["Estatus"] == true){
                success_message()
                document.getElementById("check_mail").value=""; 
            }
            else{
                error_message()
                document.getElementById("check_mail").value=""; 
            }
        })
        Api_Recover.catch(function (error){
            error_message()
            document.getElementById("check_mail").value="";
        })
    }
}