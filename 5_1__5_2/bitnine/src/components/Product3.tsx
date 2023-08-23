import '../styles/Product.css';
import Feature from './Home/Feature';

function Product3() {
    return (
        <div id="product3-container">
            <h2>{"Product 3"}</h2>
            <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas id nulla ut dapibus. Maecenas dolor lorem, dapibus eget purus sed, sagittis tempor ipsum. Maecenas eu pretium ligula. Donec tempor fermentum auctor. Sed porttitor ac odio a iaculis. Donec odio dui, eleifend nec nulla sed, cursus imperdiet nisi. Maecenas dictum sed elit sed porttitor. Sed convallis scelerisque nunc, sit amet accumsan ex pharetra vel. "}</p>
            <div id="product3-featurelist">
                <Feature title="Feat3.1" paragraph="Feat3.1Desc" points={["Feat3.1P1", "Feat3.1P2"]}/>
                <Feature title="Feat3.2" paragraph="Feat3.2Desc" points={["Feat3.2P1", "Feat3.2P2"]}/>
            </div>
        </div>
    );
}

export default Product3;