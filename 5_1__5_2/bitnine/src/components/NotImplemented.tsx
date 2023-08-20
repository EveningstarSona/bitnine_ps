import { Link } from "react-router-dom";
import Header from "./global/Header/Header";

import '../styles/NotImplemented.css'

function NotImplemented() {
    return (
        <div id="notimplemented-container">
            <Header/>
            <h1>Hello!</h1>
            <p>This page is not implemented!<br/>Please refer to the <Link to="/">main page</Link>!</p>
        </div>
    );
}

export default NotImplemented;