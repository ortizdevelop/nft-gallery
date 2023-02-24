// Import libraries
import { Motion } from "framer-motion";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import components
import "./components/Animations";

// Import CSS
import "./styles/css/App.css";
import "./styles/css/Header.css";
import "./styles/css/Footer.css";

// Import images

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-main"></main>
      <Footer />
    </div>
  );
}

export default App;
