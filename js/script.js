
var wait = 2;
var jieguo = 0;

$(function(){
	var time;
	var font;
	$(document).bind('contextmenu',function(e){ 
	return false; 
	}); 

	$(".start").show();
	
	$(".start").click(function(){
		time = setInterval("gaocf()",30);$("#chengfa").animate({fontSize:"50px"});
		$(".start,.over").toggle();
	});
	
	// $(".over").click(function(){
	// 	clearInterval(time);
	// 	for(var i=0;i<test.length;i++ ){
	// 		if($("#chengfa").html() == test[i]){
	// 			openFace(Math.floor(Math.random()*4));
	// 			test.splice(i,1);
	// 		}
	// 	}
	// 	$("#chengfa").animate({fontSize:"20px"}).animate({fontSize:"50px"});
	// 	$(".start,.over").toggle();
	// 	for( i=1;i<=wait;i++ ){
	// 		setTimeout("count("+ i + ")",i*1000)
	// 	}
	// 	$(".start").hide();$(".count").show();		
	// });
	
	$(document).keydown(function(event){
		if(event.keyCode == 13 || event.keyCode == 32){
			if($(".start").css("display") == "none" && $(".over").css("display") == "none" ){
				return false;
			}		
			if($(".start").css("display") == "block"){
				$(".start").click()
			}else{
				$(".over").click()
			}
		};
		if(event.keyCode == 116){
			return false;
		}
	}); 
	$(".over").mousedown(function(e){
		if(e.which==1){
			clearInterval(time);
			for(var i=0;i<test.length;i++ ){
				if($("#chengfa").html() == test[i]){
					if(test[i]=="学模特走时装秀"){
						openFace1(8);
					}else if(test[i]=="摆pose"){
						openFace1(9);
					}else{
						openFace(Math.floor(Math.random()*7));
					}
					

					test.splice(i,1);
				}
			}
			$("#chengfa").animate({fontSize:"20px"}).animate({fontSize:"60px"});
			$(".start,.over").toggle();
			for( i=1;i<=wait;i++ ){
				setTimeout("count("+ i + ")",i*1000)
			}
			$(".start").hide();$(".count").show();		
		}
		// if(e.which==2){
		// 	alert("middle");
		// }
		if(e.which==3){
			var chengfa = test[0];
			$("#chengfa").html(chengfa);
			clearInterval(time);
			for(var i=0;i<test.length;i++ ){
				if($("#chengfa").html() == test[i]){
					openFace1(1);
					//test.splice(i,1);
				}
			}
			$("#chengfa").animate({fontSize:"20px"}).animate({fontSize:"60px"});
			$(".start,.over").toggle();
			for( i=1;i<=wait;i++ ){
				setTimeout("count("+ i + ")",i*1000)
			}
			$(".start").hide();$(".count").show();		
		}
		
	});
});

function count(num){
	if(num == wait){
		$(".count").hide();
		$(".start").show();
	}else{ 
		jieguo = wait - num;
		$(".start").hide();$(".count").show();
		$(".count").html("启动(" + jieguo + "秒)")
	}
}

function gaocf(){
	var numSj = Math.floor(Math.random()*test.length);
	var chengfa = test[numSj];
	$("#chengfa").html(chengfa);
}
function gaocfme(){
	var chengfa = test[1];
	$("#chengfa").html(chengfa);
}
function openFace(obj){
	$("body").append("<img class='tmp_face' src='images/"+obj+".gif'/>");
	var winW = $(window).width();
	var winH = $(window).height();
	$(".tmp_face").css("top",winH/2-100).fadeIn().animate({"left":10},500).delay(1300).fadeOut(function(){
		$(this).remove()
	});
}
function openFace1(obj){
	$("body").append("<img class='tmp_face' src='images/"+obj+".gif'/>");
	var winW = $(window).width();
	var winH = $(window).height();
	$(".tmp_face").css("top",winH/2-100).fadeIn().animate({"left":10},500).delay(10000).fadeOut(function(){
		$(this).remove()
	});
}
