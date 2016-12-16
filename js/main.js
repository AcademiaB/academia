$(function(){
  fullpage_load();

  setTimeout(function(){
    $('#menu_soogo')
      .velocity({
        'left': "5%"
      },2000);
    $('#menu_logo')
      .velocity({
        opacity: 1
      },2000);
  },1000);

  /**********
    メニューの店舗をクリックした際の動作
  **********/
  //  魚勝商店
  $("#menu_page2_link").click(function(){

    //  この部分の書き方は「jQueryメソッドチェーン」で検索すると出てきます
    $('#menu_soogo')
      .velocity({
        'left': "34%"
      },2000,'easeInOutQuart')
      .velocity({
        'bottom': "10%"
      },1000)
      .velocity({
        'opacity': 0,
        'complete': setTimeout(function(){
          mySlilentMoveTo_menuLink1();
        },4000)
      },1000);
  });

  function mySlilentMoveTo_menuLink1(){
    $("#section1")
      .velocity({
        'opacity': 0,
        'complete': setTimeout(function(){
          mySlilentMoveTo_menuLink2();
        },500)
      },500);
  }

  function mySlilentMoveTo_menuLink2(){
    $.fn.fullpage.silentMoveTo("page_2", 0);
  }



  /**********
    マルバツを押した際の動作
  **********/
  //  魚勝商店
  $(".quiz__choice__A #link_A").click(function (){
    $("#slide3_1 .fp-tableCell").fadeOut(1000,mySilentMoveTo_uokatu1);
  });
  $(".quiz__choice__B #link_B").click(function (){
    $("#slide3_1 .fp-tableCell").fadeOut(1000,mySilentMoveTo_uokatu1);
  });

  //  魚勝商店スライド1→スライド2
  function mySilentMoveTo_uokatu1(){
    $.fn.fullpage.silentMoveTo('page_2', 1);
  }



  /**********
  マルバツを常に上下させる
  **********/
  $("#slide3_1 #link_A,#link_B")
    .velocity(
      {marginTop: "-5px"},
      {loop: true}
    );
});



