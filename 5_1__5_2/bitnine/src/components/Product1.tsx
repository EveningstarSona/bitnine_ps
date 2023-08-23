import '../styles/Product.css';
import Feature from './global/Feature';

function Product1() {
    return (
        <div id="product1-container">
            <h2>{"Product 1"}</h2>
            <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et risus lacus. Donec dignissim congue nisi, ac ultrices nulla commodo id. Quisque in est nec orci sollicitudin consectetur id ac odio. Pellentesque et justo eros. Cras ut imperdiet nibh, maximus consequat arcu. Nulla pulvinar auctor tellus vel fringilla. Nam suscipit eu neque sit amet tristique. Proin euismod risus non mauris volutpat, ac consectetur nisl imperdiet. Donec non tellus nec dui congue porttitor sit amet vel ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}</p>
            <div id="product1-featurelist">
                <Feature title="Feat1.1" paragraph="Feat1.1Desc" points={["Feat1.1P1", "Feat1.1P2", "Feat1.1P3"]}/>
                <Feature title="Feat1.2" paragraph="Feat1.2Desc" points={["Feat1.2P1", "Feat1.2P2"]}/>
                <Feature title="Feat1.3" paragraph="Feat1.3Desc" points={["Feat1.3P1"]}/>
            </div>
        </div>
    );
}

export default Product1;