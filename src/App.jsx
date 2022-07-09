import React from 'react';
import About from './containers/About';
import Footer from './containers/Footer';
import Hero from './containers/Hero';
import Navbar from './containers/Navbar';
import ProductDetails from './containers/ProductDetails';
import Products from './containers/Products';
import Testimonials from './containers/Testimonials';
import './styles.css';

const App = () => {
    return (
        <div className='text-neutral-200 min-h-screen'>
            <Navbar />
            <Hero />
            <Products />
            <About />
            <ProductDetails />
            <Testimonials />
            <Footer />
        </div>
)
}

export default App