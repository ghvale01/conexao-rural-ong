# 🌍 Plataforma ONG

## 🧩 Contexto do Projeto

O terceiro setor brasileiro é responsável por movimentar mais de **R$ 15 bilhões** anuais e empregar cerca de **3 milhões de pessoas**. No entanto, apenas **30% das ONGs** possuem presença digital adequada.  
Este projeto busca oferecer uma **solução web completa e responsiva** para que Organizações Não Governamentais possam gerenciar suas atividades, divulgar projetos, captar recursos e engajar voluntários de forma eficiente e moderna.

---

## 🎯 Objetivo Geral

Desenvolver uma **plataforma web profissional e acessível** para ONGs, aplicando de forma integrada os conhecimentos de **HTML5, CSS3 e JavaScript** — incluindo responsividade, interatividade, acessibilidade e boas práticas de versionamento.

---

## 🧱 Estrutura do Projeto

O projeto foi desenvolvido com base em boas práticas de front-end e está dividido da seguinte forma:

plataforma-ong/
│
├── index.html # Página inicial - informações sobre a ONG e contato
├── projetos.html # Página com projetos sociais e voluntariado
├── cadastro.html # Página de cadastro de voluntários/doadores
│
├── css/
│ └── style.css # Arquivo principal de estilos (design system, layout e responsividade)
│
├── js/
│ └── script.js # Arquivo com funcionalidades JS (máscaras e validações)
│
└── img/
├── logo.png
├── banner.jpg
└── projetos/ # Imagens dos projetos sociais


---

## 🧠 Tecnologias Utilizadas

| Categoria | Tecnologias |
|------------|--------------|
| Estrutura | HTML5 |
| Estilos | CSS3 (Design System, Grid, Flexbox, Responsividade) |
| Interatividade | JavaScript Puro (validação e máscaras) |
| Versionamento | Git e GitHub |
| Acessibilidade | Diretrizes WCAG 2.1 Nível AA |
| Desempenho | Imagens otimizadas, lazy loading e minificação |

---

## 📄 Páginas e Funcionalidades

### 🏠 Página Inicial (`index.html`)
- Apresenta missão, visão e valores da ONG.
- Exibe histórico e conquistas.
- Mostra informações de contato e links para redes sociais.
- Layout responsivo e adaptável a todos os dispositivos.

### 💡 Projetos (`projetos.html`)
- Exibe os principais projetos sociais da ONG.
- Possui galeria de imagens e descrições.
- Seção de **voluntariado** e **como doar**.
- Estrutura organizada em **cards responsivos**.

### 📝 Cadastro (`cadastro.html`)
- Formulário completo de inscrição para voluntários e doadores.
- Campos: Nome Completo, E-mail, CPF, Telefone, Data de Nascimento, Endereço, CEP, Cidade, Estado.
- **Validação nativa HTML5** e máscaras automáticas via JavaScript.
- Feedback visual em campos válidos/inválidos.

---

## 🎨 Design System (CSS)

- **Paleta de Cores:**
  - Primária: `#1b6ca8`
  - Secundária: `#0b9d58`
  - Fundo: `#ffffff`
  - Texto: `#222`
  - Neutras: `#666`, `#f7f7f8`

- **Tipografia Hierárquica:**
  - Títulos: `2.5rem`, `2rem`, `1.5rem`
  - Corpo de texto: `1rem`
  - Pequeno: `0.875rem`

- **Sistema de Espaçamento Modular:**
  - 8px, 16px, 24px, 32px, 48px, 64px

- **Layout Responsivo:**
  - Baseado em **CSS Grid (12 colunas)** e **Flexbox**
  - 5 breakpoints definidos (320px, 480px, 768px, 1024px, 1280px)

---

## ⚙️ Funcionalidades em JavaScript

- Máscaras automáticas para CPF, telefone e CEP.  
- Validação de campos obrigatórios.  
- Mensagens de erro e sucesso (feedback visual).  

**Exemplo de pseudocódigo:**
```js
// Máscara de CPF
function maskCPF(input) {
  input.value = input.value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}
