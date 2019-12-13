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

  $('a').click(function () {
    $('a').removeClass('history-active');
    $(this).addClass('history-active');
  });

});