var dtext = $('.downText');
var ttext = $('.topText');
var textLineh = ttext.css('lineHeight');
var flag = 0;
var headHeight = $('.header').height();
var str = '<div class="container"><div class="wenzhang pb1rem"><div class="row rowflex"><div class="col-sm-3 col-xs-3 col-md-3 text-center"><img src="./images/01.jpg"class="img-circle touxiang"/></div><h5 class="col-sm-7 col-xs-7 col-md-7 text-left h5t">张继新和mageign赞了此文章</h5><i class="col-sm-2 col-xs-2 col-md-2 fa fa-gitlab"></i></div><div class="row"><h5 class="col-md-12 col-xs-12 col-sm-12 h5">为什么siri听懂了我的话却不能做出有效的反应|这到底是为什么？</h5><p class="col-sm-12 col-md-12 col-xs-12 fgrey">为什么siri听懂了我的话却不能做出有效的反应|这到底是为什么？为什么siri听懂了我的话却不能做出有效的反应|这到底是为什么？为什么siri听懂了我的话却不能做出有效的反应|这到底是为什么？</p><small class="col-sm-12 col-md-12 col-xs-12 fgrey">25110赞同 · 362评论 · 关注问题</small></div></div></div>';
var touchStrat, touchMove;

dtext.hide();
var myScroll = new IScroll('.section', {
    probeType: 3,
    vScroll: true,
    hScroll: false
});

myScroll.on('scroll', function () {
    console.log(this.y);

    if (Math.floor(this.y) >= parseInt(textLineh) + 30 && flag == 0) {
        ttext.html('松开我');
        $('.section').css({top: headHeight});
        flag = 1;
        topAction();
    } else if (this.y <= this.maxScrollY) {
        dtext.show();
        $('.section').css({bottom: textLineh});
        if (this.y <= this.maxScrollY - 50) {
            dtext.html('松开我');
            downAction();
            flag = 1;
        }
    }
    if (this.y < -headHeight) {
        $('.header').addClass('slideUp').removeClass('slideDown');
        $('.footer').addClass('footerSlideUp').removeClass('footerSlideDown');
        $('.section').css({top: 0, bottom: 0});
    } else if (Math.floor(this.y) <= 0) {
        $('.header').addClass('slideDown').removeClass('slideUp');
        $('.footer').addClass('footerSlideDown').removeClass('footerSlideUp');
        $('.section').css({top: textLineh});
        ttext.html('下拉刷新')
    }
});

//myScroll.on('scrollEnd',function(){
//    if(flag==1){
//        myScroll.refresh();
//    }
//});

function topAction() {
    setTimeout(function () {
        ttext.html('刷新完成');
        console.dir('您未连接到服务器');
        $('.section').css({top: textLineh});
        flag = 0;
    }, 1000);
}

function downAction() {
   if (flag == 0) {
        setTimeout(function () {
            dtext.html('上拉刷新');
            $(str).insertBefore(dtext);
            dtext.hide();
            $('.section').css({bottom: 0});
            flag = 0;
        }, 1000);
        myScroll.refresh();
   }
}


var swiperSlide = $('.swiper-slide');
console.log(swiperSlide.length);
var swiper = new Swiper('.swiper-container', {
    //centeredSlides: true,
    //initialSlide: 1,
    slidesPerView: 2.3,
    spaceBetween: 10
});

document.addEventListener('touchstart', function (e) {
    touchStratx = e.targetTouches[0].pageX;
    touchStraty = e.targetTouches[0].pageY;
    this.addEventListener('touchmove', function (e) {
        touchMovex = e.targetTouches[0].pageX;
        touchMovey = e.targetTouches[0].pageY;

        if ((touchMovex - touchStratx) > 30 && Math.abs(touchMovey - touchStraty)<10) {
            $('.article').css('transform','translate(0,0)');
            $('.zhezhao').css({background:'rgba(0,0,0,.6)',zIndex:100});
            //$('.article').addClass('animation2 slideRight').removeClass('slideLeft')
        } else {
            $('.article').css({'transform':'translate(-100%,0)'});
            $('.zhezhao').css({background:'rgba(0,0,0,0)',zIndex:-1});
            //$('.article').addClass('slideLeft').removeClass('slideRight')
        }
    });
});


//document.addEventListener('touchend', function (e) {
//    console.log(e.targetTouches[0].pageX)
//});

//$(".header").headroom({
//        // 在元素没有固定之前，垂直方向的偏移量（以px为单位）
//        offset : 0,
//        // scroll tolerance in px before state changes
//        tolerance : 0,
//        // 对于每个状态都可以自定义css classes
//        classes : {
//            // 当元素初始化后所设置的class
//            initial : "headroom",
//            // 向上滚动时设置的class
//            pinned : "headroom--pinned",
//            // 向下滚动时所设置的class
//            unpinned : "headroom--unpinned"
//        }
//    }
//);
//$('.footer').hide();
//$(".footer").headroom({
//        // 在元素没有固定之前，垂直方向的偏移量（以px为单位）
//        offset : 0,
//        // scroll tolerance in px before state changes
//        tolerance : 0,
//        // 对于每个状态都可以自定义css classes
//        classes : {
//            // 当元素初始化后所设置的class
//            initial : "headroom",
//            // 向上滚动时设置的class
//            pinned : "headroom--pinned",
//            // 向下滚动时所设置的class
//            unpinned : "headroom--unpinned"
//        }
//    }
//);