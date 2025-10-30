// js/masks.js
(function(){
  function onlyDigits(v){ return v.replace(/\D/g,''); }
  function cpfMask(v){
    v = onlyDigits(v).slice(0,11);
    v = v.replace(/(\d{3})(\d)/,'$1.$2');
    v = v.replace(/(\d{3})(\d)/,'$1.$2');
    v = v.replace(/(\d{3})(\d{1,2})$/,'$1-$2');
    return v;
  }
  function phoneMask(v){
    v = onlyDigits(v).slice(0,11);
    v = v.replace(/^(\d{2})(\d)/,'($1) $2');
    v = v.replace(/(\d{5})(\d{4})$/,'$1-$2');
    return v;
  }
  function cepMask(v){
    v = onlyDigits(v).slice(0,8);
    v = v.replace(/(\d{5})(\d)/,'$1-$2');
    return v;
  }

  document.addEventListener('DOMContentLoaded', function(){
    const cpf = document.getElementById('cpf');
    const tel = document.getElementById('telefone');
    const cep = document.getElementById('cep');

    if(cpf){
      cpf.addEventListener('input', e => {
        const old = cpf.value;
        cpf.value = cpfMask(cpf.value);
        if(old !== cpf.value) cpf.setSelectionRange(cpf.value.length, cpf.value.length);
      });
    }
    if(tel){
      tel.addEventListener('input', e => {
        const old = tel.value;
        tel.value = phoneMask(tel.value);
        if(old !== tel.value) tel.setSelectionRange(tel.value.length, tel.value.length);
      });
    }
    if(cep){
      cep.addEventListener('input', e => {
        const old = cep.value;
        cep.value = cepMask(cep.value);
        if(old !== cep.value) cep.setSelectionRange(cep.value.length, cep.value.length);
      });
    }
  });
})();
