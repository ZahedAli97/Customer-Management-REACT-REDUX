import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import CustomerList from "./components/CustomerList";
import ManageCustomer from "./components/ManageCustomer";

function App() {
  return (
    <div>
      <Header />
      <ManageCustomer />
      <CustomerList />
      <Footer />
    </div>
  );
}

export default App;
