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

// ME CONHECER

document.addEventListener('DOMContentLoaded', function () {
    const conhecer = document.querySelectorAll('.open_conhecer');

    conhecer.forEach(function (card) {
        card.addEventListener('click', function () {
            document.querySelector('.conhecer').style.display = 'flex';
        });
    });

    document.querySelector('.fechar_conhecer').addEventListener('click', function () {
        document.querySelector('.conhecer').style.display = 'none';
    });
});

// BAIXAR CURRICULO

document.addEventListener('DOMContentLoaded', function () {
    const btnDownload = document.querySelector('.download');

    btnDownload.addEventListener('click', function () {
        const link = document.createElement('a');
        link.setAttribute('href', '/src/pdf/curriculo 2024.pdf');
        link.setAttribute('download', '');
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});

// SCROLL LENTO DA NAV

document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelectorAll("ul li a");

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


document.addEventListener('DOMContentLoaded', function () {
    const linkContato = document.querySelector('.button_main a');
    const secaoContato = document.getElementById('contato');

    linkContato.addEventListener('click', function (event) {
        event.preventDefault();

        secaoContato.scrollIntoView({ behavior: 'smooth' });
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

// LINK DA NAV BAR

const iconesLink = document.querySelectorAll('.social_media .icon');

iconesLink.forEach(icon => {
    icon.addEventListener('click', () => {
        let link;
        if (icon.id === 'whats') {
            link = 'https://wa.me/5513991822130';
        } else if (icon.id === 'linkedin') {
            link = 'https://www.linkedin.com/in/victor-lima1999/';
        } else {
            link = 'https://github.com/VictorLimaS';
        }

        if (link) {
            window.open(link, '_blank');
        }
    });
});

// LINK DO FOOTER
document.addEventListener('DOMContentLoaded', function () {
    const iconesLinkFooter = document.querySelectorAll('.social ion-icon');

    iconesLinkFooter.forEach(icon => {
        icon.addEventListener('click', () => {
            let link;
            if (icon.classList.contains('whats')) {
                link = 'https://wa.me/5513991822130';
            } else if (icon.classList.contains('instagram')) {
                link = 'https://www.instagram.com/victiinnn/';
            } else if (icon.classList.contains('discord')) {
                link = 'https://discord.com/victiinnn';
            }

            if (link) {
                window.open(link, '_blank');
            }
        });
    });
});

// MENU HAMBUGUER 

const menuBurguer = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav_menu');
let clicado = false;

menuBurguer.addEventListener('click', function () {
    this.classList.toggle('open');
});

// APARECER O NAV

menuBurguer.addEventListener('click', function () {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    menuBurguer.classList.add('active');
});

navMenu.addEventListener('click', function () {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    clicado = true
    if (clicado) {
        menuBurguer.classList.remove('active');
        menuBurguer.classList.toggle('open');
    }
});

// MUDAR FOTO DO CONHECER 

document.addEventListener('DOMContentLoaded', function () {
    const images = [
        '/src/img/foto2.jpg',
        '/src/img/foto3.jpg',
        '/src/img/foto1.jpg',
        '/src/img/foto4.jpg',
        '/src/img/foto5.jpg'
    ];

    let index = 0;
    const imgElement = document.querySelector('.conhecer .conhecer_content .imgs .content');

    setInterval(() => {
        imgElement.classList.add('fade');
        setTimeout(() => {
            imgElement.style.backgroundImage = `url(${images[index]})`;
            imgElement.classList.remove('fade');
            index = (index + 1) % images.length;
        }, 500);
    }, 3000);
});
