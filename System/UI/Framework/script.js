var response;
$.get("../../PHP/Data/current_user.txt", function(data) {
 sessionStorage.username = data;
});

function exec(command, userType) {
 $.ajax({
  method: 'POST',
  url: '../../PHP/Linux Commands/generic.php',
  data: {
   dataString: command,
   userType: userType
  }
 })
}

function exec_return(command) {
 $.ajax({
   method: 'POST',
   url: '../../PHP/Linux Commands/generic_return.php',
   data: {
    dataString: command
   }
  })
  .done(function(msg) {
   sessionStorage.exec_return = msg;

  });
}

function devilspie2(action, type, name) {
 exec('sudo killall devilspie2-controller');
 setTimeout(function() {
  exec('devilspie2-controller ' + sessionStorage.username + ' ' + action + ' ' + type + ' ' + name + '');
 }, 500);
}

function setVolume(action, rate) {

 exec('setVolume ' + action + ' ' + rate + '');

}
setInterval(function() {
 exec('pkill -f "sh /bin/set-user-status ' + sessionStorage.username + '"', 'root');
 setTimeout(function() {
  exec('pkill -f "mysql -u root -px xx users -e UPDATE users SET active=1 WHERE username=\'' + sessionStorage.username + '\'"', 'root');
 }, 500);
 setTimeout(function() {
  exec('set-user-status ' + sessionStorage.username + '', 'root');
 }, 1000);
}, 5000);

setInterval(function() {
 $.ajax({
  method: 'POST',
  url: 'https://reviaco.os/System/PHP/Data/activeUsers.php',
  success: function(data) {

   var i;
   var out = '<div>';
   for (i = 0; i < data.length; i++) {

    out += '<div id="' + data[i].username + '" class="user-profile"><img src="../../../Users/' + data[i].username + '/Profile/Avatar.jpg"><div class="user-details ' + data[i].username + '_name"><h4 class="user_avatar_title">' + data[i].username + '</h4></div></div>';

   }
   out += '</div>';
   $('#activeUsers').empty().append(out);

  }
 });
}, 3000);

