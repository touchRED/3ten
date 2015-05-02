function update(cat) {
	$('.navbar-title').text(cat);
	$('.loading-box').fadeIn(500);
	$.ajax({
		type: "GET",
        dataType: "jsonp",
        crossDomain: true,
		url: "http://3ten.org/?json=get_category_posts&slug="+cat,
		success: function (data) {
           posts = data.posts;
           for (var i = 0; i < $('.content-card').length; i++) {
                $(".content-card-title:eq("+i+")").html(data.posts[i].title);
                $(".content-card-content-description:eq("+i+")").html(data.posts[i].content.replace(/\<[^>]*\>/g, ''));
                if(data.posts[i].thumbnail_images){
                    $(".content-card-image:eq("+i+")").css({'background-image':'url('+data.posts[i].thumbnail_images.full.url+')'});
                    $(".content-card-image-spacer:eq("+i+")").attr("src", data.posts[i].thumbnail_images.full.url);
                }else{
                    $(".content-card-image:eq("+i+")").css({'background-image':'none'});
                }
                $(".content-card-content-author:eq("+i+")").text("By " + data.posts[i].author.name);
                $(".content-card-content-date:eq("+i+")").text(cat);
                // var contentImg = content.replace(regex that removes all tags except img);
                // $(".article-content").html(data.posts[i].content.replace(/\<[^>]*\>/g, ''));
           }
           $('.loading-box').fadeOut(500);
		}
	});
}
$(document).ready(function() {
	//Use the update function whenever the content of a catgeory needs to be updated (when user clicks on category, when app launches). Specify the category as a parameter. Like so:
	update("Lifestyle");
});
