import Product1 from '../Product1';
import Product2 from '../Product2';
import Product3 from '../Product3';
import Footer from '../global/Footer';
import Header from '../global/Header/Header';

function Home() {
    return (
        <>
            <Header />
            <Product1 />
            <Product2 />
            <Product3 />
            <Footer />
        </>
    );
}

export default Home;