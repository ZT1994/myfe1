///**
// * Created by lenovo on 2017/2/8.
// */
$(function(){
    $("tbody tr:even").css("background-color","#edf");
    var $editTd =$("td.editable");
    $editTd.click(function(){
        var $tdObj =$(this);
        var $inputObj = $("<input type='text'/>");
        $inputObj.width($(this).width()).css({"border":"none","background":$(this).css("background-color")});
        if($(this).children("input[type='text']").size()>0){
            return false;
        }
       $inputObj.val($(this).text());
        $(this).empty().append($inputObj);
        $inputObj.tigger("select").keyup(function(event){
            var keyCode = even.which;
            if(keyCode == 13){
                $tdObj.text($(this).val());
                //$.get("update.jsp")
            }
        })

    })

});

//$(function(){
//    $("tbody tr:even").css("background-color","#edf");//���ø��б�ɫ
//    var $editTd = $("td.editable");//���������Ҫ�༭�ĵ�Ԫ�����
//    $editTd.click(function(){//Ϊ��Ԫ�����ע�ᵥ���¼�
//        var $tdObj = $(this);
//        var $inputObj = $("<input type='text'/>");//����һ���ı������
//        $inputObj.width($(this).width())//���ı���ĳ������ó���td�ĳ���һ��
//            .css({"border":"none", "background-color":$(this).css("background-color")});//ȥ���ı����border
//        if($(this).children("input[type='text']").size() > 0){//�ж������ǰtd�а����ı�����Ԫ�أ���ʲôҲ������
//            return false;
//        }
//        $inputObj.val($(this).text());//��td�е��ı����Ƶ��ı�����
//        $(this).empty()//���td�е��ı�
//            .append($inputObj);//���ı�����뵽td��
//        $inputObj.trigger("select")//�����ı����ѡ��״̬
//            .keyup(function(event){
//                var keyCode = event.which;//��õ�ǰ���µļ��̵�keyCodeֵ
//                if(keyCode == 13){//������µ��ǻس���
//                    $tdObj.text($(this).val());//���ı����е�ֵ���Ƶ�td��
//                    //ͬʱ����ajax���޸ĵ�ֵ�������ݿ���
//                    $.get("update.jsp", {username:$(this).val(), userId:$tdObj.prev().text()}, function(data){
//                        if(data == "fail"){
//                            alert("�޸�ʧ��");
//                        }else{
//                            alert("�޸ĳɹ�");
//                        }
//                    }, "text");
//                }
//            });
//    });
//});
//
//
//
//
//
