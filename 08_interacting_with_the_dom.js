// - You don't need jQuery Repo

// const logo = document.getElementById('logo');
// logo.innerText = 'hey demons, it\'s me, ya boy';

const logo = document.querySelector('#logo');
logo.innerText = 'Yo yo';



const heading = document.createElement("h1");
heading.innerHTML = "<span>Hello</span>" + document.URL;
document.body.appendChild(heading);
