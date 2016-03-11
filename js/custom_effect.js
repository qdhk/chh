/**
 * 作者：Bililovy
 * 
 * 最后更新时间：2015.09.22
 *
 * 文字动画插件，帮助更好的解决动画效果，使用时，只需将html元素以ID命名，修改此页面
 * 的元素设置，可以自行增删动画和指定动画效果
 */
(function($) {
	"use strict";
		var sets, fx, toAnimate = "#effect", settings = {
			animation:3, //动画方式 从1-15 每个数字代表一个动画 请自测效果
			animationType: "in",//显示方式 in 和out 参数，in代表入场,out代表出场
			backwards: false, //改变动画显示方向，默认false 设为true 动画将从后往前倒序播放
			easing: "easeOutQuint", //这里的效果 可以参见http://code.ciaoca.com/jquery/easing/   
			speed: 1000, //动画帧速 即在指定时间内完成动画
			sequenceDelay: 100, //场景延迟  即执行完上一个动画后，等待指定时间继续执行下一动画
			startDelay: 0, //开始延迟，即执行当前动画时，等待指定时间后再开始
			offsetX: 100,//动画元素 x坐标偏移量
			offsetY: 50,//动画元素 Y坐标偏移量
			onComplete: doThis, //回调函数 即 执行完动画后，需要执行的回调方法
			restoreHTML: true  //重置元素 即重复播放两次该动画 类似于此效果 默认true
		};
		// var set1={
		// 	animation:4, //动画方式 从1-15 每个数字代表一个动画 请自测效果
		// 	animationType: "in",//显示方式 in 和out 参数，in代表入场,out代表出场
		// 	easing: "easeOutQuint", //这里的效果 可以参见http://code.ciaoca.com/jquery/easing/   
		// 	speed: 1000, //动画帧速 即在指定时间内完成动画
		// 	sequenceDelay: 100, //场景延迟  即执行完上一个动画后，等待指定时间继续执行下一动画
		// 	startDelay: 0, //开始延迟，即执行当前动画时，等待指定时间后再开始
		// 	offsetX: 100,//动画元素 x坐标偏移量
		// 	offsetY: 50,//动画元素 Y坐标偏移量
		// 	onComplete: false, //回调函数 即 执行完动画后，需要执行的回调方法
		// 	restoreHTML: true  //重置元素 即重复播放两次该动画 类似于此效果 默认true
		// }
		jQuery(document).ready(function() {
			fx = jQuery("#effect");
			jQuery.cjTextFx(settings);
			jQuery.cjTextFx.animate(toAnimate);
			fullpage.initialize('#fullpage', {
				anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
				menu: '#menu',
				css3:true,
				
				afterLoad: function(anchorLink, index){
					//console.log(index);
					if(index=="2"){
						var animateObj=".effect11";
						sets = {animation: 1,speed: 2000,startDelay: 100,animationType: "in", restoreHTML: true,onComplete: false,	};
						jQuery.cjTextFx.animate(animateObj, sets);
						var animateObj=".effect12";
						sets = {animation: 2,speed: 2000,startDelay: 100,animationType: "in", restoreHTML: true,onComplete: false,	};
						jQuery.cjTextFx.animate(animateObj, sets);
					}
		            
		        },
		        afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
		            var loadedSlide = $(this);
		            //console.log(anchorLink+"--"+index+"  "+slideAnchor+"   "+slideIndex);
		            //first slide of the second section
		            if(index == 2 && slideIndex == 1){
		                var animateObj=".effect11";
						sets = {animation: 2,speed: 1000,startDelay: 100,animationType: "in", restoreHTML: false,onComplete: false,	};
						jQuery.cjTextFx.animate(animateObj, sets);
						var animateObj=".effect12";
						sets = {animation: 4,speed: 1000,startDelay: 100,animationType: "in", restoreHTML: false,onComplete: false,	};
						jQuery.cjTextFx.animate(animateObj, sets);
		            }
		            if(index == 2 && slideIndex == 2){
		                var animateObj=".effect21";
						sets = {animation: 3,speed: 1000,startDelay: 100,animationType: "in", restoreHTML: true,onComplete: false,	};
						jQuery.cjTextFx.animate(animateObj, sets);
						var animateObj=".effect22";
						sets = {animation: 5,speed: 1000,startDelay: 100,animationType: "in", restoreHTML: true,onComplete: false,	};
						jQuery.cjTextFx.animate(animateObj, sets);
		            }
		            if(index == 2 && slideIndex == 3){
		                var animateObj=".effect31";
						sets = {animation: 7,speed: 1000,startDelay: 100,animationType: "in", restoreHTML: false,onComplete: false,	};
						jQuery.cjTextFx.animate(animateObj, sets);
						var animateObj=".effect32";
						sets = {animation: 8,speed: 1000,startDelay: 100,animationType: "in", restoreHTML: false,onComplete: false,	};
						jQuery.cjTextFx.animate(animateObj, sets);
		            }
		            if(index == 2 && slideIndex == 4){
		                var animateObj=".effect41";
						sets = {animation: 6,speed: 1000,startDelay: 100,animationType: "in", restoreHTML: false,onComplete: false,	};
						jQuery.cjTextFx.animate(animateObj, sets);
						var animateObj=".effect42";
						sets = {animation: 9,speed: 1000,startDelay: 100,animationType: "in", restoreHTML: false,onComplete: false,	};
						jQuery.cjTextFx.animate(animateObj, sets);
		            }
		            if(index == 2 && slideIndex == 5){
		                var animateObj=".effect51";
		                $(".effect51").css("opacity",1);
						$(".effect52").css("opacity",0.6);
						$(".myvideo").css("visibility","hidden");
						sets = {animation: 10,speed: 1000,startDelay: 100,animationType: "in", restoreHTML: false,onComplete: false,	};
						jQuery.cjTextFx.animate(animateObj, sets);
						var animateObj=".effect52";
						sets = {animation: 11,speed: 1000,startDelay: 100,animationType: "in", restoreHTML: false,onComplete: showvideo	};
						jQuery.cjTextFx.animate(animateObj, sets);
		            }
		            if(index == 2 && slideIndex == 6){
		            	
		                var animateObj=".effect61";
						sets = {animation: 14,speed: 1000,startDelay: 100,animationType: "in", restoreHTML: false,onComplete: false,	};
						jQuery.cjTextFx.animate(animateObj, sets);
						var animateObj=".effect62";
						sets = {animation: 13,speed: 1000,startDelay: 100,animationType: "in", restoreHTML: false,onComplete: false,	};
						jQuery.cjTextFx.animate(animateObj, sets);

		            }
		            if(index == 2 && slideIndex == 7){
		            	
		                var animateObj=".effect71";
						sets = {animation: 14,speed: 1000,startDelay: 100,animationType: "in", restoreHTML: false,onComplete: false,	};
						jQuery.cjTextFx.animate(animateObj, sets);
						var animateObj=".effect72";
						sets = {animation: 13,speed: 1000,startDelay: 100,animationType: "in", restoreHTML: false,onComplete: false,	};
						jQuery.cjTextFx.animate(animateObj, sets);

		            }
		            if(index == 2 && slideIndex == 8){
		            	
		                var animateObj=".effect81";
						sets = {animation: 14,speed: 1000,startDelay: 100,animationType: "in", restoreHTML: false,onComplete: false,	};
						jQuery.cjTextFx.animate(animateObj, sets);
						var animateObj=".effect82";
						sets = {animation: 13,speed: 1000,startDelay: 100,animationType: "in", restoreHTML: false,onComplete: false,	};
						jQuery.cjTextFx.animate(animateObj, sets);

		            }
		            if(index == 2 && slideIndex == 9){
		            	
		                var animateObj=".effect91";
						sets = {animation: 14,speed: 1000,startDelay: 100,animationType: "in", restoreHTML: false,onComplete: false,	};
						jQuery.cjTextFx.animate(animateObj, sets);
						var animateObj=".effect92";
						sets = {animation: 13,speed: 1000,startDelay: 100,animationType: "in", restoreHTML: false,onComplete: false,	};
						jQuery.cjTextFx.animate(animateObj, sets);

		            }
		            if(index == 2 && slideIndex == 10){
		            	
		                var animateObj=".effect101";
						sets = {animation: 14,speed: 1000,startDelay: 100,animationType: "in", restoreHTML: false,onComplete: false,	};
						jQuery.cjTextFx.animate(animateObj, sets);
						var animateObj=".effect102";
						sets = {animation: 13,speed: 1000,startDelay: 100,animationType: "in", restoreHTML: false,onComplete: false,	};
						jQuery.cjTextFx.animate(animateObj, sets);

		            }
		        }
				
			});
    	});
			
		
		
		function showvideo(){
			console.log("ccc");
			$(".myvideo").css("visibility","visible");
			$(".effect51").css("opacity",0);
			$(".effect52").css("opacity",0);
			var winW = $(window).width();
			var winH = $(window).height();
			// $(".myvideo").css("top",winH/2-100).fadeIn().animate({"left":10},500).delay(4000).fadeOut(function(){
			// 	$(this).remove()
			// });
			// $(".myvideo").css("top",300).fadeIn().animate({"left":10},500).delay(4000).fadeOut(function(){
			// 	$(this).remove()
			// });
		}
		function doThis(){
				fx = jQuery("#effect1");
				var animateObj='#effect1';			
				var numSj = Math.floor(Math.random()*14)+1;
				switch(numSj) {
					case 1:						
					sets = {
						animation:1,
						animationType: "in",
						easing: "easeInQuint",  
						startDelay: 1000,
						restoreHTML: true,	
						onComplete: doThis,					
					};						
					break;
					
					case 2:
						sets = {animation: 2,speed: 1000,startDelay: 1000,animationType: "in", restoreHTML: true,onComplete: doThis,	};
					break;
					
					case 3:
						sets = {animation: 3,speed: 1000, startDelay: 1000,animationType: "in", restoreHTML: true,onComplete: doThis,};
					break;
					case 4:
						sets = {animation: 4, speed: 1000,startDelay: 1000,animationType: "in", restoreHTML: true,onComplete: doThis,};
					break;
					case 5:
						sets = {animation: 5,speed: 1000,startDelay: 1000,animationType: "in",onComplete: doThis,};
					break;
					
					case 6:
						sets = {animation: 6,speed: 1000, startDelay: 1000,animationType: "in", restoreHTML: true,onComplete: doThis,};
					break;

					case 7:
						sets = {animation: 7,speed: 1000,startDelay: 1000,animationType: "in", backwards: true,onComplete: doThis,};
					break;
					
					case 8:
						sets = {animation: 8,speed: 1000,startDelay: 1000, animationType: "in", backwards: true, restoreHTML: true,onComplete: doThis,};
					break;
					
					case 9:
						sets = {animation: 9,speed: 1000,startDelay: 1000, animationType: "in",easing: "easeOutBounce",onComplete: doThis,};
					break;
					
					case 10:
						sets = {animation: 10, speed: 1000,startDelay: 1000,animationType: "in", speed: 1000, easing: "easeInBack", restoreHTML: true,onComplete: doThis,};
					break;
					
					case 11:
						sets = {animation: 11, speed: 1000,startDelay: 1000,animationType: "in",startDelay: 1000, easing: "easeInBack", restoreHTML: true,onComplete: doThis,};
					break;
					
					case 12:
						sets = {animation: 12, speed: 1000,startDelay: 1000,animationType: "in", speed: 1000, easing: "easeInBack", restoreHTML: true,onComplete: doThis,};
					break;					
						
			   	    default :
			   	    	sets = {animation: 13, speed: 1000,startDelay: 1000,animationType: "in", speed: 500, easing: "easeInBack", restoreHTML: true,onComplete: doThis,};
					
					break;
					
				}
			jQuery.cjTextFx.animate(animateObj, sets);
		}
		
})(jQuery);