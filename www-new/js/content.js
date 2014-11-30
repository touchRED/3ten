$(document).ready(function() {
	function update(cat) {
		$.ajax({
			type: "GET",
			url: "http://3ten.org/?json=get_category_posts&slug="+cat,
			error: function (data) {
				/*JUST FOR TESTING
        		$('.loading-box').fadeOut(500);
        		/*REMOVE WHEN FINISHED
        		setTimeout(function() {
          	  	$('.content').css({'overflow':'auto'});
        		},500);*/
			},
			success: function (data) {
				for (var i = 0; i < 5; i++) {
					$(".content-card-title:eq("+i+")").html(data.posts[i].title);
					var content = data.posts[i].content;
					var contentClean = $(content).not('script');
					//var contentPlain = content.replace(/\<[^>]*\>/g, '');
					$(".content-card-content-description:eq("+i+")").append(contentClean);
					$(".content-card-image:eq("+i+")").css({'background-image':'url('+data.posts[i].thumbnail_images.full.url+')'});
					$(".article-content:eq("+i+")").append(contentClean);				
				}
				$('.loading-box').fadeOut(500);
			}
		});
	} 
	update("opinions");
});