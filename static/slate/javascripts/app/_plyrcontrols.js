//  document.addEventListener("DOMContentLoaded", function(event) {
 
// 	function hasWebP() {
// 	    var rv = $.Deferred(), img = new Image();
// 	    var img = new Image();
// 	    img.onload = function() { rv.resolve(); };
// 	    img.onerror = function() { rv.reject(); };
// 	    img.src = "http://www.gstatic.com/webp/gallery/1.webp";
// 	    return rv.promise();
// 	}

// 	hasWebP().then(function() {
//     console.log("Browser support Webp");
// 	  var video = document.getElementsByTagName('video')

// 	  for (var i=0; i < video.length; i++) {
// 	  	var poster_url = video[i].getAttribute('poster')
// 	  	// console.log(poster_url);

// 	  	var webp = poster_url.substr(0, poster_url.lastIndexOf(".")) + ".webp";
// 			var jpg = poster_url.substr(0, poster_url.lastIndexOf(".")) + ".jpg";

// 			video[i].setAttribute('poster', webp)
// 		}

// 	}, function() {

// 			video[i].setAttribute('poster', jpg)
// 		   console.log("Browser support Webp");

// 	});
// });


// document.addEventListener("DOMContentLoaded", function(event) {
 
// 	Modernizr.on('webp', function (result) {

// 	  var video = document.getElementsByTagName('video')

// 	  for (var i=0; i < video.length; i++) {
// 	  	var poster_url = video[i].getAttribute('poster')
// 			var webp = poster_url.substr(0, poster_url.lastIndexOf(".")) + ".webp";
// 			var jpg = poster_url.substr(0, poster_url.lastIndexOf(".")) + ".jpg";
    
// 	    if (result) {
// 					video[i].setAttribute('poster', webp)
// 			    console.log("Browser support Webp");
// 	    } 
// 	    else {
// 					video[i].setAttribute('poster', jpg)
// 				  console.log("Browser support Webp");
// 	    }
//    }
// 	});
// });

document.addEventListener("DOMContentLoaded", function(event) {

	Modernizr.on('webp', function (result) {

	  var video_tag = document.getElementsByTagName('video')

	  for (var i=0; i < video_tag.length; i++) {

      var data_Webp = video_tag[i].getAttribute('data-webp');
      var data_jpg = video_tag[i].getAttribute('data-jpg');
      console.log(data_jpg)

	    if (result) {
	      video_tag[i].setAttribute('poster', data_webp);
	      console.log('webp is supported');
	    }
	    else {
	      video_tag[i].setAttribute('poster', data_jpg);
	    }
	

	});

});




(function() { 
  // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
  // e.g. just plyr.setup(); and leave it at that if you have no need for events
  var instances = plyr.setup({
    // svg controls
    controls: ["play-large", "fullscreen"]
  });

})();

