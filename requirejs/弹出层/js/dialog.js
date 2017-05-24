/**
 * Created by lenovo on 2017/2/19.
 */
define(['jquery'],function($){
  function Dialog() {  //用类表示
        this.defaultVal = {
            width: 400,
            height: 300
        };
    }
        Dialog.prototype.open = function (options) {
            this.$container = $('<div class="dialog_container"> </div>');
            this.$mask = $(' <div class="dialog-mask"> </div>');
            this.$box = $('<div class="dialog-box"></div>');
            this.$titleBox = $('<div class="dialog-title-box"></div>');
            this.$title = $('<div class="dialog-title"></div>');
            this.$close = $('<div class="dialog-close">[X]</div>');

            this.$content = $('<div class="dialog-content"></div>');//变成属性

            var _this = this;
            $.extend(this.defaultVal, options);
            //console.log(this.defaultVal);
            this.$container.append(this.$mask).append(this.$box);
            this.$box.append(this.$titleBox).append(this.$content.html($('.dialog-box-content').show()))
                .css({
                    width: this.defaultVal.width,
                    height: this.defaultVal.height,
                    'margin-left': -this.defaultVal.width / 2,
                    'margin-top': -this.defaultVal.height / 2
                });
            this.$titleBox.append(this.$title.html(this.defaultVal.title)).append(this.$close);
            $('body').append(this.$container);
            //$('.dialog-box').css({
            //    width:this.defaultVal.width,
            //    height:this.defaultVal.height,
            //    'margin-left':-this.defaultVal.width/2,
            //    'margin-top':-this.defaultVal.height/2
            //});
            this.$close.on('click', function () {
                _this.close();//如果用this指的是dialog-close而你是要dialog-container关闭所以在上面取一下this
            }).css({'cursor': 'pointer'});
        };
        Dialog.prototype.close = function () {
            this.$container.remove();
            //    $('.dialog-close').on('click',function(){
            //
            //    }).css({
            //        'cursor':'pointer'
            //});

        };
        return Dialog;
});