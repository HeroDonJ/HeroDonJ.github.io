(function(){
    //左滑动效果
    $.fn.ownSwipeLeft = function(event,classname){
        $(this).on(event,function(){
            $(this).addClass(classname);
        });
        $(this)[0].addEventListener("webkitAnimationEnd", function(){
            this.className="cube";
        }, false);
    };
})($)