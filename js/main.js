$(function(){
  fullpage_load();

  /*
    マルバツを押した際の動作
  */
  $(".quiz__choice__A #link").click(function (){
    alert("まるを選択！");
    $.fn.fullpage.moveTo('page_2', 1);
  });
  $(".quiz__choice__B #link").click(function (){
    alert("ばつを選択！");
    $.fn.fullpage.moveTo('page_2', 1);
  });
});



function fullpage_load(){
  $('#fullpage').fadeIn("slow");

  //  fullpage.jsの読み込み部分
  $('#fullpage').fullpage({
    anchors: ['aiueo','page_1', 'page_2', 'page_3', 'page_4'],
    menu: '#menu',
    sectionsColor: ['#FFF','#addbff', '#FFF', '#ffc489', '#84ff84'],

    //  現在表示しているコンテンツからスクロールし、移動した際
    onLeave: function(index, nextIndex, direction){
      var leavingSection = $(this);

      //  メニューから1店舗目へのリンクを押した時
      if(index == 1 && nextIndex == 2 && direction =='down'){
        alert("メニューから2店舗目へ");
        $("#section2 .fp-tableCell").addClass("js_d_none");
        $("#slide2_1 .fp-tableCell").fadeIn(3000);
        $("#slide2_1 .fp-tableCell").removeClass("js_d_none");
      }

      //  メニューから2店舗目へのリンクを押した時
      if(index == 1 && nextIndex == 3 && direction =='down'){
        alert("メニューから2店舗目へ");
        $("#section3 .fp-tableCell").addClass("js_d_none");
        $("#slide3_1 .fp-tableCell").fadeIn(3000);
        $("#slide3_1 .fp-tableCell").removeClass("js_d_none");
      }

      //  メニューから3店舗目へのリンクを押した時
      if(index == 1 && nextIndex == 4 && direction =='down'){
        alert("メニューから3店舗目へ");
        $("#section4 .fp-tableCell").addClass("js_d_none");
        $("#slide4_1 .fp-tableCell").fadeIn(3000);
        $("#slide4_1 .fp-tableCell").removeClass("js_d_none");
      }

      //  メニューから4店舗目へのリンクを押した時
      if(index == 1 && nextIndex == 5 && direction =='down'){
        alert("メニューから4店舗目へ");
        $("#section5 .fp-tableCell").addClass("js_d_none");
        $("#slide5_1 .fp-tableCell").fadeIn(3000);
        $("#slide5_1 .fp-tableCell").removeClass("js_d_none");
      }



    },

    //  スライド移動を押した際
    onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
      var leavingSlide = $(this);

      //  以下右方向への移動に関する条件
      //  3つめのセクション かつ 1枚目のスライド かつ 次のスライドが2枚目 かつ 右にスライドした場合
      if(index == 3 && slideIndex == 0 && nextSlideIndex == 1 && direction == 'right'){
        alert("右に移動して2枚目のスライドへ！！！");
        $("#slide3_1 .fp-tableCell").addClass("js_d_none");
        $("#slide3_2 .fp-tableCell").fadeIn(3000);
        $("#slide3_1 .fp-tableCell").fadeOut(100);
        $("#slide3_2 .fp-tableCell").removeClass("js_d_none");
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
