function move(ele,tarentObj,time = 1000,callback) {
    if(typeof ele == 'string'){
        ele = document.querySelector(ele);
    }
    clearInterval(ele.timer);
    var speedObj = {};
    var initObj = {};
    for (var i in tarentObj){
        if (i  == 'opacity'){
            initObj[i] = parseFloat(getStyle(ele,i)) * 100;
        }
        initObj[i] = parseFloat(getStyle(ele,i));

       speedObj[i] = (tarentObj[i] - parseFloat(getStyle(ele,i))) / time * 10;

    }
    ele.timer = setInterval(function () {
        var flag = true;
        for(var i in tarentObj){
            initObj[i] += speedObj[i];
            if((initObj[i] >= tarentObj[i] && speedObj[i] >= 0) || (initObj[i] <= tarentObj[i] && speedObj[i] <= 0)){
                initObj[i] = tarentObj[i];

            }else {
                flag = false;
            }

            if(i == 'opacity'){
                ele.style[i] = initObj[i] / 100;
                console.log(ele.style[i])
            }else {
                ele.style[i] = initObj[i] + 'px';

            }

        }
        if(flag){
            clearInterval(ele.timer);
            if(typeof callback == 'function'){
                callback(ele)
            }
        }
    },10)
}
function getStyle(ele,attr) {
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr]
    }
    return ele.currentStyle[attr]
}
