// main.js
import { loadPage } from "./router.js";
import { showToast } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  // Inicia SPA
  loadPage("home");

  // Links SPA
  document.querySelectorAll("a[data-link]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.getAttribute("data-link");
      loadPage(page);
      document.title = `Meu Site | ${page.charAt(0).toUpperCase() + page.slice(1)}`;
    });
  });

  // Exemplo de toast após navegação
  document.addEventListener("spa:navigate", (e) => {
    showToast(`Página "${e.detail.page}" carregada.`);
  });
});
