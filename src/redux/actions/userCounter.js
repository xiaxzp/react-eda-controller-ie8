
export const USERLIST_GET = "userList/GET";
export const USERLIST_ADD = "userList/ADD";
export const USERLIST_CHANGEWATCH = "userList/CHANGEWATCH";
export const USERLIST_CHANGEINTERGRATE = "userList/CHANGEINTERGRATE";

export function userlist_add() {
    return {type: USERLIST_ADD}
}
export function userlist_changewatch(id,watch) {
    return{
        type:USERLIST_CHANGEWATCH,
        ids:id,
        watch:watch
    }
}
export function userlist_changeintergrate(id,intergrate) {
    return{
        type:USERLIST_CHANGEINTERGRATE,
        ids:id,
        intergrate:intergrate
    }
}