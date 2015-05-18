appLocation = "main";
function showSidebar() {
  if (appLocation == "main") {
    $('.main').css({'-webkit-transform':'translateX(275px)'});
    $('.overlay').fadeIn(500);
    $('.menu-bar').css({'background':'#1e1e1e'});
    $('.sidebar').css({'z-index':'2'});
    $('.article').css({'z-index':'1'});
    appLocation = "sidebar";
  }
}
function hideSidebar() {
  $('.main').css({'-webkit-transform':'translateX(0px)'});
  $('.overlay').fadeOut(500);
  $('.menu-bar').css({'background':'#d01716'});
  setTimeout(function() {
    appLocation = "main";
  }, 750);
}
function showArticle() {
  if (appLocation == "main") {
    $('.main').css({'-webkit-transform':'translateX(calc(-100% - 32px))'});
    $('.sidebar').css({'z-index':'1'});
    $('.article').css({'z-index':'2'});
    $('.article-content').scrollTop(0);
    appLocation = "article";
  }
}

function hideArticle() {
  $('.main').css({'-webkit-transform':'translateX(0px)'});
  setTimeout(function() {
    appLocation = "main";
  }, 750);
}

$('.content-card').on("tap", function(event) {
  // $(".article-content").html(posts[$(this).index()].content.replace(/\<[^>]*\>/g, ''));
  $(".article-content").html(posts[$(this).index()].content);
  
  /*
    - Find the image within the article
    - Remove it from the inline elements that surround it
    - Prepend it to its outermost element within pf-content
  */

  $(".article-content img").each(function(i){
    // console.log($(this).parents());
    for (var i = 0; i < $(this).parents().length; i++) {
      if($(this).parents()[i].classList[0] == "pf-content"){
        // console.log($(this).parents()[i].classList);
        $($(this).parents()[i-1]).before(this);
        $(this).css("margin-left", $(document).width()/2 - $(this).width()/2 - 12);
        break;
      }
    };
  });
  showArticle();
});

$('.navbar-back-glyph').on("tap", function(event) {
  hideArticle();
});

$('.content').on("swiperight", function(event) {
  showSidebar();
});

$('.navbar-sidebar-glyph').on("tap", function(event) {
  showSidebar();
});

$('.overlay').on("tap", function(event) {
  if (appLocation == "sidebar") {
    hideSidebar();
  }
});

$('.overlay').on("swipeleft", function(event) {
  hideSidebar();
});

$('.sidebar').on('swipeleft', function(){
  hideSidebar();
});

$('.sidebar-tab-lifestyle').on("tap", function(event) {
  $('.sidebar-tab').removeClass('sidebar-tab-selected');
  $('.sidebar-tab-lifestyle').addClass('sidebar-tab-selected');
  update("lifestyle");
  hideSidebar();
});

$('.sidebar-tab-news').on("tap", function(event) {
  $('.sidebar-tab').removeClass('sidebar-tab-selected');
  $('.sidebar-tab-news').addClass('sidebar-tab-selected');
  update("news");
  hideSidebar();
});

$('.sidebar-tab-opinions').on("tap", function(event) {
  $('.sidebar-tab').removeClass('sidebar-tab-selected');
  $('.sidebar-tab-opinions').addClass('sidebar-tab-selected');
  update("opinions");
  hideSidebar();
});

$('.sidebar-tab-sports').on("tap", function(event) {
  $('.sidebar-tab').removeClass('sidebar-tab-selected');
  $('.sidebar-tab-sports').addClass('sidebar-tab-selected');
  update("sports");
  hideSidebar();
});

$('.sidebar-tab-entertainment').on("tap", function(event) {
  $('.sidebar-tab').removeClass('sidebar-tab-selected');
  $('.sidebar-tab-entertainment').addClass('sidebar-tab-selected');
  update("entertainment");
  hideSidebar();
});
