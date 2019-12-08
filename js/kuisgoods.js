/*-------------------------
kuisgoodsページのソート
--------------------------*/
$(function () {
  $("#container").mixItUp();
});

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

/*-------------------------
chartページのグラフ
--------------------------*/
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Tシャツ", "パーカー", "タオル", "マグカップ", "文具", "バッグ", "たべもの"],
    datasets: [{
      backgroundColor: [
        "#FED79D",
        "#E4E1B7",
        "#D4D2AA",
        "#BABD90",
        "#F5BCBA",
        "#C04563",
        "#EC897F"
      ],
      data: [42.2, 13.1, 10, 4.2, 9, 18.3, 3.1],
      borderWidth: 0.6,
    }]
  },
  options: {
    cutoutPercentage: 40,
    legend: {
      display: false,
    }
  },
});