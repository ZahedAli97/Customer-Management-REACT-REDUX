import React from "react";
import CustomerListItem from "./CustomerListItem";
import { connect } from "react-redux";
import { get_customer, delete_customer } from "../actionCreator/customer";

class CustomerList extends React.Component {
  constructor() {
    super();
    // this.removeCustomer = this.removeCustomer.bind(this);   //  One way to bind this to  CustomerList (parent) even
    // when (child) CustomerListItem calls.
  }

  componentDidMount() {
    this.props.dispatch(get_customer());
  }

  // Another Way
  removeCustomer = email => {
    // Arrow functions binds context of this to where it was defined
    // let customers = this.props.customers.filter(c => c.email !== email);
    this.props.dispatch(delete_customer(email));
  };

  render() {
    return (
      <>
        <h3>Preferred Customers</h3>
        {this.props.isLoading && <p>LOADING...</p>}
        {this.props.customers.map(c => (
          <CustomerListItem
            key={c.id}
            id={c.id}
            name={c.name}
            email={c.email}
            phone={c.mobile}
            onDelete={this.removeCustomer}
          />
        ))}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    customers: state.customers,
    isLoading: state.isLoading,
    error: state.error
  };
}

let connectedComponent = connect(mapStateToProps);

export default connectedComponent(CustomerList);
