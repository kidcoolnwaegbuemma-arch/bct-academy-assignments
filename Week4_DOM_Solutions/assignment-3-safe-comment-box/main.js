const form = document.querySelector("#comment-form");
const input = document.querySelector("#comment");
const feed = document.querySelector("#feed");
const counter = document.querySelector("#counter");

input.addEventListener("input", () => {
  counter.textContent = `${input.value.length}/200`;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const comment = input.value.trim();
  if (!comment) return;

  const paragraph = document.createElement("p");
  paragraph.textContent = comment; // Safe: text is displayed literally, not parsed as HTML.
  feed.append(paragraph);
  input.value = "";
  counter.textContent = "0/200";
  input.focus();
});

document.querySelector("#clear").addEventListener("click", () => {
  feed.replaceChildren();
});

// UNSAFE EXAMPLE — demonstration only; never use with real user input:
// feed.innerHTML += `<p>${comment}</p>`;
// textContent displays text literally. innerText is rendered, visible text and is style-aware.
// innerHTML parses the string as HTML. XSS means cross-site scripting: injected scripts or
// markup run in a trusted website context when unsafe content is interpreted as code.
