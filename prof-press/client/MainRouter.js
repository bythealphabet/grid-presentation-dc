import React, { useState } from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { Switch, Route, withRouter } from "react-router-dom";
import scrollToTop from "./hooks/scrollToTop";

//NAVIGATION
import Header from "./containers/navigation/header/Header";
import Footer from "./containers/navigation/footer/Footer";

//CONTAINERS
import Home from "./containers/home/Home";
import About from "./containers/about/About";
import Articles from "./containers/articles/Articles";
import Contact from "./containers/contact/Contact";

//USER
import Signup from "./containers/user/Signup";
import Signin from "./containers/user/Signin";
import Confirmation from "./containers/user/Confirmation";
import Profile from "./containers/user/Profile";
import PrivateRoute from "./containers/user/PrivateRoute";
import Projects from "./containers/projects/Projects";
import Project from "./containers/projects/Project";

//ARTICLES

const ScrollToTop = withRouter(scrollToTop);

function MainRouter() {
  return (
    <>
      <Header />
      <ScrollToTop>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/project/:id">
            <Project />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/articles">
            <Articles />
          </Route>
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/user-auth-confirmation/:token">
            <Confirmation />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
        </Switch>
        <Footer />
      </ScrollToTop>
    </>
  );
}

export default MainRouter;
