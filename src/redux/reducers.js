import {combineReducers} from "redux";

import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';
import intergration_room_list from 'reducers/intergration_room_list'
import userPower from 'reducers/userPower'
import userWatchPower from 'reducers/userWatchPower'
import userCounter from 'reducers/userCounter'

export default combineReducers({
    counter,
    userInfo,
    intergration_room_list,
    userWatchPower,
    userCounter
});