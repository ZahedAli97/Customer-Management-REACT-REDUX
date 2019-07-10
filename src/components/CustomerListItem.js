import React from "react";
import PropTypes from "prop-types";

function CustomerListItem(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.email}</p>
      <p>{props.phone}</p>
      <button
        onClick={() => {
          props.onDelete(props.email);
        }}
      >
        Delete
      </button>
    </div>
  );
}

CustomerListItem.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};

CustomerListItem.defaultProps = {
  name: "Customer Name",
  email: "Customer@mail.com",
  phone: "Customer Phone number",
  onDelete: () => alert("Not Implemented")
};

export default CustomerListItem;
