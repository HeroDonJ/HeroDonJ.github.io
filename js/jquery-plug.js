(function(){
    //左滑动效果
    $.fn.ownSwipeLeft = function(event,classname){
        var that = $(this);
        $('body').on(event,function(){
            that.addClass(classname);
        });
        that[0].addEventListener("webkitAnimationEnd", function(){
            this.className="cube";
        }, false);
    };
})($)