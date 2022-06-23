/* globals $ */
/*TOPへスクロール*/ 
$('#page-link a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href');
  var pos = $(elmHash).offset().top;
  $('body,html').animate({scrollTop: pos}, 1000);
  return false;
});
$(function(){
  $('.btn-link').click(function() {
  var speed = 1000; // スクロール速度(ミリ秒)
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $('html').animate({scrollTop:position}, speed, 'swing');
  return false;
  });
  });

$('#timer').yycountdown({
  endDateTime : '2022/08/01 00:00:00',
  unit : {d: '日', h: '時間', m: '分', s: '秒'}, 
  complete : function(_this){
    _this.find('.yycountdown-box').css({color:'red'});
  }
});
$('#timer02').yycountdown({
  endDateTime : '2022/08/01 00:00:00',
  unit : {d: '日', h: '時間', m: '分', s: '秒'}, 
  complete : function(_this){
    _this.find('.yycountdown-box').css({color:'red'});
  }
});

$('.up-js').waypoint({
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInUp');
      this.destroy();
    }
  },

  offset: '80%',
});

/* global google */
$(document).ready(function(){
  initMap();
});
function initMap() {
  var myLatlng = new google.maps.LatLng(35.170097, 136.880011);
  var mapOptions = {
    zoom: 17,
    center: myLatlng,
    scrollwheel: false, 
    disableDoubleClickZoom: true,
    draggable: false,
    mapTypeId: 'roadmap'
  };
  new google.maps.Map(document.getElementById('google-map'),mapOptions);
}

$('#submit-btn').on('click', function(e) {
  var username = $('#name').val();
  var userkana = $('#name-kana').val();
  var phone    = $('#phone').val();
  var email    = $('#email').val();
  var date = $('#date').val();
  var error_text = '';

  if ($('input[name="selection"]:checked').val() === undefined) {
    error_text = '予約内容を選択してください ';
  }
  else if (username.trim() === '') {
    error_text = 'お名前を入力してください';
  }
  else if (userkana.trim() === '') {
    error_text = 'フリガナを入力してください';
  }
  else if (!userkana.match(/^[ァ-ヴ　]+$/)) {
    error_text = 'フリガナには全角のカタカナとスペースのみを入力してください';
  }
  else if (email.trim() === '') {
    error_text = 'メールアドレスを入力してください';
  }
  else if (!email.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
    error_text = 'メールアドレスを正しい書式で入力してください';
  }
  else if (phone.trim() === '') {
    error_text = '電話番号を入力してください';
  }
  else if (!phone.match(/^[0-9]{8,11}$/)) {
    error_text = '電話番号を正しい書式で入力してください';
  }
  else if (date === '') {
    error_text = 'ご希望日時を選択してください';
  }

  // エラー内容を表示する
  $('#form-has-error').text(error_text);

  // エラーがなければ送信する
  if (error_text === '') {
    //$('#contact_form').submit();
  }
});