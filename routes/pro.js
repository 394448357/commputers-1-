const express=require("express");
const pool=require("../pool.js");
let router=express.Router();
//1.登录
router.get("/login/:uname&:upwd",(req,res)=>{
	var $uname=req.params.uname;
	var $upwd=req.params.upwd;
	pool.query("select * from pc_user where uname=? and upwd=?",[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		console.log(result);
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//2.查询指定uname的用户信息
router.get("/searuser/:uname",(req,res)=>{
	var $uname=req.params.uname;
	pool.query("select * from pc_user where uname=?",[$uname],(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});

//3.注册
router.post("/regUser",(req,res)=>{
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	pool.query("INSERT INTO pc_user (uname,upwd) VALUES(?,?)",[$uname,$upwd],(err,result)=>{
		if(err)throw err;
		res.send("1");
		console.log(result);
	});	
});

//index主页面动态生成
router.get("/index",(req,res)=>{
	var index_j="SELECT * FROM pc_index_j where seq_recommended!=0 order by seq_recommended";
	pool.query(index_j,[],(err,result)=>{
		if(err) throw err;
		res.send(result);
		console.log(result);
	});
});

router.get("/index2",(req,res)=>{
	var index_t="SELECT * FROM pc_index_t where seq_recommended!=0 order by seq_recommended";
	pool.query(index_t,[],(err,result)=>{
		if(err) throw err;
		res.send(result);
		console.log(result);
	});
});

router.get("/index3",(req,res)=>{
	var index_b="SELECT * FROM pc_index_b where seq_recommended!=0 order by seq_recommended";
	pool.query(index_b,[],(err,result)=>{
		if(err) throw err;
		res.send(result);
		console.log(result);
	});
});

router.get("/index4",(req,res)=>{
	var index_s="SELECT * FROM pc_index_s where seq_recommended!=0 order by seq_recommended";
	pool.query(index_s,[],(err,result)=>{
		if(err) throw err;
		res.send(result);
		console.log(result);
	});
});

//精品推荐的接口
router.get("/shopping",(req,res)=>{
	var lid=req.query.lid;
	var shopping="SELECT * FROM pc_index_j where lid=?";
	pool.query(shopping,[lid],(err,result)=>{
		if(err) throw err;
		res.send(result);
		console.log(result);
	});
});

//台式电脑的接口
router.get("/shopping2",(req,res)=>{
	var tid=req.query.tid;
	var shopping2="SELECT * FROM pc_index_t where tid=?";
	pool.query(shopping2,[tid],(err,result)=>{
		if(err) throw err;
		res.send(result);
		console.log(result);
	});
})

//笔记本电脑的接口
router.get("/shopping3",(req,res)=>{
	var bid=req.query.bid;
	var shopping3="SELECT * FROM pc_index_b where bid=?";
	pool.query(shopping3,[bid],(err,result)=>{
		if(err) throw err;
		res.send(result);
		console.log(result);
	});
})

//笔记本电脑的接口
router.get("/shopping4",(req,res)=>{
	var sid=req.query.sid;
	var shopping4="SELECT * FROM pc_index_s where sid=?";
	pool.query(shopping4,[sid],(err,result)=>{
		if(err) throw err;
		res.send(result);
		console.log(result);
	});
})


 //台式电脑搜索框路由接口
 router.get("/searcher",(req,res)=>{
	var title=req.query.title;
	if(title==undefined){
		title="";
	}
	var sql=`select * from pc_index_t where title like "%${title}%"`;
	pool.query(sql,(err,result)=>{
		if(err)throw err;
		res.send(result);
	});
});

//笔记本电脑搜索框路由接口
router.get("/searcher2",(req,res)=>{
	var title=req.query.title;
	if(title==undefined){
		title="";
	}
	var sql2=`select * from pc_index_b where title like "%${title}%"`;
	pool.query(sql2,(err,result)=>{
		if(err)throw err;
		res.send(result);
	});
});

//外设搜索框路由接口
router.get("/searcher3",(req,res)=>{
	var title=req.query.title;
	if(title==undefined){
		title="";
	}
	var sql3=`select * from pc_index_s where title like "%${title}%"`;
	pool.query(sql3,(err,result)=>{
		if(err)throw err;
		res.send(result);
	});
});
//添加购物车
router.get("/addcart",(req,res)=>{
	var bid=req.query.bid;
	var price=req.query.price;
	var count=req.query.count;
	var title=req.query.title;
	var img=req.query.img;
	var sql = "select * from shop_cart where bid = ?";
	pool.query(sql,[bid],(err,result)=>{
	  console.log(result)
	  if(err)throw err
	  if(result.length==0){
		var sql = `insert into shop_cart values(null,${bid},'${title}','${img}','${count}',${price})`;
	  }else{
		var sql = `update shop_cart set count=count+${count} where bid=${bid}`;
	  }
		pool.query(sql,(err,result)=>{
			if(err)throw err;
			res.send("1")
			console.log(result)
		})
	  })
  })
// 查询数据库
router.get("/searchcart",(req,res)=>{
	var bid = req.query.bid
	var sql = "select * from shop_cart"
	pool.query(sql,(err,result)=>{
	  if(err)throw err;
	  res.send(result)
	})
  })
  // 删除
  router.get("/del",(req,res)=>{
	  var bid=req.query.bid
	  var sql=`delete from shop_cart where bid in (${bid})`
	  pool.query(sql,[bid],(err,result)=>{
		  if(err) throw err;		
		  res.send({a:1})
	  })
  })
//导出路由
module.exports=router;