import Component from "../component/index";

class Footer extends Component {
    constructor(props) {
        super(props);

    }
  
    render() {
        return /*html*/` 
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
        `;
    }
}

export default Footer;