import Component from "../component";

class Footer extends Component {
    constructor(props) {
        super(props);

    }
  
    render() {
        return /*html*/` 
            <footer class="footer">
            <div class="footer__outer">

            
                <div class="footer__info">
                    <span class="footer__logo-container">
                        <i class="footer__logo-icon fas fa-fire"></i>
                        <span class="footer__logo-text">Hobo</span>
                    </span>

                    <ul class="footer__social-list">
                        <li class="footer__social-item">
                            <a class="footer__social-link" target="_blank" href="https://github.com/AurelianSpodarec">
                                <i class="footer__social-icon fab fa-github"></i>
                            </a>
                        </li>
                        <li class="footer__social-item">
                            <a class="footer__social-link" target="_blank" href="https://www.linkedin.com/in/aurelianspodarec/">
                                <i class="footer__social-icon fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li class="footer__social-item">
                            <a class="footer__social-link" target="_blank" href="http://aurelianspodarec.co.uk">
                                <i class="footer__social-icon fas fa-globe-americas"></i>
                            </a>
                        </li>
                        <li class="footer__social-item">
                            <a class="footer__social-link" target="_blank" href="http://creativeprogrammer.io">
                                <i class="footer__social-icon fas fa-globe"></i>
                            </a>
                        </li>
                    </ul>

                    <span class="footer__copyright">
                        Copyright © ${new Date().getFullYear()} crafted with love by Aurelian Spodarec
                    </span>
                </div>

                <ul class="footer__links">
                    <li class="footer__item">
                        <a class="footer__link" target="_blank" href="https://github.com/AurelianSpodarec">GitHub</a>
                    </li>
                    <li class="footer__item">
                        <a class="footer__link" target="_blank" href="https://www.linkedin.com/in/aurelianspodarec/">LinkedIn</a>
                    </li>
                    <li class="footer__item">
                        <a class="footer__link" target="_blank" href="http://aurelianspodarec.co.uk">Portfolio</a>
                    </li>
                    <li class="footer__item">
                        <a class="footer__link" target="_blank" href="http://creativeprogrammer.io">Blog</a>
                    </li>
                </ul>


            </div>
            </footer>
        `;
    }
}

export default Footer;