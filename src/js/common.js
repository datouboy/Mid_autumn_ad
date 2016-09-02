setTimeout(function(){
    animation_step1();
    //step1_hide();
    //animation_step2();
},30)

//点击跳转至第二步动画
$("#step1_fangda").click(function(){
    step1_hide();
})

//第二部，拖动窗口后，跳转至第三部动画
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
        console.log(touch.pageY - ybc);
    }
}, false);
dragUpBox.addEventListener('touchend', function(event) {
    sumok = true;
}, false);

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
    $("#step2_fang_bottom").addClass("show");
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