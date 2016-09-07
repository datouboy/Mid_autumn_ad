var musicMp3 = new Audio();
musicMp3.src = './images/music.mp3';
musicMp3.load();

//加载图片进度条
var imgArray = $("img");
var loadImg = [];

for (var i=0; i<$(imgArray).length; i++){
    loadImg.push($(imgArray[i]).attr("src"));
}

var imgsNum = loadImg.length;
var nowNum = 0;
var nowPercentage = 0;

var loadingI = 0;
loadingFun(loadingI);
function loadingFun(i){
    var newImg = new Image();
    newImg.src = loadImg[i];

    newImg.onload = function() {
        nowNum++;
        if (nowNum == imgsNum) {
            startAnimation();
        };
        nowPercentage = Math.round(nowNum / imgsNum * 100);
        $("#moonBoxMark").css({
            "left": 0.3 + ((4-1.6)*(nowPercentage/100)) + "rem",
            "top": 0.3 + ((4-1.6)*(nowPercentage/100)) + "rem"
        })
        $("#ladingNum").html("LADING " + nowPercentage + '% ...')
    }
    loadingI++;
    if(loadingI < loadImg.length){
        setTimeout(function(){
            loadingFun(loadingI);
        },20);
    }
}
/*for (var i = 0; i < imgsNum; i++) {
    var newImg = new Image();
    newImg.src = loadImg[i];

    newImg.onload = function() {
        nowNum++;
        if (nowNum == imgsNum) {
            startAnimation();
        };
        nowPercentage = Math.round(nowNum / imgsNum * 100);
        $("#moonBoxMark").css({
            "left": 0.3 + ((4-1.6)*(nowPercentage/100)) + "rem",
            "top": 0.3 + ((4-1.6)*(nowPercentage/100)) + "rem"
        })
        $("#ladingNum").html("LADING " + nowPercentage + '% ...')
    }
};*/

function startAnimation(){
    $("#ladingPage").fadeOut(300);
    setTimeout(function(){
        animation_step1();
    },400)
};

/**/

//点击跳转至第二步动画
$("#step1_fangda").click(function(){
    step1_hide();
})

//第二部，拖动窗口后，跳转至第三部动画
var pageHeight = document.documentElement.clientHeight;
var pageWidth = document.documentElement.clientWidth;
var dragPageHeight = pageHeight*0.35;
var step2_fang_bottom_box_h_default;
var step2_fang_bottom_box_b_default;
var step2_fang_bottom_middle_h_default;
var step2_fang_bottom_box_h;
var step2_fang_bottom_box_b;
var step2_fang_bottom_top_h;
var step2_fang_bottom_middle_h;
var step2_fang_bottom_bottom_h;

var step2_text_1_h;
var step2_text_2_h;
var step2_text_3_h;
var step2_text_4_h;
var step2_text_5_h;

var step2_text_1_t;
var step2_text_2_t;
var step2_text_3_t;
var step2_text_4_t;
var step2_text_5_t;

var step2_text_1_l;
var step2_text_2_l;
var step2_text_3_l;
var step2_text_4_l;
var step2_text_5_l;

/*$("#step2_text_1").css({"height":step2_text_1_h+"px"});
$("#step2_text_2").css({"height":step2_text_2_h+"px"});
$("#step2_text_3").css({"height":step2_text_3_h+"px"});
$("#step2_text_4").css({"height":step2_text_4_h+"px"});
$("#step2_text_5").css({"height":step2_text_5_h+"px"});*/

var dragUpBox = document.getElementById('drag_up_fun');
var sumok = true;
dragUpBox.addEventListener('touchmove', function(event) {
    event.preventDefault();//阻止其他事件
    if (event.targetTouches.length == 1) {// 如果这个元素的位置内只有一个手指的话
        var touch = event.targetTouches[0];// 把元素放在手指所在的位置
        if(sumok){
            ybc = touch.pageY;
            sumok = false;
        }
        dragWindows(touch.pageY - ybc);
    }
}, false);
dragUpBox.addEventListener('touchend', function(event) {
    sumok = true;
}, false);

$("#step3_next").click(function(){
    step3_hide();
})