function appendApp(type, name, nativeName, activityName) {
 if (type == 'Linux') {


  $('body').append('<div id="' + name + '" type="' + type + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><paper-toolbar><div class="title" id="title" title="">' + name + '</div><paper-icon-button id="kill_btn" icon="cancel"></paper-icon-button></paper-toolbar><div class="fixed-action-btn horizontal split_btn"><paper-icon-button id="split_btn" icon="view-column"></paper-icon-button><ul style="top: 5px;right: 25px;"><li id="SplitLeft_btn"><a class="btn-floating yellow darken-1"><i class="material-icons">arrow_back</i></a></li><li id="SplitRight_btn"><a class="btn-floating red"><i class="material-icons">arrow_forward</i></a></li></ul></div></div></div>');



 } else if (type == 'Windows') {


  $('body').append('<div id="' + name + '" type="' + type + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><paper-toolbar><div class="title" id="title" title="">' + name + '</div><paper-icon-button id="kill_btn" icon="cancel"></paper-icon-button></paper-toolbar><div class="fixed-action-btn horizontal split_btn"><paper-icon-button id="split_btn" icon="view-column"></paper-icon-button><ul style="top: 5px;right: 25px;"><li id="SplitLeft_btn"><a class="btn-floating yellow darken-1"><i class="material-icons">arrow_back</i></a></li><li id="SplitRight_btn"><a class="btn-floating red"><i class="material-icons">arrow_forward</i></a></li></ul></div></div></div>');


 } else if (type == 'AndroidWear') {


  $('body').append('<div id="' + name + '" type="' + type + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><paper-toolbar><div class="title" id="title" title="">' + name + '</div><paper-icon-button id="kill_btn" icon="cancel"></paper-icon-button></paper-toolbar><div class="fixed-action-btn horizontal split_btn"><paper-icon-button id="split_btn" icon="view-column"></paper-icon-button><ul style="top: 5px;right: 25px;"><li id="SplitLeft_btn"><a class="btn-floating yellow darken-1"><i class="material-icons">arrow_back</i></a></li><li id="SplitRight_btn"><a class="btn-floating red"><i class="material-icons">arrow_forward</i></a></li></ul></div></div></div>');



 } else if (type == 'AndroidPhone') {


  $('body').append('<div id="' + name + '" type="' + type + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><paper-toolbar><div class="title" id="title" title="">' + name + '</div><paper-icon-button id="kill_btn" icon="cancel"></paper-icon-button></paper-toolbar><div class="fixed-action-btn horizontal split_btn"><paper-icon-button id="split_btn" icon="view-column"></paper-icon-button><ul style="top: 5px;right: 25px;"><li id="SplitLeft_btn"><a class="btn-floating yellow darken-1"><i class="material-icons">arrow_back</i></a></li><li id="SplitRight_btn"><a class="btn-floating red"><i class="material-icons">arrow_forward</i></a></li></ul></div></div></div>');



 } else if (type == 'AndroidWear') {


  $('body').append('<div id="' + name + '" type="' + type + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><paper-toolbar><div class="title" id="title" title="">' + name + '</div><paper-icon-button id="kill_btn" icon="cancel"></paper-icon-button></paper-toolbar><div class="fixed-action-btn horizontal split_btn"><paper-icon-button id="split_btn" icon="view-column"></paper-icon-button><ul style="top: 5px;right: 25px;"><li id="SplitLeft_btn"><a class="btn-floating yellow darken-1"><i class="material-icons">arrow_back</i></a></li><li id="SplitRight_btn"><a class="btn-floating red"><i class="material-icons">arrow_forward</i></a></li></ul></div></div></div>');



 } else if (type == 'BlackBerry') {


  $('body').append('<div id="' + name + '" type="' + type + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><paper-toolbar><div class="title" id="title" title="">' + name + '</div><paper-icon-button id="kill_btn" icon="cancel"></paper-icon-button></paper-toolbar><div class="fixed-action-btn horizontal split_btn"><paper-icon-button id="split_btn" icon="view-column"></paper-icon-button><ul style="top: 5px;right: 25px;"><li id="SplitLeft_btn"><a class="btn-floating yellow darken-1"><i class="material-icons">arrow_back</i></a></li><li id="SplitRight_btn"><a class="btn-floating red"><i class="material-icons">arrow_forward</i></a></li></ul></div></div></div>');




 } else if (type == 'TizenPhone') {


  $('body').append('<div id="' + name + '" type="' + type + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><paper-toolbar><div class="title" id="title" title="">' + name + '</div><paper-icon-button id="kill_btn" icon="cancel"></paper-icon-button></paper-toolbar><div class="fixed-action-btn horizontal split_btn"><paper-icon-button id="split_btn" icon="view-column"></paper-icon-button><ul style="top: 5px;right: 25px;"><li id="SplitLeft_btn"><a class="btn-floating yellow darken-1"><i class="material-icons">arrow_back</i></a></li><li id="SplitRight_btn"><a class="btn-floating red"><i class="material-icons">arrow_forward</i></a></li></ul></div></div></div>');



 } else if (type == 'TizenWear') {


  $('body').append('<div id="' + name + '" type="' + type + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><paper-toolbar><div class="title" id="title" title="">' + name + '</div><paper-icon-button id="kill_btn" icon="cancel"></paper-icon-button></paper-toolbar><div class="fixed-action-btn horizontal split_btn"><paper-icon-button id="split_btn" icon="view-column"></paper-icon-button><ul style="top: 5px;right: 25px;"><li id="SplitLeft_btn"><a class="btn-floating yellow darken-1"><i class="material-icons">arrow_back</i></a></li><li id="SplitRight_btn"><a class="btn-floating red"><i class="material-icons">arrow_forward</i></a></li></ul></div></div></div>');



 } else if (type == 'Chrome') {


  $('body').append('<div id="' + name + '" type="' + type + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><paper-toolbar><div class="title" id="title" title="">' + name + '</div><paper-icon-button id="kill_btn" icon="cancel"></paper-icon-button></paper-toolbar><div class="fixed-action-btn horizontal split_btn"><paper-icon-button id="split_btn" icon="view-column"></paper-icon-button><ul style="top: 5px;right: 25px;"><li id="SplitLeft_btn"><a class="btn-floating yellow darken-1"><i class="material-icons">arrow_back</i></a></li><li id="SplitRight_btn"><a class="btn-floating red"><i class="material-icons">arrow_forward</i></a></li></ul></div></div></div>');




 } else if (type == 'Lutro') {


  $('body').append('<div id="' + name + '" type="' + type + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><paper-toolbar><div id="title" title="">' + name + '</div><paper-icon-button id="kill_btn" icon="cancel"></paper-icon-button></paper-toolbar><div class="fixed-action-btn horizontal split_btn"><paper-icon-button id="split_btn" icon="view-column"></paper-icon-button><ul style="top: 5px;right: 25px;"><li id="SplitLeft_btn"><a class="btn-floating yellow darken-1"><i class="material-icons">arrow_back</i></a></li><li id="SplitRight_btn"><a class="btn-floating red"><i class="material-icons">arrow_forward</i></a></li></ul></div></div></div>');



 } else if (type == 'NXEngine') {


  $('body').append('<div id="' + name + '" type="' + type + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><paper-toolbar><div id="title" title="">' + name + '</div><paper-icon-button id="kill_btn" icon="cancel"></paper-icon-button></paper-toolbar><div class="fixed-action-btn horizontal split_btn"><paper-icon-button id="split_btn" icon="view-column"></paper-icon-button><ul style="top: 5px;right: 25px;"><li id="SplitLeft_btn"><a class="btn-floating yellow darken-1"><i class="material-icons">arrow_back</i></a></li><li id="SplitRight_btn"><a class="btn-floating red"><i class="material-icons">arrow_forward</i></a></li></ul></div></div></div>');


 } else if (type == 'VB') {


  $('body').append('<div id="' + name + '" type="' + type + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><paper-toolbar><div id="title" title="">' + name + '</div><paper-icon-button id="kill_btn" icon="cancel"></paper-icon-button></paper-toolbar><div class="fixed-action-btn horizontal split_btn"><paper-icon-button id="split_btn" icon="view-column"></paper-icon-button><ul style="top: 5px;right: 25px;"><li id="SplitLeft_btn"><a class="btn-floating yellow darken-1"><i class="material-icons">arrow_back</i></a></li><li id="SplitRight_btn"><a class="btn-floating red"><i class="material-icons">arrow_forward</i></a></li></ul></div></div></div>');


 } else if (type == 'TyrQuake') {


  $('body').append('<div id="' + name + '" type="' + type + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><paper-toolbar><div id="title" title="">' + name + '</div><paper-icon-button id="kill_btn" icon="cancel"></paper-icon-button></paper-toolbar><div class="fixed-action-btn horizontal split_btn"><paper-icon-button id="split_btn" icon="view-column"></paper-icon-button><ul style="top: 5px;right: 25px;"><li id="SplitLeft_btn"><a class="btn-floating yellow darken-1"><i class="material-icons">arrow_back</i></a></li><li id="SplitRight_btn"><a class="btn-floating red"><i class="material-icons">arrow_forward</i></a></li></ul></div></div></div>');


 } else if (type == 'SNES') {


  $('body').append('<div id="' + name + '" type="' + type + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><paper-toolbar><div id="title" title="">' + name + '</div><paper-icon-button id="kill_btn" icon="cancel"></paper-icon-button></paper-toolbar><div class="fixed-action-btn horizontal split_btn"><paper-icon-button id="split_btn" icon="view-column"></paper-icon-button><ul style="top: 5px;right: 25px;"><li id="SplitLeft_btn"><a class="btn-floating yellow darken-1"><i class="material-icons">arrow_back</i></a></li><li id="SplitRight_btn"><a class="btn-floating red"><i class="material-icons">arrow_forward</i></a></li></ul></div></div></div>');


 } else if (type == 'Sega') {


  $('body').append('<div id="' + name + '" type="' + type + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><paper-toolbar><div id="title" title="">' + name + '</div><paper-icon-button id="kill_btn" icon="cancel"></paper-icon-button></paper-toolbar><div class="fixed-action-btn horizontal split_btn"><paper-icon-button id="split_btn" icon="view-column"></paper-icon-button><ul style="top: 5px;right: 25px;"><li id="SplitLeft_btn"><a class="btn-floating yellow darken-1"><i class="material-icons">arrow_back</i></a></li><li id="SplitRight_btn"><a class="btn-floating red"><i class="material-icons">arrow_forward</i></a></li></ul></div></div></div>');


 } else if (type == 'Game&Watch') {


  $('body').append('<div id="' + name + '" type="' + type + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><paper-toolbar><div id="title" title="">' + name + '</div><paper-icon-button id="split_btn" icon="view-column"></paper-icon-button><paper-icon-button id="kill_btn" icon="cancel"></paper-icon-button></paper-toolbar><div class="fixed-action-btn horizontal split_btn"><paper-icon-button id="split_btn" icon="view-column"></paper-icon-button><ul style="top: 5px;right: 25px;"><li id="SplitLeft_btn"><a class="btn-floating yellow darken-1"><i class="material-icons">arrow_back</i></a></li><li id="SplitRight_btn"><a class="btn-floating red"><i class="material-icons">arrow_forward</i></a></li></ul></div></div></div>');


 } else {

 }
 exec('launch ' + sessionStorage.username + ' ' + type + ' ' + name + ' ' + activityName + '');

 devilspie2('Maximize', type, name);
}

function kill(type, name, nativeName) {
 exec('kill-app ' + sessionStorage.username + ' ' + type + ' ' + nativeName + '');

}
$(document).on("mousedown", "body", function(ev) {
 if (ev.which == 2) {
  ev.preventDefault();
  $('body').append('<div id="settings" class="current_window window"><iframe src="../Settings" /></div>');
  $('#showcase').fadeOut();
  $('#appbook-viewport').fadeOut();
  return false;
 }
});

$(function() {
 $("body").dblclick(function() {

  // $('#bg').backgroundBlur('http://www.bing.com/az/hprichbg/rb/Castelmezzano_EN-US11750585825_1920x1080.jpg');
 });
 $(document).on('click', '#command_btn', function(event) {
  event.stopPropagation();
  var command_to_be_executed = $(this).attr('command');;
  console.log(command_to_be_executed);
  exec(command_to_be_executed);

 });
 setInterval(function() {
  exec_return('eval $(xdotool getmouselocation --shell) && echo $X');
  sessionStorage.PointerX = parseInt(sessionStorage.exec_return);
  setTimeout(function() {
   exec_return('eval $(xdotool getmouselocation --shell) && echo $Y');
   sessionStorage.PointerY = parseInt(sessionStorage.exec_return);
   console.log(sessionStorage.PointerY + 'X' + sessionStorage.PointerX);
  }, 500);

 }, 1000);

 function welcomeAnimation() {
  var videos = new Array('1', '2', '3', '4', '5');
  var l = videos.length;
  var random_no = Math.floor(l * Math.random());
  document.getElementById('welcomeAnimation').src = '../../Media/welcomeAnimation/' + videos[random_no] + '.mp4';
  document.getElementById('welcomeAnimation').addEventListener('ended', myHandler, false);

  function myHandler(e) {
   $('#welcomeAnimation_bg').fadeOut();
  }
 }
 $(window).bind('keydown', function(e) {

  if (e.keyCode == 37)
   $('.appbook').turn('previous');
  else if (e.keyCode == 39)
   $('.appbook').turn('next');

 });

 function appbook() {
  $('.appbook').turn({
   // Width

   width: 922,

   // Height

   height: 500,

   // Elevation

   elevation: 50,

   // Enable gradients

   gradients: true,

   // Auto center this appbook

   autoCenter: true

  });
 }
 $(window).bind('keydown', function(e) {

  if (e.keyCode == 107)
   $('.appbook').turn('previous');
  else if (e.keyCode == 109)
   $('.appbook').turn('next');

 });

 function bg_blur() {
  $('#bg').backgroundBlur({
   imageURL: 'https://reviaco.os/System/Media/Backgrounds/37.jpg',
   blurAmount: 2,
   imageClass: 'tinted-bg-blur',
   duration: 1000, // If the image needs to be faded in, how long that should take
   endOpacity: 1 // Specify the final opacity that the image will have
  });
 }
 if (document.addEventListener) {
  document.addEventListener('contextmenu', function(e) {
   alert("You've tried to open context menu"); //here you draw your own menu
   e.preventDefault();
  }, false);
 } else {
  document.attachEvent('oncontextmenu', function() {
   alert("You've tried to open context menu");
   window.event.returnValue = false;
  });
 }

 var myIndex = 0;


 function carousel() {
  $('.carousel').carousel();
 }


 sessionStorage.assistant_current = 'brolu';

 $(window).load(function() {
  setTimeout(function() {
   welcomeAnimation();
  }, 500);
  setTimeout(function() {
   carousel();
  }, 1000);
  setTimeout(function() {
   bg_blur();
  }, 1500);
  setTimeout(function() {
   appbook();
  }, 2000);
 });
 (function() {
  var rotate, timeline;

  rotate = function() {
   return $('.minimized_window:first-child').fadeOut(400, 'swing', function() {
    return $('.minimized_window:first-child').appendTo('#recent_panel').hide();
   }).fadeIn(400, 'swing');
  };

  timeline = setInterval(rotate, 1200);

  $('body').hover(function() {
   return clearInterval(timeline);
  });

  $('.minimized_window').click(function() {
   return rotate();
  });

 }).call(this);

 startTime();

 function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML =
   h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
 }

 function checkTime(i) {
  if (i < 10) {
   i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
 }

 function sound_hud_hide() {
  $('#sound_hud').slideUp(1000);
 }

 var volume_current = 0;
 $('body').on('keydown', function(event) {

  var x = event.which;
  if (x == 32) {

   $('#sound_hud').slideDown(1000);
   volume_current += 1;
   document.getElementById('volume_slider').value = volume_current;
   setTimeout(sound_hud_hide, 3000);
   setVolume('up', '1');
  }
  if (x == 174) {
   $('#sound_hud').slideDown(1000);
   volume_current -= 1;
   document.getElementById('volume_slider').value = volume_current;
   setTimeout(sound_hud_hide, 3000);
   setVolume('up', '1');


  }
  $.ajax({
   method: 'POST',
   url: 'https://reviaco.os/System/PHP/Data/Volume.php',
   data: {
    VolumeCurrent: volume_current
   },
   success: function(data) {


   }
  });
 });
 $.fn.extend({
  animateCss: function(animationName) {
   var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
   $(this).addClass('animated ' + animationName).one(animationEnd, function() {
    $(this).removeClass('animated ' + animationName);
   });
  }
 });
 $.ajax({
  method: 'POST',
  url: 'https://reviaco.os/System/PHP/Data/Apps.php',
  success: function(data) {
   var i;
   var out = '<div id="showcase" class="carousel">';

   for (i = 0; i < data.length; i++) {


    out += '<div app-name="' + data[i].name + '" native-name="' + data[i].native_name + '" activity-name="' + data[i].activity_name + '" class="carousel-item" onclick="modal.open()"><img id="carousel-img" src="../../../Users/geeekyboy/Apps/' + data[i].name + '/cover.png"></div>';
    var sort;
    sort = data[i].name.charAt(0);
    if ((sort == 'A') || (sort == 'a')) {
     var a = '<indexed_app id="' + data[i].name + '" id="' + data[i].name + '"   class=""><img width="50" width="50" src="../../../Users/geeekyboy/Apps/' + data[i].name + '/icon.png" /><div class="app_title"><h4 class="app_title">' + data[i].name + '</h4></indexed_app>';

    } else if ((sort == 'B') || (sort == 'b'))

    {
     var b = '<indexed_app id="' + data[i].name + '" id="' + data[i].name + '"   class=""><img width="50" width="50" src="../../../Users/geeekyboy/Apps/' + data[i].name + '/icon.png" /><div class="app_title"><h4 class="app_title">' + data[i].name + '</h4></indexed_app>';
    } else if ((sort == 'C') || (sort == 'c'))


    {
     var c = '<indexed_app id="' + data[i].name + '" id="' + data[i].name + '"   class=""><img width="50" width="50" src="../../../Users/geeekyboy/Apps/' + data[i].name + '/icon.png" /><div class="app_title"><h4 class="app_title">' + data[i].name + '</h4></indexed_app>';
    } else if ((sort == 'D') || (sort == 'd'))

    {
     var d = '<indexed_app id="' + data[i].name + '" id="' + data[i].name + '"   class=""><img width="50" width="50" src="../../../Users/geeekyboy/Apps/' + data[i].name + '/icon.png" /><div class="app_title"><h4 class="app_title">' + data[i].name + '</h4></indexed_app>';
    } else if ((sort == 'E') || (sort == 'e'))

    {
     var e = '<indexed_app id="' + data[i].name + '" id="' + data[i].name + '"   class=""><img width="50" width="50" src="../../../Users/geeekyboy/Apps/' + data[i].name + '/icon.png" /><div class="app_title"><h4 class="app_title">' + data[i].name + '</h4></indexed_app>';
    } else if ((sort == 'F') || (sort == 'f'))

    {
     var f = '<indexed_app id="' + data[i].name + '" id="' + data[i].name + '"   class=""><img width="50" width="50" src="../../../Users/geeekyboy/Apps/' + data[i].name + '/icon.png" /><div class="app_title"><h4 class="app_title">' + data[i].name + '</h4></indexed_app>';
    } else if ((sort == 'G') || (sort == 'g'))

    {

     var g = '<indexed_app id="' + data[i].name + '" id="' + data[i].name + '"   class=""><img width="50" width="50" src="../../../Users/geeekyboy/Apps/' + data[i].name + '/icon.png" /><div class="app_title"><h4 class="app_title">' + data[i].name + '</h4></indexed_app>';
    } else if ((sort == 'H') || (sort == 'h')) {

     var h = '<indexed_app id="' + data[i].name + '" id="' + data[i].name + '"   class=""><img width="50" width="50" src="../../../Users/geeekyboy/Apps/' + data[i].name + '/icon.png" /><div class="app_title"><h4 class="app_title">' + data[i].name + '</h4></indexed_app>';
    } else if ((sort == 'I') || (sort == 'i')) {
     var i = '<indexed_app id="' + data[i].name + '" id="' + data[i].name + '"   class=""><img width="50" width="50" src="../../../Users/geeekyboy/Apps/' + data[i].name + '/icon.png" /><div class="app_title"><h4 class="app_title">' + data[i].name + '</h4></indexed_app>';

    } else if ((sort == 'J') || (sort == 'j')) {

     var j = '<indexed_app id="' + data[i].name + '" id="' + data[i].name + '"   class=""><img width="50" width="50" src="../../../Users/geeekyboy/Apps/' + data[i].name + '/icon.png" /><div class="app_title"><h4 class="app_title">' + data[i].name + '</h4></indexed_app>';

    } else if ((sort == 'K') || (sort == 'k')) {
     var k = '<indexed_app id="' + data[i].name + '" id="' + data[i].name + '"   class=""><img width="50" width="50" src="../../../Users/geeekyboy/Apps/' + data[i].name + '/icon.png" /><div class="app_title"><h4 class="app_title">' + data[i].name + '</h4></indexed_app>';

    } else if ((sort == 'L') || (sort == 'l')) {
     var l = '<indexed_app id="' + data[i].name + '" id="' + data[i].name + '"   class=""><img width="50" width="50" src="../../../Users/geeekyboy/Apps/' + data[i].name + '/icon.png" /><div class="app_title"><h4 class="app_title">' + data[i].name + '</h4></indexed_app>';


    } else if ((sort == 'M') || (sort == 'm')) {


     var m = '<indexed_app id="' + data[i].name + '" id="' + data[i].name + '"   class=""><img width="50" width="50" src="../../../Users/geeekyboy/Apps/' + data[i].name + '/icon.png" /><div class="app_title"><h4 class="app_title">' + data[i].name + '</h4></indexed_app>';
    } else if ((sort == 'N') || (sort == 'n')) {

     var n = '<indexed_app id="' + data[i].name + '" id="' + data[i].name + '"   class=""><img width="50" width="50" src="../../../Users/geeekyboy/Apps/' + data[i].name + '/icon.png" /><div class="app_title"><h4 class="app_title">' + data[i].name + '</h4></indexed_app>';
    } else if ((sort == 'O') || (sort == 'o')) {

     var o = '<indexed_app id="' + data[i].name + '" id="' + data[i].name + '"   class=""><img width="50" width="50" src="../../../Users/geeekyboy/Apps/' + data[i].name + '/icon.png" /><div class="app_title"><h4 class="app_title">' + data[i].name + '</h4></indexed_app>';
    } else if ((sort == 'P') || (sort == 'p')) {
     var p = '<indexed_app id="' + data[i].name + '" id="' + data[i].name + '"   class=""><img width="50" width="50" src="../../../Users/geeekyboy/Apps/' + data[i].name + '/icon.png" /><div class="app_title"><h4 class="app_title">' + data[i].name + '</h4></indexed_app>';

    } else if ((sort == 'Q') || (sort == 'q')) {
     var q = '<indexed_app id="' + data[i].name + '" id="' + data[i].name + '"   class=""><img width="50" width="50" src="../../../Users/geeekyboy/Apps/' + data[i].name + '/icon.png" /><div class="app_title"><h4 class="app_title">' + data[i].name + '</h4></indexed_app>';

    } else if ((sort == 'R') || (sort == 'r')) {
     var r = '<indexed_app id="' + data[i].name + '" id="' + data[i].name + '"   class=""><img width="50" width="50" src="../../../Users/geeekyboy/Apps/' + data[i].name + '/icon.png" /><div class="app_title"><h4 class="app_title">' + data[i].name + '</h4></indexed_app>';

    } else if ((sort == 'S') || (sort == 's')) {

     var s = '<indexed_app id="' + data[i].name + '" id="' + data[i].name + '"   class=""><img width="50" width="50" src="../../../Users/geeekyboy/Apps/' + data[i].name + '/icon.png" /><div class="app_title"><h4 class="app_title">' + data[i].name + '</h4></indexed_app>';
    } else if ((sort == 'T') || (sort == 't')) {
     var t = '<indexed_app id="' + data[i].name + '" id="' + data[i].name + '"   class=""><img width="50" width="50" src="../../../Users/geeekyboy/Apps/' + data[i].name + '/icon.png" /><div class="app_title"><h4 class="app_title">' + data[i].name + '</h4></indexed_app>';
    } else if ((sort == 'U') || (sort == 'u')) {

     var u = '<indexed_app id="' + data[i].name + '" id="' + data[i].name + '"   class=""><img width="50" width="50" src="../../../Users/geeekyboy/Apps/' + data[i].name + '/icon.png" /><div class="app_title"><h4 class="app_title">' + data[i].name + '</h4></indexed_app>';
    } else if ((sort == 'V') || (sort == 'v')) {

     var v = '<indexed_app id="' + data[i].name + '" id="' + data[i].name + '"   class=""><img width="50" width="50" src="../../../Users/geeekyboy/Apps/' + data[i].name + '/icon.png" /><div class="app_title"><h4 class="app_title">' + data[i].name + '</h4></indexed_app>';
    } else if ((sort == 'W') || (sort == 'w')) {

     var w = '<indexed_app id="' + data[i].name + '" id="' + data[i].name + '"   class=""><img width="50" width="50" src="../../../Users/geeekyboy/Apps/' + data[i].name + '/icon.png" /><div class="app_title"><h4 class="app_title">' + data[i].name + '</h4></indexed_app>';
    } else if ((sort == 'X') || (sort == 'x')) {

     var x = '<indexed_app id="' + data[i].name + '" id="' + data[i].name + '"   class=""><img width="50" width="50" src="../../../Users/geeekyboy/Apps/' + data[i].name + '/icon.png" /><div class="app_title"><h4 class="app_title">' + data[i].name + '</h4></indexed_app>';
    } else if ((sort == 'Y') || (sort == 'y')) {

     var y = '<indexed_app id="' + data[i].name + '" id="' + data[i].name + '"   class=""><img width="50" width="50" src="../../../Users/geeekyboy/Apps/' + data[i].name + '/icon.png" /><div class="app_title"><h4 class="app_title">' + data[i].name + '</h4></indexed_app>';
    } else if ((sort == 'Z') || (sort == 'z')) {

     var z = '<indexed_app id="' + data[i].name + '" id="' + data[i].name + '"   class=""><img width="50" width="50" src="../../../Users/geeekyboy/Apps/' + data[i].name + '/icon.png" /><div class="app_title"><h4 class="app_title">' + data[i].name + '</h4></indexed_app>';

    } else {

    }


   }
   out += '</div>';
   $('body').append(out);
   $('#pageA').find("#app_list").append(a);
   $('#pageB').find("#app_list").append(b);
   $('#pageC').find("#app_list").append(c);
   $('#pageD').find("#app_list").append(d);
   $('#pageE').find("#app_list").append(e);
   $('#pageF').find("#app_list").append(f);
   $('#pageG').find("#app_list").append(g);
   $('#pageH').find("#app_list").append(h);
   $('#pageI').find("#app_list").append(i);
   $('#pageJ').find("#app_list").append(j);
   $('#pageK').find("#app_list").append(k);
   $('#pageL').find("#app_list").append(l);
   $('#pageM').find("#app_list").append(m);
   $('#pageN').find("#app_list").append(n);
   $('#pageO').find("#app_list").append(o);
   $('#pageP').find("#app_list").append(p);
   $('#pageQ').find("#app_list").append(q);
   $('#pageR').find("#app_list").append(r);
   $('#pageS').find("#app_list").append(s);
   $('#pageT').find("#app_list").append(t);
   $('#pageU').find("#app_list").append(u);
   $('#pageV').find("#app_list").append(v);
   $('#pageW').find("#app_list").append(w);
   $('#pageX').find("#app_list").append(x);
   $('#pageY').find("#app_list").append(y);
   $('#pageZ').find("#app_list").append(z);

  }
 });
 $(document).on('click', '#carousel-img, indexed_app', function(event) {
  event.stopPropagation();
  sessionStorage.appName = $(this).offsetParent().attr('app-name');
  console.log(sessionStorage.appNameNative);

  $.ajax({
   method: 'POST',
   url: 'https://reviaco.os/System/PHP/Data/AppTypeRequest.php',
   data: {
    App_Name: sessionStorage.appName
   },
   success: function(data) {
    $('#platforms_icons').empty();
    for (i = 0; i < data.length; i++) {
     $('#platforms_icons').append('<paper-icon-button id="' + data[i].type + '" class="platform_icon" height="50" width="50" src="../../Media/Logos/' + data[i].type + '.png"></paper-icon-button>');


    }


   }
  });



 });
 $(document).on('click', '.platform_icon', function(event) {
  sessionStorage.type = $(this).attr('id');
  $.ajax({
   method: 'POST',
   url: 'https://reviaco.os/System/PHP/Data/AppInfoRequest.php',
   data: {
    App_Name: sessionStorage.appName
   },
   success: function(data) {
    $('#platforms_icons').empty();
    for (i = 0; i < data.length; i++) {

     sessionStorage.nativeName = data[0].native_name;
     sessionStorage.activityName = data[0].activity_name;
     appendApp(sessionStorage.type, sessionStorage.appName, sessionStorage.nativeName, sessionStorage.activityName);

     $('#showcase').fadeOut();
     $('#activeUsers').fadeOut();
     $('#activeNow_heading').fadeOut();
     $('#appbook-viewport').fadeOut();

    }


   }
  });

 });
 $('#home').longpress(function(e) {
  $('#showcase').fadeOut();
  $('#appbook-viewport').fadeIn();

 }, function(e) {
  devilspie2('Minimize', sessionStorage.type, sessionStorage.appName);
  var minimized_window;
  minimized_window = $('.current_window').detach();
  $('#recent_panel').prepend(minimized_window);
  $('#showcase').fadeIn();
  $('#appbook-viewport').fadeOut();
  $('#recent_panel').animateCss('bounceOut');
  $('#recent_panel').hide();
 });

 $('#menu').longpress(function(e) {

  $(".powerBubble").show();
  $(".bubble").toggleClass("active");
  $(".bubbleback").toggleClass("active");
  $(".power_btn_icon").toggle(1000);
  $(".power_ctrl").toggle(1000);

 }, function(e) {

  devilspie2('Minimize', sessionStorage.type, sessionStorage.appName);
  var minimized_window;
  minimized_window = $('.current_window').detach();
  $('#recent_panel').prepend(minimized_window);
  $('.current_window').show();
  $('.current_window').removeClass('current_window').addClass('minimized_window');
  $('#recent_panel').animateCss('bounceIn');
  $('#recent_panel').show();
  $('#showcase').fadeOut();

 });

 $(document).on('click', '.minimized_window', function(event) {

  devilspie2('Maximize', sessionStorage.type, sessionStorage.appName);
  event.stopPropagation();
  $('#' + event.currentTarget.id + '').removeClass('minimized_window').addClass('current_window');
  var current_window;
  current_window = $('#' + event.currentTarget.id + '').detach();
  $('body').prepend(current_window);
  $('#recent_panel').fadeOut();
  var window_native_id = $('#' + event.currentTarget.id + '').attr('native_id');

 });

 $(document).on('click', '#SplitLeft_btn', function(event) {
  devilspie2('SplitLeft', sessionStorage.type, sessionStorage.appName);
  $(this).offsetParent().offsetParent().parent().parent().removeClass('current_window').addClass('SplitLeft_current_window');
 });
 $(document).on('click', '#SplitRight_btn', function(event) {
  devilspie2('SplitRight', sessionStorage.type, sessionStorage.appName);
  $(this).offsetParent().offsetParent().parent().parent().removeClass('current_window').addClass('SplitRight_current_window');
 });
 $(document).on('click', '#kill_btn', function(event) {
  event.stopPropagation();
  var current_window_type = $(this).offsetParent().offsetParent().offsetParent().attr('type');
  var current_window_id = $(this).offsetParent().offsetParent().offsetParent().attr('id');
  var current_window_activity_name = $(this).offsetParent().offsetParent().offsetParent().attr('activity-name');
  var current_window_native_name = $(this).offsetParent().offsetParent().offsetParent().attr('native-name');

  $(this).offsetParent().offsetParent().offsetParent().fadeOut();
  $(this).offsetParent().offsetParent().offsetParent().remove();
  $('#showcase').fadeIn();
  kill(current_window_type, current_window_native_name);
 });
 $(".bubble-wrap").click(function() {

  $(".bubble").toggleClass("active");
  $(".bubbleback").toggleClass("active");
  $(".power_btn_icon").toggle(1000);
  $(".power_ctrl").toggle(1000);
  $(".powerBubble").hide();

 });

});

$('#all').click(function() {

 $('ul.tasks li').slideDown(300);

});

$('#one').click(function() {
 $('.tasks li:not(.one)').slideUp(300, function() {
  $('.one').slideDown(300);

 });
});

$('#two').click(function() {
 $('.tasks li:not(.two)').slideUp(300, function() {
  $('.two').slideDown(300);

 });
});
$('#three').click(function() {
 $('.tasks li:not(.three)').slideUp(300, function() {
  $('.three').slideDown(300);

 });
});


if (annyang) {

 var assistant_wakeMe = function(assistant_name) {
  if (typeof(Storage) !== "undefined") {

   if (assistant_name == 'brother') {
    sessionStorage.assistant_current = 'Brolu';
   } else {
    sessionStorage.assistant_current = assistant_name;
   }

  }


  speak('Hey ' + sessionStorage.username + ' ! What can I do for you today ?', sessionStorage.assistant_current);

 };

 var assistant_say_its_name = function() {


  speak('My name is' + sessionStorage.assistant_current + '', sessionStorage.assistant_current);

 };


 var AI1A = function() {
  AI1();
 };
 var AI2 = function() {
  exec('xdotool key --clearmodifiers ctrl+l');

  speak('Okey', sessionStorage.assistant_current);

 };
 var AI3 = function(AI3IN) {
  exec('xdotool type --clearmodifiers ' + AI3IN + '');


  speak('Okey', sessionStorage.assistant_current);

 };
 var assistant_execute = function(command20) {
  exec(command20);

  speak('Okey', sessionStorage.assistant_current);

 };
 var AI4 = function() {
  exec('xdotool key --clearmodifiers KP_Enter');

  speak('Okey', sessionStorage.assistant_current);

 };
 var AI5 = function() {
  exec('sudo poweroff');

  speak('Shutting down your PC', sessionStorage.assistant_current);

 };
 var AI6 = function() {
  exec('sudo restart');
  speak('Restarting your PC', sessionStorage.assistant_current);

 };
 var AI7 = function() {
  exec('gnome-screenshot');

  speak('I will capture your screen', sessionStorage.assistant_current);

 };
 var AI8 = function() {
  exec('xdotool key --clearmodifiers alt+Left');

  speak('Okey', sessionStorage.assistant_current);

 };
 var AI9 = function() {
  exec('xdotool key --clearmodifiers F5');

  speak('Okey', sessionStorage.assistant_current);

 };
 var AI10 = function() {
  exec('xdotool key --clearmodifiers alt+Right');

  speak('Okey', sessionStorage.assistant_current);

 };
 var AI11 = function() {
  exec('xdotool key --clearmodifiers Left');

  speak('Okey', sessionStorage.assistant_current);

 };
 var AI12 = function() {
  exec('xdotool key --clearmodifiers Right');
  speak('Okey', sessionStorage.assistant_current);


 };
 var AI13 = function() {
  var CPUCores = navigator.hardwareConcurrency;

  speak('Your CPU has' + CPUCores + 'cores', sessionStorage.assistant_current);

 };
 var AI14 = function() {

  $.ajax({
   url: 'https://api.rss2json.com/v1/api.json',
   method: 'GET',
   dataType: 'json',
   data: {
    rss_url: 'https://news.google.com/news?cf=all&hl=en&ned=us&output=rss'
   }
  }).done(function(response) {
   if (response.status != 'ok') {
    throw response.message;
   }

   for (i = 0; i < response.items.length; i++) {
    var item = response.items[i];
    speak(item.title, sessionStorage.assistant_current);

   }
  });

 };
 var AI15 = function() {
  exec('sudo systemctl suspend');

  speak('I will give it, I promise', sessionStorage.assistant_current);

 };
 var AI16 = function() {
  exec('xdotool mousemove --polar 0 0');

  speak('Okey', sessionStorage.assistant_current);

 };
 var AI17 = function(no_pixels) {

  sessionStorage.PointerX_change = sessionStorage.PointerX * 1 + parseInt(no_pixels);
  exec('xdotool mousemove ' + sessionStorage.PointerY + ' ' + sessionStorage.PointerX_change + '');

  speak('Okey', sessionStorage.assistant_current);

 };
 var AI18 = function() {
  sessionStorage.PointerX_change = sessionStorage.PointerX * 1 - parseInt(no_pixels);
  exec('xdotool mousemove ' + sessionStorage.PointerY + ' ' + sessionStorage.PointerX_change + '');

  speak('Okey', sessionStorage.assistant_current);

 };
 var AI19 = function() {
  sessionStorage.PointerY_change = sessionStorage.PointerY * 1 + parseInt(no_pixels);
  exec('xdotool mousemove ' + sessionStorage.PointerX + ' ' + sessionStorage.PointerY_change + '');

  speak('Okey', sessionStorage.assistant_current);

 };
 var AI20 = function() {
  sessionStorage.PointerY_change = sessionStorage.PointerY * 1 - parseInt(no_pixels);
  exec('xdotool mousemove ' + sessionStorage.PointerX + ' ' + sessionStorage.PointerY_change + '');

  speak('Okey', sessionStorage.assistant_current);

 };
 var AI21 = function() {
  exec('xdotool click 1');

  speak('Okey', sessionStorage.assistant_current);

 };
 var AI22 = function() {
  exec('xdotool click 2');

  speak('Okey', sessionStorage.assistant_current);

 };
 var AI23 = function() {
  exec('xdotool click 3');

  speak('Okey', sessionStorage.assistant_current);

 };
 var AI24 = function() {
  exec('xdotool click 4');

  speak('Okey', sessionStorage.assistant_current);

 };
 var AI25 = function() {
  exec('xdotool click 5');

  speak('Okey', sessionStorage.assistant_current);

 };


 var AIDB = function(Phrase) {
  $.ajax({
   method: 'POST',
   url: 'https://reviaco.tk/Brolucy/PHP/AI_Request.php',
   data: {
    Phrase: Phrase
   },
   success: function(data) {

    var responseID = Math.floor(data.length * Math.random());

    console.log(data[responseID].Response);

    speak(data[responseID].Response, sessionStorage.assistant_current);


   }
  });


 };

 var AI1B = function() {
  AI1();
 };
 var app_launch1 = function(app_name) {

  var type;
  type = $('#' + app_name + '').attr('type');
  sessionStorage.type = type;
  sessionStorage.appName = app_name;
  appendApp(type, app_name);

  speak('Opening' + app_name + '', sessionStorage.assistant_current);

  $('#showcase').fadeOut();
  $('#appbook-viewport').fadeOut();


 };
 var commands = {
  'hey *assistant_name': assistant_wakeMe,
  'what is your name': assistant_say_its_name,
  'focus the URL bar': AI2,
  'type *AI3IN': AI3,
  'go': AI4,
  'shutdown the computer': AI5,
  'restart that computer': AI6,
  'take a screenshot': AI7,
  'go back': AI8,
  'refresh': AI9,
  'go forward': AI10,
  'move left': AI11,
  'move right': AI12,
  'open *app_name': app_launch1,
  'How many cores does my computer CPU have': AI13,
  'tell me the latest news': AI14,
  'please give my computer a strong drink': AI15,
  'move the mouse pointer to the middle of the screen': AI16,
  'move the cursor *no_pixels pixels down': AI17,
  'move the cursor *no_pixels pixels up': AI18,
  'move the cursor *no_pixels pixels right': AI19,
  'move the cursor *no_pixels pixels left': AI20,
  'left click': AI21,
  'middle click': AI22,
  'right click': AI23,
  'scroll up': AI24,
  'scroll down': AI25,
  'execute *command20': assistant_execute,
  '*Phrase': AIDB
 };
 annyang.debug();


 annyang.addCommands(commands);


 annyang.setLanguage('en');


 annyang.start();
} else {

}