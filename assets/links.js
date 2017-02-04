(function () {
  if (!$) return;

  var links = $('a');
  for (var i = links.length - 1; i >= 0; i--) {
    var href = $(links[i]).attr('href');
    if (
      href.indexOf('http') > -1 &&
      href.indexOf('apronmafia') < 0
    ) {
      $(links[i]).attr('target', '_blank');
    }
  }
})();
