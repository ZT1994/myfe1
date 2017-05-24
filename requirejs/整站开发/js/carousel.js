/**
 * Created by lenovo on 2017/2/20.
 */
define(['jquery'],function($){
    function Carousel(){

        this.defaultVal = {
            //buttonStyle:'square',
            speed:800
        };

        this.$carousel = $('<div class="carousel"></div>');
        this.$lBtn = $('<span id="left-btn"></span>');
        this.$rBtn = $('<span id="right-btn"></span>');
        this.$ban = $('<div class="banner"></div>');
        this.$wra = $('<div class="wrapper"></div>');
        //this.$next = $('<span class="carousel-next">&gt;</span>');
    }

    Carousel.prototype.init = function(options){
        var _this = this;
        var iNow = 0;
        $.extend(this.defaultVal,options);

        this.$ban.append(this.$wra);
        this.$wra.append(this.$carousel).append(this.$lBtn).append(this.$rBtn);

        for( var i=0;i<this.defaultVal.imgData.length;i++){
            //this.$tab.append('<li class="'+this.defaultVal.buttonStyle+(i==0?' selected':'')+'">'+(i+1)+'</li>');
            this.$carousel.append('<img class="'+(i==0?'selected':'')+'" src="'+this.defaultVal.imgData[i]+'">');
        }

        //this.$arrow.append(this.$prev).append(this.$next);
        $(this.defaultVal.selector).append(this.$ban);

        //  $('span',this.$tab).on('click',function(){
        //      changeImg($(this).index());
        //  });
        //
        function changeImg(idx){
            //$('li',_this.$tab).eq(idx).addClass('selected').siblings().removeClass('selected');
            $('img',_this.$carousel).eq(idx).addClass('selected').siblings().removeClass('selected');
        }

        this.$lBtn.on('click',function(){
            iNow--;
            if(iNow == -1){
                iNow = _this.defaultVal.imgData.length - 1;
            }
            changeImg(iNow);
        });

        this.$rBtn.on('click',function(){
            iNow++;
            if(iNow == _this.defaultVal.imgData.length ){
                iNow =0 ;
            }
            changeImg(iNow);
        });

        var timer;
        function run(){
            timer = setInterval(function(){
                _this.$rBtn.trigger('click');
            },_this.defaultVal.speed)
        }
        run();

        this.$wra .hover(function(){
                clearInterval(timer);
            },function(){
                run();
            }
        );


    };



    return Carousel;
});