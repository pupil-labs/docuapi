(function (global) {
  'use strict';
  $( document ).ready(function() {


    $("h1, h2, h3").click( function() {
      event.preventDefault();
      console.log($(this).attr('id'));
      window.location.hash = "#" + $(this).attr('id');
    });
  });

})(window);