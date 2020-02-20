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

//  搜索栏
var inp=document.getElementById("search-ip") 
var search=document.getElementById("search")
search.onclick=function(){
  var title=inp.value;
  console.log(title);
  window.location.href="http://localhost:5050/t_computer.html?title="+`${title}`;
}
$(function(){  
    var title=decodeURI(location.search.split("=")[1]);
    console.log(title);
  $.ajax({
    url:"http://localhost:5050/public/searcher",
    type:"get",
    dataType:"json",
    async: false,
    data:{title},
    success:function(result){
      console.log(result);
      var str="";
      for ( var ss of result){
       console.log(ss);
         str+=`<div class="inner">
             <a href="${ss.href}">
                 <img src="${ss.img}" alt="">
                 <p class="co_1">${ss.title}</p> 
             </a>
                 <p class="co_2">${ss.details}</p>
                 <p class="co_3">¥${ss.price}</p>
         </div>`;
      }
      for (var i=0;i<=10;i++){
        $(".tsdn_2").append(str);
      } 
    }
  })
})
setTimeout(()=>{
    $(function(){
        tabPage({
            test: '.tsdn_2',
            Nav: '#Nav',
            Prev: '#prev',
            Next: '#next',
            curNum: 15, /*每页显示的条数*/
            activeClass: 'active', /*高亮显示的class*/
            // ini: 0/*初始化显示的页面*/
          });
          function tabPage(tabPage){
            var test=$(tabPage.test);
            var Nav=$(tabPage.Nav);
            var Prev=$(tabPage.Prev);
            var Next=$(tabPage.Next);
            var curNum=tabPage.curNum;
            var len = Math.ceil(test.find("div").length / curNum);
            console.log(test.find("div").length);
            console.log(len);
            var pageList = '';
              /*生成页码*/
            var iNum = 0;
              /*当前的索引值*/
            for (var i = 0; i < len; i++) {
            pageList += '<a href="javascript:;">' + (i + 1) + '</a>';
            }
            Nav.html(pageList);
            	/*头一页加高亮显示*/
	        Nav.find("a:first").addClass(tabPage.activeClass);
        
            /*******标签页的点击事件*******/
            Nav.find("a").each(function(){
                $(this).click(function () {
                        Nav.find("a").removeClass(tabPage.activeClass);
                        $(this).addClass(tabPage.activeClass);
                        iNum = $(this).index();
                        $(test).find("div").hide();
                        for (var i = ($(this).html() - 1) * curNum; i < ($(this).html()) * curNum; i++) {
                            $(test).find("div").eq(i).show()
                    }
                });
            })
            $(test).find("div").hide();
            
            /************首页的显示*********/
            for (var i = 0; i < curNum; i++) {
                $(test).find("div").eq(i).show()
            }
            /*下一页*/
            Next.click(function () {
                $(test).find("div").hide();
                if (iNum == len - 1) {
                        for (var i = (len - 1) * curNum; i < len * curNum; i++) {
                                $(test).find("div").eq(i).show()
                        }
                        return false;
                } else {
                        Nav.find("a").removeClass(tabPage.activeClass);
                        iNum++;
                        Nav.find("a").eq(iNum).addClass(tabPage.activeClass);
                                //  ini(iNum);
                }
                for (var i = iNum * curNum; i < (iNum + 1) * curNum; i++) {
                        $(test).find("div").eq(i).show()
                }
            });
            /*上一页*/
            Prev.click(function () {
                $(test).find("div").hide();
                if (iNum == 0) {
                        for (var i = 0; i < curNum; i++) {
                                $(test).find("div").eq(i).show()
                        }
                        return false;
                } else {
                        Nav.find("a").removeClass(tabPage.activeClass);
                        iNum--;
                        Nav.find("a").eq(iNum).addClass(tabPage.activeClass);
                }
                for (var i = iNum * curNum; i < (iNum + 1) * curNum; i++) {
                        $(test).find("div").eq(i).show()
                }
            })                  
        }
    });
},200);
