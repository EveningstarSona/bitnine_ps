import { Link, Outlet } from 'react-router-dom';

import "../../../styles/ProductList.css";

function ProductList() {
    return (
        <div id="productlist-container">
            <Link to="/cards">Credit cards</Link>
            <Link to="/insurance">Insurance</Link>
            <Link to="/mortgage">Mortgage</Link>
            <Link to="/loans">Loans</Link>
            <Link to="/investing">Investing</Link>
            <Link to="/login" className="login-button">Login</Link>
            <Link to="/profile" className="profile-button" hidden>Profile</Link>
            <Outlet />
        </div>
    );
}

export default ProductList;