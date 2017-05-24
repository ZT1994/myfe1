/**
 * Created by lenovo on 2017/2/20.
 */
require(['jquery','carousel'],function($,Carousel){
    var car1 = new Carousel();
    car1.init({
        selector:'#content',
        //buttonStyle:'square',
        speed:500,
        imgData:['images/1.jpg','images/2.jpg','images/3.jpg']


    });

    //var car2 = new Carousel();
    //car2.init({
    //    selector:'#content2',
    //    buttonStyle:'circle',
    //    speed:1000,
    //    imgData:['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg']
    //})

});
