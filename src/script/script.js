// LETRAS SUMINDO E APARECENDO DO MAIN

const span = document.getElementById('apagar');
const textos = [
    'Desenvolvedor Web',
    'Desenvolvedor Ui',
    'Desenvolvedor de Software'
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

    nav.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
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

const box = document.querySelector('.box');
const scrollTrigger = 50; 

console.log(box)

function checkVisibility() {
    const scrollDistance = window.scrollY;
    console.log(scrollDistance)

    if (scrollDistance > scrollTrigger) {
        box.classList.add('visible');
    } else {
        box.classList.remove('visible');
    }
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('resize', checkVisibility);
window.addEventListener('DOMContentLoaded', checkVisibility);

// Verificar a visibilidade na carga inicial da página
window.addEventListener('DOMContentLoaded', () => {
    checkVisibility();
});
