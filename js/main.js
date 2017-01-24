$(function(){
  fullpage_load();

  setTimeout(function(){
    $('#menu_soogo')
      .velocity(
        {'left': "5%"},
        {duration: 2000}
      );
    $('#menu_logo')
      .velocity(
        {opacity: 1},
        {duration: 2000}
      );

    //  エンディング用の右くらげ(仮)
    if(window.localStorage.getItem('store1') == 1 & window.localStorage.getItem('store2') == 1 & window.localStorage.getItem('store3') == 1 & window.localStorage.getItem('store4') == 1){
      $('#menu_kurage_right')
        .velocity(
          {'right': "5%"},
          {duration: 4000}
        )
        .velocity(
          {'top': "5%"},
          {loop: true}
        );
    }

    //  オープニング用の左くらげ(仮)
    if(window.localStorage.getItem('store1') == 0 || window.localStorage.getItem('store2') == 0 || window.localStorage.getItem('store3') == 0 || window.localStorage.getItem('store4') == 0){
      $('#menu_kurage_left')
        .velocity(
          {'left': "5%"},
          {duration: 4000}
        )
        .velocity(
          {'top': "5%"},
          {loop: true}
        );
    }
  },1000);

  $("#menu_logo").click(function(){
    //alert("aaa")
    //  localstorageに保存
    //  各店舗の最終問題をクリア(○か×)すると値を1にする
    for(var i=1; i<5; i++){
      window.localStorage.setItem('store'+i,1);
    }
  });
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
  /**********
    ---------- OP/EDを再生 ----------
  **********/
  //  オープニング
  //  gif画像のロード
  $("#menu_kurage_left").click(function(){
    $("#opening").css("display","none");
    $("#opening").css("z-index","6");
    $("#opening").fadeIn(2000);

    setTimeout(function(){
      $("#opening").append('<img class="image" src="../img/op.gif?' + (new Date).getTime() + '" alt="オープニングGIF">');
    });

    $("#opening .image").ready(function(){
      setTimeout(function(){
        $("#opening").fadeOut(2000);
      },10000);
      setTimeout(function(){
        $("#opening").css("z-index","");
      },12000);
    });
  });

  //  エンディング
  //  gif画像のロード
  $("#menu_kurage_right").click(function(){
    $("#ending").css("display","none");
    $("#ending").css("z-index","6");
    $("#ending").fadeIn(2000);


    setTimeout(function(){
      $("#ending").append('<img class="image" src="../img/ed.gif?' + (new Date).getTime() + '" alt="エンディングGIF">');
    },2000);

    $("#ending .image").ready(function(){
      setTimeout(function(){
        $("#ending").fadeOut(2000);
      },10000);
      setTimeout(function(){
        $("#ending").css("z-index","");
      },12000);
    });
  });
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
  /**********
    ----------メニューの店舗をクリックした際の動作----------
  **********/
  //  相生屋
  $("#menu_page1_link").click(function(){

    //  この部分の書き方は「jQueryメソッドチェーン」で検索すると出てきます
    $('#menu_soogo')
      .velocity({
        'left': "13%"
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
          $.fn.fullpage.silentMoveTo("page_1", 0);
        },500)
      },500);
  }


  //  魚勝商店
  $("#menu_page2_link").click(function(){

    //  この部分の書き方は「jQueryメソッドチェーン」で検索すると出てきます
    $('#menu_soogo')
      .velocity({
        'left': "34%"
      },2500,'easeInOutQuart')
      .velocity({
        'bottom': "10%"
      },1000)
      .velocity({
        'opacity': 0,
        'complete': setTimeout(function(){
          mySlilentMoveTo_menuLink2();
        },4500)
      },1000);
  });

  function mySlilentMoveTo_menuLink2(){
    $("#section1")
      .velocity({
        'opacity': 0,
        'complete': setTimeout(function(){
          $.fn.fullpage.silentMoveTo("page_2", 0);
        },500)
      },500);
  }


  //  辻喜
  $("#menu_page3_link").click(function(){

    //  この部分の書き方は「jQueryメソッドチェーン」で検索すると出てきます
    $('#menu_soogo')
      .velocity({
        'left': "55%"
      },3000,'easeInOutQuart')
      .velocity({
        'bottom': "10%"
      },1000)
      .velocity({
        'opacity': 0,
        'complete': setTimeout(function(){
          mySlilentMoveTo_menuLink3();
        },5000)
      },1000);
  });

  function mySlilentMoveTo_menuLink3(){
    $("#section1")
      .velocity({
        'opacity': 0,
        'complete': setTimeout(function(){
          $.fn.fullpage.silentMoveTo("page_3", 0);
        },500)
      },500);
  }


  //  藤田屋商店
  $("#menu_page4_link").click(function(){

    //  この部分の書き方は「jQueryメソッドチェーン」で検索すると出てきます
    $('#menu_soogo')
      .velocity({
        'left': "76%"
      },3500,'easeInOutQuart')
      .velocity({
        'bottom': "10%"
      },1000)
      .velocity({
        'opacity': 0,
        'complete': setTimeout(function(){
          mySlilentMoveTo_menuLink4();
        },5500)
      },1000);
  });

  function mySlilentMoveTo_menuLink4(){
    $("#section1")
      .velocity({
        'opacity': 0,
        'complete': setTimeout(function(){
          $.fn.fullpage.silentMoveTo("page_4", 0);
        },500)
      },500);
  }
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
  /**********
    ----------マルバツを押した際の動作----------

    ・デフォルトで不正解のそーごちゃんを表示
    ・正解と異なる選択をした際にimgタグのsrcを書き換える
  **********/
  //  相生屋
  //  1問目:×
  $(".quiz__choice__A #link_A_2_1").click(function (){
    $("#slide2_1 .fp-tableCell").fadeOut(1000,mySilentMoveTo_aisei1);
  });
  $(".quiz__choice__B #link_B_2_1").click(function (){
    $("#slide2_2__soogo .image").attr("src","../img/correct_sogo.png");
    $("#slide2_1 .fp-tableCell").fadeOut(1000,mySilentMoveTo_aisei1);
  });

  //  2問目:×
  $(".quiz__choice__A #link_A_2_3").click(function (){
    $("#slide2_3 .fp-tableCell").fadeOut(1000,mySilentMoveTo_aisei3);
  });
  $(".quiz__choice__B #link_B_2_3").click(function (){
    $("#slide2_4__soogo .image").attr("src","../img/correct_sogo.png");
    $("#slide2_3 .fp-tableCell").fadeOut(1000,mySilentMoveTo_aisei3);
  });

  //  3問目:○
  $(".quiz__choice__A #link_A_2_5").click(function (){
    //  cookieのセット
    window.localStorage.setItem('store1',1);
    //alert(window.localStorage.getItem('store1'));
    $("#slide2_6__soogo .image").attr("src","../img/correct_sogo.png");
    $("#slide2_5 .fp-tableCell").fadeOut(1000,mySilentMoveTo_aisei5);
  });
  $(".quiz__choice__B #link_B_2_5").click(function (){
  //  cookieのセット
    window.localStorage.setItem('store1',1);
    //alert(window.localStorage.getItem('store1'));
    $("#slide2_5 .fp-tableCell").fadeOut(1000,mySilentMoveTo_aisei5);
  });


  //  魚勝商店
  //  1問目:×
  $(".quiz__choice__A #link_A_3_1").click(function (){
    $("#slide3_1 .fp-tableCell").fadeOut(1000,mySilentMoveTo_uokatu1);
  });
  $(".quiz__choice__B #link_B_3_1").click(function (){
    $("#slide3_2__soogo .image").attr("src","../img/correct_sogo.png");
    $("#slide3_1 .fp-tableCell").fadeOut(1000,mySilentMoveTo_uokatu1);
  });

  //  2問目:○
  $(".quiz__choice__A #link_A_3_3").click(function (){
    $("#slide3_4__soogo .image").attr("src","../img/correct_sogo.png");
    $("#slide3_3 .fp-tableCell").fadeOut(1000,mySilentMoveTo_uokatu3);
  });
  $(".quiz__choice__B #link_B_3_3").click(function (){
    $("#slide3_3 .fp-tableCell").fadeOut(1000,mySilentMoveTo_uokatu3);
  });

  //  3問目:×
  $(".quiz__choice__A #link_A_3_5").click(function (){
    //  cookieのセット
    window.localStorage.setItem('store2',1);
    //alert(window.localStorage.getItem('store2'));
    $("#slide3_5 .fp-tableCell").fadeOut(1000,mySilentMoveTo_uokatu5);
  });
  $(".quiz__choice__B #link_B_3_5").click(function (){
    //  cookieのセット
    window.localStorage.setItem('store2',1);
    //alert(window.localStorage.getItem('store2'));
    $("#slide3_6__soogo .image").attr("src","../img/correct_sogo.png");
    $("#slide3_5 .fp-tableCell").fadeOut(1000,mySilentMoveTo_uokatu5);
  });


  //  辻喜
  //  1問目:○
  $(".quiz__choice__A #link_A_4_1").click(function (){
    $("#slide4_2__soogo .image").attr("src","../img/correct_sogo.png");
    $("#slide4_1 .fp-tableCell").fadeOut(1000,mySilentMoveTo_tuziki1);
  });
  $(".quiz__choice__B #link_B_4_1").click(function (){
    $("#slide4_1 .fp-tableCell").fadeOut(1000,mySilentMoveTo_tuziki1);
  });

  //  2問目:×
  $(".quiz__choice__A #link_A_4_3").click(function (){
    $("#slide4_3 .fp-tableCell").fadeOut(1000,mySilentMoveTo_tuziki3);
  });
  $(".quiz__choice__B #link_B_4_3").click(function (){
    $("#slide4_4__soogo .image").attr("src","../img/correct_sogo.png");
    $("#slide4_3 .fp-tableCell").fadeOut(1000,mySilentMoveTo_tuziki3);
  });

  //  3問目:○
  $(".quiz__choice__A #link_A_4_5").click(function (){
    //  cookieのセット
    window.localStorage.setItem('store3',1);
    //alert(window.localStorage.getItem('store3'));
    $("#slide4_6__soogo .image").attr("src","../img/correct_sogo.png");
    $("#slide4_5 .fp-tableCell").fadeOut(1000,mySilentMoveTo_tuziki5);
  });
  $(".quiz__choice__B #link_B_4_5").click(function (){
    $("#slide4_5 .fp-tableCell").fadeOut(1000,mySilentMoveTo_tuziki5);
  });


  //  藤田屋商店
  //  1問目:×
  $(".quiz__choice__A #link_A_5_1").click(function (){
    $("#slide5_1 .fp-tableCell").fadeOut(1000,mySilentMoveTo_fuzitaya1);
  });
  $(".quiz__choice__B #link_B_5_1").click(function (){
    $("#slide5_2__soogo .image").attr("src","../img/correct_sogo.png");
    $("#slide5_1 .fp-tableCell").fadeOut(1000,mySilentMoveTo_fuzitaya1);
  });

  //  2問目:×
  $(".quiz__choice__A #link_A_5_3").click(function (){
    $("#slide5_3 .fp-tableCell").fadeOut(1000,mySilentMoveTo_fuzitaya3);
  });
  $(".quiz__choice__B #link_B_5_3").click(function (){
    $("#slide5_4__soogo .image").attr("src","../img/correct_sogo.png");
    $("#slide5_3 .fp-tableCell").fadeOut(1000,mySilentMoveTo_fuzitaya3);
  });

  //  3問目:○
  $(".quiz__choice__A #link_A_5_5").click(function (){
    //  cookieのセット
    window.localStorage.setItem('store4',1);
    //alert(window.localStorage.getItem('store4'));
    $("#slide5_6__soogo .image").attr("src","../img/correct_sogo.png");
    $("#slide5_5 .fp-tableCell").fadeOut(1000,mySilentMoveTo_fuzitaya5);
  });
  $(".quiz__choice__B #link_B_5_5").click(function (){
    //  cookieのセット
    window.localStorage.setItem('store4',1);
    //alert(window.localStorage.getItem('store4'));
    $("#slide5_5 .fp-tableCell").fadeOut(1000,mySilentMoveTo_fuzitaya5);
  });
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
  /**********
    ----------解説左イラストを押した際の動作----------
  **********/

  //  相生屋
  //  スライド1→スライド2(1問目問題から解答へ)
  function mySilentMoveTo_aisei1(){
    $.fn.fullpage.silentMoveTo('page_1', 1);
  }
  //  スライド2→スライド3(1問目解答から2問目問題へ)
  function mySilentMoveTo_aisei2(){
    $.fn.fullpage.silentMoveTo('page_1', 2);
  }
  //  スライド3→スライド4(2問目問題から解答へ)
  function mySilentMoveTo_aisei3(){
    $.fn.fullpage.silentMoveTo('page_1', 3);
  }
  //  スライド4→スライド5(2問目解答から3問目問題へ)
  function mySilentMoveTo_aisei4(){
    $.fn.fullpage.silentMoveTo('page_1', 4);
  }
  //  スライド5→スライド6(3問目問題から解答へ)
  function mySilentMoveTo_aisei5(){
    $.fn.fullpage.silentMoveTo('page_1', 5);
  }


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


  //  辻喜
  //  スライド1→スライド2(1問目問題から解答へ)
  function mySilentMoveTo_tuziki1(){
    $.fn.fullpage.silentMoveTo('page_3', 1);
  }
  //  スライド2→スライド3(1問目解答から2問目問題へ)
  function mySilentMoveTo_tuziki2(){
    $.fn.fullpage.silentMoveTo('page_3', 2);
  }
  //  スライド3→スライド4(2問目問題から解答へ)
  function mySilentMoveTo_tuziki3(){
    $.fn.fullpage.silentMoveTo('page_3', 3);
  }
  //  スライド4→スライド5(2問目解答から3問目問題へ)
  function mySilentMoveTo_tuziki4(){
    $.fn.fullpage.silentMoveTo('page_3', 4);
  }
  //  スライド5→スライド6(3問目問題から解答へ)
  function mySilentMoveTo_tuziki5(){
    $.fn.fullpage.silentMoveTo('page_3', 5);
  }


  //  藤田屋商店
  //  スライド1→スライド2(1問目問題から解答へ)
  function mySilentMoveTo_fuzitaya1(){
    $.fn.fullpage.silentMoveTo('page_4', 1);
  }
  //  スライド2→スライド3(1問目解答から2問目問題へ)
  function mySilentMoveTo_fuzitaya2(){
    $.fn.fullpage.silentMoveTo('page_4', 2);
  }
  //  スライド3→スライド4(2問目問題から解答へ)
  function mySilentMoveTo_fuzitaya3(){
    $.fn.fullpage.silentMoveTo('page_4', 3);
  }
  //  スライド4→スライド5(2問目解答から3問目問題へ)
  function mySilentMoveTo_fuzitaya4(){
    $.fn.fullpage.silentMoveTo('page_4', 4);
  }
  //  スライド5→スライド6(3問目問題から解答へ)
  function mySilentMoveTo_fuzitaya5(){
    $.fn.fullpage.silentMoveTo('page_4', 5);
  }
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
  /**********
    ----------マルバツを常に上下させる----------
  **********/
  //  相生屋
  $("#slide2_1 #link_A_2_1,#link_B_2_1")
    .velocity(
      {marginTop: "-10px"},
      {loop: true}
    );
  $("#slide2_3 #link_A_2_3,#link_B_2_3")
    .velocity(
      {marginTop: "-10px"},
      {loop: true}
    );
  $("#slide2_5 #link_A_2_5,#link_B_2_5")
    .velocity(
      {marginTop: "-10px"},
      {loop: true}
    );

  //  魚勝商店
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

  //  辻喜
  $("#slide4_1 #link_A_4_1,#link_B_4_1")
    .velocity(
      {marginTop: "-10px"},
      {loop: true}
    );
  $("#slide4_3 #link_A_4_3,#link_B_4_3")
    .velocity(
      {marginTop: "-10px"},
      {loop: true}
    );
  $("#slide4_5 #link_A_4_5,#link_B_4_5")
    .velocity(
      {marginTop: "-10px"},
      {loop: true}
    );

  //  藤田屋商店
  $("#slide5_1 #link_A_5_1,#link_B_5_1")
    .velocity(
      {marginTop: "-10px"},
      {loop: true}
    );
  $("#slide5_3 #link_A_5_3,#link_B_5_3")
    .velocity(
      {marginTop: "-10px"},
      {loop: true}
    );
  $("#slide5_5 #link_A_5_5,#link_B_5_5")
    .velocity(
      {marginTop: "-10px"},
      {loop: true}
    );
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
  /**********
    ----------店舗選択へ戻る----------
  **********/
  $(".go_to_top").click(function(){
    //$.fn.fullpage.silentMoveTo('aiueo', 0);
    //$.fn.fullpage.moveTo(1);
    $.fn.fullpage.moveTo(1);
    location.reload("5000");
  });
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

});
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/**********
  ----------fullpage.jsの読み込み(onload内で読んでます)----------
**********/
function fullpage_load(){
  $('#fullpage').fadeIn("slow");

  //  fullpage.jsの読み込み部分
  $('#fullpage').fullpage({
    anchors: ['aiueo','page_1', 'page_2', 'page_3', 'page_4'],
    menu: '#menu',
    sectionsColor: ['#0b577c','#0b577c', '#0b577c', '#0b577c', '#0b577c'],

    //  現在表示しているコンテンツからスクロールし、移動した際
    onLeave: function(index, nextIndex, direction){
      var leavingSection = $(this);

      //  メニューから1店舗目へのリンクを押した時
      if(index == 1 && nextIndex == 2 && direction =='down'){
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
        $("#section4 .fp-tableCell").addClass("js_d_none");
        $("#slide4_1 .fp-tableCell").fadeIn(1000);
        $("#slide4_1 .fp-tableCell").removeClass("js_d_none");
      }

      //  メニューから4店舗目へのリンクを押した時
      if(index == 1 && nextIndex == 5 && direction =='down'){
        $("#section5 .fp-tableCell").addClass("js_d_none");
        $("#slide5_1 .fp-tableCell").fadeIn(1000);
        $("#slide5_1 .fp-tableCell").removeClass("js_d_none");
      }

      //  メニューから4店舗目へのリンクを押した時
      if(index == 5 && nextIndex == 1 && direction =='up'){
        $("#section1").addClass("js_d_none");
        //$("#section1 .fp-tableCell").fadeIn(1000);
        //$("#section1 .fp-tableCell").removeClass("js_d_none");
      }


    },

    //  スライド移動を押した際
    onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
      var leavingSlide = $(this);

      /**********
        ----------以下右方向への移動に関する条件----------
      **********/
      //  相生屋
      //  2つめのセクション かつ 1枚目のスライド かつ 次のスライドが2枚目 かつ 右にスライドした場合
      if(index == 2 && slideIndex == 0 && nextSlideIndex == 1 && direction == 'right'){
        $("#slide2_1 .fp-tableCell").addClass("js_d_none");
        $("#slide2_2__answer").addClass("js_d_none");
        $("#slide2_2__soogo").addClass("js_d_none");

        //  フェードインが終了後gifLoad()を呼び出し
        $("#slide2_2 .fp-tableCell").fadeIn(1000,gifLoad);
        $("#slide2_1 .fp-tableCell").fadeOut(100);
        $("#slide2_2 .fp-tableCell").removeClass("js_d_none");

        //  gif画像のロード
        function gifLoad(){
          $("#slide2_2__movie__mp4").append('<video id="2_2_movie" class="video" controls><source src="../video/batu01.mp4"></video');

          //  gif画像が配置されたら開始
          $("#slide2_2__movie__mp4 .video").ready(function() {

            var video = $("#2_2_movie").get(0);
            video.play();

            //  gif画像の再生が終了したら不正解のそーごちゃんをフェードイン
            setTimeout(function(){
              $("#slide2_2__soogo").fadeIn(1000);
            },7000);

            //  1500の部分をgif画像の長さに変更
            //  gif画像の再生が終了したらフェードアウト
            setTimeout(function(){
              $("#slide2_2__movie__mp4").fadeOut(1000);
              $("#slide2_2__soogo").fadeOut(1000);
              $("#slide2_2__answer").fadeIn(1000);
            },10000);
          });
        }
      }

      //  2つめのセクション かつ 2枚目のスライド かつ 次のスライドが3枚目 かつ 右にスライドした場合
      if(index == 2 && slideIndex == 1 && nextSlideIndex == 2 && direction == 'right'){
        $("#slide2_2 .fp-tableCell").addClass("js_d_none");
        $("#slide2_3 .fp-tableCell").fadeIn(3000);
        $("#slide2_2 .fp-tableCell").fadeOut(100);
        $("#slide2_3 .fp-tableCell").removeClass("js_d_none");
      }

      //  2つめのセクション かつ 3枚目のスライド かつ 次のスライドが4枚目 かつ 右にスライドした場合
      if(index == 2 && slideIndex == 2 && nextSlideIndex == 3 && direction == 'right'){
        $("#slide2_3 .fp-tableCell").addClass("js_d_none");
        $("#slide2_4__answer").addClass("js_d_none");
        $("#slide2_4__soogo").addClass("js_d_none");

        //  フェードインが終了後gifLoad()を呼び出し
        $("#slide2_4 .fp-tableCell").fadeIn(1000,gifLoad);
        $("#slide2_3 .fp-tableCell").fadeOut(100);
        $("#slide2_4 .fp-tableCell").removeClass("js_d_none");

        //  gif画像のロード
        function gifLoad(){
          $("#slide2_4__movie__mp4").append('<video id="2_4_movie" class="video" controls><source src="../video/batu01.mp4"></video');

          //  gif画像が配置されたら開始
          $("#slide2_4__movie__mp4 .video").ready(function() {

            var video = $("#2_4_movie").get(0);
            video.play();

            //  gif画像の再生が終了したら不正解のそーごちゃんをフェードイン
            setTimeout(function(){
              $("#slide2_4__soogo").fadeIn(1000);
            },7000);

            //  1500の部分をgif画像の長さに変更
            //  gif画像の再生が終了したらフェードアウト
            setTimeout(function(){
              $("#slide2_4__movie__mp4").fadeOut(1000);
              $("#slide2_4__soogo").fadeOut(1000);
              $("#slide2_4__answer").fadeIn(1000);
            },10000);
          });
        }
      }

      //  2つめのセクション かつ 4枚目のスライド かつ 次のスライドが5枚目 かつ 右にスライドした場合
      if(index == 2 && slideIndex == 3 && nextSlideIndex == 4 && direction == 'right'){
        $("#slide2_4 .fp-tableCell").addClass("js_d_none");
        $("#slide2_5 .fp-tableCell").fadeIn(3000);
        $("#slide2_4 .fp-tableCell").fadeOut(100);
        $("#slide2_5 .fp-tableCell").removeClass("js_d_none");
      }

      //  2つめのセクション かつ 5枚目のスライド かつ 次のスライドが6枚目 かつ 右にスライドした場合
      if(index == 2 && slideIndex == 4 && nextSlideIndex == 5 && direction == 'right'){
        $("#slide2_5 .fp-tableCell").addClass("js_d_none");
        $("#slide2_6__answer").addClass("js_d_none");
        $("#slide2_6__soogo").addClass("js_d_none");

        //  フェードインが終了後gifLoad()を呼び出し
        $("#slide2_6 .fp-tableCell").fadeIn(1000,gifLoad);
        $("#slide2_5 .fp-tableCell").fadeOut(100);
        $("#slide2_6 .fp-tableCell").removeClass("js_d_none");

        //  gif画像のロード
        function gifLoad(){
          $("#slide2_6__movie__mp4").append('<video id="2_6_movie" class="video" controls><source src="../video/maru01.mp4"></video');

          //  gif画像が配置されたら開始
          $("#slide2_6__movie__mp4 .video").ready(function() {

            var video = $("#2_6_movie").get(0);
            video.play();

            //  gif画像の再生が終了したら不正解のそーごちゃんをフェードイン
            setTimeout(function(){
              $("#slide2_6__soogo").fadeIn(1000);
            },7000);

            //  1500の部分をgif画像の長さに変更
            //  gif画像の再生が終了したらフェードアウト
            setTimeout(function(){
              $("#slide2_6__movie__mp4").fadeOut(1000);
              $("#slide2_6__soogo").fadeOut(1000);
              $("#slide2_6__answer").fadeIn(1000);
            },10000);
          });
        }
      }

      //  2つめのセクション かつ 6枚目のスライド かつ 次のスライドが1枚目 かつ 右にスライドした場合
      if(index == 2 && slideIndex == 5 && nextSlideIndex == 0 && direction == 'left'){
        $("#slide2_6 .fp-tableCell").addClass("js_d_none");
        $("#slide2_1 .fp-tableCell").fadeIn(3000);
        $("#slide2_6 .fp-tableCell").fadeOut(100);
        $("#slide2_1 .fp-tableCell").removeClass("js_d_none");
      }
      /////////////////////////////////////////////////////////



      /////////////////////////////////////////////////////////
      //  魚勝商店
      //  3つめのセクション かつ 1枚目のスライド かつ 次のスライドが2枚目 かつ 右にスライドした場合
      if(index == 3 && slideIndex == 0 && nextSlideIndex == 1 && direction == 'right'){
        $("#slide3_1 .fp-tableCell").addClass("js_d_none");
        $("#slide3_2__answer").addClass("js_d_none");
        $("#slide3_2__soogo").addClass("js_d_none");

        //  フェードインが終了後gifLoad()を呼び出し
        $("#slide3_2 .fp-tableCell").fadeIn(1000,gifLoad);
        $("#slide3_1 .fp-tableCell").fadeOut(100);
        $("#slide3_2 .fp-tableCell").removeClass("js_d_none");

        //  gif画像のロード
        function gifLoad(){
          $("#slide3_2__movie__mp4").append('<video id="3_2_movie" class="video" controls><source src="../video/batu01.mp4"></video');

          //  gif画像が配置されたら開始
          $("#slide3_2__movie__mp4 .video").ready(function() {

            var video = $("#3_2_movie").get(0);
            video.play();

            //  gif画像の再生が終了したら不正解のそーごちゃんをフェードイン
            setTimeout(function(){
              $("#slide3_2__soogo").fadeIn(1000);
            },14000);

            //  1500の部分をgif画像の長さに変更
            //  gif画像の再生が終了したらフェードアウト
            setTimeout(function(){
              $("#slide3_2__movie__mp4").fadeOut(1000);
              $("#slide3_2__soogo").fadeOut(1000);
              $("#slide3_2__answer").fadeIn(1000);
            },20000);
          });
        }
      }

      //  3つめのセクション かつ 2枚目のスライド かつ 次のスライドが3枚目 かつ 右にスライドした場合
      if(index == 3 && slideIndex == 1 && nextSlideIndex == 2 && direction == 'right'){
        $("#slide3_2 .fp-tableCell").addClass("js_d_none");
        $("#slide3_3 .fp-tableCell").fadeIn(3000);
        $("#slide3_2 .fp-tableCell").fadeOut(100);
        $("#slide3_3 .fp-tableCell").removeClass("js_d_none");
      }

      //  3つめのセクション かつ 3枚目のスライド かつ 次のスライドが4枚目 かつ 右にスライドした場合
      if(index == 3 && slideIndex == 2 && nextSlideIndex == 3 && direction == 'right'){
        $("#slide3_3 .fp-tableCell").addClass("js_d_none");
        $("#slide3_4__answer").addClass("js_d_none");
        $("#slide3_4__soogo").addClass("js_d_none");

        //  フェードインが終了後gifLoad()を呼び出し
        $("#slide3_4 .fp-tableCell").fadeIn(1000,gifLoad);
        $("#slide3_3 .fp-tableCell").fadeOut(100);
        $("#slide3_4 .fp-tableCell").removeClass("js_d_none");

        //  gif画像のロード
        function gifLoad(){
          $("#slide3_4__movie__mp4").append('<video id="3_4_movie" class="video" controls><source src="../video/maru01.mp4"></video');

          //  gif画像が配置されたら開始
          $("#slide3_4__movie__mp4 .video").ready(function() {

            var video = $("#3_4_movie").get(0);
            video.play();

            //  gif画像の再生が終了したら不正解のそーごちゃんをフェードイン
            setTimeout(function(){
              $("#slide3_4__soogo").fadeIn(1000);
            },7000);

            //  1500の部分をgif画像の長さに変更
            //  gif画像の再生が終了したらフェードアウト
            setTimeout(function(){
              $("#slide3_4__movie__mp4").fadeOut(1000);
              $("#slide3_4__soogo").fadeOut(1000);
              $("#slide3_4__answer").fadeIn(1000);
            },10000);
          });
        }
      }

      //  3つめのセクション かつ 4枚目のスライド かつ 次のスライドが5枚目 かつ 右にスライドした場合
      if(index == 3 && slideIndex == 3 && nextSlideIndex == 4 && direction == 'right'){
        $("#slide3_4 .fp-tableCell").addClass("js_d_none");
        $("#slide3_5 .fp-tableCell").fadeIn(3000);
        $("#slide3_4 .fp-tableCell").fadeOut(100);
        $("#slide3_5 .fp-tableCell").removeClass("js_d_none");
      }

      //  3つめのセクション かつ 5枚目のスライド かつ 次のスライドが6枚目 かつ 右にスライドした場合
      if(index == 3 && slideIndex == 4 && nextSlideIndex == 5 && direction == 'right'){
        $("#slide3_5 .fp-tableCell").addClass("js_d_none");
        $("#slide3_6__answer").addClass("js_d_none");
        $("#slide3_6__soogo").addClass("js_d_none");

        //  フェードインが終了後gifLoad()を呼び出し
        $("#slide3_6 .fp-tableCell").fadeIn(1000,gifLoad);
        $("#slide3_5 .fp-tableCell").fadeOut(100);
        $("#slide3_6 .fp-tableCell").removeClass("js_d_none");

        //  gif画像のロード
        function gifLoad(){
          $("#slide3_6__movie__mp4").append('<video id="3_6_movie" class="video" controls><source src="../video/marubatu_movie01.mp4"></video');

          //  gif画像が配置されたら開始
          $("#slide3_6_movie__mp4 .video").ready(function() {

            var video = $("#3_6_movie").get(0);
            video.play();

            //  gif画像の再生が終了したら不正解のそーごちゃんをフェードイン
            setTimeout(function(){
              $("#slide3_6__soogo").fadeIn(1000);
            },7000);

            //  1500の部分をgif画像の長さに変更
            //  gif画像の再生が終了したらフェードアウト
            setTimeout(function(){
              $("#slide3_6__movie__mp4").fadeOut(1000);
              $("#slide3_6__soogo").fadeOut(1000);
              $("#slide3_6__answer").fadeIn(1000);
            },10000);
          });
        }
      }

      //  3つめのセクション かつ 6枚目のスライド かつ 次のスライドが1枚目 かつ 右にスライドした場合
      if(index == 3 && slideIndex == 5 && nextSlideIndex == 0 && direction == 'left'){
        $("#slide3_6 .fp-tableCell").addClass("js_d_none");
        $("#slide3_1 .fp-tableCell").fadeIn(3000);
        $("#slide3_6 .fp-tableCell").fadeOut(100);
        $("#slide3_1 .fp-tableCell").removeClass("js_d_none");
      }
      /////////////////////////////////////////////////////////



      /////////////////////////////////////////////////////////
      //  辻喜
      //  4つめのセクション かつ 1枚目のスライド かつ 次のスライドが2枚目 かつ 右にスライドした場合
      if(index == 4 && slideIndex == 0 && nextSlideIndex == 1 && direction == 'right'){
        $("#slide4_1 .fp-tableCell").addClass("js_d_none");
        $("#slide4_2__answer").addClass("js_d_none");
        $("#slide4_2__soogo").addClass("js_d_none");

        //  フェードインが終了後gifLoad()を呼び出し
        $("#slide4_2 .fp-tableCell").fadeIn(1000,gifLoad);
        $("#slide4_1 .fp-tableCell").fadeOut(100);
        $("#slide4_2 .fp-tableCell").removeClass("js_d_none");

        //  gif画像のロード
        function gifLoad(){
          $("#slide4_2__movie__mp4").append('<video id="4_2_movie" class="video" controls><source src="../video/maru01.mp4"></video');

          //  gif画像が配置されたら開始
          $("#slide4_2__movie__mp4 .video").ready(function() {

            var video = $("#4_2_movie").get(0);
            video.play();

            //  gif画像の再生が終了したら不正解のそーごちゃんをフェードイン
            setTimeout(function(){
              $("#slide4_2__soogo").fadeIn(1000);
            },7000);

            //  1500の部分をgif画像の長さに変更
            //  gif画像の再生が終了したらフェードアウト
            setTimeout(function(){
              $("#slide4_2__movie__mp4").fadeOut(1000);
              $("#slide4_2__soogo").fadeOut(1000);
              $("#slide4_2__answer").fadeIn(1000);
            },10000);
          });
        }
      }

      //  4つめのセクション かつ 2枚目のスライド かつ 次のスライドが3枚目 かつ 右にスライドした場合
      if(index == 4 && slideIndex == 1 && nextSlideIndex == 2 && direction == 'right'){
        $("#slide4_2 .fp-tableCell").addClass("js_d_none");
        $("#slide4_3 .fp-tableCell").fadeIn(3000);
        $("#slide4_2 .fp-tableCell").fadeOut(100);
        $("#slide4_3 .fp-tableCell").removeClass("js_d_none");
      }

      //  4つめのセクション かつ 3枚目のスライド かつ 次のスライドが4枚目 かつ 右にスライドした場合
      if(index == 4 && slideIndex == 2 && nextSlideIndex == 3 && direction == 'right'){
        $("#slide4_3 .fp-tableCell").addClass("js_d_none");
        $("#slide4_4__answer").addClass("js_d_none");
        $("#slide4_4__soogo").addClass("js_d_none");

        //  フェードインが終了後gifLoad()を呼び出し
        $("#slide4_4 .fp-tableCell").fadeIn(1000,gifLoad);
        $("#slide4_3 .fp-tableCell").fadeOut(100);
        $("#slide4_4 .fp-tableCell").removeClass("js_d_none");

        //  gif画像のロード
        function gifLoad(){
          $("#slide4_4__movie__mp4").append('<video id="4_4_movie" class="video" controls><source src="../video/batu01.mp4"></video');

          //  gif画像が配置されたら開始
          $("#slide4_4__movie__mp4 .video").ready(function() {

            var video = $("#4_4_movie").get(0);
            video.play();

            //  gif画像の再生が終了したら不正解のそーごちゃんをフェードイン
            setTimeout(function(){
              $("#slide4_4__soogo").fadeIn(1000);
            },7000);

            //  1500の部分をgif画像の長さに変更
            //  gif画像の再生が終了したらフェードアウト
            setTimeout(function(){
              $("#slide4_4__movie__mp4").fadeOut(1000);
              $("#slide4_4__soogo").fadeOut(1000);
              $("#slide4_4__answer").fadeIn(1000);
            },10000);
          });
        }
      }

      //  4つめのセクション かつ 4枚目のスライド かつ 次のスライドが5枚目 かつ 右にスライドした場合
      if(index == 4 && slideIndex == 3 && nextSlideIndex == 4 && direction == 'right'){
        $("#slide4_4 .fp-tableCell").addClass("js_d_none");
        $("#slide4_5 .fp-tableCell").fadeIn(3000);
        $("#slide4_4 .fp-tableCell").fadeOut(100);
        $("#slide4_5 .fp-tableCell").removeClass("js_d_none");
      }

      //  4つめのセクション かつ 5枚目のスライド かつ 次のスライドが6枚目 かつ 右にスライドした場合
      if(index == 4 && slideIndex == 4 && nextSlideIndex == 5 && direction == 'right'){
        $("#slide4_5 .fp-tableCell").addClass("js_d_none");
        $("#slide4_6__answer").addClass("js_d_none");
        $("#slide4_6__soogo").addClass("js_d_none");

        //  フェードインが終了後gifLoad()を呼び出し
        $("#slide4_6 .fp-tableCell").fadeIn(1000,gifLoad);
        $("#slide4_5 .fp-tableCell").fadeOut(100);
        $("#slide4_6 .fp-tableCell").removeClass("js_d_none");

        //  gif画像のロード
        function gifLoad(){
          $("#slide4_6__movie__mp4").append('<video id="4_6_movie" class="video" controls><source src="../video/maru01.mp4"></video');

          //  gif画像が配置されたら開始
          $("#slide4_6__movie__mp4 .video").ready(function() {

            var video = $("#4_6_movie").get(0);
            video.play();

            //  gif画像の再生が終了したら不正解のそーごちゃんをフェードイン
            setTimeout(function(){
              $("#slide4_6__soogo").fadeIn(1000);
            },7000);

            //  1500の部分をgif画像の長さに変更
            //  gif画像の再生が終了したらフェードアウト
            setTimeout(function(){
              $("#slide4_6__movie__mp4").fadeOut(1000);
              $("#slide4_6__soogo").fadeOut(1000);
              $("#slide4_6__answer").fadeIn(1000);
            },10000);
          });
        }
      }

      //  4つめのセクション かつ 6枚目のスライド かつ 次のスライドが1枚目 かつ 右にスライドした場合
      if(index == 4 && slideIndex == 5 && nextSlideIndex == 0 && direction == 'left'){
        $("#slide4_6 .fp-tableCell").addClass("js_d_none");
        $("#slide4_1 .fp-tableCell").fadeIn(3000);
        $("#slide4_6 .fp-tableCell").fadeOut(100);
        $("#slide4_1 .fp-tableCell").removeClass("js_d_none");
      }
      /////////////////////////////////////////////////////////



      /////////////////////////////////////////////////////////
      //  藤田屋
      //  5つめのセクション かつ 1枚目のスライド かつ 次のスライドが2枚目 かつ 右にスライドした場合
      if(index == 5 && slideIndex == 0 && nextSlideIndex == 1 && direction == 'right'){
        $("#slide5_1 .fp-tableCell").addClass("js_d_none");
        $("#slide5_2__answer").addClass("js_d_none");
        $("#slide5_2__soogo").addClass("js_d_none");

        //  フェードインが終了後gifLoad()を呼び出し
        $("#slide5_2 .fp-tableCell").fadeIn(1000,gifLoad);
        $("#slide5_1 .fp-tableCell").fadeOut(100);
        $("#slide5_2 .fp-tableCell").removeClass("js_d_none");

        //  gif画像のロード
        function gifLoad(){
          $("#slide5_2__movie__mp4").append('<video id="5_2_movie" class="video" controls><source src="../video/batu01.mp4"></video');

          //  gif画像が配置されたら開始
          $("#slide5_2__movie__mp4 .video").ready(function() {

            var video = $("#5_2_movie").get(0);
            video.play();

            //  gif画像の再生が終了したら不正解のそーごちゃんをフェードイン
            setTimeout(function(){
              $("#slide5_2__soogo").fadeIn(1000);
            },7000);

            //  1500の部分をgif画像の長さに変更
            //  gif画像の再生が終了したらフェードアウト
            setTimeout(function(){
              $("#slide5_2__movie__mp4").fadeOut(1000);
              $("#slide5_2__soogo").fadeOut(1000);
              $("#slide5_2__answer").fadeIn(1000);
            },10000);
          });
        }
      }

      //  5つめのセクション かつ 2枚目のスライド かつ 次のスライドが3枚目 かつ 右にスライドした場合
      if(index == 5 && slideIndex == 1 && nextSlideIndex == 2 && direction == 'right'){
        $("#slide5_2 .fp-tableCell").addClass("js_d_none");
        $("#slide5_3 .fp-tableCell").fadeIn(3000);
        $("#slide5_2 .fp-tableCell").fadeOut(100);
        $("#slide5_3 .fp-tableCell").removeClass("js_d_none");
      }

      //  5つめのセクション かつ 3枚目のスライド かつ 次のスライドが4枚目 かつ 右にスライドした場合
      if(index == 5 && slideIndex == 2 && nextSlideIndex == 3 && direction == 'right'){
        $("#slide5_3 .fp-tableCell").addClass("js_d_none");
        $("#slide5_4__answer").addClass("js_d_none");
        $("#slide5_4__soogo").addClass("js_d_none");

        //  フェードインが終了後gifLoad()を呼び出し
        $("#slide5_4 .fp-tableCell").fadeIn(1000,gifLoad);
        $("#slide5_3 .fp-tableCell").fadeOut(100);
        $("#slide5_4 .fp-tableCell").removeClass("js_d_none");

        //  gif画像のロード
        function gifLoad(){
          $("#slide5_4__movie__mp4").append('<video id="5_4_movie" class="video" controls><source src="../video/batu01.mp4"></video');

          //  gif画像が配置されたら開始
          $("#slide5_4__movie__mp4 .video").ready(function() {

            var video = $("#5_4_movie").get(0);
            video.play();

            //  gif画像の再生が終了したら不正解のそーごちゃんをフェードイン
            setTimeout(function(){
              $("#slide5_4__soogo").fadeIn(1000);
            },7000);

            //  1500の部分をgif画像の長さに変更
            //  gif画像の再生が終了したらフェードアウト
            setTimeout(function(){
              $("#slide5_4__movie__mp4").fadeOut(1000);
              $("#slide5_4__soogo").fadeOut(1000);
              $("#slide5_4__answer").fadeIn(1000);
            },10000);
          });
        }
      }

      //  5つめのセクション かつ 4枚目のスライド かつ 次のスライドが5枚目 かつ 右にスライドした場合
      if(index == 5 && slideIndex == 3 && nextSlideIndex == 4 && direction == 'right'){
        $("#slide5_4 .fp-tableCell").addClass("js_d_none");
        $("#slide5_5 .fp-tableCell").fadeIn(3000);
        $("#slide5_4 .fp-tableCell").fadeOut(100);
        $("#slide5_5 .fp-tableCell").removeClass("js_d_none");
      }

      //  5つめのセクション かつ 5枚目のスライド かつ 次のスライドが6枚目 かつ 右にスライドした場合
      if(index == 5 && slideIndex == 4 && nextSlideIndex == 5 && direction == 'right'){
        $("#slide5_5 .fp-tableCell").addClass("js_d_none");
        $("#slide5_6__answer").addClass("js_d_none");
        $("#slide5_6__soogo").addClass("js_d_none");

        //  フェードインが終了後gifLoad()を呼び出し
        $("#slide5_6 .fp-tableCell").fadeIn(1000,gifLoad);
        $("#slide5_5 .fp-tableCell").fadeOut(100);
        $("#slide5_6 .fp-tableCell").removeClass("js_d_none");

        //  gif画像のロード
        function gifLoad(){
          $("#slide5_6__movie__mp4").append('<video id="5_6_movie" class="video" controls><source src="../video/maru01.mp4"></video');

          //  gif画像が配置されたら開始
          $("#slide5_6__movie__mp4 .video").ready(function() {

            var video = $("#5_6_movie").get(0);
            video.play();

            //  gif画像の再生が終了したら不正解のそーごちゃんをフェードイン
            setTimeout(function(){
              $("#slide5_6__soogo").fadeIn(1000);
            },7000);

            //  1500の部分をgif画像の長さに変更
            //  gif画像の再生が終了したらフェードアウト
            setTimeout(function(){
              $("#slide5_6__movie__mp4").fadeOut(1000);
              $("#slide5_6__soogo").fadeOut(1000);
              $("#slide5_6__answer").fadeIn(1000);
            },10000);
          });
        }
      }

      //  5つめのセクション かつ 6枚目のスライド かつ 次のスライドが1枚目 かつ 右にスライドした場合
      if(index == 5 && slideIndex == 5 && nextSlideIndex == 0 && direction == 'left'){
        $("#slide5_6 .fp-tableCell").addClass("js_d_none");
        $("#slide5_1 .fp-tableCell").fadeIn(3000);
        $("#slide5_6 .fp-tableCell").fadeOut(100);
        $("#slide5_1 .fp-tableCell").removeClass("js_d_none");
      }
    }
  });

  //$('#header').fadeIn("slow");
}
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
