import {PYTHON_URL} from '../urls'

//Api to login
export function PostRequest_Login(user, password){
    return axios({
        method: 'POST',
        url: PYTHON_URL+'api/token/',
        data:{
            email:user,
            password:password,
        },
    })
};

//Api to verify access to a certain portal
export function GetRequest_CheckPort(email){
    return axios({
        method: 'GET',
        url: PYTHON_URL+'api/token/datos/'+email,
    })
};

//Api to verify the token
export function Post_VeryToken(Token){
    return axios({
        method: 'POST',
        url: PYTHON_URL+'api/token/verify/',
        data:{
            token:Token,
        },
    })
};

//Api to recover password
export function GetRequest_Email(email){
    return axios({
        method: 'GET',
        url: PYTHON_URL+'api/recuperacion_contrasena/'+email,
    })
};