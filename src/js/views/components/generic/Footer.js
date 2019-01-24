import Component from "../../../lib/core/Component";

class Footer extends Component {
    constructor(props) {
        super(props);

    }
  
    render() {
        let view = /*html*/` 
        <div class="main-footer__outer">
            <ul>
                <li>
                    <a href=""></a>
                </li>
            </ul>
            <div>
                © ${new Date().getFullYear()} made with love by Aurelian Spodarec
            </div>
        </div>
        `
        return view;
    }
}

export default Footer;