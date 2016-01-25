/**
 * Created by zhangxiaodong on 15/11/23.
 */
var token;
$(document).ready(function() {
  var code = Math.floor(0+Math.random()*(400000)).toString();
  var type;
  var item_id ;
  var location_href = window.location.search;

  token = location_href.substring(location_href.indexOf("?")+1,location_href.indexOf("+"));
  $('.lottery-bt').click(function() {
    lottery();
  });
  $('.activity-rule-bt').click(function() {
    $('.activity-rule-mode').css('display','block');
    $('body').css('overflow','hidden');
  });

  $('.activity-rule-text-close').click(function() {
    $('.activity-rule-mode').css('display','none');
    $('body').css('overflow','scroll');
  });

  $('#consignee-information').click(function() {
      window.location.href = 'consignee-information.html?'+ item_id;

  });

  $(".lottery-bt").click(function() {
    lottery();
  })

  function lottery(){
    var id = '5672a05ab8ec19bb2fd002a9';
    var url = 'http://m.moretao.com/api/lotteries/'+ id +'/draw/' + code +'?access_token='+ token;
    $.get(url, function(json) {
      console.log(json);
      var num = json.status;
      if (num != 404){
        if(num == 403){
          window.location.href = 'signup.html';
        } else if (num == 423){
          auto_hide_alert('请输入正确的兑奖码');
        } else {
          var order = json.prize.order;
          type = json.prize.type;
          if(order > 8){
            $('#activity-winning-text').html('&nbsp;<br/>恭喜你抽中<br/><span style="font-size: 25px;">20元海淘券</span>');
            $('.order-9-text').css('display','block');
            $('.extension-img-body').css('display','block');
            $('#consignee-information').css('display','none');
            $('#open-app-bt').css('display','block');

          } else {
            item_id = json.item.id;
            if(order == 1 ) $('#activity-winning-text').html('&nbsp;<br/>一等奖 <br/>星球大战投影键盘');
            if(order == 2 ) $('#activity-winning-text').html('&nbsp;<br/>三等奖 <br/>钢铁侠电动开合真人头盔');
            if(order == 3 ) $('#activity-winning-text').html('&nbsp;<br/>三等奖 <br/>哆啦A梦充电夜灯');
            if(order == 4 ) $('#activity-winning-text').html('&nbsp;<br/>四等奖 <br/>寻龙诀充电宝');
            if(order == 5 ) $('#activity-winning-text').html('&nbsp;<br/>五等奖 <br/>五人组便签本');
            if(order == 6 ) $('#activity-winning-text').html('&nbsp;<br/>六等奖 <br/>迷宫手机壳');
            if(order == 7 ) $('#activity-winning-text').html('&nbsp;<br/>七等奖 <br/>罗盘钥匙扣');
            if(order == 8 ) $('#activity-winning-text').html('&nbsp;<br/>八等奖 <br/>萨满魔术头巾');
          }

          $('.activity-winning-mode').css('display','block');
          $('.lottery-bt').css('display','none');
          $('.close-box').fadeOut(800);
          $('.open-box').fadeIn(1000);
          $('.lottery-show').css('display','none');
          $('.lottery-control').css('display','none');
          showgen();
          setTimeout("$('.item1').css('display','none')",2000);
        }
      } else {
        auto_hide_alert('网络错误请重试');
      }

    })

  }



});


