import Component from "#components/component";
import header from '#components/header';
import footer from '#components/footer';

class Main extends Component {
    constructor(props) {
        super(props);
        this.onEvent = this.onEvent.bind(this);
        this.setSubscriber("main", this.onEvent);
    }

    onEvent(state, action) {
        if(!this.getStoreState().sidebar.isSidebarToggled) {
            this.refs.viewElement.classList.add('is-toggle');
        } else {
            this.refs.viewElement.classList.remove('is-toggle');
        }
    }

    render() {
        this.setChild("header-element", header);
        this.setChild("footer-element", footer)
        return /*html*/`     
            <main data-ref="viewElement" class="view">
                <header data-child="header-element" class="header"></header>
                <section data-child="scene-element" data-js="scene-element" class="scene"></section>
                <footer data-child="footer-element" class="footer"></footer>
            </main>
        `;
    }
}

const main = new Main();
window.main = main;

export default main;