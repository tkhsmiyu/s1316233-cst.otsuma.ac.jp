/*ブラウザのコンソールに文字列を出力する関数*/
console.log('main.jsをロードしました');

/*クラス名「text」を持つp要素の文字色を赤にする*/
var target;
var targets = document.getElementsByTagName("p");

for(var i=0; target=targets[i]; i++){
	if(target.className.match(/text/i)){
        target.style.color = "red";
	}
}
$(function(){
    $('.thumbnails img').click(function(){
      var $thisImg=$(this).attr('scr');
      var $thisAlt=$(this).attr('alt');
      $('.mainImage img').attr({src:$thisImg,alt:$thisAlt});
    });
});

$(function(){   //準備が整うと処理を開始してくれる構文
  var topBtn=$('#pageTop')
  topBtn.hide();
  $(window).scroll(function(){
    if($(this).scrollTop()>80){
      topBtn.fadeIn();
    }else{
      topBtn.fadeOut();
    }
  });
  
  topBtn.click(function(){
    $('body,html').animate({
      scrollTop: 0},500);
    return false;
  })
    $(".hoge").css("color","green");  //クラス名hogeのCSSのカラーを緑にする命令
    $("img").fadeIn(2000);　//img要素をフェードインする命令
});