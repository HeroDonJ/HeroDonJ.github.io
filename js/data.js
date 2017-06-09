define(function(){
    var html = ['HTML结构','DOCTYPE类型','标签的分类','列表标签','表单标签','表格标签','XHtml','标签语义化','HTML5','H5的DOM操作','HTML5语义化标签','H5新特性'];
    var css = ['层叠','继承','优先级','盒模型','定位','浮动','精灵图','兼容性','css框架','css性能优化','LESS'];
    var js = ['数据类型','分支结构','函数','事件','BOM','DOM','原型','JS框架','前端模板','JSON','模块化开发','高阶函数'];
    var jquery = ['核心','选择器','属性','筛选','CSS','事件','效果','Ajax','工具','回调函数'];
    var moblie = ['基础知识','像素单位','屏幕适配','rem布局','媒体查询','webAPP','触屏事件','常用插件'];
    var php = ['网站','cookie','语法结构','数组','分支结构','函数','MySql'];
    var ajax = ['同步和异步','相关知识','介绍Ajax','原生写法','详细解读','认识跨域','跨域原理', 'jQuery的Ajax','Ajax封装'];
    var regular = ['概念','特点','元字符','限定符','相关方法','验证','案例'];
    var others = ['响应式布局','前端安全','sublime','兼容问题','项目相关','git','常见面试题'];
    //数据汇总
    var mainData = {
        html : html,
        css :  css,
        js : js,
        jquery : jquery,
        moblie : moblie,
        php : php,
        ajax : ajax,
        regular : regular,
        others : others
    };
    //用来设置自定义类名的；
    var attr = ['html','css','js','jquery','moblie','php','ajax','regular','others'];
    //返回值
    return {
        attr:attr,
        mainData : mainData
    };
})