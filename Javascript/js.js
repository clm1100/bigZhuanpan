/**
 * Created by zhangxiaodong on 15/12/4.
 */



function auto_hide_alert(massage_text) {
  var item = $('#auto-hide-alert');
  $('#massage-text').html(massage_text);
  item.css('opacity','1');
  setTimeout("$('#auto-hide-alert').css('opacity','0');",2500);
}

function auto_hide_alert1(massage_text) {
  var item = $('#auto-hide-alert1');
  $('#massage-text1').html(massage_text);
  item.css('opacity','1');
  setTimeout("$('#auto-hide-alert1').css('opacity','0');",2500);
}
