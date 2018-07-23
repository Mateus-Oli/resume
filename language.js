function changeLanguage(dictionary) {
  var language = navigator.language.slice(0, 2);

  return document.querySelectorAll('[data-lang]').forEach(function (el) {
    var attr = el.dataset.lang;
    if (dictionary[attr] && dictionary[attr][language]) {
      el.innerHTML = dictionary[attr][language];
    }
  });
}
