$(document).ready(function() {
	function update(cat) {
		$.ajax({
			type: "GET",
			url: "http://3ten.org/?json=get_category_posts&slug="+cat,
			error: function (data) {
				$('.loading-box').fadeOut(500);
				setTimeout(function() {
					$('.content').css({'overflow':'auto'});
				},500);
			},
			success: function (data) {
				for (var i = 0; i < 2; i++) {
					$(".content-card-title:eq("+i+")").html(data.posts[i].title);
					var content = data.posts[i].content;
					var contentPlain = content.replace(/\<[^>]*\>/g, '');
					$(".content-card-content-description:eq("+i+")").html(contentPlain);
<<<<<<< HEAD
					//$(".content-card-image:eq("+i+")").css({'background-image':'url('+data.posts[i].attachments.images.large+')'});
=======
>>>>>>> FETCH_HEAD
					$(".content-card-image:eq("+i+")").css({'background-image':'url('+data.posts[i].thumbnail_images.full.url+')'});
					//var contentImg = content.replace(regex that removes all tags except img);
					$(".article-content:eq("+i+")").html(contentPlain);
				}
				$('.loading-box').fadeOut(500);
			}
		});
	}
	//Use the update function whenever the content of a catgeory needs to be updated (when user clicks on category, when app launches). Specify the category as a parameter. Like so:
	update("opinions");
});
