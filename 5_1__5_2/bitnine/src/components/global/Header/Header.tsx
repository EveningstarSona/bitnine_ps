import Logo from "./Logo";
import ProductList from "./ProductList";

import "../../../styles/Header.css";

function Header() {
    return (
        <div id="header-container" style={{backgroundColor: "#333"}}>
            <a href="/"><Logo /></a>
            <ProductList />
        </div>
    );
}

export default Header;