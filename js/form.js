// js/form.js
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('cadForm');
  if (!form) return;

  const msg = document.getElementById('formMsg');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // validação nativa primeiro
    if (!form.checkValidity()) {
      form.reportValidity();
      if (msg) msg.textContent = "Corrija os campos antes de enviar.";
      return;
    }

    // checar CPF simples (apenas formato)
    const cpf = document.getElementById('cpf').value;
    if (cpf && !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
      if (msg) msg.textContent = "Formato de CPF inválido.";
      return;
    }

    // simular envio
    if (msg) msg.textContent = "Enviando... (simulado)";
    // aqui você faria fetch() para enviar ao backend
    setTimeout(() => {
      if (msg) msg.textContent = "Cadastro enviado com sucesso! Obrigado.";
      form.reset();
    }, 800);
  });
});
