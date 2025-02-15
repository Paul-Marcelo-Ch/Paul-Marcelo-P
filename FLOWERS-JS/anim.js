// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Eres lo primero en lo que pienso en las mañanas", time: 36 },
  { text: "Eres con quien quiero despertar entre las sabanas", time: 40 },
  { text: "Eres mi deseo once y once", time: 44 },
  { text: "Eres con quien quiero estar febrero catorce", time: 49 },
  { text: "Túuuu", time: 55 },
  { text: "Lo intentamos si tu quieres", time: 70 },
  { text: "Puedo ser yo si te conviene", time: 77 },
  { text: "Yo ya decidí", time: 83 },
  { text: "¿Y tu?", time: 87 },
  { text: "Lo intentamos si tu quieres", time: 91 },
  { text: "Puedo ser yo si te conviene", time: 96 },
  { text: "Yo ya decidi", time: 102 },
  { text: "¿Y tu?", time: 106 },
  { text: "Eres mis canciones preferidas", time: 130 },
  { text: "Tienes que ser tú, solo tú", time: 134 },
  { text: "Eres lo mejor que podría pasarle a mi vida", time: 138 },
  { text: "Perfecta melodía", time: 144 },
  { text: "Tuuuuu", time: 148 },
  { text: "Tuuuuuu", time: 158 },
  { text: "Lo intentamos si tu quieres", time: 165 },
  { text: "Puedo ser yo si te conviene", time: 170 },
  { text: "Yo ya decidí", time: 175 },
  { text: "¿Y tú?", time: 180 },
  { text: "Lo intentamos si tu quieres", time: 184 },
  { text: "Puedo ser yo si te conviene", time: 188 },
  { text: "Yo ya decidí", time: 193 },
  { text: "¿Y tú?.", time: 198 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);