import React from "react";
import "./App.css";
import "./components/styles/main.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Strategy from "./components/Strategy/Strategy";
import Retaily from "./components/Retaily/Retaily";
import Statistics from "./components/Statistics/Statistics";
import Provider from "./components/Provider/Provider";
import FAQ from "./components/FAQ/FAQ";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Strategy />
      <Retaily />
      <Statistics />
      <Provider />
      <FAQ />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
