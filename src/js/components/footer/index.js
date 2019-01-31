import Footer from "./Footer";
import makeCreateElement from "../../lib/createElement/index";

document.addEventListener("DOMContentLoaded", function(event) {
 

    
    const mainFooter = document.querySelector("[data-js=main-footer]");
 


    window.mainFooter = new Footer();
    const mainFooterNode = makeCreateElement(window.mainFooter);


    mainFooter.parentNode.replaceChild(mainFooterNode, mainFooter);



});