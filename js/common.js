define(['jquery','iscroll','data','template',],function($,sro,data,template){
    // 点击右滑效果
    function rightClick (){
        $(".header").toggleClass('moveout');
        $(".content").toggleClass("moveout");
        $(".aside").toggleClass("moveto");
    }
    $("#switch").on("click",function(){
        rightClick();
    });

    //设置载入数据
    var attr = data.attr;
    var mainData = data.mainData;

    //为右侧菜单栏设置自定义属性
    var asideObjs = $(".aside .navs").find("a");
    for(var i = 0;i<asideObjs.length;i++){
        asideObjs.eq(i).attr('flag',attr[i]);
    };

    //内容区添加默认内容
    var htmlData = mainData.html;
    var html = template('mytpl',{list:htmlData});
    $(".content .lists-con").html(html);


    //添加事件将指定数据放入内容区
    asideObjs.on("click",function(){
        var title = $(this).text();
        var flag = $(this).attr('flag');
        var data = mainData[flag];
        var html = template('mytpl',{list:data});
        $(".content .lists-con").html(html);
        rightClick();
    });

    //iscroll效果
    var iscroll = new sro("#lists");
    console.log("#lists")

})