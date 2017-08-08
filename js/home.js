//3d动画

var box = document.getElementById('box');
var lis = box.querySelectorAll('li');
console.log(lis);
var style = document.querySelector('style');

for (var i = 0; i < lis.length; i++) {
    (function (i) {
        window.setTimeout(function () {
            style.innerHTML += "#box ol li:nth-child(" + (i + 1) + "){transform:rotateY(" + (lis.length - 1 - i) * 30 + "deg)translateZ(450px);transition:0.7s;transition-delay:" + i * 0.1 + "s}"
        }, i * 300)
    })(i)
}

//选项卡1

$("#ul li").mouseover(function () {
    $("#ul li").eq($(this).index()).addClass("on").siblings().removeClass('on');
    $("#gong ul").hide().eq($(this).index()).show();
})


//轮播部分
var bodyH = document.getElementById('bodyH');
var banner = document.getElementById('banner');
var divs = banner.getElementsByTagName('div');
var hoz = document.getElementById('hoz');
var lia = hoz.getElementsByTagName('a');
var step = 0;
var timer = null;


banner.innerHTML += '<div><img src="images/1499882247319933383.jpg" alt=""/></div>';
css(banner, 'width', divs.length * divs[0].offsetWidth);
console.log(banner);

clearInterval(timer);
timer = setInterval(auto, 2000);
function auto() {
    if (step >= divs.length - 1) {
        step = 0;
        css(banner, 'left', 0);
    }
    step++;
    animate({
        curEle: banner,
        target: {
            left: -step * divs[0].offsetWidth
        },
        durction: 1000
    });
    tip();
}


function tip() {
    var temp = step >= divs.length - 1 ? 0 : step;
    for (var i = 0; i < lia.length; i++) {
        lia[i].className = i == temp ? 'xian' : null;
    }
}

bodyH.onmouseover = function () {
    clearInterval(timer);
}
bodyH.onmouseout = function () {
    timer = setInterval(auto, 2000);
}

hand();
function hand() {
    for (var i = 0; i < lia.length; i++) {
        lia[i].index = i;
        lia[i].onmouseover = function () {
            step = this.index;
            animate({
                curEle: banner,
                target: {
                    left: -step * divs[0].offsetWidth
                },
                durction: 10
            });
            tip();
        }
    }
}

//选项卡2

$("#list li").mouseover(function () {
    $("#list li").eq($(this).index()).addClass("down").siblings().removeClass('down');
    $(".list").hide().eq($(this).index()).show();
})

//选项卡3
$("#list1 li").mouseover(function () {
    $("#list1 li").eq($(this).index()).addClass("down1").siblings().removeClass('down1');
    $(".list1").hide().eq($(this).index()).show();
})

//显示
//var fourth=document.getElementById('fourth');
$('#fourth').mouseover(function(){
    $('#fourth ul').show();
})
$('#fourth').mouseout(function(){
    $('#fourth ul').hide();
})