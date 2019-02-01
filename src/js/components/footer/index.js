import Footer from "./Footer";
import makeCreateElement from "../../lib/createElement/index";

 
const footer = new Footer();
const footerElement = document.querySelector("[data-js=footer-element]");


window.footer = footer;
const footerNode = makeCreateElement(window.footer);


footerElement.parentNode.replaceChild(footerNode, footerElement);



