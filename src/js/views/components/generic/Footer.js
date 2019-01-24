import Component from "../../../lib/core/Component";

class Footer extends Component {
    constructor(props) {
        super(props);

    }
  
    render() {
        let view = /*html*/` 
        <div class="main-footer__outer">
            <ul class="main-footer__links">
                <li class="main-footer__item">
                    <a class="main-footer__link" href="">GitHub</a>
                </li>
                <li class="main-footer__item">
                    <a class="main-footer__link" href="http://aurelianspodarec.co.uk">Portfolio</a>
                </li>
                <li class="main-footer__item">
                    <a class="main-footer__link" href="http://creativeprogrammer.io">My Blog</a>
                </li>
            </ul>
            <div class="main-footer__copyright">
                <span>© ${new Date().getFullYear()} crafted with love by Aurelian Spodarec</span>
            </div>
        </div>
        `
        return view;
    }
}

export default Footer;