/**
 * Created by lenovo on 2017/2/8.
 */
$(document).ready(function(){

    $("li").mousemove(function(){
        $(this).css("background-color","#777").css("border","1px solid #777");
        $("li").not(this).css("background-color","#aaa").css("border","1px solid white");
        var index=$('li').index(this);
        $("div").hide();
        $("div").eq(index).show();
    })
});

//$(document).ready(function(){
//   $(this).css("background-color","#777").css("border","1px solid #777") ;
//    $("li").not(this).css("background-color","#aaa").css("border","1px solid white") ;
//    var index = $("li").index(this);
//    $("div").hide();
//    $("div").eq(index).show();
//});