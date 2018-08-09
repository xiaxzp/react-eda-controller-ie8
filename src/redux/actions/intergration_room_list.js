import {SERVER_URL , getHeaders} from 'actions/server_IP';
export const GET_USER_INFO_REQUEST = "userInfo/GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "userInfo/GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAIL = "userInfo/GET_USER_INFO_FAIL";
export const POST_LOGIN = "userInfo/POST_LOGIN";
export const INCREMENT = "RoomCounter/INCREMENT";
export const DECREMENT = "counter/DECREMENT";
export const RESET = "counter/RESET";

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
export function increment() {
    return {type: INCREMENT}
}