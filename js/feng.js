
function getCss(cur,arrt){
    var value=null;
    var reg=null;
    if('getComputedStyle' in window){
        value=getComputedStyle(cur,null)[arrt];
    }else{
        if(arrt=='opacity'){
            value=cur.currentStyle.filter;
            reg=/^alpha\(opacity[=:](\d+)\)$/i;
            return reg.test(value)?reg.exec(value)[1]/100:1;
        }
        value=cur.currentStyle[arrt];
    }
    return varle=parseFloat(value);
}


function setCss(cur,arrt,value) {
    if (arrt == 'float') {
        cur.style.cssFloat = value;
        cur.style.styleFloat = value;
        return;
    }
    if (arrt == 'opacity') {
        cur.style.opacity = value;
        cur.style.filter = 'alpha(opaction=' + value * 100 + '';
        return;
    }

    var reg = /^(width|height|top|bottom|left|right|(margin|padding)(top|bottom|left|right)(px|pt|em|rem))$/gi;
    if (reg.test(arrt)) {
        if (!(value == 'auto') || (value.toString().indexOf('%') == -1)) {

            value = parseFloat(value) + 'px';
        }
        cur.style[arrt] = value;
    }
}


function setGroup(cur,option){
    if(option.toString()!=='[object Object]')
    return;
    for(var arrt in option){
        setCss(cur,arrt,option[arrt]);
    }
}

function css(cur){
    var arr2=arguments[1];
    if(typeof  arr2=='string'){
        var arr3=arguments[2];
        if(typeof  arr3=='undefined'){
            return getCss(cur,arr2);
        }else{
            return setCss(cur,arr2,arr3);
        }
    }
    if(arr2.toString()=='[object Object]'){
        return setGroup(cur,arr2);
    }
}

