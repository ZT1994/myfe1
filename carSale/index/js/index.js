/**
 * Created by lenovo on 2017/3/15.
 */
require(['jquery','carousel'],function($,Carousel){
    var car1 = new Carousel();
    car1.init({
        selector:'#content',
        //buttonStyle:'square',
        speed:1000,
        imgData:['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg']
    })
});
