$(function(){

    // 轮播
    $(".rx_banimg").hide().eq(0).show();
    var num=0;
    function move(type){
        type=type||"right";
        if(type=="right"){
            num++;
            if(num>=$(".rx_banimg").length){
                num=0;
            }
        }else if(type=="left"){
            num--;
            if(num<=-1){
                num=$(".rx_banimg").length-1
            }
        }
        $(".rx_banimg").fadeOut(300).eq(num).fadeIn(400)
        $(".rx_dian>li").removeClass("rx_active").eq(num).addClass("rx_active")
    }
    var t=setInterval(move,3000)
    $(".rx_ban_left").click(function(){
        move("left")
    })
    $(".rx_ban_right").click(function(){
        move("right")
    })
    $(".rx_banner").mouseover(function(){
        clearInterval(t)
    })
    $(".rx_banner").mouseout(function(){
        t=setInterval(move,3000)
    })
    $(".rx_dian>li").click(function(){
        var index=$(this).index();
        $(".rx_banimg").stop(true,true)
        $(".rx_banimg").fadeOut(300).eq(index).fadeIn(400)
        $(".rx_dian>li").removeClass("rx_active").eq(index).addClass("rx_active");
        num=index
    })



    $(".nav>li").click(function(){
        var index=$(this).index(".nav>li");
        $(".nav>li>a").removeClass("text-gradient").eq(index).addClass("text-gradient")
    })

    $(".rx_gshj_box img").hide();
    $(".rx_gshj_box").mouseover(function(){
        var index=$(this).index(".rx_gshj_box");
        $(".rx_gshj_box img").eq(index).show().siblings();
        $(".rx_gshj_bg").eq(index).hide();
    })
    $(".rx_gshj_box").mouseout(function(){
        var index=$(this).index(".rx_gshj_box");
        $(".rx_gshj_box img").eq(index).hide();
        $(".rx_gshj_bg").eq(index).show().siblings();
    })


    $(".qqkf ul li").eq(2).mouseover(function(){
        $(".rx_ewm").css("display","block");
    })
    $(".qqkf ul li").eq(2).mouseout(function(){
        $(".rx_ewm").css("display","none");
    })
    $(".qqkf ul li").eq(0).mouseover(function(){
        $(".rx_tjtel1").css("display","block");
    })
    $(".qqkf ul li").eq(0).mouseout(function(){
        $(".rx_tjtel1").css("display","none");
    })
    $(".qqkf ul li").eq(1).mouseover(function(){
        $(".rx_tjtel").css("display","block");
    })
    $(".qqkf ul li").eq(1).mouseout(function(){
        $(".rx_tjtel").css("display","none");
    })


    $(function(){
        var lazyloadImg = new LazyloadImg({
            el: '.rx_lazy [data-src]', //匹配元素
            top: 50, //元素在顶部伸出长度触发加载机制
            right: 50, //元素在右边伸出长度触发加载机制
            bottom: 50, //元素在底部伸出长度触发加载机制
            left: 50, //元素在左边伸出长度触发加载机制
            qriginal: false, // true，自动将图片剪切成默认图片的宽高；false显示图片真实宽高
            load: function(el) {
                el.style.cssText += '-webkit-animation: fadeIn 01s ease 0.2s 1 both;animation: fadeIn 1s ease 0.2s 1 both;';
            },
            error: function(el) {

            }
        });
    });

})

