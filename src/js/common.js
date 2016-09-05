setTimeout(function(){
    animation_step1();
    //step1_hide();
    //animation_step2();
    //animation_step4();
},30)

//点击跳转至第二步动画
$("#step1_fangda").click(function(){
    step1_hide();
})

//第二部，拖动窗口后，跳转至第三部动画
var pageHeight = document.documentElement.clientHeight;
var pageWidth = document.documentElement.clientWidth;
var dragPageHeight = pageHeight*0.25;
var step2_fang_bottom_box_h_default;
var step2_fang_bottom_middle_h_default;
var step2_fang_bottom_box_h;
var step2_fang_bottom_top_h;
var step2_fang_bottom_middle_h;
var step2_fang_bottom_bottom_h;

var step2_text_1_h = $("#step2_text_1").height();
var step2_text_2_h = $("#step2_text_2").height();
var step2_text_3_h = $("#step2_text_3").height();
var step2_text_4_h = $("#step2_text_4").height();
var step2_text_5_h = $("#step2_text_5").height();

var step2_text_1_t = $("#step2_text_1").css("top").replace(/px/g,"");
var step2_text_2_t = $("#step2_text_2").css("top").replace(/px/g,"");
var step2_text_3_t = $("#step2_text_3").css("top").replace(/px/g,"");
var step2_text_4_t = $("#step2_text_4").css("top").replace(/px/g,"");
var step2_text_5_t = $("#step2_text_5").css("top").replace(/px/g,"");

$("#step2_text_1").css({"height":step2_text_1_h+"px"});
$("#step2_text_2").css({"height":step2_text_2_h+"px"});
$("#step2_text_3").css({"height":step2_text_3_h+"px"});
$("#step2_text_4").css({"height":step2_text_4_h+"px"});
$("#step2_text_5").css({"height":step2_text_5_h+"px"});

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
                            $("#step1_where").addClass("show");
                            setTimeout(function(){
                                $("#step1_where").addClass("show_loop");
                                $("#step1_fangda").addClass("show");
                                setTimeout(function(){
                                    $("#step1_fangda").addClass("show_loop");
                                },1000);
                            },1000);
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

function dragWindows(addY) {
    if(addY < 0){
        step2_fang_bottom_box_h = step2_fang_bottom_box_h_default + Math.abs(addY);
        step2_fang_bottom_middle_h = step2_fang_bottom_middle_h_default + Math.abs(addY);

        if(Math.abs(addY) > dragPageHeight){
            step2_hide();
            return;
        }
        step2_text_animation(Math.abs(addY)/dragPageHeight);
    }else{
        step2_fang_bottom_box_h = step2_fang_bottom_box_h_default - Math.abs(addY);
        step2_fang_bottom_middle_h = step2_fang_bottom_middle_h_default - Math.abs(addY);
        step2_fang_bottom_box_h = step2_fang_bottom_box_h <= step2_fang_bottom_box_h_default ? step2_fang_bottom_box_h_default : step2_fang_bottom_box_h;
        step2_fang_bottom_middle_h = step2_fang_bottom_middle_h <= step2_fang_bottom_middle_h_default ? step2_fang_bottom_middle_h_default : step2_fang_bottom_middle_h;
    }

    $("#step2_fang_bottom_box").css({"height":step2_fang_bottom_box_h + "px"});
    $("#step2_fang_bottom_middle").css({"height":step2_fang_bottom_middle_h + "px"});
}

function step2_text_animation(addY){
    var xishu = 0.5;
    $("#step2_text_1").css({"height":(step2_text_1_h - step2_text_1_h*addY*xishu) +"px" , "top":(step2_text_1_t - step2_text_1_t*addY*xishu) + "px"});
    $("#step2_text_2").css({"height":(step2_text_2_h - step2_text_2_h*addY*xishu) +"px" , "top":(step2_text_2_t - step2_text_2_t*addY*xishu) + "px"});
    $("#step2_text_3").css({"height":(step2_text_3_h - step2_text_3_h*addY*xishu) +"px" , "top":(step2_text_3_t - step2_text_3_t*addY*xishu) + "px"});
    $("#step2_text_4").css({"height":(step2_text_4_h - step2_text_4_h*addY*xishu) +"px" , "top":(step2_text_4_t - step2_text_4_t*addY*xishu) + "px"});
    $("#step2_text_5").css({"height":(step2_text_5_h - step2_text_5_h*addY*xishu) +"px" , "top":(step2_text_5_t - step2_text_5_t*addY*xishu) + "px"});
}

function step2_hide(){
    $("drag_up_fun").hide();
    $("#step2_text_1").animate({left: '-'+pageWidth}, 300);
    $("#step2_text_2").animate({left: '-'+pageWidth}, 300);
    $("#step2_text_3").animate({left: '-'+pageWidth}, 300);
    $("#step2_text_4").animate({left: '-'+pageWidth}, 300);
    $("#step2_text_5").animate({left: '-'+pageWidth}, 300);
    setTimeout(function(){
        $("#step3").show();
        $("#step2").fadeOut();
        setTimeout(function(){
            $("#step2").addClass("hide");
            animation_step3();
        },500);
    },500);
}

function animation_step3(){
    $("#step3_moon").addClass("show");
    setTimeout(function(){
        $("#step3_window").addClass("show");
        $("#lvdiLogo").addClass("white");
        setTimeout(function(){
            $("#step3_text").addClass("show");
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
                $("#step4_text_2").addClass("show");
                setTimeout(function(){
                    $("#step4_text_2").addClass("show_loop");
                    $("#step4_qrcode").addClass("show");
                },1000);
            },300);
        },1000);
    },200);
}