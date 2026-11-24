// The songs array is the single source of truth. The DOM is rebuilt from this array.
let songs = [
  { id: 1, title: "Neon Rain", artist: "Kiko", seconds: 195, liked: false },
  { id: 2, title: "Calm Down", artist: "Rema", seconds: 220, liked: true },
  { id: 3, title: "Essence", artist: "Wizkid", seconds: 240, liked: false },
  { id: 4, title: "People", artist: "Libianca", seconds: 205, liked: false },
  { id: 5, title: "Unavailable", artist: "Davido", seconds: 180, liked: true },
  { id: 6, title: "<img src=x onerror=alert(1)>", artist: "<b>Mr. Hacker</b>", seconds: 190, liked: false }
];

const suggestions = [
  { title: "City Lights", artist: "Nova", seconds: 210, liked: false },
  { title: "Ocean Drive", artist: "The Waves", seconds: 198, liked: false },
  { title: "Morning Sun", artist: "Ari", seconds: 230, liked: false }
];

const songList = document.querySelector("#song-list");
const songCount = document.querySelector("#song-count");
const totalDuration = document.querySelector("#total-duration");
const emptyState = document.querySelector("#empty-state");
const template = document.querySelector("#song-template");
const addButton = document.querySelector("#add-suggested");

function formatDuration(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function createSongItem(song) {
  const fragment = template.content.cloneNode(true);
  const item = fragment.querySelector(".song");
  const title = fragment.querySelector(".song-title");
  const artist = fragment.querySelector(".song-artist");
  const duration = fragment.querySelector(".song-duration");
  const likeButton = fragment.querySelector(".like-button");
  const removeButton = fragment.querySelector(".remove-button");

  item.dataset.id = String(song.id);
  title.textContent = song.title;
  artist.textContent = song.artist;
  duration.textContent = formatDuration(song.seconds);
  item.classList.toggle("liked", song.liked);
  likeButton.textContent = song.liked ? "Unlike" : "Like";
  likeButton.setAttribute("aria-pressed", String(song.liked));

  likeButton.addEventListener("click", () => toggleLike(song.id));
  removeButton.addEventListener("click", () => removeSong(song.id));
  return fragment;
}

function render() {
  const fragment = document.createDocumentFragment();
  songs.forEach((song) => fragment.append(createSongItem(song)));
  songList.replaceChildren(fragment);

  songCount.textContent = `${songs.length} ${songs.length === 1 ? "song" : "songs"}`;
  const totalSeconds = songs.reduce((total, song) => total + song.seconds, 0);
  totalDuration.textContent = `Total duration: ${formatDuration(totalSeconds)}`;
  emptyState.hidden = songs.length !== 0;
}

function removeSong(id) {
  songs = songs.filter((song) => song.id !== id);
  render();
}

function toggleLike(id) {
  songs = songs.map((song) =>
    song.id === id ? { ...song, liked: !song.liked } : song
  );
  render();
}

function addSuggestedSong() {
  if (suggestions.length === 0) return;
  const suggestion = suggestions.shift();
  const newId = songs.length ? Math.max(...songs.map((song) => song.id)) + 1 : 1;
  songs = [...songs, { ...suggestion, id: newId }];
  render();
}

addButton.addEventListener("click", addSuggestedSong);
render();
