/**
 * Created by zhangxiaodong on 15/11/20.
 */
$(document).ready(function() {


})
function login() {
  var index;
  var location_href = window.location.search;
  index = location_href.substring(location_href.indexOf("=")+1,location_href.length);
  console.log(index);
  if(index == "undefined") index=0;
  var username = $('#nickname-input').val();
  var password = $('#password-input').val();
  if (username!= '' && password!='') {
    $.ajax({
      type: 'post',
      url: 'http://m.moretao.com/api/signin',
      data: {username: username, password: password},
      async: false,
      success: function (data) {
        console.log(data)
        if (data.status == 500){
          auto_hide_alert('该用户未注册或密码错误');
        } else if(data.status == 200) {
          window.location.href = 'select.html?'+data.token+'+'+index;
        } else {
          auto_hide_alert('网络不稳定，再试试哦');
          return;
        }
      }
    });
  }else{
    auto_hide_alert('用户名和密码都不能为空');
    return;
  }

}