function animation_step1(){
    $("#step1_chang_e").addClass("show");
    $("#step1_chang_e_node").addClass("show");
    $("#step1_wenzi").addClass("show");
    setTimeout(function(){
        $("#step1_moon_where").addClass("show");
        $("#step1_yun").addClass("show");
        $("#step1_sui").addClass("show");
        setTimeout(function(){
            $("#step1_shi_1").addClass("show");
            setTimeout(function(){
                $("#step1_shi_2").addClass("show");
                setTimeout(function(){
                    $("#step1_shi_3").addClass("show");
                    setTimeout(function(){
                        $("#step1_dian").addClass("show");
                        setTimeout(function(){
                            $("#step1_fangda").addClass("show");
                            setTimeout(function(){
                                $("#step1_fangda").addClass("show_loop_start");
                                setTimeout(function(){
                                    $("#step1_fangda").removeClass("show_loop_start").addClass("show_loop");
                                },5200);
                            },1000);
                            setTimeout(function(){
                                $("#step1_where").addClass("show");
                                setTimeout(function(){
                                    $("#step1_where").addClass("show_loop");
                                },1000);
                            },3500);
                        },1000);
                    },1000);
                },700);
            },700);
        },500);
    },200);
}

function step1_hide(){
    $("#step1").fadeOut();
    setTimeout(function(){
        $("#step1").addClass("hide");
        animation_step2();
    },500);
}

function animation_step2(){
    $("#step2_fang_top").addClass("show");
    $("#step2_fang_bottom_box").addClass("show");

    step2_fang_bottom_box_h_default = $("#step2_fang_bottom_box").height();
    step2_fang_bottom_box_b_default = $("#step2_fang_bottom_box").css("bottom").replace(/px/g,"");
    step2_fang_bottom_middle_h_default = $("#step2_fang_bottom_middle").height();
    step2_fang_bottom_box_h = $("#step2_fang_bottom_box").height();
    step2_fang_bottom_top_h = $("#step2_fang_bottom_top").height();
    step2_fang_bottom_middle_h = $("#step2_fang_bottom_middle").height();
    step2_fang_bottom_bottom_h = $("#step2_fang_bottom_bottom").height();

    $("#step2_fang_bottom_box").css({"height":step2_fang_bottom_box_h + "px"});
    $("#step2_fang_bottom_top").css({"height":step2_fang_bottom_top_h + "px"});
    $("#step2_fang_bottom_middle").css({"height":step2_fang_bottom_middle_h + "px"});
    $("#step2_fang_bottom_bottom").css({"height":step2_fang_bottom_bottom_h + "px"});

    setTimeout(function(){
        $("#step2_text_1").addClass("show");
        setTimeout(function(){
            $("#step2_text_2").addClass("show");
            setTimeout(function(){
                $("#step2_text_2").addClass("show_loop");
            },2000);
            setTimeout(function(){
                $("#step2_text_3").addClass("show");
                setTimeout(function(){
                    $("#step2_text_4").addClass("show");
                    $("#step2_text_5").addClass("show");
                    setTimeout(function(){
                        $("#step2_text_4").addClass("show_loop");
                        $("#step2_text_5").addClass("show_loop");
                        $("#step2_libai").addClass("show");
                        setTimeout(function(){
                            $("#step2_libai_yan").addClass("show");
                            $("#step2_libai_han").addClass("show");
                        },1700);
                        setTimeout(function(){
                            $(".drag_up_box").addClass("show");
                            $("#drag_up").addClass("show");
                            setTimeout(function(){
                                step2_text_1_h = $("#step2_text_1").height();
                                step2_text_2_h = $("#step2_text_2").height();
                                step2_text_3_h = $("#step2_text_3").height();
                                step2_text_4_h = $("#step2_text_4").height();
                                step2_text_5_h = $("#step2_text_5").height();

                                step2_text_1_t = $("#step2_text_1").css("top").replace(/px/g,"");
                                step2_text_2_t = $("#step2_text_2").css("top").replace(/px/g,"");
                                step2_text_3_t = $("#step2_text_3").css("top").replace(/px/g,"");
                                step2_text_4_t = $("#step2_text_4").css("top").replace(/px/g,"");
                                step2_text_5_t = $("#step2_text_5").css("top").replace(/px/g,"");

                                step2_text_1_l = $("#step2_text_1").css("left").replace(/px/g,"");
                                step2_text_2_l = $("#step2_text_2").css("left").replace(/px/g,"");
                                step2_text_3_l = $("#step2_text_3").css("left").replace(/px/g,"");
                                step2_text_4_l = $("#step2_text_4").css("left").replace(/px/g,"");
                                step2_text_5_l = $("#step2_text_5").css("left").replace(/px/g,"");

                                $("#step2_text_1").css({"height":step2_text_1_h+"px"});
                                $("#step2_text_2").css({"height":step2_text_2_h+"px"});
                                $("#step2_text_3").css({"height":step2_text_3_h+"px"});
                                $("#step2_text_4").css({"height":step2_text_4_h+"px"});
                                $("#step2_text_5").css({"height":step2_text_5_h+"px"});

                                $("#drag_up").addClass("show_loop");
                                $("#drag_up_fun").show();
                            },1000);
                        },1000);
                    },1000);
                },500);
            },500);
        },500);
    },500);
}

