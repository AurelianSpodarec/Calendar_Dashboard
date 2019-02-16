import Component from "#components/component";
import sidebar from '#components/sidebar';
import main from "./Main";

class Layout extends Component {
    constructor(props) {
        super(props);
        // this.setSubscriber("layout", this.onEvent);
    }

    render() {
        
        this.setChild('sidebar-element', sidebar);
        this.setChild('main-element', main);
        return /*html*/`     
        <div class="main-wrapper">

            <aside data-child="sidebar-element" class="sidebar"> </aside>
            <main data-child="main-element" class="view"> </main>
        
        </div>
        `;
    }
}

export default Layout;