// MovilizarMe: recuerda el idioma elegido con el control ES | EN.
document.addEventListener("click", function (e) {
  var a = e.target.closest ? e.target.closest(".lang-switch a") : null;
  if (!a) return;
  var lang = a.getAttribute("hreflang");
  if (lang) {
    try { localStorage.setItem("mm-lang", lang); } catch (err) {}
  }
});
