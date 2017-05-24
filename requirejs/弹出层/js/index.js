/**
 * Created by lenovo on 2017/2/19.
 */
require(['jquery','dialog'],function($,Dialog){
    $('#btn').on('click',function(){
        //dialog.open(
        //    {
        //        width: 800,
        //        height:500,
        //        title: 'hello',
        //        content: 'hi'
        //    }
        //);
        ////dialog.close();
        var dialog = new Dialog();
        dialog.open(
            {
                width: 800,
                height: 500,
                title: 'hello'
                //        content: 'hi'
            });
    });

});