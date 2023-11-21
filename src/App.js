import { NavBar } from './composants/Navbar';
import { Home } from './composants/Home';
import { Product } from './composants/Product';
import { Pricing } from './composants/Pricing';
import { Testimonials } from './composants/Testimonials';
import { Contact } from './composants/Contact';
import { Footer } from './composants/footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Product />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
