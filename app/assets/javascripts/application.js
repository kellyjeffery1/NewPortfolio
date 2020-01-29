// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

$(document).ready(function(){

  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  // pin the intro
  var pinIntroScene = new ScrollMagic.Scene({
    triggerElement: '#banner',
    triggerHook: 0,
    duration: '95%'
  })
  .setPin('#banner')
  .addTo(controller);

  // pin again
  var pinIntroScene2 = new ScrollMagic.Scene({
    triggerElement: '#project01',
    triggerHook: 0.4
  })
  .setPin('#banner', {pushFollowers: false})
  .addTo(controller);

  // loop through each .project element
  $('.project').each(function(){

    // build a scene
    var ourScene = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      triggerHook: 0.9
    })
    .setClassToggle(this, 'fade-in') // add class to project01
    .addTo(controller);

  });

});


// anime.timeline({loop: true})
//   .add({
//     targets: '.ml4 .letters-1',
//     opacity: ml4.opacityIn,
//     scale: ml4.scaleIn,
//     duration: ml4.durationIn
//   }).add({
//     targets: '.ml4 .letters-1',
//     opacity: 0,
//     scale: ml4.scaleOut,
//     duration: ml4.durationOut,
//     easing: "easeInExpo",
//     delay: ml4.delay
//   }).add({
//     targets: '.ml4 .letters-2',
//     opacity: ml4.opacityIn,
//     scale: ml4.scaleIn,
//     duration: ml4.durationIn
//   }).add({
//     targets: '.ml4 .letters-2',
//     opacity: 0,
//     scale: ml4.scaleOut,
//     duration: ml4.durationOut,
//     easing: "easeInExpo",
//     delay: ml4.delay
//   }).add({
//     targets: '.ml4 .letters-3',
//     opacity: ml4.opacityIn,
//     scale: ml4.scaleIn,
//     duration: ml4.durationIn
//   }).add({
//     targets: '.ml4 .letters-3',
//     opacity: 0,
//     scale: ml4.scaleOut,
//     duration: ml4.durationOut,
//     easing: "easeInExpo",
//     delay: ml4.delay
//   }).add({
//     targets: '.ml4',
//     opacity: 0,
//     duration: 500,
//     delay: 500
//   });

// $(document).ready(function() {
// $(".down").click(function() {
//      $('html, body').animate({
//          scrollTop: $(".up").offset().top
//      }, 1500);
//  });
// });

// $(document).ready(function() {
// $(".up").click(function() {
//      $('html, body').animate({
//          scrollTop: $(".down").offset().top
//      }, 1000);
//  });
// });
// // -------------------------------------------
// $(document).ready(function() {
// $(".down2").click(function() {
//      $('html, body').animate({
//          scrollTop: $(".up2").offset().top
//      }, 1500);
//  });
// });

// $(document).ready(function() {
// $(".up2").click(function() {
//      $('html, body').animate({
//          scrollTop: $(".down2").offset().top
//      }, 1000);
//  });
// });
// //------------------------------------------------------------
// $(document).ready(function(){
//   $(window).scroll(function () {
//       if ($(this).scrollTop() > 50) {
//         $('#back-to-top').fadeIn();
//       } else {
//         $('#back-to-top').fadeOut();
//       }
//     });
//     // scroll body to 0px on click
//     $('#back-to-top').click(function () {
//       $('body,html').animate({
//         scrollTop: 0
//       }, 400);
//       return false;
//     });
// });

