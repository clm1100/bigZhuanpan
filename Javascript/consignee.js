/**
 * Created by zhangxiaodong on 15/12/4.
 */
$(document).ready(function() {
  var phone_input = $("#phone");
  var post_number = $("#post-number");
  var patrn=/^[0-9]{6}$/;

  var checkphone = /^1([38]\d|4[57]|5[0-35-9]|7[06-8]|8[89])\d{8}$/;

  $('#phone').blur(function() {
    if(phone_input.val() != '' && phone_input.val() != null) {
      if(!checkphone.test($("#phone").val())){
        auto_hide_alert('请输入正确的手机号');
        phone_input.focus();
      }
    }

  });

  $('#post-number').blur(function() {
    if(post_number.val() != '' && post_number.val() != null) {
      if(!patrn.test($("#post-number").val())){
        auto_hide_alert('请输入正确的邮编');
        post_number.focus();
      }
    }

  });

  $('#consignee-save-bt').click(function() {
    var name = $('#consignee').val();
    var phone = phone_input.val();
    var zipcode = $('#post-number').val();
    var address = $('#location').val();
    if(name == '' || phone == '' || zipcode == '' || address == '' ){ auto_hide_alert('请将信息填写完整'); return; }

    var api = 'http://m.moretao.com/api/lottery_receive_records/'+ item_id;
    $.post(api, {name:name, phone:phone, zipcode:zipcode, address:address}, function(data) {
      if(data.status == 200 ) window.location.href = 'draw-results.html';
      else auto_hide_alert('网络错误');
    })
  });

});