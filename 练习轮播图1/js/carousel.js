/**
 * Created by lenovo on 2017/2/22.
 */
define(['jquery'],function($){
    function Carousel(){
         this.defaultVal ={
             speed: 800

         };
        this.$ban =$('<div class="banner"></div>') ;
        this.$wra =$('<div class="wrapper"></div>');
        this.$car =$('<div class="carousel"></div>');
        this.$lBtn =$( '<span id="left-btn"></span>');
        this.$rBtn =$( '<span id="right-btn"></span>');

    }
    Carousel.prototype.init = function(options){
        var _this =this;
        var iNow =0;
        $.extend(this.defaultVal,options);
        this.$ban.append(this.$wra);
        this.$wra.append(this.$car).append(this.$lBtn).append(this.$rBtn);
        for(var i=0;i<this.defaultVal.imgData.length;i++){
            this.$car.append('<img class="'+(i==0?'selected':'')+'" src="'+this.defaultVal.imgData[i]+'">');
        }
         $(this.defaultVal.selector).append(this.$ban);

        function changImg(idx){
            $('img',_this.$car).eq(idx).addClass('selected').siblings().removeClass('selected');
        }

        this.$lBtn.on('click',function(){
            iNow--;
            if(iNow==-1){
                iNow = _this.defaultVal.imgData.length - 1;
            }
            changImg(iNow);
        });

        this.$rBtn.on('click',function(){
            iNow++;
            if(iNow==_this.defaultVal.imgData.length){
                iNow=0;
            }
            changImg(iNow);
        });

        var timer;
        function run(){
            timer = setInterval(function(){
                _this.$rBtn.trigger('click')
            },_this.defaultVal.speed)
        }
       run();

        this.$ban.hover(function(){
            clearInterval(timer);
        },function(){
            run();
        })


    };
    return Carousel;
});