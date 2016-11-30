$(function(){
  paperLoad1();
});

function paperLoad1(){
  $("#paper1").fadeIn(500);setTimeout('paperOut1()',1500);
}
function paperOut1(){
  $("#paper1").fadeOut(1);paperLoad2();
}


function paperLoad2(){
  $("#paper2").fadeIn(500);setTimeout('paperOut2()',1500);
}
function paperOut2(){
  $("#paper2").fadeOut(1);paperLoad3();
}


function paperLoad3(){
  $("#paper3").fadeIn(500);setTimeout('paperOut3()',1500);
}
function paperOut3(){
  $("#paper3").fadeOut(1);paperLoad4();
}


function paperLoad4(){
  $("#paper4").fadeIn(500);setTimeout('paperOut4()',1500);
}
function paperOut4(){
  $("#paper4").fadeOut(1);paperLoad5();
}


function paperLoad5(){
  $("#paper5").fadeIn(500);setTimeout('paperOut5()',1500);
}
function paperOut5(){
  $("#paper5").fadeOut(1);paperLoad6();
}


function paperLoad6(){
  $("#paper6").fadeIn(500);setTimeout('paperOut6()',1500);
}
function paperOut6(){
  $("#paper6").fadeOut(1);paperLoad7();
}


function paperLoad7(){
  $("#paper7").fadeIn(500);setTimeout('paperOut7()',1500);
}
function paperOut7(){
  $("#paper7").fadeOut(1);paperLoad8();
}


function paperLoad8(){
  $("#paper8").fadeIn(500);setTimeout('paperOut8()',1500);
}
function paperOut8(){
  $("#paper8").fadeOut(1);paperLoad9();
}


function paperLoad9(){
  $("#paper9").fadeIn(500);setTimeout('paperOut9()',1500);
}
function paperOut9(){
  $("#paper9").fadeOut(1);paperLoad10();
}


function paperLoad10(){
  $("#paper10").fadeIn(500);setTimeout('paperOut10()',1500);
}
function paperOut10(){
  $("#paper10").fadeOut(1);paperLoad11();
}


function paperLoad11(){
  $("#paper11").fadeIn(500);setTimeout('paperOut11()',500);
}
function paperOut11(){
  $("#paper11").fadeOut(1);paperLoad12();
}


function paperLoad12(){
  $("#paper12").fadeIn(500);setTimeout('paperOut12()',500);
}
function paperOut12(){
  $("#paper12").fadeOut(1);paperLoad13();
}


function paperLoad13(){
  $("#paper13").fadeIn(500);setTimeout('paperOut13()',500);
}
function paperOut13(){
  $("#paper13").fadeOut(1);paperLoad14();
}


function paperLoad14(){
  $("#paper14").fadeIn(500);setTimeout('paperOut14()',500);
}
function paperOut14(){
  $("#paper14").fadeOut(1);paperLoad15();
}


function paperLoad15(){
  $("#paper15").fadeIn(500);setTimeout('paperOut15()',500);
}
function paperOut15(){
  $("#paper15").fadeOut(1);paperLoad16();
}


function paperLoad16(){
  $("#paper16").fadeIn(500);setTimeout('paperOut16()',500);
}
function paperOut16(){
  $("#paper16").fadeOut(1);paperLoad1();
}



function fullpage_load(){
  $('#fullpage').fadeIn("slow");

  //  fullpage.jsの読み込み部分
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
    menu: '#menu',
    sectionsColor: ['#addbff', '#ff8e88', '#ffc489', '#84ff84']
  });
}
