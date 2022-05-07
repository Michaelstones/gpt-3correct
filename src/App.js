import "./App.css";
import {
  Blog,
  Features,
  Header,
  Footer,
  Possibility,
  WhatGpt3,
} from "./container/index";
import { Cta, Brand, Navbar } from "./component/index";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGpt3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
