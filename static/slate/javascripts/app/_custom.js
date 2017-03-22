$(document).ready(function() {

  // on document load - version selector should show current version
  $("#version-selector").val(window.location.pathname.replace(/\//g,''));

  // $("h1, h2, h3").click( function() {
  //   event.preventDefault();
  //   // replaceState(sateObj, title, url)
  //   history.replaceState(null, null, "#" + $(this).attr("id"));
  // });

  $(".anchor").click( function() {
  	event.preventDefault();
  	history.replaceState(null, null, $(this).attr("href"));
  	$(window).scrollTop($("div[data-unique='"+$(this).attr("name")+"']").offset().top - 49);
  })

  $("#version-selector").change(function() {
    var value = $(this).val();
    var cannonical_url = "http://docs.pupil-labs.com/";
    var hash = window.location.hash;
    window.location.href = cannonical_url+value+hash;
  });

});
