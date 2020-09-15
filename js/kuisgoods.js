/*-------------------------
kuisgoodsページのソート
--------------------------*/
$(function () {
  $("#container").mixItUp();
});

/*-------------------------
kuisgoods年代の出力
--------------------------*/

$(function () {
  $(".col-1-of-4").append('<div class="one">');

  $(".one").each(function () {
    $(this).html("<p>" + $(this).parent().children("img").attr("alt") + "</p>");
  });
  $(".col-1-of-4").hover(function () {
    $(this).children(".one").stop().fadeIn(300);
    $(this).children(".one").children("p").stop().animate({
      "top": 0
    }, 300);
  }, function () {
    $(this).children(".one").stop().fadeOut(300);
    $(this).children(".one").children("p").stop().animate({
      "top": "10px"
    }, 300);
  });
});

$('.kuisgoods-section__text-outer>a').click(function () {
  $('a').removeClass('kuisgoods-active');
  $(this).addClass('kuisgoods-active');
});

$('.btn-pageTop>a').click(function () {
  $('a').removeClass('kuisgoods-active');
  $(this).addClass('kuisgoods-active');
});


/*-------------------------
ページトップボタン
--------------------------*/

$(window).scroll(function () {
  if ($(this).scrollTop() > 400) { // 200pxスクロールしていたら上に戻るボタンを表示
    $(".btn-pageTop").fadeIn();
  } else {
    $(".btn-pageTop").fadeOut();
  }
});
$(".btn-pageTop>span").on("click", function () {
  $("html,body").animate({
      scrollTop: 0
    },
    2000
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