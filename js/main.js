$(function(){
  fullpage_load();
});



function fullpage_load(){
  $('#fullpage').fadeIn("slow");

  //  fullpage.jsの読み込み部分
  $('#fullpage').fullpage({
    anchors: ['aiueo','page_1', 'page_2', 'page_3', 'page_4'],
    menu: '#menu',
    sectionsColor: ['#FFF','#addbff', '#ff8e88', '#ffc489', '#84ff84']
  });

  //$('#header').fadeIn("slow");
}
