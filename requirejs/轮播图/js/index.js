/**
 * Created by lenovo on 2017/2/20.
 */
require(['jquery','carousel'],function($,Carousel){
    var car1 = new Carousel();
    car1.init({
        selector:'#content1',
        buttonStyle:'square',
        speed:500,
        imgData:['img/1.jpg','img/2.jpg','img/3.jpg']


    });

    var car2 = new Carousel();
    car2.init({
        selector:'#content2',
        buttonStyle:'circle',
        speed:1000,
        imgData:['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg']
    })

});
