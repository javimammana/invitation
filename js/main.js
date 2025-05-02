
const msFecha = fecha.getTime();

const parrafoDias = document.querySelector("#dias");
const parrafoHoras = document.querySelector("#horas");
const parrafoMinutos = document.querySelector("#minutos");
const parrafoSegundos = document.querySelector("#segundos");
const spanFecha = document.querySelector("#fecha");
const cuentaAtras = document.querySelector("#cuentaAtras");
const grupoDias = document.querySelector("#grupoDias");
const grupoHoras = document.querySelector("#grupoHoras");
const grupoMinutos = document.querySelector("#grupoMinutos");

const spanCumple = document.querySelector("#cumple");

spanCumple.innerHTML = cumple.toLocaleDateString();

spanFecha.innerHTML = fecha.toLocaleDateString();

let intervalo = setInterval(() => {
    const hoy = new Date().getTime();
    const distancia = msFecha - hoy;

    if (distancia < 0) {
        clearInterval (intervalo)
        cuentaAtras.innerHTML = "<p class='grande'>Es la fiesta!!</p>"
    }

    const msPorDia = 1000 * 60 * 60 * 24;
    const msPorHora = 1000 * 60 * 60;
    const msPorMinuto = 1000 * 60;
    const msPorSegundo = 1000;

    const dias = Math.floor(distancia / msPorDia);
    const horas = Math.floor((distancia % msPorDia) / msPorHora);
    const minutos = Math.floor((distancia % msPorHora) / msPorMinuto);
    const segundos = Math.floor((distancia % msPorMinuto) / msPorSegundo);

    parrafoDias.innerHTML = dias < 1 ? grupoDias.classList.add("d-none") : dias;
    parrafoHoras.innerHTML = horas < 1 ? dias < 1 ? grupoHoras.classList.add("d-none") : "00" : horas < 10 ? "0" + horas : horas;
    parrafoMinutos.innerHTML = minutos < 1 ? horas < 1 ? grupoMinutos.classList.add("d-none") : "00" : minutos < 10 ? "0" + minutos : minutos;
    parrafoSegundos.innerHTML = segundos < 10 ? "0" + segundos : segundos;

}, 1000);

const mapa = document.querySelector("#ubicacion");
mapa.innerHTML = `<iframe class="col-10 rounded-4 my-5" src="${direccionLink}" width="600" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

const esMovil = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

const calendario = document.querySelector("#calendario");

if (/Android/i.test(navigator.userAgent)) {
    calendario.innerHTML = `<a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Fiesta+de+15+Años&dates=20250713T000000Z/20250713T040000Z&details=¡Te+esperamos+en+la+fiesta+de+15+años!&location=Salón+de+Eventos" target="_blank">Agendar!</a>`
} else {
    calendario.innerHTML = `<a href="../calendar/evento-15años.ics" download="Fiesta15Años.ics">Agendar!</a>`
}

function abrirMapa() {

    if (esMovil) {
        let appUrl;

        if (/Android/i.test(navigator.userAgent)) {
            appUrl = `geo:${coordenadas}?q=${coordenadas}`;
        } else {
            appUrl = `comgooglemaps://?q=${coordenadas}`;
        }

        window.location.href = appUrl;

        setTimeout(() => {
            window.open(direccionLink, '_blank');
        }, 1000);
    } else {
        // Escritorio: abrir en nueva pestaña
        window.open(direccionLink, '_blank');
    }
}

    const confAsistencia = document.querySelector("#confirmarAsistencia");
    confAsistencia.innerHTML = `<button class="mb-3 btnn py-2 px-4"><a href="${formAsistencia}" target="_blank">Confirmar Asistencia</a></button>`

    const recCancion = document.querySelector("#recomendarCancion");
    recCancion.innerHTML = `<button class="mb-3 btnn py-2 px-4"><a href="${formCanciones}" target="_blank">Recomendar Canción</a></button>`