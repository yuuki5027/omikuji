$(function(){
    // おみくじの結果を配列に格納
    var omikuji = [
      $("#result-1"),
      $("#result-2"),
      $("#result-3")
    ];
  // クリックでイベントを実行
  $("#btn-start").on("click",function(){
    // スライドアニメーションを開始
    $("#slide").addClass("open"),
    setTimeout(function(){
      $("#app").append("<div id='loading' class='layer wf-nicomoji'>あなたのうんめいのあいては？</div>")
      $("#logo-customcast,#start-charactor,#logo,#btn-start").hide();
      $("#slide").addClass("close");
    },1000)
    // スライドアニメーションを終了
    setTimeout(function(){
      $("#loading").addClass("animate__animated animate__fadeOutUp");
    },3000)
    // 結果を表示
    setTimeout(function(){
      var random = Math.floor(Math.random() * 3);
      $(".result-screen").show();
      omikuji[random].show();
      omikuji[random].addClass("animate__animated animate__bounceInUp");
    },4000)
    // 戻る
    setTimeout(function(){
      $("#btn-back").show();
      $("#btn-back").addClass("animate__animated animate__slideInUp");
    },6000)
  })
  $("#btn-back").on("click",function(){
    location.reload();
  })
})