import { showToast } from "./ui.js";

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('cadForm');
  if (!form) return;

  const msg = document.getElementById('formMsg');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      if (msg) msg.textContent = "Corrija os campos antes de enviar.";
      showToast("Campos obrigatórios não preenchidos ⚠️");
      return;
    }

    const cpf = document.getElementById('cpf').value;
    if (cpf && !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
      if (msg) msg.textContent = "Formato de CPF inválido.";
      showToast("CPF inválido ❌");
      return;
    }

    if (msg) msg.textContent = "Enviando... (simulado)";
    setTimeout(() => {
      if (msg) msg.textContent = "Cadastro enviado com sucesso! ✅";
      showToast("Cadastro realizado com sucesso!");
      form.reset();
    }, 800);
  });
});
