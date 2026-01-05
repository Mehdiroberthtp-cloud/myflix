const movies = [
  {
    title: "Film Démo",
    poster: "https://www.youtube.com/watch?v=Kbp21JCtmBs",
    video: "videos/sample.mp4"
  }
];

const container = document.getElementById("movies");
const player = document.getElementById("player");
const video = document.getElementById("video");

movies.forEach(movie => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${movie.poster}">
    <p>${movie.title}</p>
  `;
  card.onclick = () => playMovie(movie.video);
  container.appendChild(card);
});

function playMovie(src) {
  video.src = src;
  player.style.display = "flex";
}

function closePlayer() {
  video.pause();
  video.src = "";
  player.style.display = "none";
}
