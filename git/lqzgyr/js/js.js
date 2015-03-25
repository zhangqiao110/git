$(function(){
	var width = document.body.clientWidth;
	var indexBg = width - 230;
	var heroWidth = (width - 16 - 230 ) / 4;
	// right
	$('.index-bg, .news-bg').width(indexBg);
	// hero
	$('.hero-wrap').width(heroWidth);
	// tese
	$('.right-wrap').width(width - 230);

	$(window).resize(function(event) {
		// hero
		var width = document.body.clientWidth;
		var heroWidth = (width - 16 - 230 ) / 4;
		$('.hero-wrap').width(heroWidth);

		// tese content index
		$('.right-wrap, .news-bg, .index-bg').width(width - 230);
	});


	// hero tese window.onload
	$('.right-wrap h3').css({
		'top': 0,
		'opacity': 1
	});
	$('.right-wrap p').css({
		'left': 0,
		'opacity': 1
	});
	$('.star').css({
		'right': 0,
		'opacity': 1
	});

	//remove share css
	function removeShare(){
		$('.share').removeClass('bdshare-button-style0-16');
	}
	setTimeout(removeShare,3000);

	// focus
	$('.focus-tab').hover(function() {
		clearInterval(tabAutoPlay1);
		k = $(this).index();
		$(this).addClass('focus-tab-curr').siblings().removeClass('focus-tab-curr');
		$('#focus a').eq(k).removeClass('disN').siblings('#focus a').addClass('disN');
		tabAutoPlay1 = setInterval(tabAutoPlay,4000);
	});

	var k = 0;//计数器

	function tabAutoPlay(){
		if(k == 5){
			k = 0;
		}
		$('#focus a').eq(k).removeClass('disN').siblings('a').addClass('disN');
		$('.focus-tab').eq(k).addClass('focus-tab-curr').siblings().removeClass('focus-tab-curr');
		k++;
	}

	var tabAutoPlay1 = setInterval(tabAutoPlay,4000);

	// big focus mouse
	$('.photo img').click(function(event) {
		var index = $(this).index() + 1;
		$('#img-sel').attr('src','images/big_img'+index+'.jpg').hide();
		$('.big-img, #img-sel').fadeIn();
	});
	var imgWidth = $('.big-img').width();
	$('.big-img').mousemove(function(event) {
		if( (event.pageX < width/2) && (event.pageX > (width - imgWidth)/2) ) {
			$('.img-left').css('opacity',1);
			$('.img-right').css('opacity',0.2);
		}
		else if( (event.pageX > width/2) && (event.pageX < (width + imgWidth)/2) ) {
			$('.img-left').css('opacity',0.2);
			$('.img-right').css('opacity',1);
		}
		else{

		}
	}).mouseout(function(event) {
		$('.img-left, .img-right').css('opacity',0.2);
	});
	
	//img change control
	var imgIndex = 1;//当前图片索引
	var imgNum = 3;//图片总数
	// left
	$('.img-left').click(function(event) {
		
		if(imgIndex == imgNum){
			imgIndex = 1;
		}
		else{
			imgIndex ++;
		}		
		$('#img-sel').attr('src','images/big_img'+imgIndex+'.jpg').hide().show();
	});
	//right
	$('.img-right').click(function(event) {
		
		if(imgIndex == 1){
			imgIndex = imgNum;
		}
		else{
			imgIndex --;
		}		
		$('#img-sel').attr('src','images/big_img'+imgIndex+'.jpg').hide().show();
	});

	// goback
	$('.img-back').click(function(event) {
		$('.big-img').hide();
	});

	// list news
	$('.list-tab').mouseover(function(event) {
		$(this).addClass('list-tab-cur').siblings().removeClass('list-tab-cur');
		$('.list-news-wrap').eq($(this).index()).show().siblings('.list-news-wrap').hide();
	});

		//window.location.search 新闻跳转带参数
		var newsIndex = window.location.search.match(/\d+/ig);
		$('.list-tab').eq(newsIndex-1).addClass('list-tab-cur').siblings().removeClass('list-tab-cur');
		$('.list-news-wrap').eq(newsIndex-1).show().siblings('.list-news-wrap').hide();

	// vedio show and hide
	var videoFlag = false;
	$('.index-video-wrap,.play').click(function() {	
		videoFlag = true;	
		$('.video-sourse').removeClass('disN');
		$('.video-sourse-wrap').html("<iframe id='myvideo' frameborder='0' allowfullscreen='' src='http://v.qq.com/iframe/player.html?vid=o0142c77i70&tiny=0'></iframe><div class='videoback'>X</div>");
		$('.videoback').click(function() {
			$('.video-sourse').addClass('disN').attr('src','');		
		});
		
		if(videoFlag == true){
			k = $(window.frames["myvideo"].document).find('body').find('div').eq(0).width();
			videoFlag = false;
		}
		else{
			return;
		}		
		
	});
	
})