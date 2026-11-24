let songs = [
  { id: 1, title: "Golden Hour", artist: "JVKE", seconds: 195, liked: false },
  { id: 2, title: "Calm Down", artist: "Rema", seconds: 220, liked: true },
  { id: 3, title: "Essence", artist: "Wizkid", seconds: 240, liked: false },
];
const list = document.querySelector("#songs");
const count = document.querySelector("#count");
const total = document.querySelector("#total");
const empty = document.querySelector("#empty");

function formatDuration(seconds) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}
function createSongItem(song) {
  const item = document.createElement("li");
  item.className = song.liked ? "song liked" : "song";
  const label = document.createElement("span");
  label.textContent = `${song.title} — ${song.artist} (${formatDuration(song.seconds)}) `;
  const like = document.createElement("button");
  like.textContent = song.liked ? "Unlike" : "Like";
  like.setAttribute("aria-pressed", String(song.liked));
  like.addEventListener("click", () => toggleLike(song.id));
  const remove = document.createElement("button");
  remove.textContent = "Remove";
  remove.addEventListener("click", () => removeSong(song.id));
  item.append(label, like, remove);
  return item;
}
function render() {
  const items = songs.map(createSongItem);
  list.replaceChildren(...items);
  count.textContent = `${songs.length} ${songs.length === 1 ? "song" : "songs"}`;
  const totalSeconds = songs.reduce((sum, song) => sum + song.seconds, 0);
  total.textContent = `Total duration: ${formatDuration(totalSeconds)}`;
  empty.hidden = songs.length !== 0;
}
function removeSong(id) {
  songs = songs.filter((song) => song.id !== id);
  render();
}
function toggleLike(id) {
  songs = songs.map((song) =>
    song.id === id ? { ...song, liked: !song.liked } : song,
  );
  render();
}
function addSong(song) {
  const newId = songs.length
    ? Math.max(...songs.map((item) => item.id)) + 1
    : 1;
  songs = [...songs, { ...song, id: newId }];
  render();
}
document.querySelector("#add").addEventListener("click", () => {
  addSong({
    title: "New Discovery",
    artist: "Suggested Artist",
    seconds: 200,
    liked: false,
  });
});
render();
