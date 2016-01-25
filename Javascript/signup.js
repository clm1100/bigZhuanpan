/**
 * Created by zhangxiaodong on 15/11/20.
 */

$(document).ready(function() {

});

function send_sms_code() {
  var mobile = $("#phone").val();

  if(!(/^1([38]\d|4[57]|5[0-35-9]|7[06-8]|8[89])\d{8}$/.test(mobile))){
    auto_hide_alert("请填写正确的手机号码");
    return false;
  }
  var url = 'http://m.moretao.com/signup/code/' + mobile;
  var btn = $('.send-sms-code');
  btn.bind('click', false);
  $.get(url, function(data) {
    if(data.code == 0) {
      btn.html('重新获取');
    }
    auto_hide_alert(data.msg);
  });
}

function submit_form() {

  var form = $("#signup-form");
  var password = $('#password-input').val();
  var code = form.find('input[name=code]').val();
  var action = form.attr("action");
  var mobile = form.find('input[name=mobile]').val();

  if(mobile =='' ) {auto_hide_alert("请输入手机号");return};
  if(code =='' ) {auto_hide_alert("请输入验证码");return}
  if(password =='' ) {auto_hide_alert("请设置密码");return}

  var formData = {
    username: mobile,
    password: password,
    code: code,
    mobile: mobile
  };

  $.post('http://m.moretao.com/signup', formData, function(data) {
    if(data.status == '500' ) auto_hide_alert(data.msg);
    else window.location.href = 'select.html?'+ data.token+'+';
  });
}