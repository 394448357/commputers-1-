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
// 购物车内容
$(function(){
    $.ajax({
        url:"http://localhost:5050/public/searchcart",
        type:"get",
        dataType:"json",
        success:function(result){
            console.log(result)
            var str="";
            for(var obj of result){
                str=`<tr id="product1">   
                    <td class="td_1"><input type="checkbox" id="" name="cartCheckBox" a="${obj.bid}" value="product1"></td>
                    <td class="td_2"><img src="${obj.img}" width="120" height="90" alt="shopping" >
                        <td class="td_3">${obj.title}</td>
                        <td class="td_4">${obj.price}</td>
                        <td class="td_5">
                            <span alt="minus" class="hand1">-</span>
                            <input type="text" id="num_1" value="${obj.count}" class="num_input" readonly="readonly" >
                            <span alt="add" class="hand">+</span>
                        </td>
                        <td class="td_6"></td>
                        <td class="td_7">
                            <a href="javascript:void(0):">删除</a>
                        </td>
                    </td>    
                    </tr>`
                $(".product1").after(str);   
              }
        /*     
               //全选按钮
               $("#allCheckBok").click(function() {
                 var checked = $(this).is(":checked");
                 $(".td_1").children().prop("checked", checked);
               });
                //判断是否全选
                function Allchk() {
                //点击复选框全选或不全选效果
                $("#allCheckBok").click(function() {
                    var checked = $(this).is(":checked");
                    $(".td_1").children().prop("checked", checked);
                });
                    var checkedB = $(".td_1").children();
                    var sum = checkedB.size();
                    var k = 0;
                    checkedB.each(function(index, dom) {
                        if($(dom).is(":checked"))
                            k++;
                    });
                if(k == sum) {
                    $("#allCheckBok").prop("checked", true) 
                } else {
                    $("#allCheckBok").prop("checked", false)
                }
            }
             Allchk(); //页面加载完后运行
             //单选判断
             $(".td_1").children().click(function() {
                 Allchk();
             }) */
            //计算总价与小计
            function prodC() {
                var $tr = $("#shopping").find("tr[id]");
                var summer = 0;

                $tr.each(function(i, dom) {
                    var num = $(dom).children(".td_5").find("input").val(); //商品数量
                    var price = num * $(dom).children(".td_4").text(); //商品小计
                    $(dom).children(".td_6").text(price); //显示商品小计
                    summer += price; //总价
                });
                $("#total").text(summer);//总价显示在页面
            }
            prodC(); //页面加载完成后运行

            //商品增加减少 ，flag 为true时增加 flag为false时减少
            function changN(dom, flag) {
                var $input = $(dom).parent().find("input");
                var value = $input.val();
                console.log(value)
                if(flag) {
                    value++
                } else {
                    value--;
                    if(value < 0) {
                        value = 0;
                        alert("宝贝数量不能为负数")
                    }
                }
                $input.val(value);
                prodC(); 
            };
            //点击增加
            $(".td_5").find("span[alt='minus']").click(function() {
            changN(this, false);
            });
            //点击减少
            $(".td_5").find("span[alt='add']").click(function() {
            changN(this, true);
            });  
            //点击删除
            $(".td_7").find("a").click(function() {              
                var bid=$("[name='cartCheckBox']").attr("a");
                console.log(bid)
                $.ajax({
                url:"public/del",
                data:{bid},
                type:"get",
                dataType:"json",
                success:function(result){
                    console.log(result);
                    if(result.a==1){
                    alert("删除成功")
                    }
                }
            })
                $(this).parent().parent().remove(); //删除当前tr
                prodC();
            });
            // 点击删除所选
        /*    $("#deleteAll").click(function() {
                $("#shopping").find("tr[id]").each(function(i, e) {
                  var  bid=$("[name='cartCheckBox']").attr("a");
                  console.log(bid);
                  $.ajax({
                    url:"public/del",
                    data:{bid},
                    type:"get",
                   dataType:"json",
                    success:function(result){
                      if(result.a==1){
                        alert("已经全部删除啦")
                      }
                    }
                  })
                    var $tr = $(e);
                    var checked = $tr.children(".td_1").children().is(":checked");
                    if(checked) {  
                        $tr.remove();
                    }
                });
                prodC();         
            }); 
        */
        }
    })
})