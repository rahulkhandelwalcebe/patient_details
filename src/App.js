import React from "react";
import "./styles/App.scss";
import Navbar from "./components/elements/Navbar";
import Patients from "./components/patient/Patients";
import {  Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddPatient from "./components/patient/AddPatient";
import EditPatient  from "./components/patient/EditPatient";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Patients} />
                <Route exact path="/patients/add" component={AddPatient} />
                <Route
                  exact
                  path="/patients/edit/:id"
                  component={EditPatient}
                />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
