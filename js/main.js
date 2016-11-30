$(function(){

});



function fullpage_load(){
  $('#fullpage').fadeIn("slow");

  //  fullpage.jsの読み込み部分
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
    menu: '#menu',
    sectionsColor: ['#addbff', '#ff8e88', '#ffc489', '#84ff84']
  });
}
