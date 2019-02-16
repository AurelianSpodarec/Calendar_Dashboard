import Component from "#components/component";


class Layout extends Component {
    constructor(props) {
        super(props);
 
    }

     

    render() {
        return /*html*/`
            <main data-js="view-element" class="view">
                <header data-js="header-element" class="header"></header>
                <section data-js="scene-element" class="scene"></section>
                <footer data-js="footer-element" class="footer"></footer>
            </main>
        `;
    }
}

export default Layout;