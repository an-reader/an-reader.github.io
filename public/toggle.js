function toggle(to) {
  const lang = document.getElementById("lang-toggle-label").innerHTML

  if (lang === 'EN' || to === "VI") {
    _toggle('vi', 'vi-active')
    _toggle('en-active', 'en')
    const el = document.getElementById("lang-toggle-label")
    el.innerHTML = 'VI'
  } else if (lang === 'VI' || to === "EN") {
    _toggle('vi-active', 'vi')
    _toggle('en', 'en-active')
    const el = document.getElementById("lang-toggle-label")
    el.innerHTML = 'EN'
  }
}

function _toggle(a, b) {
  const els = document.getElementsByClassName(a)
  for (var i = els.length - 1; i > -1; i--) {
    var el = els[i];
    el.classList.remove(a);
    el.classList.add(b);
  }
}
