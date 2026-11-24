const firstSong = document.querySelector(".song");
const allSongs = document.querySelectorAll(".song");
const allTitles = document.querySelectorAll(".title");
const likeButtons = document.querySelectorAll(".like");
const likedSongs = document.querySelectorAll(".song.liked");
const list = document.querySelector(".songs");

document.querySelector("#song-count").textContent =
  `Number of songs: ${allSongs.length}`;
document.querySelector("#liked-count").textContent =
  `Liked songs: ${likedSongs.length}`;

const titleElements = [...allTitles];
const titleTexts = titleElements.map((title) => title.textContent);
document.querySelector("#titles").textContent =
  `Titles: ${titleTexts.join(", ")}`;

const firstLikeButton = likeButtons[0];
const containingSong = firstLikeButton?.closest(".song");
console.log("First song:", firstSong);
console.log("Song containing first Like button:", containingSong);
console.log("Next song:", containingSong?.nextElementSibling);
console.log("Previous song:", containingSong?.previousElementSibling);
console.log("List from song:", containingSong?.parentElement);
console.log("First list child:", list.firstElementChild);
console.log("Last list child:", list.lastElementChild);
console.log("Is first song liked?", containingSong?.matches(".liked"));
console.log("Nearest song ancestor:", firstLikeButton?.closest("li.song"));
