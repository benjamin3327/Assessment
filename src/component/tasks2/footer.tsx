import * as React from 'react';
import './footer.css';


const Footer = () => {
    return(
        <div className="footer-container">
            <div className="footer-primary">
                <div className="footer-links">
                    <h3>Some Links</h3>
                    <ul>
                        <li>
                            <a href="#faq">F.A.Q</a>
                        </li>
                        <li>
                            <a href="#cookies-policy">Cookies Policy</a>
                        </li>
                        <li>
                            <a href="#terms-of-services">Terms Of Service</a>
                        </li>
                        <li>
                            <a href="#support">Support</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h3>Some Links</h3>
                    <ul>
                        <li>
                            <a href="#faq">F.A.Q</a>
                        </li>
                        <li>
                            <a href="#cookies-policy">Cookies Policy</a>
                        </li>
                        <li>
                            <a href="#terms-of-services">Terms Of Service</a>
                        </li>
                        <li>
                            <a href="#support">Support</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-subscribe">
                    <h3>Newsletter</h3>
                    <div>
                        <input type="email" placeholder="Your email id here" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>Copyright &copy; 2022 Benjamin</p>
            </div>
        </div>
    )
}
export default Footer;