// import Header from "./Header";
// import makeCreateElement from "../../lib/createElement/index";
// import store from "../../lib/store/Store";

 
    
    // const mainHeader = document.querySelector("[data-js=main-header]");
 


    // window.mainHeader = new Header();
    // const mainHeaderNode = makeCreateElement(window.mainHeader);


    // mainHeader.parentNode.replaceChild(mainHeaderNode, mainHeader);


 //Below Code workers, the above doesn't 

    import Header from "./Header";
    import makeCreateElement from "../../lib/createElement/index";
    import store from "../../lib/store/Store";

    
    const headerElement = document.querySelector("[data-js=main-header]");
    const header = new Header();
    const headerNode = makeCreateElement(header);
    
    
    
    
    window.header = header;
    headerElement.parentNode.replaceChild(headerNode, headerElement);