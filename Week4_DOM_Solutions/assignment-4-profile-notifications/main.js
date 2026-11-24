console.log("DOM ready");
const profileName = document.querySelector("#profile-name");
const status = document.querySelector("#status");
const avatar = document.querySelector("#avatar");
const profileLink = document.querySelector("#profile-link");
const notifications = document.querySelectorAll(".notification");
const badge = document.querySelector("#badge");
const themeButton = document.querySelector("#theme-button");
const readAllButton = document.querySelector("#read-all");

profileName.textContent = "Emmanuel";
status.textContent = "Online";
status.classList.add("online");
avatar.setAttribute("alt", "Emmanuel's profile avatar");
profileLink.setAttribute("href", "https://example.com/");
profileLink.setAttribute("rel", "bbbbbb");
