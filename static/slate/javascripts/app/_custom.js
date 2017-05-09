$(document).ready(function() {

  // on document load - version selector should show current version
  $("#version-selector").val(window.location.pathname.replace(/\//g,''));

  $('.github-link').each(function() {
      //$(this).append("<a href='"+$(this).data('github')+"' rel='noopener'>Edit `"+$(this).data('file')+"` on Github</a>");
      //$(this).insertAfter($(this).nextAll(':header').filter(':first'));
      $(this).nextAll(':header')
        .filter(':first')
        .find('.github-edit')
        .attr('href', $(this).data('github'))
        .append("<i class='material-icons'>mode_edit</i>");
  });

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

  $("h1").each(function() {
    $(this).append("<img src='/images/material-icons/edit_white_24px.svg' class='edit-link' >");
  });

});
