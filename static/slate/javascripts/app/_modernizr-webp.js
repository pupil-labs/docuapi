document.addEventListener("DOMContentLoaded", function(event) {
  'use-strict';
  Modernizr.on('webp', function (result) {
    // Get all the video tags in the DOM
    var video = document.getElementsByTagName('video');
    // Iterate through the list and get he poster attribute
    for (var i=0; i < video.length; i++) {
      var poster_url = video[i].getAttribute('poster')
      var jpg = poster_url.substr(0, poster_url.lastIndexOf(".")) + ".jpg";

      if (result) {
          console.log("This browser supports Webp");
      }
      else {
          // Set the attribute to file extension to jpg
          video[i].setAttribute('poster', jpg)
          console.log("This browser doesn't support Webp");
      }
   }
  })
});