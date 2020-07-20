var current = 0;
var old = 0;
var letters = ["k","u","s","u2","m"];
var code = [0,0,0,0,0,0,0,0];
var real = [0,2,1,4,1,0,1,0];
/*KUKUMUSK*/
var debounce = false
var ele = document.getElementsByClassName("side")[0].children;
var pads = document.getElementsByClassName("pad");
var selects = document.getElementsByClassName("select");
var pgs = document.getElementsByTagName("pg");
var bg = document.getElementsByClassName("bg")[0];
var troll = document.getElementsByTagName("troll")[0];
var monk = document.getElementById("monk");
var monkt = document.getElementById("monktest");
ele[0].classList.add("glow")
pads[4-current].style.borderBottomRightRadius = "0px";
selects[4-current].style.borderBottomRightRadius = "0px";
selects[4-current].style.cursor = "auto";
pgs[0].style.opacity = "1";
bg.style.backgroundColor = pads[4-current].style.backgroundColor;
function roll(event) {
    if(!debounce){
        debounce = true
        var y = event.deltaY;
        if(y>0 && current < 4){
            current++;
        }
        else if(y<0 && current > 0){
            current--;
        }
        if(current != old){
            if(current==3 && Math.random() < .7){
                monk.innerHTML = "Unpredictable"
            }
            else if(current==3){
                monk.innerHTML = monkt.innerHTML
            }
            ele[old].classList.remove("glow");
            ele[current].classList.add("glow");
            pads[4-current].style.borderBottomRightRadius = "0px";
            pads[4-old].style.borderBottomRightRadius = "40px";
            selects[4-current].style.borderBottomRightRadius = "0px";
            selects[4-old].style.borderBottomRightRadius = "40px";
            selects[4-current].style.cursor = "auto";
            selects[4-old].style.cursor = "pointer";
            pgs[old].animate(
            {opacity: [1,0]},300);
            pgs[current].animate(
            {opacity: [0,1]},300);
            code.pop();
            if(current == 3){
                code.unshift(1);
            }
            else{
                code.unshift(current);
            }
            if(check()){
                return true
            }
            bg.animate(
            {backgroundColor: [bg.style.backgroundColor,pads[4-current].style.backgroundColor]},300);
            light(current);
        }
        setTimeout(function(){debounce = false},300)
        bg.style.backgroundColor = pads[4-current].style.backgroundColor;
        pgs[old].style.opacity = "0";
        pgs[current].style.opacity = "1";
        old = current;
    }
  }
function select(num){
    if(num != current && !debounce){
        debounce = true
        old = current
        current = num
        if(current==3 && Math.random() < .7){
            monk.innerHTML = "Unpredictable"
        }
        else if(current==3){
            monk.innerHTML = monkt.innerHTML
        }
        ele[old].classList.remove("glow");
        ele[current].classList.add("glow");
        pads[4-current].style.borderBottomRightRadius = "0px";
        pads[4-old].style.borderBottomRightRadius = "40px";
        selects[4-current].style.borderBottomRightRadius = "0px";
        selects[4-old].style.borderBottomRightRadius = "40px";
        selects[4-current].style.cursor = "auto";
        selects[4-old].style.cursor = "pointer";
        pgs[old].animate(
        {opacity: [1,0]},300);
        pgs[current].animate(
        {opacity: [0,1]},300);
        code.pop();
        if(current == 3){
            code.unshift(1);
        }
        else{
            code.unshift(current);
        }
        if(check()){
            return true
        }
        bg.animate(
            {backgroundColor: [bg.style.backgroundColor,pads[4-current].style.backgroundColor]},300);
        light(current);
        setTimeout(function(){debounce = false},300)
        bg.style.backgroundColor = pads[4-current].style.backgroundColor;
        pgs[old].style.opacity = "0";
        pgs[current].style.opacity = "1";
        old = current
    }
}
function dark(n){
    if(n!= current){
        pads[4-n].style.filter = "brightness(70%)";
    }
}
function light(n){
    pads[4-n].style.filter = "brightness(100%)";
}
function check(){
    var hmmm = true
    for(var i=0;i<code.length;i++){
        if(code[i]!=real[i]){
            hmmm = false
        }
    }
    if(hmmm){
        alert(":)")
        troll.style.opacity = "1";
        troll.style.zIndex = "99";
    }
    return hmmm
}