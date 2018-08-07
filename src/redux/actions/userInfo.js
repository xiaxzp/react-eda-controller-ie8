import {SERVER_URL} from 'actions/server_IP';
export const GET_USER_INFO_REQUEST = "userInfo/GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "userInfo/GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAIL = "userInfo/GET_USER_INFO_FAIL";
export const POST_LOGIN = "userInfo/POST_LOGIN";
function getAuthorization() {
    try{
        if(sessionStorage){
            return 'Bearer ' + sessionStorage['authenticationToken'];
        }
    }catch (e){
        var mainObj = document.getElementById('userData');
        try{
            mainObj.load('LoginDataStore');
            console.log(mainObj.getAttribute('authenticationToken'));
            return 'Bearer ' + mainObj.getAttribute('authenticationToken');
        }catch(e){

        }
    }
}

function getHeaders() {
    let headers = {};
    headers['Content-Type']= 'text/plain';
    //headers['Accept']= 'application/json';
    headers['Authorization']= getAuthorization();
   // headers['Mime-Type'] = 'application/json;charset=UTF-8';
    //console.log(JSON.stringify(headers))
    return headers;
}
export function getUserInfo() {
    return {
        types: [GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL],
        promise: client => client.get(`/api/user.json`,{headers:getHeaders()})
    }
}
export function Login(username,password){
    var userDto = {
        "username":username,
        "password":password
    };
    return{
        types: [GET_USER_INFO_REQUEST, POST_LOGIN, GET_USER_INFO_FAIL],
        promise: client => client.post(`${SERVER_URL}/api/userManager/login`,userDto,{headers:getHeaders()})
    }
}