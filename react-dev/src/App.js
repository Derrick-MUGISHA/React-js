import './App.css';
import Footer from './components/footer';
import Image from './components/image';
import Nav from './components/nav';

function App() {


  // everything in return it's visible on the screen 
  return (
    <div className="App">
      {/* Navigation */}
      <Nav />

      {/* Image content goes here */}

      <Image />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
