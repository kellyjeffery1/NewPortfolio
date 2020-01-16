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
var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

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

$(document).ready(function(){

  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  // pin the intro
  var pinIntroScene = new ScrollMagic.Scene({
    triggerElement: '#intro',
    triggerHook: 0,
    duration: '90%'
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
