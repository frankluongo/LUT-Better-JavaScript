// Refer to https://developer.mozilla.org/en-US/ for everything!
// - MDN Docs for HTML, JS, etc.

console.log(document.body);
console.log(document.head);

const heading = document.createElement('h1');
heading.innerHTML = `Oh hey! ${document.URL}`;
document.body.appendChild(heading);

document.getElementById("app").innerHTML = `
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

console.log(document.URL);
// Nah, it's read-only bruh...
// document.URL = "hello";
