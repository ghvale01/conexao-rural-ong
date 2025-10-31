// router.js
export function loadPage(page) {
  const content = document.getElementById("content");
  if (!content) return;

  fetch(`pages/${page}.html`)
    .then(res => res.ok ? res.text() : "<h2>Página não encontrada.</h2>")
    .then(html => {
      content.innerHTML = html;
      window.scrollTo(0, 0);
    })
    .catch(() => content.innerHTML = "<h2>Erro ao carregar página.</h2>");
}
