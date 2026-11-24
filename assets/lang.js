// MovilizarMe: recuerda el idioma elegido con el control ES | EN.
document.addEventListener("click", function (e) {
  var a = e.target.closest ? e.target.closest(".lang-switch a") : null;
  if (!a) return;
  var lang = a.getAttribute("hreflang");
  if (lang) {
    try { localStorage.setItem("mm-lang", lang); } catch (err) {}
  }
});

// Popups de confianza del pie (Sitio seguro / Google Safe Browsing).
document.addEventListener("click", function (e) {
  var b = e.target.closest ? e.target.closest("[data-dlg]") : null;
  if (b) {
    var d = document.getElementById(b.getAttribute("data-dlg"));
    if (d && d.showModal) d.showModal();
    return;
  }
  var c = e.target.closest ? e.target.closest(".dlg-close") : null;
  if (c) {
    var dlg = c.closest("dialog");
    if (dlg) dlg.close();
    return;
  }
  if (e.target.tagName === "DIALOG") e.target.close();
});
