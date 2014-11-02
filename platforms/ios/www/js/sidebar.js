function showSidebar() {
  $('.main').css({'-webkit-transform':'translateX(275px)'});
  $('.overlay').fadeIn(500);
  $('.menu-bar').css({'background':'#1e1e1e'});
  $('.sidebar').css({'z-index':'2'});
  $('.article').css({'z-index':'1'}); }

function hideSidebar() {
  $('.main').css({'-webkit-transform':'translateX(0px)'});
  $('.overlay').fadeOut(500);
  $('.menu-bar').css({'background':'#d01716'}); }

function showArticle() {
  $('.main').css({'-webkit-transform':'translateX(calc(-100% - 32px))'});
  $('.sidebar').css({'z-index':'1'});
  $('.article').css({'z-index':'2'}); }

function hideArticle() {
  $('.main').css({'-webkit-transform':'translateX(0px)'}); }

$('.content-card').on("tap", function(event) {
  showArticle();
});

$('.navbar-back-glyph').on("tap", function(event) {
  hideArticle();
});

$('.main').on("swipe", function(event) { 
  showSidebar(); });

$('.navbar-sidebar-glyph').on("tap", function(event) { 
  showSidebar(); });

$('.overlay').on("tap", function(event) { 
  hideSidebar(); });

$('.sidebar-tab-featured').on("tap", function(event) { 
  $('.sidebar-tab').removeClass('sidebar-tab-selected');
  $('.sidebar-tab-featured').addClass('sidebar-tab-selected'); });

$('.sidebar-tab-lifestyle').on("tap", function(event) { 
  $('.sidebar-tab').removeClass('sidebar-tab-selected');
  $('.sidebar-tab-lifestyle').addClass('sidebar-tab-selected'); });

$('.sidebar-tab-news').on("tap", function(event) { 
  $('.sidebar-tab').removeClass('sidebar-tab-selected');
  $('.sidebar-tab-news').addClass('sidebar-tab-selected'); });

$('.sidebar-tab-opinions').on("tap", function(event) { 
  $('.sidebar-tab').removeClass('sidebar-tab-selected');
  $('.sidebar-tab-opinions').addClass('sidebar-tab-selected'); });

$('.sidebar-tab-sports').on("tap", function(event) { 
  $('.sidebar-tab').removeClass('sidebar-tab-selected');
  $('.sidebar-tab-sports').addClass('sidebar-tab-selected'); });

$('.sidebar-tab-entertainment').on("tap", function(event) { 
  $('.sidebar-tab').removeClass('sidebar-tab-selected');
  $('.sidebar-tab-entertainment').addClass('sidebar-tab-selected'); });

switched1 = false;
switched1Timedout = false;
$('.sidebar-settings-switch-1').on("tap", function(event) {
  console.log(switched1Timedout);
  if (!switched1Timedout) {
    if (!switched1) {
      switched1Timedout = true;
      switched1 = true;
      $('.sidebar-settings-switch-groove-1').addClass('sidebar-settings-switch-groove-on');
      $('.sidebar-settings-switch-handle-1').addClass('sidebar-settings-switch-handle-on');
      setTimeout(function() {
        switched1Timedout = false;
      },500);
    }
    else {
      switched1Timedout = true;
      switched1 = false;
      $('.sidebar-settings-switch-groove-1').removeClass('sidebar-settings-switch-groove-on');
      $('.sidebar-settings-switch-handle-1').removeClass('sidebar-settings-switch-handle-on');
      setTimeout(function() {
        switched1Timedout = false;
      },500);
    }
  }
});

switched2 = false;
switched2Timedout = false;
$('.sidebar-settings-switch-2').on("tap", function(event) {
  if (!switched2Timedout) {
    if (!switched2) {
      switched2Timedout = true;
      switched2 = true;
      $('.sidebar-settings-switch-groove-2').addClass('sidebar-settings-switch-groove-on');
      $('.sidebar-settings-switch-handle-2').addClass('sidebar-settings-switch-handle-on');
      setTimeout(function() {
        switched2Timedout = false;
      },500);
    }
    else {
      switched2Timedout = true;
      switched2 = false;
      $('.sidebar-settings-switch-groove-2').removeClass('sidebar-settings-switch-groove-on');
      $('.sidebar-settings-switch-handle-2').removeClass('sidebar-settings-switch-handle-on');
      setTimeout(function() {
        switched2Timedout = false;
      },500);
    }
  }
});

