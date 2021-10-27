import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div class="container">
      <div class="home">
        <div class="jumbotron">
          <h2>Welcome! Please search for trains here.</h2>
          <p>
            You can search trains here. You have to fill out all the spaces. You
            will get according to your destination.
          </p>
          <p>
            <NavLink
              class="btn btn-primary btn-lg"
              to="/search-trains"
              role="button"
            >
              Seach Here
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
