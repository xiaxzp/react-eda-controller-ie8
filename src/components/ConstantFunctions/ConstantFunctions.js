export default function(){
    var warper = {};
    warper.calcHeight = function () {
        var height = 0;
        if(window.innerHeight){
            height = window.innerHeight;
        }
        else{
            height = document.body.clientHeight;
        }
        console.log(height);
        return height;
    }
    warper.addHandler = function(element,type,handler){
        if(element.addEventListener){//检测是否为DOM2级方法
            console.log('addevent')
            element.addEventListener(type, handler, false);
        }else if (element.attachEvent){//检测是否为IE级方法
            element.attachEvent("on" + type, handler);
        } else {//检测是否为DOM0级方法
            element["on" + type] = handler;
        }
    }
    warper.removeHandler = function(element, type, handler){
        if (element.removeEventListener){
            console.log('removeevent')
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent){
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    }
    return warper;
}