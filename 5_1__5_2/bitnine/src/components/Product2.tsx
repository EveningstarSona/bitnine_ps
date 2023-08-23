import '../styles/Product.css';
import Feature from './global/Feature';

function Product2() {
    return (
        <div id="product2-container">
            <h2>{"Product 2"}</h2>
            <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius vestibulum eros vel accumsan. Proin ac magna et turpis facilisis iaculis. Vivamus sit amet turpis a augue sagittis vulputate eu eleifend mi. Cras justo nunc, fringilla ut pretium vel, posuere ut eros. In felis sem, gravida id aliquam eu, rhoncus ac libero. Morbi tristique quam sit amet felis semper, mollis lobortis leo molestie. Proin facilisis vulputate tortor, et ultrices diam bibendum vitae. Vivamus rutrum ex sed lacus bibendum cursus. Quisque vel diam et nulla imperdiet suscipit. In rhoncus scelerisque neque ac semper. Aenean condimentum, lectus ac elementum auctor, dui dui dictum libero, id condimentum nunc orci at orci."}</p>
            <div id="product2-featurelist">
                <Feature title="Feat2.1" paragraph="Feat2.1Desc" points={["Feat2.1P1", "Feat2.1P2", "Feat2.1P3"]}/>
                <Feature title="Feat2.2" paragraph="Feat2.2Desc" points={["Feat2.2P1"]}/>
                <Feature title="Feat2.3" paragraph="Feat2.3Desc" points={["Feat2.3P1", "Feat2.3P2"]}/>
                <Feature title="Feat2.4" paragraph="Feat2.4Desc" points={["Feat2.4P1", "Feat2.4P2", "Feat2.4P3", "Feat2.4P4"]}/>
            </div>
        </div>
    );
}

export default Product2;