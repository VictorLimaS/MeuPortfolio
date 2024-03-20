// LETRAS SUMINDO E APARECENDO DO MAIN

const span = document.getElementById("apagar");
const textos = [
  "Desenvolvedor Web",
  "Desenvolvedor Ui",
  "Desenvolvedor de Software",
];

let fraseExibida = 0;
let manterFrase = 0;

function atualizarTexto() {
  const fraseAtual = textos[fraseExibida];
  const fraseTexto = fraseAtual.slice(0, manterFrase);

  span.textContent = fraseTexto;

  if (manterFrase < fraseAtual.length) {
    manterFrase++;
    setTimeout(atualizarTexto, 100);
  } else {
    setTimeout(deletarTexto, 1000);
  }
}

function deletarTexto() {
  if (manterFrase >= 0) {
    const fraseAtual = textos[fraseExibida];
    const fraseTexto = fraseAtual.slice(0, manterFrase);

    span.textContent = fraseTexto;

    manterFrase--;
    setTimeout(deletarTexto, 50);
  } else {
    fraseExibida = (fraseExibida + 1) % textos.length;
    manterFrase = 0;
    setTimeout(atualizarTexto, 1000);
  }
}

atualizarTexto();

// SCROLL LENTO DA NAV

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelectorAll("header nav ul li a");

  nav.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

// SAUDAÇÃO DO INICIO

document.addEventListener("DOMContentLoaded", function () {
  const agora = new Date();
  const hora = agora.getHours();

  let mensagem;

  if (hora >= 6 && hora < 12) {
    mensagem = "🌥️ Bom Dia,";
  } else if (hora >= 12 && hora < 18) {
    mensagem = "☀️ Boa Tarde,";
  } else if (hora >= 18 && hora < 24) {
    mensagem = "🌙 Boa Noite,";
  } else {
    mensagem = "🌕 Boa Madrugada,";
  }

  document.getElementById("horario").textContent = mensagem;
});

// EFEITO DE OPACIDADE NAS SECTION
// prettier-ignore
const scrolls = [
    {scrollEl: 277, transitionMs: 0.5, transformY: '180'},
    {scrollEl: 278, transitionMs: 0.8, transformY: '290'},
    {scrollEl: 600, transitionMs: 1, transformY: '450'},
    {scrollEl: 1000, transitionMs: 1, transformY: '680'},
    {scrollEl: 1300, transitionMs: 0.5, transformY: '475'},
    {scrollEl: 1300, transitionMs: 1, transformY: '475'},
    {scrollEl: 1300, transitionMs: 1.5, transformY: '475'},
    {scrollEl: 1300, transitionMs: 1.5, transformY: '475'},
    {scrollEl: 1600, transitionMs: 1.5, transformY: '475'},
    {scrollEl: 1900, transitionMs: 2, transformY: '220'},
    {scrollEl: 1982, transitionMs: 0.01, transformY: '450'},
]

const main = document.querySelector(".mainTeste");

const box = document.querySelectorAll(".box");

let scrollCurrent = [];
const teste = [
  "ef-1",
  "ef-2",
  "ef-3",
  "ef-4",
  "ef-5",
  "ef-6",
  "ef-7",
  "ef-8",
  "ef-9",
  "ef-10",
];
teste.forEach((el, i) => {
  scrollCurrent.push(scrolls[i].scrollEl);
  const elemento = document.getElementById(el);
  elemento.style.transform = `translateY(${scrolls[i].transformY}px)`;
  elemento.style.transition = `transform ${scrolls[i].transitionMs}s`;
});

let num = 0;
function checkVisibility() {
  const scrollDistance = main.scrollTop;

  scrollCurrent.forEach((scroll, index) => {
    // Verifica se o scroll atingiu ou passou o valor da distância do elemento atual
    if (scrollDistance >= scroll - 1) {
      // console.log(`Scroll atingiu ${scroll}`);
      // console.log(num)
      // Remove o elemento atual de scrollCurrent
      scrollCurrent.splice(index, 1);

      // Aplica a classe .visible aos elementos correspondentes
      box[num].classList.add("visible");
      num++;
    }
  });
}

main.addEventListener("scroll", checkVisibility);
main.addEventListener("resize", checkVisibility);
main.addEventListener("DOMContentLoaded", checkVisibility);

// Verificar a visibilidade na carga inicial da página
window.addEventListener("DOMContentLoaded", () => {
  checkVisibility();
});
