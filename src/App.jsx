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

// Import CSS
import "./styles/css/App.css";
import "./styles/css/Header.css";
import "./styles/css/Collection.css";
import "./styles/css/Footer.css";

// Import components
import "./components/Animations";
import Collection from "./components/Collection";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <Collection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
