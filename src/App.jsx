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
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Import CSS
import "./styles/css/App.css";
import "./styles/css/nullstyle.css";

// Import components
import "./components/Animations";
import Collection from "./components/Collection/Collection";
import Marketplace from "./components/Marketplace/Marketplace";
import Auction from "./components/Auction/Auction";
import Seller from "./components/Seller/Seller";
import Roadmap from "./components/Roadmap/Roadmap";
import Users from "./components/Users/Users";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <Collection />
        <Marketplace />
        <Auction />
        <Seller />
        <Roadmap />
        <Users />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
