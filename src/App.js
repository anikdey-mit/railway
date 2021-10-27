import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import TrainList from "./components/TrainList";
import SignUp from "./components/SignUp";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import SearchTrain from "./components/SearchTrain";
import Register from "./components/Register";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/trainlist" component={TrainList} />
          <Route path="/login" component={SignUp} />
          <Route path="/register" component={Register} />
          <Route path="/notfound" component={NotFound} />
          <Route path="/search-trains" component={SearchTrain} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/notfound" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
