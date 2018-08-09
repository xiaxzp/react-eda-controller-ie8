import {USERPOWER_GET} from "actions/userPower";
const initState = {
    userPowerGet: 0
};
export default function reducer(state = initState, action) {
    console.log(action.type)
    switch (action.type) {
        case USERPOWER_GET:
            return {
                userPowerGet: state.userPowerGet + 1
            };
        default:
            return state
    }
}