function changeLanguage(dictionary, language) {
  return document.querySelectorAll('[data-lang]').forEach(function(el) {
    var attr = el.dataset.lang;
    if (dictionary[attr] && dictionary[attr][language]) {
      el.innerHTML = dictionary[attr][language];
    }
  });
}

function updateLanguage(dictionary) {
  return function setLanguage(language) {
    return changeLanguage(dictionary, language);
  }
}

