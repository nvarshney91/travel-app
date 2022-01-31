import './App.css';
import Book from './Components/Book';
import Destination from './Components/Destination';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Right from './Components/Right';
import Services from './Components/Services';
import Subscribe from './Components/Subscribe';
function App() {
  return (
    <div>
      <Hero />
      <Services />
      <Destination />
      <Book />
      <Subscribe/>
      <Footer />
      <Right />
    </div>
  );
}

export default App;
