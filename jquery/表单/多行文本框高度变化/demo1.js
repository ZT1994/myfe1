/**
 * Created by lenovo on 2017/2/7.
 */
//$(function(){
//    var $comment = $('#comment');
//    $('.bigger').click(function(){
//        $comment.height($comment.height()<500?$comment.height()+50:$comment.height());
//    });
//    $('.smaller').click(function(){
//            $comment.height($comment.height()>50?$comment.height()-50:$comment.height());
//        }
//        )
//
//});


$(function(){
    var $comment = $('#comment');  //��ȡ���ۿ�
    $('.bigger').click(function(){ //�Ŵ�ť�󶨵����¼�
        if(!$comment.is(":animated")){ //�ж��Ƿ��ڶ���
            if( $comment.height() < 500 ){
                $comment.animate({ height : "+=50" },400); //�������ø߶ȣ���ԭ�еĻ����ϼ�50
            }
        }
    });
    $('.smaller').click(function(){//��С��ť�󶨵����¼�
        if(!$comment.is(":animated")){//�ж��Ƿ��ڶ���
            if( $comment.height() > 50 ){
                $comment.animate({ height : "-=50" },400); //�������ø߶ȣ���ԭ�еĻ����ϼ�50
            }
        }
    });
});
