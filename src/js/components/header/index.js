import Header from "./Header";
import makeCreateElement from "../../lib/createElement";
import store from "../../lib/store/Store";
import search from "./components/search";


const headerElement = document.querySelector("[data-js=header-element]");
const header = new Header();
const headerNode = makeCreateElement(header);




window.header = header;
headerElement.parentNode.replaceChild(headerNode, headerElement);