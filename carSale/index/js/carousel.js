$(function(){
    var iNow=0;
    function changeImg(idx){
        //$('li',_this.$tab).eq(idx).addClass('selected').siblings().removeClass('selected');
        $('.content img').eq(idx).addClass('selected').siblings().removeClass('selected');
        console.log($('.content img'));
    }

    $('#L-btn').on('click',function(){
        iNow--;
        if(iNow == -1){
            iNow =$('.content img').length- 1;
        }
        changeImg(iNow);

    });

    $('#R-btn').on('click',function(){
        iNow++;
        if(iNow ==$('.content img').length){
            iNow =0 ;
        }
        changeImg(iNow);
    });

    var timer;
    function run(){
        timer = setInterval(function(){
            $('#R-btn').trigger('click');
        },1000);
    }
    run();

    $('#carousel').hover(function(){
        clearInterval(timer);
    },function(){
        run();
    })

});