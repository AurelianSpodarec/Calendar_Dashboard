import Header from "./Header";
import makeCreateElement from "../../lib/createElement/index";

document.addEventListener("DOMContentLoaded", function(event) {
 

    
    const mainHeader = document.querySelector("[data-js=main-header]");
 


    window.mainHeader = new Header();
    const mainHeaderNode = makeCreateElement(window.mainHeader);


    mainHeader.parentNode.replaceChild(mainHeaderNode, mainHeader);



});