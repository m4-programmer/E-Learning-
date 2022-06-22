import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Features from './components/Features';
import Client from './components/Client';
import Services from './components/Services';
import About from './components/About';
import Achievement from './components/Achievement';
import AppInfo from './components/AppInfo';
import Testimonials from './components/Testimonials';
import NewsLetter from './components/NewsLetter';

function App() {
  return (
    <div className="App">
       <Nav />
       <Hero />
       <Features />
       <Client />
       <Services />
       <About />
       <Achievement />
       <AppInfo />
       { /*<Testimonials /> */}
       <NewsLetter />
    </div>
  );
}

export default App;
