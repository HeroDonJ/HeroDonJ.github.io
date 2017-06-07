$(function(){
    //正方体的旋转事件
    // $(".cube").ownSwipe('swipeLeft','roundleft');
    // $(".cube").ownSwipe('swipeRight','roundright');
    // $(".cube").ownSwipe('swipeUp','roundup');
    // $(".cube").ownSwipe('swipeDown','rounddown');
    var flag = true;
    $("#switch").on("click",function(){
        if(flag){
            $(".header").addClass('moveout');
            $(".content").addClass("moveout")
            $(".aside").addClass("moveto");
            flag = false;
        }else{
            $(".header").removeClass('moveout');
            $(".content").removeClass("moveout")
            $(".aside").removeClass("moveto")
            flag = true;
        }

    })


});