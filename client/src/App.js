import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search  from "./pages/Search";
import Saved   from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav     from "./components/Nav";
import Footer  from "./components/Footer";

function App() {
  return (
   <Router>
      <div>
         <Nav />
         <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route component={NoMatch} /> 
         </Switch>
         <Footer />
      </div>
   </Router>
  );
}

export default App;
