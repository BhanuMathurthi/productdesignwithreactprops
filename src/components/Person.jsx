import React from "react";
import PropTypes, { string } from "prop-types";

export default function Person(props) {
  return (
    <div>
      <p>Name: {props.name} </p>
      <p>email: {props.email} </p>
      <p>age: {props.age} </p>
      <p>isMarried: {props.isMarried ? "is" : "is not"}</p>
      {props.friends.map((i) => (
        <p> {i} </p>
      ))}
    </div>
  );
}

// Person.propTypes = {
//   name: PropTypes.string,
//   email: PropTypes.string,
//   age: PropTypes.number,
//   isMarried: PropTypes.bool,
//   friends: PropTypes.arrayOf(PropTypes.string),
// };
