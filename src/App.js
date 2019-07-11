import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "../src/components/CustomerListItem.css";
import Header from "./Header";
import Footer from "./Footer";
import CustomerList from "./components/CustomerList";
import ManageCustomer from "./components/ManageCustomer";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Details from "./components/Details";
import Counter from "./Counter_using_hooks";

function App() {
  return (
    <div>
      <Header />
      <Counter />
      <Navbar />
      <Switch>
        <Route path="/" exact component={() => <h1>HOME</h1>} />
        <Route path="/customers" exact component={CustomerList} />
        <Route path="/customers/add" component={ManageCustomer} />
        <Route path="/login" exact component={() => <h1>Login</h1>} />

        <Route
          exact
          path="/customers/:id"
          render={props => {
            if (props.location.search == "?loggedIn=true") {
              return <Details {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
