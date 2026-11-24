// A normal script in the head without defer/module runs before the h1 exists.
// Selecting it then returns null, so changing its text causes an error.
// type="module" is deferred automatically, so the HTML is parsed first.

const heading = document.querySelector("h1");
heading.textContent = "DOM Explorer — JavaScript changed this heading";

const list = document.querySelector("#items");
const items = document.querySelectorAll("#items li");
const firstItem = document.querySelector("#items li:first-child");

console.log("document.title:", document.title);
console.log("document.body:", document.body);
console.log("document.documentElement:", document.documentElement);
console.log("body children:", document.body.children.length);
console.log("number of links:", document.querySelectorAll("a").length);
console.log("heading:", heading);
console.log("list:", list);
console.log("all list items:", items);
console.log("first list item:", firstItem);
console.log("ul children.length:", list.children.length);
console.log("ul childNodes.length:", list.childNodes.length);
// childNodes can include whitespace text nodes created by line breaks and indentation.
// children counts only element nodes.

// Changing the DOM changes the browser's current page, not the original HTML file on disk.
// To permanently change the source, edit and save the HTML file itself.
