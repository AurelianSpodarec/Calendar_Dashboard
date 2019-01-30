import Sidebar from "./Sidebar";

document.addEventListener("DOMContentLoaded", function(event) {
 
    // const createElement = (component)=> {
    //     return component => {
    //         const doc = new DOMParser().parseFromString(component.render(), "text/html");
    //         console.log(doc)
    //         // return doc.body.childNodes;
    //     }
    // }

   



    const currentSidebar = document.querySelector("[data-js=main-sidebar]");
    const toggleSidebarButton = document.querySelector("[data-js=toggle-sidebar]")

    
    const sidebar = new Sidebar();
    // const sidebarNode = createElement(sidebar);
    const sidebarNode = new DOMParser().parseFromString(sidebar.render(), "text/html");
    const sidebarNodeFirst = sidebarNode.body.firstChild;
    console.log(currentSidebar);
    console.log(sidebarNode);
    console.log(currentSidebar.parentNode)
    console.log(sidebarNode.body.firstChild);
    currentSidebar.parentNode.replaceChild(sidebarNodeFirst, currentSidebar);
    


});