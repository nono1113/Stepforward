/*-------------------------
ページトップボタン
--------------------------*/

$(function () {
  $("img.lazy").lazyload({
    threshold: 100, // 100pxの距離まで近づいたら表示する
    effect: "fadeIn", // じわじわっと表示させる
    effect_speed: 2500 // 2.5秒かけて表示させる
  });
});

/*-------------------------
ページトップボタン
--------------------------*/
// ページトップボタン
$(".btn-pageTop2").on("click", function () {
  $("html,body").animate({
      scrollTop: 0
    },
    4000
  );
});

/*-------------------------
// header nav dropボタン
--------------------------*/
$(function () {
  $('.page-nav__drop').hover(function () {
    $(this).find('.page-nav__sub-list').stop(true).fadeIn(500);
  }, function () {
    $(this).find('.page-nav__sub-list').fadeOut(500);
  });
  $('.slide > li').hover(function () {
    $(this).find('.page-nav__sub-list').stop(true).slideDown(500);
  }, function () {
    $(this).find('.page-nav__sub-list').slideUp(500);
  });
});

/*-------------------------
// header nav ハンバーガー
--------------------------*/
function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('js-hamburger');
  var blackBg = document.getElementById('js-black-bg');

  hamburger.addEventListener('click', function () {
    body.classList.toggle('nav-open');
  });
  blackBg.addEventListener('click', function () {
    body.classList.remove('nav-open');
  });
}
toggleNav();