import Component from "../lib/core/Component";

import Header from "./components/generic/Header";
import Footer from "./components/generic/Footer";
import Sidebar from "./components/generic/Sidebar";

class Layout extends Component{

    constructor() {
        super()

        this.login = /*html*/`
            <div>Login</div>
        `;

        this.template = /*html*/`
            <div class="main-wrapper">
                <aside data-js="main-sidebar" class="main-sidebar"></aside>

                <main data-js="main-panel" class="main-panel">
                    <header data-js="main-header" class="main-header"></header>

                    <section data-js="main-container" class="main-container">
                        sd<br><br><br><br>dsdsdsdds
                    </section>

                    <footer data-js="main-footer" class="main-footer"></footer>
                </main>
            </div>
        `;

        this.regions = [
            {'header': '[data-js="main-header"]'},
            {'sidebar': '[data-js="main-sidebar"]'},
            {'content': '[data-js="main-container"]'},
            {'footer': '[data-js="main-footer"]'}
        ];
    }
    
    show(region, view) {
 
      var el = document.querySelector(this.regions[region]);
      el.innerHTML = view.render();
    }
    
    render() {
        let header = new Header();
        let sidebar = new Sidebar();
        let footer = new Footer();
        this.show('header', header); 
        this.show('sidebar', sidebar); 
        this.show('footer', footer); 
    }
    
  }

export default Layout;