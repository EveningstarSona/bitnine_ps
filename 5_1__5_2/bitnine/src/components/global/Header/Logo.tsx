import bitnineLogo from '/bitnine-logo.png';

import "../../../styles/Logo.css";

function Logo() {
    return (
        <div className="logo-container">
            <img src={bitnineLogo}></img>
            <p>{"bank"}</p>
        </div>
    );
}

export default Logo;