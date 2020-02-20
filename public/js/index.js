var currentIndex = 0;
function changeBg(){
    //定义要切换的背景图片，双引号里面，可以放任意多个
    var bgImgs = ["bj1.jpg","bj2.jpg"];
    $('.lb1').fadeTo('slow',0.9, function(){
        if (currentIndex >= bgImgs.length)
        currentIndex = 0;
        $(this).css('background-image','url(img/' + bgImgs[currentIndex] + ')');
    }).fadeTo('slow', 1);
    currentIndex += 1;
}
setInterval("changeBg()", 4000); //设定定时切换，单位为毫秒，比如：30分钟=1800秒= 

// 返回顶部按钮滚动效果
function pageScroll(){
    //把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）
    window.scrollBy(0,-70);
    //延时递归调用，模拟滚动向上效果
    scrolldelay = setTimeout('pageScroll()',20);
    //获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值
    var sTop=document.documentElement.scrollTop+document.body.scrollTop;
    //判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）
    if(sTop==0) clearTimeout(scrolldelay);
}
//返回顶部/楼层按钮隐藏效果
window.onscroll = function () {
    //滚动的距离,判断距离顶部的距离
    var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    var node = document.getElementById('topBar');
    var floor = document.querySelectorAll('.floor');
    var yl1=floor[0];
    var yl2=floor[1];
    var yl3=floor[2];
    if (top>500) {//500就是滚动条滚动到的位置，大于500隐藏
        node.style.display = 'block';
        yl1.style.display = 'block';
        yl2.style.display = 'block';
        yl3.style.display = 'block';
    }else{
        node.style.display = 'none';
        yl1.style.display = 'none';
        yl2.style.display = 'none';
        yl3.style.display = 'none';
    }
}

// 楼层点亮
$(function(){
var daohang = $("#fixedtool"); //楼层标签
var li = $("#fixedtool>li"); //获取目录li
var main = $("#main>div"); //楼层文章主要内容
// console.log(main);
window.onbeforeunload = onbeforeunload_handler;  
    function onbeforeunload_handler() {
        window.location.reload();  
        $(window).scrollTop(0)
    }
    $(window).scroll(function() {
        //获取到页面总高度
        var HeightAll = $("html,body").height();
        //获取滚动条位置
        var iTop = $(window).scrollTop();
        for (var i = 0; i < main.length; i++) {
            //楼层的联动
            var num = 0 
            for (var i = 0; i < main.length; i++) {
                if (iTop >= main[i].offsetTop) {
                    num = i;
                }
                li[i].className = ''; //设置li中的class为空
            };
            li[num].className = 'active';
            for (var i = 0; i < li.length; i++) {
                li[i].onclick = function() {
                    for (var j = 0; j < li.length; j++) {
                        if (this == li[j]) {
                            $("html,body").animate({
                                scrollTop: main[j].offsetTop
                            }, 500);
                        }
                    }
                }
            }
        }
    });
});
//在public/js/下新建index.js
//专门支持首页中所有功能
//在public/index.html中<body>底部引入js/index.js
$(function(){
    $.ajax({
        url:"http://localhost:5050/public/index",
        type:"get",
        datatype:"json",
        success:function(result){           
        var jp="";
        console.log(result);
        for(var jptj of result){
            jp+=`<div class="wow fadeInUp" data-wow-delay="${jptj.time}">   
                 <a href="${jptj.href}">
                     <img src="${jptj.img}" alt="">
                     <p class="co_1">${jptj.title}</p>   
                 </a>
                     <p class="co_2">${jptj.details}</p>
                </div>`;
            }
            $(".jptjmy").html(jp);
        }
    });
    $.ajax({
        url:"http://localhost:5050/public/index2",
        type:"get",
        datatype:"json",
        success:function(result){
            console.log(result);
            var ts="";
            for(var tsdn of result){
                ts+=`<div class="wow fadeInUp gd" data-wow-delay="${tsdn.time}">
                    <a href="${tsdn.href}">
                        <img src="${tsdn.img}" alt="">
                        <p class="co_1">${tsdn.title}</p> 
                    </a>
                        <p class="co_2">${tsdn.details}</p>
                        <p class="co_3">¥${tsdn.price}</p>
                    </div>`;
            }
            $(".tsdn_1").html(ts);
        }
    })
    $.ajax({
        url:"http://localhost:5050/public/index3",
        type:"get",
        datatype:"json",
        success:function(result){
            console.log(result);
            var bs="";
            for(var bjb of result){
                bs+=`<div class="wow fadeInUp gd" data-wow-delay="${bjb.time}">
                    <a href="${bjb.href}">
                        <img src="${bjb.img}" alt="">
                        <p class="co_1">${bjb.title}</p> 
                    </a>
                        <p class="co_2">${bjb.details}</p>
                        <p class="co_3">¥${bjb.price}</p>
                    </div>`;
            }
            $(".bjb_1").html(bs);
        }
    })
    $.ajax({
        url:"http://localhost:5050/public/index4",
        type:"get",
        datatype:"json",
        success:function(result){
            console.log(result);
            var ss="";
            for(var ws of result){
                ss+=`<div class="wow fadeInUp gd" data-wow-delay="${ws.time}">
                    <a href="${ws.href}">
                        <img src="${ws.img}" alt="">
                        <p class="co_1">${ws.title}</p> 
                    </a>
                        <p class="co_2">${ws.details}</p>
                        <p class="co_3">¥${ws.price}</p>
                    </div>`;
            }
            $(".ws_1").html(ss);
        }
    })
});


// // ajax请求 头部header引入 
// $(function(){
//     $.ajax({
//         url:"http://localhost:5050/header.html",
//         type:"get",
//         success:function(result){
//             $("#header").replaceWith(result);
//         }
//     })
// });

// ajax请求  尾部footer引入 
$(function(){
    $.ajax({
        url:"http://localhost:5050/footer.html",
        type:"get",
        success:function(result){
            $("#footer").replaceWith(result);
        }
    })
});


