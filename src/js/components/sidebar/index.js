import Sidebar from "./Sidebar";
import makeCreateElement from "../../lib/createElement";

const sidebar = new Sidebar();
const sidebarElement = document.querySelector("[data-js=sidebar-element]");

document.addEventListener("DOMContentLoaded", function(event) {
    const toggleSidebarButton = document.querySelector("[data-js=toggle-sidebar]");

    

    toggleSidebarButton.addEventListener("click", event => {
        alert("Change view");
    })
})

window.sidebarElement = sidebar;
const sidebarNode = makeCreateElement(window.sidebarElement);


sidebarElement.parentNode.replaceChild(sidebarNode, sidebarElement);



