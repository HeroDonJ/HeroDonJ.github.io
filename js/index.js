$(function(){
    //正方体的旋转事件
    // $(".cube").ownSwipe('swipeLeft','roundleft');
    // $(".cube").ownSwipe('swipeRight','roundright');
    // $(".cube").ownSwipe('swipeUp','roundup');
    // $(".cube").ownSwipe('swipeDown','rounddown');

    $("#switch").on("click",function(){
        $(".header").toggleClass('moveout');
        $(".content").toggleClass("moveout");
        $(".aside").toggleClass("moveto");
    })


});