var step2_hide_state = true;
function dragWindows(addY) {
    if(addY < 0){
        step2_fang_bottom_box_h = step2_fang_bottom_box_h_default + Math.abs(addY*1.5);
        step2_fang_bottom_middle_h = step2_fang_bottom_middle_h_default + Math.abs(addY*1.5);
        //Iphone 在某些情况下，认出的是百分比，不是PX值
        if(step2_fang_bottom_box_b_default.search(/%/g) > 0){
            step2_fang_bottom_box_b = (Math.ceil(step2_fang_bottom_box_b_default.replace(/%/g,"")) - Math.abs(addY*0.09)) + "%";
        }else{
            step2_fang_bottom_box_b = (step2_fang_bottom_box_b_default - Math.abs(addY*0.5)) + "px";
        }

        if(Math.abs(addY) > dragPageHeight){
            if(step2_hide_state){
                step2_hide();
                step2_hide_state = false;
            }
            return;
        }
        step2_text_animation(Math.abs(addY)/dragPageHeight);
    }else{
        step2_fang_bottom_box_h = step2_fang_bottom_box_h_default - Math.abs(addY);
        step2_fang_bottom_middle_h = step2_fang_bottom_middle_h_default - Math.abs(addY);
        step2_fang_bottom_box_h = step2_fang_bottom_box_h <= step2_fang_bottom_box_h_default ? step2_fang_bottom_box_h_default : step2_fang_bottom_box_h;
        step2_fang_bottom_middle_h = step2_fang_bottom_middle_h <= step2_fang_bottom_middle_h_default ? step2_fang_bottom_middle_h_default : step2_fang_bottom_middle_h;
    }

    $("#step2_fang_bottom_box").css({
        "height": step2_fang_bottom_box_h + "px" ,
        "bottom": step2_fang_bottom_box_b
    });

    $("#step2_fang_bottom_middle").css({"height":step2_fang_bottom_middle_h + "px"});
}

function step2_text_animation(addY){
    var xishu = 0.7;
    $("#step2_text_1").css({
        "height":(step2_text_1_h - step2_text_1_h*addY*xishu) +"px" ,
        "top":(step2_text_1_t - step2_text_1_t*addY*xishu) + "px",
        "left":(step2_text_1_l - step2_text_1_l*addY) + "px"
    });
    $("#step2_text_2").css({
        "height":(step2_text_2_h - step2_text_2_h*addY*xishu) +"px" ,
        "top":(step2_text_2_t - step2_text_2_t*addY*xishu) + "px",
        "left":(step2_text_2_l - step2_text_2_l*addY) + "px"
    });
    $("#step2_text_3").css({
        "height":(step2_text_3_h - step2_text_3_h*addY*xishu) +"px" ,
        "top":(step2_text_3_t - step2_text_3_t*addY*xishu) + "px",
        "left":(step2_text_3_l - step2_text_3_l*addY) + "px"
    });
    $("#step2_text_4").css({
        "height":(step2_text_4_h - step2_text_4_h*addY*xishu) +"px" ,
        "top":(step2_text_4_t - step2_text_4_t*addY*xishu) + "px",
        "left":(step2_text_4_l - step2_text_4_l*addY) + "px"
    });
    $("#step2_text_5").css({
        "height":(step2_text_5_h - step2_text_5_h*addY*xishu) +"px" ,
        "top":(step2_text_5_t - step2_text_5_t*addY*xishu) + "px",
        "left":(step2_text_5_l - step2_text_5_l*addY*0.2) + "px"
    });
}

