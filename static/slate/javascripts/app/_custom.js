$(document).ready(function() {

  // on document load - version selector should show current version
  $("#version-selector").val(window.location.pathname.replace(/\//g,''));

  $('.github-link').each(function() {
      //$(this).append("<a href='"+$(this).data('github')+"' rel='noopener'>Edit `"+$(this).data('file')+"` on Github</a>");
      //$(this).insertAfter($(this).nextAll(':header').filter(':first'));

      // remove .filter line
      // update the attr line with below
      // we already know the hash of the anchor from tocify
      // and we assume that this kebab case representation matches
      // github's anchor link representation (e.g. Section name == section-name)

      // $(this).data('github').concat($(this).data('hash')
      $(this).nextAll(':header')
        .filter(':first')
        .find('.github-edit')
        .attr('href', $(this).data('github'))
        .append("<i class='material-icons'>mode_edit</i>");
  });

var github_links = document.getElementByClassName('github_links')

for (var i = 0; i < github_links.length; i++) {

    var source_code_link = $(github_links).data('github');
    var headers = $(github_links[i]).nextUntil($(github_links[i+1]),'h1,h2,h3');

    console.log("section number: "+i+"\nnum headers: "+headers.length+"\nheaders: "+headers);

    $(headers).each(function(){
      var item = $(this).find(".github-edit")
      var url = source_code_link.concat($(item).data('hash'));

      console.log("url: "+url);
      
      $(item).attr('href',url);
    });
}



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
