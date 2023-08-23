import { Link } from "react-router-dom";
import Header from "./global/Header/Header";
import Footer from "./global/Footer";

import '../styles/NotImplemented.css'

function NotImplemented() {
    return (
        <div id="notimplemented-container">
            <Header/>
            <h1>Hello!</h1>
            <p>This page is not implemented!<br/>Please refer to the <Link to="/">main page</Link>!</p>
            <div className="footer" style={{'bottom': 0, "position": "absolute", "width": "100%"}}>
            <Footer />
            </div>
        </div>
    );
}

export default NotImplemented;