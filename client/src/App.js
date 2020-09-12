import React, { Component } from "react";
import AppNavbar from "./components/appNavbar";
import Accident from "./components/accidents";
import { Provider } from "react-redux";
import store from "./store";
import ItemModal from "./components/itemModal";
import { Container } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <ItemModal />
          <Accident />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