/**********
fullpage.jsの読み込み(onload内で読んでます)
**********/
function fullpage_load(){
  $('#fullpage').fadeIn("slow");

  //  fullpage.jsの読み込み部分
  $('#fullpage').fullpage({
    anchors: ['aiueo','page_1', 'page_2', 'page_3', 'page_4'],
    menu: '#menu',
    sectionsColor: ['#46b9d2','#addbff', '#FFF', '#ffc489', '#84ff84'],

    //  現在表示しているコンテンツからスクロールし、移動した際
    onLeave: function(index, nextIndex, direction){
      var leavingSection = $(this);

      //  メニューから1店舗目へのリンクを押した時
      if(index == 1 && nextIndex == 2 && direction =='down'){
        alert("メニューから1店舗目へ");
        $("#section2 .fp-tableCell").addClass("js_d_none");
        $("#slide2_1 .fp-tableCell").fadeIn(1000);
        $("#slide2_1 .fp-tableCell").removeClass("js_d_none");
      }

      //  メニューから2店舗目へのリンクを押した時
      if(index == 1 && nextIndex == 3 && direction =='down'){

        $("#section3 .fp-tableCell").addClass("js_d_none");
        $("#slide3_1 .fp-tableCell").fadeIn(1000);
        $("#slide3_1 .fp-tableCell").removeClass("js_d_none");
      }

      //  メニューから3店舗目へのリンクを押した時
      if(index == 1 && nextIndex == 4 && direction =='down'){
        alert("メニューから3店舗目へ");
        $("#section4 .fp-tableCell").addClass("js_d_none");
        $("#slide4_1 .fp-tableCell").fadeIn(1000);
        $("#slide4_1 .fp-tableCell").removeClass("js_d_none");
      }

      //  メニューから4店舗目へのリンクを押した時
      if(index == 1 && nextIndex == 5 && direction =='down'){
        alert("メニューから4店舗目へ");
        $("#section5 .fp-tableCell").addClass("js_d_none");
        $("#slide5_1 .fp-tableCell").fadeIn(1000);
        $("#slide5_1 .fp-tableCell").removeClass("js_d_none");
      }



    },

    //  スライド移動を押した際
    onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
      var leavingSlide = $(this);

      //  以下右方向への移動に関する条件
      //  3つめのセクション かつ 1枚目のスライド かつ 次のスライドが2枚目 かつ 右にスライドした場合
      if(index == 3 && slideIndex == 0 && nextSlideIndex == 1 && direction == 'right'){
        $("#slide3_1 .fp-tableCell").addClass("js_d_none");
        $("#slide3_2__answer").addClass("js_d_none");
        $("#slide3_2__incorrect_soogo").addClass("js_d_none");

        //  フェードインが終了後gifLoad()を呼び出し
        $("#slide3_2 .fp-tableCell").fadeIn(1000,gifLoad);
        $("#slide3_1 .fp-tableCell").fadeOut(100);
        $("#slide3_2 .fp-tableCell").removeClass("js_d_none");

        //  gif画像のロード
        function gifLoad(){
          $("#slide3_2__movie__gif").append('<img class=\"image\" src="../img/answer_effects2.gif?' + (new Date).getTime() + '" alt=\"解答発表演出GIF\">');

          //  gif画像が配置されたら開始
          $("#slide3_2__movie__gif .image").ready(function() {

            //  gif画像の再生が終了したら不正解のそーごちゃんをフェードイン
            setTimeout(function(){
              $("#slide3_2__incorrect_soogo").fadeIn(1000);
            },4000);

            //  1500の部分をgif画像の長さに変更
            //  gif画像の再生が終了したらフェードアウト
            setTimeout(function(){
              $("#slide3_2__movie__gif").fadeOut(1000);
              $("#slide3_2__incorrect_soogo").fadeOut(1000);
              $("#slide3_2__answer").fadeIn(1000);
            },8000);
          });
        }
      }

      //  3つめのセクション かつ 2枚目のスライド かつ 次のスライドが3枚目 かつ 右にスライドした場合
      if(index == 3 && slideIndex == 1 && nextSlideIndex == 2 && direction == 'right'){
        alert("右に移動して3枚目のスライドへ！！！");
        $("#slide3_2 .fp-tableCell").addClass("js_d_none");
        $("#slide3_3 .fp-tableCell").fadeIn(3000);
        $("#slide3_2 .fp-tableCell").fadeOut(100);
        $("#slide3_3 .fp-tableCell").removeClass("js_d_none");
      }

      //  3つめのセクション かつ 3枚目のスライド かつ 次のスライドが4枚目 かつ 右にスライドした場合
      if(index == 3 && slideIndex == 2 && nextSlideIndex == 3 && direction == 'right'){
        alert("右に移動して4枚目のスライドへ！！！");
        $("#slide3_3 .fp-tableCell").addClass("js_d_none");
        $("#slide3_4 .fp-tableCell").fadeIn(3000);
        $("#slide3_3 .fp-tableCell").fadeOut(100);
        $("#slide3_4 .fp-tableCell").removeClass("js_d_none");
      }

      //  3つめのセクション かつ 4枚目のスライド かつ 次のスライドが5枚目 かつ 右にスライドした場合
      if(index == 3 && slideIndex == 3 && nextSlideIndex == 4 && direction == 'right'){
        alert("右に移動して5枚目のスライドへ！！！");
        $("#slide3_4 .fp-tableCell").addClass("js_d_none");
        $("#slide3_5 .fp-tableCell").fadeIn(3000);
        $("#slide3_4 .fp-tableCell").fadeOut(100);
        $("#slide3_5 .fp-tableCell").removeClass("js_d_none");
      }

      //  3つめのセクション かつ 5枚目のスライド かつ 次のスライドが1枚目 かつ 右にスライドした場合
      if(index == 3 && slideIndex == 4 && nextSlideIndex == 0 && direction == 'left'){
        alert("右に移動して1枚目のスライドへ！！！");
        $("#slide3_5 .fp-tableCell").addClass("js_d_none");
        $("#slide3_1 .fp-tableCell").fadeIn(3000);
        $("#slide3_5 .fp-tableCell").fadeOut(100);
        $("#slide3_1 .fp-tableCell").removeClass("js_d_none");
      }
    }
  });

  //$('#header').fadeIn("slow");
}
