window.addEventListener('load', function() {
    var jd = new JD();
    jd.categoryLeftSwiper();
    jd.categoryRightSwiper();
});

var JD = function() {

}

JD.prototype = {
    // 分类左侧的滑动效果
    categoryLeftSwiper: function() {
        //调用swiper的初始化方法
        var swiper = new Swiper('.category-left .swiper-container', {
            //垂直方向滑动
            direction: 'vertical',
            //支持多个子元素一起滑动
            slidesPerView: 'auto',
            // 一次性滑动多个子元素
            freeMode: true,
            //支持鼠标滚轮
            mousewheel: true
        });
    },
    //分类右侧的滑动效果
    categoryRightSwiper: function() {
        //调用swiper的初始化方法
        var swiper = new Swiper('.category-right .swiper-container', {
            //垂直方向滑动
            direction: 'vertical',
            //支持多个子元素一起滑动
            slidesPerView: 'auto',
            // 一次性滑动多个子元素
            freeMode: true,
            //添加滚动条
	        scrollbar: {
	            el: '.swiper-scrollbar',
	        },
            //支持鼠标滚轮
            mousewheel: true
        });
    }
}
