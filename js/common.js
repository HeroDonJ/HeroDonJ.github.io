define(['jquery','iscroll','data','template','zepto','touch'],function($,sro,data,template,z$){
    function rightClick(){
        $(".header").toggleClass('moveout');
        $(".content").toggleClass("moveout");
        $(".aside").toggleClass("moveto");
    }
    // 点击右滑效果
    $("#switch").on("click",function(){
        rightClick();
    });

    // 滑动事件
    z$("body").swipeRight(function(){
        z$(".header").addClass('moveout');
        z$(".content").addClass("moveout");
        z$(".aside").addClass("moveto");
    })
    z$("body").swipeLeft(function(){
        z$(".header").removeClass('moveout');
        z$(".content").removeClass("moveout");
        z$(".aside").removeClass("moveto");
    })
    //设置载入数据
    var attr = data.attr;
    var mainData = data.mainData;

    //为右侧菜单栏设置自定义属性
    var asideObjs = $(".aside .navs").find("li");
    for(var i = 0;i<asideObjs.length;i++){
        asideObjs.eq(i).attr('flag',attr[i]);
    };

    //内容区添加默认内容
    var htmlData = mainData.html;
    var html = template('mytpl',{list:htmlData});
    $(".content .lists-con").html(html);
    $(".content .lists-con").find("a").click(function(){
        var title = $(this).text();
        //设置标题文字
        $(".header h3").text(title);
        $.ajax({
            type:'post',
            url : "/view/html/1.php",
            jsonType : 'json',
            success : function(data){
                console.log(data)
                $(".content .lists-con").html(data);

            }
        })
    });
    //iscroll效果
    var iscroll = new sro("#lists");

    //添加事件将指定数据放入内容区
    asideObjs.on("click",function(){
        var title = $(this).find("a").text();
        var flag = $(this).attr('flag');
        var data = mainData[flag];
        var html = template('mytpl',{list:data});
        $(".content .lists-con").html(html);

        //设置标题文字
        $(".header h3").text(title);

        //设置侧边栏样式
        $(".aside .navs").find("a").css('color','#6A6B7D');
        $(this).css({'background-color':'#EB354C'}).siblings("li").css({'background-color':'transparent'});
        $(this).find("a").css('color','#fff');

        //滑动效果；
        rightClick();
         //iscroll效果
        var iscroll = new sro("#lists");

    });








})