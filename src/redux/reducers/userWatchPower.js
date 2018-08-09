import {USER_WATCH_POWER_GET} from "actions/userWatchPower";
const initState = {
    userWatchPowerGet: 0
};
export default function reducer(state = initState, action) {
    console.log(action.type)
    switch (action.type) {
        case USER_WATCH_POWER_GET:
            return {
                userWatchPowerGet: state.userWatchPowerGet + 1
            };
        default:
            return state
    }
}