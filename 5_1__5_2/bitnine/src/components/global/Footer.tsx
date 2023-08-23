import { Link } from "react-router-dom";

import "../../styles/Footer.css";

function Footer() {
    return (
        <div id="footer-container">
            <div id="footer-top">
                <Link to="/cards">Credit cards</Link>
                <Link to="/insurance">Insurance</Link>
                <Link to="/mortgage">Mortgage</Link>
                <Link to="/loans">Loans</Link>
                <Link to="/investing">Investing</Link>
            </div>
            <div id="footer-bottom">
                <p id="footer-copyright">© 2023 by Sona E. J. Candeu. No rights reserved at all.</p>
                <div id="footer-contact">
                    <a href="mailto:sonaejcandeu@gmail.com">Hire me!</a>
                    <a href="https://linkedin.com/in/sonaejcandeu/">LinkedIn</a>
                    <a href="https://github.com/EveningstarSona">GitHub</a>
                </div>
            </div>
        </div>
    );        
}

export default Footer;