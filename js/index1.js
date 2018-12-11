window.addEventListener('load', function () {
    // 1.滚动条滚动改变头部背景颜色
    // 1、获取轮播图的高度
    var slideHeight = document.querySelector('#slide').offsetHeight;
    // 2、获取头部元素
    var header = document.querySelector('#header');
    // 3、添加一个滚动条滚动事件
    window.addEventListener('scroll', function (e) {
        // 获取高度
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        // 计算透明度：滚动距离/轮播图高度
        var opacity = scrollTop / slideHeight;
        // 设置背景色
        header.style.backgroundColor = "rgb(222, 24, 27," + opacity + ")";
    });


    // 2.倒计时功能
    function downTime() {
        var hour = time / 3600;
        var minute = time % 3600 / 60;
        var sec = time % 60;

        spans[0].innerHTML = Math.floor(hour / 10);
        spans[1].innerHTML = Math.floor(hour % 10);
        spans[3].innerHTML = Math.floor(minute / 10);
        spans[4].innerHTML = Math.floor(minute % 10);
        spans[6].innerHTML = Math.floor(sec / 10);
        spans[7].innerHTML = Math.floor(sec % 10);
    };
    // 1、声明一个未来时间 数字月份范围 0-11
    var futureTime = new Date(2018, 11, 8, 21, 12, 0).getTime();
    var nowTime = new Date().getTime();
    var time = Math.floor((futureTime - nowTime) / 1000);
    // 获取span
    var spans = document.querySelectorAll('.seckill-time span');
    
    var timeId = setInterval(function(){
        time--;
        if (time <= 0) {
            time = 7200;
        } else {
            downTime();
        }
    },1000);


    // 3.轮播图
    new Swiper ('.swiper-container',{
        diriection: 'horizintal',
        autoplay: {
            delay: 500,
            stopOnLastSlide: false,
            disableOnInteraction: false
            },
        loop: true,
        // 小圆点
        pagination: {
            el: '.swiper-pagination',
        }
        
    })
})