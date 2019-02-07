import Header from "./Header";
import createElement from "#lib/createElement";
import store from "#lib/store/Store";
import search from "./components/search";


const headerElement = document.querySelector("[data-js=header-element]");
const header = new Header();
const headerNode = createElement(header);




window.header = header;
headerElement.parentNode.replaceChild(headerNode, headerElement);