const template = document.querySelector("#song-template");
const list = document.querySelector("#songs");
const songs = [
  { id: 1, title: "Golden Hour", artist: "JVKE", seconds: 195, liked: false },
  { id: 2, title: "Calm Down", artist: "Rema", seconds: 220, liked: true },
  {
    id: 3,
    title: "<img src=x onerror=alert(1)>",
    artist: "<b>Mr. Hacker</b>",
    seconds: 180,
    liked: false,
  },
];

function formatDuration(totalSeconds) {
  return `${Math.floor(totalSeconds / 60)}:${String(totalSeconds % 60).padStart(2, "0")}`;
}

function createSongItem(song) {
  const fragment = template.content.cloneNode(true);
  const item = fragment.querySelector(".song");
  item.dataset.id = String(song.id);
  item.querySelector(".title").textContent = song.title;
  item.querySelector(".artist").textContent = ` — ${song.artist}`;
  item.querySelector(".duration").textContent =
    ` (${formatDuration(song.seconds)})`;
  item.classList.toggle("liked", song.liked);

  const likeButton = item.querySelector(".like");
  likeButton.textContent = song.liked ? "Unlike" : "Like";
  likeButton.setAttribute("aria-pressed", String(song.liked));
  likeButton.addEventListener("click", () => {
    render();
  });
}

function render() {
  const fragments = songs.map(createSongItem);
  list.replaceChildren(...fragments);
}
render();
// The template is inert until cloned. cloneNode(true) copies its descendants.
// This template approach is convenient for repeated structures; createElement gives
// more control when the structure is small or highly variable.
