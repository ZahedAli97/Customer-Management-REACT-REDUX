import React from "react";
import { connect } from "react-redux";
import { change_input, submit_customer } from "../actionCreator/customer";

class ManageCustomer extends React.Component {
  constructor() {
    super();

    // this.emailRef = React.createRef();
  }

  // handleOnChange = name => e => {
  //   this.setState({ [name]: e.target.value });
  // };

  render() {
    console.log("Render");

    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            let payload = {
              name: this.props.name,
              email: this.props.email,
              mobile: this.props.mobile
            };

            this.props.dispatch(submit_customer(payload));
            this.props.dispatch(change_input("name", ""));
            this.props.dispatch(change_input("email", ""));
            this.props.dispatch(change_input("mobile", ""));
          }}
        >
          <label>Name: </label>
          <input
            type="text"
            value={this.props.name}
            onChange={e =>
              this.props.dispatch(change_input("name", e.target.value))
            }
          />
          <br />
          <label>Email: </label>
          <input
            type="email"
            //ref={this.emailRef}
            value={this.props.email}
            onChange={e =>
              this.props.dispatch(change_input("email", e.target.value))
            }
          />
          <br />
          <label>Mobile: </label>
          <input
            type="text"
            value={this.props.mobile}
            onChange={e =>
              this.props.dispatch(change_input("mobile", e.target.value))
            }
          />
          <br />
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    );
  }
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
