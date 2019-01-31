import Sidebar from "./Sidebar";
import makeCreateElement from "../../lib/createElement/index";

document.addEventListener("DOMContentLoaded", function(event) {
 

    
    const mainSidebar = document.querySelector("[data-js=main-sidebar]");
    const toggleSidebarButton = document.querySelector("[data-js=toggle-sidebar]");


    window.mainSidebar = new Sidebar();
    const mainSidebarNode = makeCreateElement(window.mainSidebar);


    mainSidebar.parentNode.replaceChild(mainSidebarNode, mainSidebar);



});