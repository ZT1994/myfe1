/**
 * Created by lenovo on 2017/3/15.
 */
require(['../../index/js/jquery','carousel'],function($,Carousel){
    var car1 = new Carousel();
    car1.init({
        selector:'#content',
        //buttonStyle:'square',
        speed:1000,
        imgData:['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg']
    })
});
require(['../../index/js/jquery','dialog'],function($,Dialog){
    $('#login').on('click',function(){
        var dialog = new Dialog();
        dialog.open(
            {
                width:300,
                height:300,
                title: '登录'
            });
    });
    $('#register').on('click',function(){
        var dialog = new Dialog();
        dialog.open(
            {
                width:300,
                height: 300,
                title: '注册'
            });
    });
});