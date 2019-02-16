import Sidebar from "./Sidebar";
import createElement from "#lib/createElement";

 

const sidebar = new Sidebar();
const sidebarElement = document.querySelector("[data-js=sidebar-element]");

 
window.sidebar = sidebar;
const sidebarNode = createElement(window.sidebar);

sidebarElement.parentNode.replaceChild(sidebarNode, sidebarElement);



