/**
 * Created by lenovo on 2017/2/22.
 */
require(['jquery','carousel'],function($,Carousel){
    var car1 = new Carousel();
    car1.init({
        selector: '#content',
        speed: 800,
        imgData:['img/1.jpg','img/2.jpg','img/3.jpg']

    })
});