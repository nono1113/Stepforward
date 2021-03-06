//  スライドショー
$(function () {
  $("#page-header").vegas({
    //背景画像でスライドショーしたい場所の設定
    slides: [{
        src: "images/header_index.png"
      }, //スライドする画像を配列で設定
      {
        src: "images/header_step3.png"
      },
      {
        src: "images/header_index-3.png"
      },
      {
        src: "images/header_index-2.png"
      }
    ],
    delay: 4500, //スライドまでの時間ををミリ秒単位で設定
    timer: true, //タイマーバーの表示/非表示を切り替え
    // overlay: 'images/020202.png', //オーバーレイする画像の設定
    animation: "random", //スライドのアニメーションを設定
    transition: "blur", //スライド間のエフェクトを設定
    transitionDuration: 6000 //エフェクト時間をミリ秒単位で設定
  });
});

// lazyload
$(function () {
  $("img.lazy").lazyload({
    threshold: 100, // 100pxの距離まで近づいたら表示する
    effect: "fadeIn", // じわじわっと表示させる
    effect_speed: 2000 // 3秒かけて表示させる
  });
});

// アコーディオン
$(function () {
  $("#trigger-btn").click(function () {
    $(".section-wrapper").fadeIn();
  });
});

// ページトップボタン
$(".btn-pageTop2>span").on("click", function () {
  $("html,body").animate({
      scrollTop: 0
    },
    2000
  );
});

// Step forwardボタン
$("#trigger-btn").on("click", function () {
  if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
    $("html,body").animate({
        scrollTop: 1800
      },
      2000
    );
  } else {
    $("html,body").animate({
        scrollTop: 1400
      },
      2000
    );
  }
});

// header nav dropボタン
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

// header nav ハンバーガー
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