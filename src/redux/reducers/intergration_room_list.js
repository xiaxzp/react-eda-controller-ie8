import {INCREMENT} from '../actions/intergration_room_list'
import {DECREMENT, RESET} from "actions/counter";
const initState = {
    roomlistCount: 0,
    roomList:[]
};
export default function reducer(state = initState, action) {
    console.log(action.type)
    switch (action.type) {
        case INCREMENT:
            var tplist = state.roomList;
            tplist.push({
                id:state.roomList.length,
                name: 'room'+state.roomList.length,
                address: '199999',
                protocol:'rtsp'
            })
            return {
                roomlistCount: state.roomList.length,
                roomList:tplist
            };
        default:
            return state
    }
}
