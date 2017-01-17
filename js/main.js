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
  $(".quiz__choice__A #link_A_3_1").click(function (){
    $("#slide3_1 .fp-tableCell").fadeOut(1000,mySilentMoveTo_uokatu1);
  });
  $(".quiz__choice__B #link_B_3_1").click(function (){
    $("#slide3_1 .fp-tableCell").fadeOut(1000,mySilentMoveTo_uokatu1);
  });

  $(".quiz__choice__A #link_A_3_3").click(function (){
    $("#slide3_3 .fp-tableCell").fadeOut(1000,mySilentMoveTo_uokatu3);
  });
  $(".quiz__choice__B #link_B_3_3").click(function (){
    $("#slide3_3 .fp-tableCell").fadeOut(1000,mySilentMoveTo_uokatu3);
  });

  $(".quiz__choice__A #link_A_3_5").click(function (){
    $("#slide3_5 .fp-tableCell").fadeOut(1000,mySilentMoveTo_uokatu5);
  });
  $(".quiz__choice__B #link_B_3_5").click(function (){
    $("#slide3_5 .fp-tableCell").fadeOut(1000,mySilentMoveTo_uokatu5);
  });

  /**********
    解説左イラストを押した際の動作
  **********/
  //  魚勝商店
  $("#next_quiz").click(function (){
    //$("#slide3_2 .fp-tableCell").fadeOut(1000,mySilentMoveTo_uokatu2);
    alert("aaa")
  });

  $("#slide3_4__answer #next_quiz").click(function (){
    $("#slide3_4 .fp-tableCell").fadeOut(1000,mySilentMoveTo_uokatu4);
  });

  //  魚勝商店
  //  スライド1→スライド2(1問目問題から解答へ)
  function mySilentMoveTo_uokatu1(){
    $.fn.fullpage.silentMoveTo('page_2', 1);
  }
  //  スライド2→スライド3(1問目解答から2問目問題へ)
  function mySilentMoveTo_uokatu2(){
    $.fn.fullpage.silentMoveTo('page_2', 2);
  }
  //  スライド3→スライド4(2問目問題から解答へ)
  function mySilentMoveTo_uokatu3(){
    $.fn.fullpage.silentMoveTo('page_2', 3);
  }
  //  スライド4→スライド5(2問目解答から3問目問題へ)
  function mySilentMoveTo_uokatu4(){
    $.fn.fullpage.silentMoveTo('page_2', 4);
  }
  //  スライド5→スライド6(3問目問題から解答へ)
  function mySilentMoveTo_uokatu5(){
    $.fn.fullpage.silentMoveTo('page_2', 5);
  }



  /**********
  マルバツを常に上下させる
  **********/
  $("#slide3_1 #link_A_3_1,#link_B_3_1")
    .velocity(
      {marginTop: "-10px"},
      {loop: true}
    );
  $("#slide3_3 #link_A_3_3,#link_B_3_3")
    .velocity(
      {marginTop: "-10px"},
      {loop: true}
    );
  $("#slide3_5 #link_A_3_5,#link_B_3_5")
    .velocity(
      {marginTop: "-10px"},
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
        $("#slide3_3 .fp-tableCell").addClass("js_d_none");
        $("#slide3_4__answer").addClass("js_d_none");
        $("#slide3_4__incorrect_soogo").addClass("js_d_none");

        //  フェードインが終了後gifLoad()を呼び出し
        $("#slide3_4 .fp-tableCell").fadeIn(1000,gifLoad);
        $("#slide3_3 .fp-tableCell").fadeOut(100);
        $("#slide3_4 .fp-tableCell").removeClass("js_d_none");

        //  gif画像のロード
        function gifLoad(){
          $("#slide3_4__movie__gif").append('<img class=\"image\" src="../img/answer_effects2.gif?' + (new Date).getTime() + '" alt=\"解答発表演出GIF\">');

          //  gif画像が配置されたら開始
          $("#slide3_4__movie__gif .image").ready(function() {

            //  gif画像の再生が終了したら不正解のそーごちゃんをフェードイン
            setTimeout(function(){
              $("#slide3_4__incorrect_soogo").fadeIn(1000);
            },4000);

            //  1500の部分をgif画像の長さに変更
            //  gif画像の再生が終了したらフェードアウト
            setTimeout(function(){
              $("#slide3_4__movie__gif").fadeOut(1000);
              $("#slide3_4__incorrect_soogo").fadeOut(1000);
              $("#slide3_4__answer").fadeIn(1000);
            },8000);
          });
        }
      }

      //  3つめのセクション かつ 4枚目のスライド かつ 次のスライドが5枚目 かつ 右にスライドした場合
      if(index == 3 && slideIndex == 3 && nextSlideIndex == 4 && direction == 'right'){
        alert("右に移動して5枚目のスライドへ！！！");
        $("#slide3_4 .fp-tableCell").addClass("js_d_none");
        $("#slide3_5 .fp-tableCell").fadeIn(3000);
        $("#slide3_4 .fp-tableCell").fadeOut(100);
        $("#slide3_5 .fp-tableCell").removeClass("js_d_none");
      }

      //  3つめのセクション かつ 5枚目のスライド かつ 次のスライドが6枚目 かつ 右にスライドした場合
      if(index == 3 && slideIndex == 4 && nextSlideIndex == 5 && direction == 'right'){
        $("#slide3_5 .fp-tableCell").addClass("js_d_none");
        $("#slide3_6__answer").addClass("js_d_none");
        $("#slide3_6__incorrect_soogo").addClass("js_d_none");

        //  フェードインが終了後gifLoad()を呼び出し
        $("#slide3_6 .fp-tableCell").fadeIn(1000,gifLoad);
        $("#slide3_5 .fp-tableCell").fadeOut(100);
        $("#slide3_6 .fp-tableCell").removeClass("js_d_none");

        //  gif画像のロード
        function gifLoad(){
          $("#slide3_6__movie__gif").append('<img class=\"image\" src="../img/answer_effects2.gif?' + (new Date).getTime() + '" alt=\"解答発表演出GIF\">');

          //  gif画像が配置されたら開始
          $("#slide3_6__movie__gif .image").ready(function() {

            //  gif画像の再生が終了したら不正解のそーごちゃんをフェードイン
            setTimeout(function(){
              $("#slide3_6__incorrect_soogo").fadeIn(1000);
            },4000);

            //  1500の部分をgif画像の長さに変更
            //  gif画像の再生が終了したらフェードアウト
            setTimeout(function(){
              $("#slide3_6__movie__gif").fadeOut(1000);
              $("#slide3_6__incorrect_soogo").fadeOut(1000);
              $("#slide3_6__answer").fadeIn(1000);
            },8000);
          });
        }
      }

      //  3つめのセクション かつ 6枚目のスライド かつ 次のスライドが1枚目 かつ 右にスライドした場合
      if(index == 3 && slideIndex == 5 && nextSlideIndex == 0 && direction == 'left'){
        alert("右に移動して1枚目のスライドへ！！！");
        $("#slide3_6 .fp-tableCell").addClass("js_d_none");
        $("#slide3_1 .fp-tableCell").fadeIn(3000);
        $("#slide3_6 .fp-tableCell").fadeOut(100);
        $("#slide3_1 .fp-tableCell").removeClass("js_d_none");
      }
    }
  });

  //$('#header').fadeIn("slow");
}
