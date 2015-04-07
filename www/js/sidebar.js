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
  $(".article-content").html(posts[$(this).index()].content.replace(/\<[^>]*\>/g, ''));
  showArticle();
});

$('.navbar-back-glyph').on("tap", function(event) {
  hideArticle();
});

$('.main').on("swipe", function(event) {
  showSidebar();
});

$('.navbar-sidebar-glyph').on("tap", function(event) {
  showSidebar();
});

$('.overlay').on("tap", function(event) {
  hideSidebar();
});

$('.sidebar-tab-lifestyle').on("tap", function(event) {
  $('.sidebar-tab').removeClass('sidebar-tab-selected');
  $('.sidebar-tab-lifestyle').addClass('sidebar-tab-selected');
  update("lifestyle");
});

$('.sidebar-tab-news').on("tap", function(event) {
  $('.sidebar-tab').removeClass('sidebar-tab-selected');
  $('.sidebar-tab-news').addClass('sidebar-tab-selected');
  update("news");
});

$('.sidebar-tab-opinions').on("tap", function(event) {
  $('.sidebar-tab').removeClass('sidebar-tab-selected');
  $('.sidebar-tab-opinions').addClass('sidebar-tab-selected');
  update("opinions");
});

$('.sidebar-tab-sports').on("tap", function(event) {
  $('.sidebar-tab').removeClass('sidebar-tab-selected');
  $('.sidebar-tab-sports').addClass('sidebar-tab-selected');
  update("sports");
});

$('.sidebar-tab-entertainment').on("tap", function(event) {
  $('.sidebar-tab').removeClass('sidebar-tab-selected');
  $('.sidebar-tab-entertainment').addClass('sidebar-tab-selected');
  update("entertainment");
});
