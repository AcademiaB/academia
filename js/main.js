$(function(){
  fullpage_load();
});



function fullpage_load(){
  $('#fullpage').fadeIn("slow");

  //  fullpage.jsの読み込み部分
  $('#fullpage').fullpage({
    anchors: ['aiueo','page_1', 'page_2', 'page_3', 'page_4'],
    menu: '#menu',
    sectionsColor: ['#FFF','#addbff', '#ff8e88', '#ffc489', '#84ff84'],

    //  スライド移動を押した際に読み込みが行われる
    onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
      var leavingSlide = $(this);

      //  例:) 3つめのセクション かつ 最初のスライド かつ 右にスライドした場合
      if(index == 3 && slideIndex == 0 && direction == 'right'){
        alert("2枚目のスライドへ！！！");
      }

      //  例:) 3つめのセクション かつ 2枚目のスライド かつ 左にスライドした場合
      if(index == 3 && slideIndex == 1 && direction == 'left'){
        alert("最初のスライドへ！！！");
      }
    }
  });

  //$('#header').fadeIn("slow");
}
