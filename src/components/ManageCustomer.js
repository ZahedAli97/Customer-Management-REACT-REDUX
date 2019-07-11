import React from "react";
import { connect } from "react-redux";
import { change_input, submit_customer } from "../actionCreator/customer";
import { Link, Redirect } from "react-router-dom";

function ManageCustomer(props) {
  // this.emailRef = React.createRef();

  // handleOnChange = name => e => {
  //   this.setState({ [name]: e.target.value });
  // };

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();

          console.log(e.onSubmit);

          let payload = {
            name: props.name,
            email: props.email,
            mobile: props.mobile
          };

          props.dispatch(submit_customer(payload));
          props.dispatch(change_input("name", ""));
          props.dispatch(change_input("email", ""));
          props.dispatch(change_input("mobile", ""));
          props.history.push("/customers");
          (() =>
            function() {
              return <Redirect to="/customers" />;
            })(); // You don't redirect after submission rather you navigate
        }}
      >
        <label>Name: </label>
        <input
          type="text"
          value={props.name}
          onChange={e => props.dispatch(change_input("name", e.target.value))}
        />
        <br />
        <label>Email: </label>
        <input
          type="email"
          //ref={this.emailRef}
          value={props.email}
          onChange={e => props.dispatch(change_input("email", e.target.value))}
        />
        <br />
        <label>Mobile: </label>
        <input
          type="text"
          value={props.mobile}
          onChange={e => props.dispatch(change_input("mobile", e.target.value))}
        />
        <br />

        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    name: state.name,
    email: state.email,
    mobile: state.mobile
  };
}

let connectedComponent = connect(mapStateToProps);

export default connectedComponent(ManageCustomer);
