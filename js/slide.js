//  Step1スライドショー
$(function () {
  $(".step1-header").vegas({
    //背景画像でスライドショーしたい場所の設定
    slides: [{
        src: "images/header_step1.png"
      }, //スライドする画像を配列で設定
      {
        src: "images/header_step1-2.png"
      },
      {
        src: "images/header_step1-3.png"
      },
      {
        src: "images/header_step1-4.png"
      },
      {
        src: "images/header_step1-12.png"
      },
      {
        src: "images/header_step1-13.png"
      },
      {
        src: "images/header_step1-5.png"
      },
      {
        src: "images/header_step1-6.png"
      },
      {
        src: "images/header_step1-17.png"
      },
      {
        src: "images/header_step1-7.png"
      },
      {
        src: "images/header_step1-8.png"
      },
      {
        src: "images/header_step1-15.png"
      },
      {
        src: "images/header_step1-10.png"
      },
      {
        src: "images/header_step1-11.png"
      },
      {
        src: "images/header_step1-14.png"
      },
      {
        src: "images/header_step1-9.png"
      },
      {
        src: "images/header_step1-16.png"
      }
    ],
    delay: 4500, //スライドまでの時間ををミリ秒単位で設定
    timer: true, //タイマーバーの表示/非表示を切り替え
    // overlay: 'images/020202.png', //オーバーレイする画像の設定
    animation: "random", //スライドのアニメーションを設定
    transition: "blur", //スライド間のエフェクトを設定
    transitionDuration: 6000 //エフェクト時間をミリ秒単位で設定
  });
  $('a#previous').on('click', function () {
    $(".step1-header").vegas('options', 'transition', 'blur').vegas('previous');
  });
  $('a#next').on('click', function () {
    $(".step1-header").vegas('options', 'transition', 'blur').vegas('next');
  });
  $('a#play').on('click', function () {
    $(".step1-header").vegas('play');
  });
  $('a#pause').on('click', function () {
    $(".step1-header").vegas('pause');
  });
  $('a#first').on('click', function () {
    $(".step1-header").vegas('jump', 0);
  });
  $('a#last').on('click', function () {
    $(".step1-header").vegas('jump', 16);
  });
});

//  Step2スライドショー
$(function () {
  $(".step2-header").vegas({
    //背景画像でスライドショーしたい場所の設定
    slides: [{
        src: "images/header_step2.png"
      }, //スライドする画像を配列で設定
      {
        src: "images/header_step2-3.png"
      },
      {
        src: "images/header_step2-4.png"
      },
      {
        src: "images/header_step2-2.png"
      },
      {
        src: "images/header_step2-6.png"
      },
      {
        src: "images/header_step2-7.png"
      },
      {
        src: "images/header_step2-22.png"
      },
      {
        src: "images/header_step2-8.png"
      },
      {
        src: "images/header_step2-13.png"
      },
      {
        src: "images/header_step2-9.png"
      },
      {
        src: "images/header_step2-10.png"
      },
      {
        src: "images/header_step2-11.png"
      },
      {
        src: "images/header_step2-12.png"
      },
      {
        src: "images/header_step2-14.png"
      },
      {
        src: "images/header_step2-15.png"
      },
      {
        src: "images/header_step2-16.png"
      },
      {
        src: "images/header_step2-17.png"
      },
      {
        src: "images/header_step2-18.png"
      },
      {
        src: "images/header_step2-20.png"
      },
      {
        src: "images/header_step2-21.png"
      },
      {
        src: "images/header_step2-23.png"
      },
      {
        src: "images/header_step2-19.png"
      }
    ],
    delay: 4500, //スライドまでの時間ををミリ秒単位で設定
    timer: true, //タイマーバーの表示/非表示を切り替え
    // overlay: 'images/020202.png', //オーバーレイする画像の設定
    animation: "random", //スライドのアニメーションを設定
    transition: "blur", //スライド間のエフェクトを設定
    transitionDuration: 6000 //エフェクト時間をミリ秒単位で設定
  });
  $('a#previous').on('click', function () {
    $(".step2-header").vegas('options', 'transition', 'blur').vegas('previous');
  });
  $('a#next').on('click', function () {
    $(".step2-header").vegas('options', 'transition', 'blur').vegas('next');
  });
  $('a#play').on('click', function () {
    $(".step2-header").vegas('play');
  });
  $('a#pause').on('click', function () {
    $(".step2-header").vegas('pause');
  });
  $('a#first').on('click', function () {
    $(".step2-header").vegas('jump', 0);
  });
  $('a#last').on('click', function () {
    $(".step2-header").vegas('jump', 21);
  });
});

//  Step3スライドショー
$(function () {
  $(".step3-header").vegas({
    //背景画像でスライドショーしたい場所の設定
    slides: [{
        src: "images/header_step3.png"
      }, //スライドする画像を配列で設定
      {
        src: "images/header_step3-4.png"
      },
      {
        src: "images/header_step3-11.jpg"
      },
      {
        src: "images/header_step3-2.png"
      },
      {
        src: "images/header_step3-3.png"
      },
      {
        src: "images/header_step3-5.png"
      },
      {
        src: "images/header_step3-6.png"
      },
      {
        src: "images/header_step3-7.png"
      },
      {
        src: "images/header_step3-12.png"
      },
      {
        src: "images/header_step3-8.png"
      },
      {
        src: "images/header_step3-9.png"
      },
      {
        src: "images/header_step3-10.png"
      },
      {
        src: "images/header_p4-2.png"
      },
      {
        src: "images/header_p4-3.png"
      },
      {
        src: "images/header_p4-4.png"
      },
      {
        src: "images/header_p4-5.png"
      },
      {
        src: "images/header_p4-6.png"
      },
      {
        src: "images/header_p3-4.png"
      },
      {
        src: "images/header_p3-5.png"
      },
      {
        src: "images/header_p3-6.png"
      },
      {
        src: "images/header_p2-2.png"
      },
      {
        src: "images/header_p2-3.png"
      },
      {
        src: "images/header_p2-4.png"
      },
      {
        src: "images/header_p2-5.jpg"
      },
      {
        src: "images/header_p2-6.png"
      },
      {
        src: "images/header_p2-7.png"
      },
      {
        src: "images/header_step3-13.png"
      },
      {
        src: "images/header_step3-14.png"
      },
      {
        src: "images/header_step3-15.png"
      },
      {
        src: "images/header_step3-16.png"
      }
    ],
    delay: 4500, //スライドまでの時間ををミリ秒単位で設定
    timer: true, //タイマーバーの表示/非表示を切り替え
    // overlay: 'images/020202.png', //オーバーレイする画像の設定
    animation: "random", //スライドのアニメーションを設定
    transition: "blur", //スライド間のエフェクトを設定
    transitionDuration: 6000 //エフェクト時間をミリ秒単位で設定
  });
  $('a#previous').on('click', function () {
    $(".step3-header").vegas('options', 'transition', 'blur').vegas('previous');
  });
  $('a#next').on('click', function () {
    $(".step3-header").vegas('options', 'transition', 'blur').vegas('next');
  });
  $('a#play').on('click', function () {
    $(".step3-header").vegas('play');
  });
  $('a#pause').on('click', function () {
    $(".step3-header").vegas('pause');
  });
  $('a#first').on('click', function () {
    $(".step3-header").vegas('jump', 0);
  });
  $('a#last').on('click', function () {
    $(".step3-header").vegas('jump', 29);
  });
});