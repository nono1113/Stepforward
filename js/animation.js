$(window).scroll(function () {
  delayScrollAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述
// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  delayScrollAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまでページが読み込まれたらすぐに動かしたい場合の記述

function delayScrollAnime() {
  var time = 0.2; // 遅延時間を増やす秒数の値
  var value = time;
  $('.delayScroll .box').each(function () {
    var elemPos = $(this).offset().top; // 要素の位置まで来たら
    var scroll = $(window).scrollTop(); // スクロール値を取得
    var windowHeight = $(window).height(); // 画面の高さを取得
    if (scroll >= elemPos - windowHeight) { // 指定領域内にスクロールが入ったら
      if (!$(this).hasClass("fadeUp")) { // アニメーションのクラス名が指定されているかどうかをチェック
        $(this).css("animation-delay", value + "s"); // アニメーション遅延のCSS animation-delay を追加し
        $(this).addClass("fadeUp"); // アニメーションのクラス名を追加※3-1-1.css 内にある他の動きのクラス名に変更可能
        value = value + time; //delay 時間を増加させる
      }
    } else {
      $(this).removeClass("fadeUp"); // アニメーションのクラス名を削除
      value = time; //delay 初期値の数値に戻す
    }
  })
}

// ローディング

$(function () {
  var h = $(window).height();

  $("#wrap").css("display", "none");
  $("#loader-bg ,#loader")
    .height(h)
    .css("display", "block");
});

$(window).load(function () {
  //全ての読み込みが完了したら実行
  $("#loader-bg")
    .delay(900)
    .fadeOut(800);
  $("#loader")
    .delay(600)
    .fadeOut(300);
  $("#wrap").css("display", "block");
});

//10秒たったら強制的にロード画面を非表示
$(function () {
  setTimeout("stopload()", 10000);
});

function stopload() {
  $("#wrap").css("display", "block");
  $("#loader-bg")
    .delay(900)
    .fadeOut(800);
  $("#loader")
    .delay(600)
    .fadeOut(300);
}