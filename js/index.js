//  スライドショー
$(function() {
  $("header").vegas({
    //背景画像でスライドショーしたい場所の設定
    slides: [
      {
        src: "images/header_index.png"
      }, //スライドする画像を配列で設定
      {
        src: "images/header_index-2.png"
      },
      {
        src: "images/header_index.png"
      },
      {
        src: "images/header_index-3.png"
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
$(function() {
  $("img.lazy").lazyload({
    threshold: 100, // 100pxの距離まで近づいたら表示する
    effect: "fadeIn", // じわじわっと表示させる
    effect_speed: 3500 // 3.5秒かけて表示させる
  });
});

// アコーディオン
$(function() {
  $("#trigger-btn").click(function() {
    $(".section-wrapper").fadeIn();
  });
});

// ページトップボタン
$(".btn-pageTop>a").on("click", function() {
  $("html,body").animate(
    {
      scrollTop: 0
    },
    2000
  );
});

// Step forwardボタン
$("#trigger-btn").on("click", function() {
  $("html,body").animate(
    {
      scrollTop: 1400
    },
    1000
  );
});
