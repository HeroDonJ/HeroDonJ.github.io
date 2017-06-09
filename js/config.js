requirejs.config({
    baseUrl : '/assets',//设置模块加载的基准路径
    paths : {// 给模块路径起一个别名
        jquery : 'jquery/jquery.min',
        bootstrap : 'bootstrap/js/bootstrap.min',
        template : 'artTemplate/template',
        iscroll : '../plug-in/iscroll',
        common : '../js/common',
        data : '../js/data',
        zepto : '../plug-in/zepto.min',
        touch : '../plug-in/touch'
    },
    shim : {// 兼容非标准模块
        iscroll : {
            deps : ['jquery']
        }
    }
});