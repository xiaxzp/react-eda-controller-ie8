import {GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL,POST_LOGIN} from 'actions/userInfo';


const initState = {
    isLoading: false,
    userInfo: {},
    LoginInfo:{},
    errorMsg: ''
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_USER_INFO_REQUEST:
            return {
                ...state,
                isLoading: true,
                userInfo: {},
                errorMsg: ''
            };
        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userInfo: action.result.data,
                errorMsg: ''
            };
        case POST_LOGIN:
            //console.log(JSON.stringify(action.result))
            //console.log(JSON.stringify(action.result.config))
            return {
                ...state,
                isLoading: false,
                LoginInfo: action.result.data,
                errorMsg: ''
            };
        case GET_USER_INFO_FAIL:
            return {
                ...state,
                isLoading: false,
                userInfo: {},
                errorMsg: '请求错误'
            };
        default:
            return state;
    }
}