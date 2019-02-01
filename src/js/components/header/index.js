import Header from "./Header";
import makeCreateElement from "../../lib/createElement";
import store from "../../lib/store/Store";


const headerElement = document.querySelector("[data-js=main-header]");
const header = new Header();
const headerNode = makeCreateElement(header);




window.header = header;
headerElement.parentNode.replaceChild(headerNode, headerElement);