function step2_hide(){
    $("drag_up_fun").hide();
    $("#step2_fang_top").animate({"top": '-'+(pageHeight*0.3)}, 600);
    $("#step2_fang_bottom_box").animate({
        "height": ($("#step2_fang_bottom_box").height() + pageHeight*0.3) + "px",
        "bottom": (Math.ceil($("#step2_fang_bottom_box").css("bottom").replace(/px/g,"")) - pageHeight*0.05) + "px"
    }, 600);
    $("#step2_fang_bottom_middle").animate({
        "height": ($("#step2_fang_bottom_middle").height() + pageHeight*0.3) + "px"
    }, 600);
    animate_alex("step2_text_1", $("#step2_text_1").css("left").replace(/px/g,""));
    animate_alex("step2_text_2", $("#step2_text_2").css("left").replace(/px/g,""));
    animate_alex("step2_text_3", $("#step2_text_3").css("left").replace(/px/g,""));
    animate_alex("step2_text_4", $("#step2_text_4").css("left").replace(/px/g,""));
    animate_alex("step2_text_5", $("#step2_text_5").css("left").replace(/px/g,""));
    /*$("#step2_text_1").animate({left: '-'+pageWidth}, 300);
    $("#step2_text_2").animate({left: '-'+pageWidth}, 300);
    $("#step2_text_3").animate({left: '-'+pageWidth}, 300);
    $("#step2_text_4").animate({left: '-'+pageWidth}, 300);
    $("#step2_text_5").animate({left: '-'+pageWidth}, 300);*/
    setTimeout(function(){
        $("#step3").show();
        $("#step2").fadeOut();
        setTimeout(function(){
            $("#step2").addClass("hide");
            animation_step3();
        },500);
    },700);
}

function animate_alex(id,b){
    //console.log(Math.ceil(b));
    var newB = Math.ceil(b);
    var leftNum;
    var t=0, c=-pageWidth; d=70;
    var setRun = setInterval(function(){
        if(t<d){
            t++;
            //t => time(初始记步次数)   b => begin(初始位置)   c => change(变化量)   d => duration(持续次数)
            leftNum = Math.ceil(Tween.Back.easeIn(t,newB,c,d));
            $("#"+id).css({"left": leftNum+"px"});
        }else{
            clearInterval(setRun);
        }
    }, 10);
}

function animation_step3(){
    $("#step3_window").addClass("show");
    setTimeout(function(){
        $("#step3_moon").addClass("show");
        $("#lvdiLogo").addClass("white");
        setTimeout(function(){
            $("#step3_text").addClass("show");
            setTimeout(function(){
                $("#step3_moon").addClass("show_loop");
                $("#step3_text").addClass("show_loop");
            },1500);
            setTimeout(function(){
                $("#step3_next").addClass("show");
                setTimeout(function(){
                    $("#step3_next").addClass("show_loop");
                },1200);
            },1000);
        },1000);
    },1000);
}

function step3_hide(){
    $("#step3").fadeOut();
    setTimeout(function(){
        $("#step3").addClass("hide");
        animation_step4();
    },500);
}

function animation_step4(){
    $("#lvdiLogo").removeClass("white");
    $("#logoBlack").fadeOut(300);
    $("#step4_lvdi_logo").addClass("show");
    setTimeout(function(){
        $("#step4_moon").addClass("show");
        setTimeout(function(){
            $("#step4_text_1").addClass("show");
            setTimeout(function(){
                $("#step4_moon").addClass("show_loop");
                $("#step4_text_2").addClass("show");
                setTimeout(function(){
                    $("#step4_text_2").addClass("show_loop");
                    $("#step4_qrcode").addClass("show");
                },1000);
            },300);
        },1000);
    },200);
}

$("#previous").click(function(){
    //location.reload();
    //location.replace(location);
    window.location = '/';
})

var audio = document.getElementById("Jaudio");
var musicPlay = true;
$("#musicMenu").click(function(){
    if(musicPlay){
        audio.pause();
        $("#musicMenu").removeClass("show_loop");
        musicPlay = false;
    }else{
        audioAutoPlay();
        $("#musicMenu").addClass("show_loop");
        musicPlay = true;
    }
})
/*var musicOpenMenu = document.getElementById('musicMenu');
musicOpenMenu.addEventListener('touchstart', function(event) {
    console.log(1);
    if(musicPlay){
        audio.pause();
        $("#musicMenu").removeClass("show_loop");
        musicPlay = false;
    }else{
        audioAutoPlay();
        $("#musicMenu").addClass("show_loop");
        musicPlay = true;
    }
}, false);*/

function audioAutoPlay(){
    var play = function(){
            audio.play();
            document.removeEventListener("touchstart",play, false);
        };
    audio.play();
    document.addEventListener("WeixinJSBridgeReady", function () {
        play();
    }, false);
    document.addEventListener('YixinJSBridgeReady', function() {
        play();
    }, false);
    document.addEventListener("touchstart",play, false);
}
audioAutoPlay('Jaudio');

var Tween = {
    Back: {
        easeIn: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        }
    }
};