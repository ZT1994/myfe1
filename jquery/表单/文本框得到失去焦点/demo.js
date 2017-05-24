/**
 * Created by lenovo on 2017/2/7.
 */
$(function(){
    $(":input").focus(function(){
        $(this).addClass("focus");
        if($(this).val() == this.defaultValue){
            this.value="";
        }
    }).blur(function(){
        $(this).removeClass("focus").val(this.value==""?this.defaultValue:this.value);

    })




});

//$(function(){
//    $(":input").focus(function(){
//        $(this).addClass("focus");
//        if($(this).val() == this.defaultValue){
//            this.value = "";
//        }
//    }).blur(function(){
//        $(this).removeClass("focus").val(this.value==""?this.defaultValue:this.value);
//    });
//})
