$(document).ready(function() {

  // on document load - version selector should show current version
  $("#version-selector").val(window.location.pathname.replace(/\//g,''));

  $("h1, h2, h3").click( function() {
    event.preventDefault();
    window.location.hash = "#" + $(this).attr('id');
  });

  $("#version-selector").change(function() {
    var value = $(this).val();
    var cannonical_url = "http://docs.pupil-labs.com/";
    var hash = window.location.hash;
    window.location.href = cannonical_url+value+hash;
  });

});
