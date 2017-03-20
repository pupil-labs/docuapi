$(document).ready(function() {

  $("h1, h2, h3").click( function() {
    event.preventDefault();
    window.location.hash = "#" + $(this).attr('id');
  });

  $("select").change(function() {
    var value = $(this).val();
    var cannonical_url = "http://docs.pupil-labs.com/";
    window.location.href = cannonical_url+value;
  });

});
