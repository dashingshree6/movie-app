import React from "react";
import "./styles.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch
} from "react-router-dom";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import PageNotFound from "./components/pageNotFound/pageNotFound";
import MovieDetails from "./components/movieDetails/movieDetails";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/movie/:imdbID" component={MovieDetails} />
          <Route component={PageNotFound} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}
