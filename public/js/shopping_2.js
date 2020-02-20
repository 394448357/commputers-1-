$(function(){
    var $mark = $("#mark");
    var $box1 = $("#box1");
    var $box2 = $("#box2");
    var $img = $box2.children("img");
    $box1.on("mouseenter",
    function(e) {
        //首先让mark遮罩显示
        $mark.stop().show();
        //再让box2显示
        $box2.stop().show();
        move(e)
    }).on("mousemove",
    //鼠标移入事件
    function(e) {
        $mark.stop().show();
        $box2.stop().show();
        move(e);
    }).on("mouseleave",
    //鼠标移出事件
    function(e) {
        $mark.stop().hide();
        $box2.stop().hide();
    });
    //鼠标移动
    function move(e) {
        var $img = $box2.children("img");
        var l = e.clientX - $box1.offset().left - $mark.outerWidth() / 2;
        var t = e.clientY - $box1.offset().top - $mark.outerHeight() / 2;
        var minL = 0,
        minT = 0;
        var maxL = $box1.outerWidth() - $mark.outerWidth();
        var maxT = $box1.outerHeight() - $mark.outerHeight();
        l = l <= minL ? 0 : (l >= maxL ? maxL: l);
        t = t <= minT ? 0 : (t >= maxT ? maxT: t);
        $mark.css({
            left: l,
            top: t
        });
        $img.css({
            marginLeft: -3 * l,
            marginTop: -3 * t
        });
        // 点击小图替换大图
        $('.ctn3 img').each(function() {
            $(this).click(function() {
                var s = $(this).attr('src');
                // 赋值给大图和box1中的图片
                $('#box2 img').attr('src', s);
                $('#box1 img').attr('src', s);
            });
        });
    }
});

// 详情页面动态绑定
$(function(){
    var tid=location.search.split("=")[1];//截取id
    $.ajax({
        url:"http://localhost:5050/public/shopping2",
        data:{tid},
        type:"get",
        datatype:"json",
        success:function(result){ 
            console.log(result);
            var sp_0="";
            var sp_1="";          
            var sp_2="";
            var sp_3="";
            var sp_4="";
            for(var shop_0 of result){
                sp_0+=`<img src="${shop_0.img}" alt="">`
            }
            $(".pic_s1").html(sp_0);  

            for(var shop_1 of result){
                sp_1+=`<img src="${shop_1.img}" alt="">
                <img src="${shop_1.img2}" alt="">
                <img src="${shop_1.img3}" alt="">
                <img src="${shop_1.img4}" alt="">`
            }
            $(".ctn3").html(sp_1);

            for(var shop_2 of result){
                sp_2+=`<span id="sptitle">
                        <a class="sybq" href="index.html">首页</a>>
                        <a href="">台式电脑</a>>
                        <span >${shop_2.title}</span>
                    </span>`
            }
            $(".tetleh").html(sp_2);
 
            for(var shop_3 of result){
                sp_3+=`<h2>${shop_3.title}</h2>
                <p>${shop_3.details}</p>
                <h1>¥${shop_3.price}</h1>`;
            }
            $("#box3").html(sp_3);

            for(var shop_4 of result){
                sp_4+=`<img src="${shop_4.img}" alt="">`;
            }
            $("#box2").html(sp_4);
        }
    });
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
})

