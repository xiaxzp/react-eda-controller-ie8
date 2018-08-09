import {USERLIST_ADD,USERLIST_CHANGEWATCH,USERLIST_CHANGEINTERGRATE} from "actions/userCounter";
const initState = {
    userList: [],
    userListCounts:0
};
export default function reducer(state = initState, action) {
    console.log(action.type)
    switch (action.type) {
        case USERLIST_ADD:
            var tplist = state.userList;
            tplist.push({
                id:state.userList.length,
                name:'user'+state.userList.length,
                state:'offline',watchPower:['a','b','aa','bb'],
                intergratePower:['c','d']});
            console.log(state.userList)
            return {
                userList: tplist,
                userListCounts:tplist.length
            };
        case USERLIST_CHANGEWATCH:
            var tplist = state.userList;
            tplist[action.ids].watchPower=action.watch;
            return {
                userList: tplist,
                userListCounts:tplist.length
            };
        case USERLIST_CHANGEINTERGRATE:
            var tplist = state.userList;
            tplist[action.ids].intergratePower=action.intergrate;
            return {
                userList: tplist,
                userListCounts:tplist.length
            };
        default:
            return state
    }
}