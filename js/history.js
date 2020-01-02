// history-nav
$(function () {
  // #で始まるリンクをクリックしたら実行
  $('a[href^="#"]').click(function () {
    // スクロールの速度
    var speed = 800; // ミリ秒で記述
    // アンカーの値取得
    var href = $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? "html" : href);
    // 移動先を数値で取得
    var position = target.offset().top;
    // スムーススクロール
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });

  $('.step-man').click(function () {
    $('.step-man').removeClass('history-active');
    $(this).addClass('history-active');
  });
});


// history-navフッターで消える
window.onscroll = function () {
  var check = window.pageYOffset; //現在のスクロール地点
  var docHeight = $(document).height(); //ドキュメントの高さ
  var dispHeight = $(window).height(); //表示領域の高さ

  if (check > docHeight - dispHeight - 700) { //判別式 500はフッターからの距離です（ここはサイトのフッターに合わせて変更しましょう）
    $('.history-nav').fadeOut(500); //1000 はフェードアウトの速度です。調整可

  } else {
    $('.history-nav').fadeIn(500); //1000 はフェードインの速度です。調整可
  }
};

/*-------------------------
ページトップボタン
--------------------------*/
// ページトップボタン
$(".btn-pageTop2").on("click", function () {
  $("html,body").animate({
      scrollTop: 0
    },
    8000
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