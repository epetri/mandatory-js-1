// Change header
document.querySelector('header h1').textContent = "Fruits & Vegetables Corp";

//Change a tag
let changeTag = document.querySelector("a[href='#bananas']").textContent = "Vegetables";

//Swap #contact and #about
let main = document.querySelector('#main');
let about = document.querySelector('#about');
let contact = document.querySelector('#contact');
main.insertBefore(about, contact);

//wrap about-text i p-tag
let aboutTxt = about.textContent;
let p = document.createElement('p');
p.textContent = aboutTxt;
about.textContent = "";
about.appendChild(p);

//create h2
abouth2 = document.createElement("h2");
contacth2 = document.createElement("h2");
abouth2.textContent = "About";
contacth2.textContent = "Contact";

about.insertBefore(abouth2, about.firstChild);
contact.insertBefore(contacth2, contact.firstChild);

//Correct thead
let allTd = document.querySelectorAll('thead td');
  for (let td of allTd) {
    let th = document.createElement('th');
    th.textContent = td.textContent;
    td.parentNode.appendChild(th);
    td.parentNode.removeChild(td);
  }

//include main.css
let head = document.querySelector('head');
let css = document.createElement('link');
css.setAttribute("rel", "stylesheet");
css.setAttribute("type", "text/css");
css.setAttribute("href", "main.css");
head.appendChild(css);

//change title
let title = document.querySelector('title').textContent = "Fruits & Vegetables Corp";

//style
document.querySelector('header').setAttribute("style", "background-color: rgb(245, 41, 41, 0.5); border-radius: 20px; text-align:center;")
main.setAttribute("style", "background-color: rgb(245, 41, 41, 0.5); border-radius: 20px; text-align: center; height: 500px;")
