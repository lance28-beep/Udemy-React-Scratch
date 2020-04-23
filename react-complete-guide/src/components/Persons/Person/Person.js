// import React from "react";
import React, { Component } from "react"; //use only for class based
import PropTypes from "prop-types";
import classes from "./Person.css";
import Auxiliary from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import AuthContext from "../../../context/auth-context"

// import { Component } from "react";
// import { render } from "react-dom";

// const person = (props) => //add this kapag class based kac props can only be access with this keyword.
class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  // STATIC another way of using context//alternative ways for class base
  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }
  render() {
    console.log("[Person.js] rendering..");
    return (
      // <div className={classes.Person}>
      <Auxiliary>
        {/* // STATIC another way of using context//alternative ways for class base*/}
        {this.context.authenticated ? (
          <p>Authenticated</p>
        ) : (
          <p>Please Log In</p>
        )}
        {/* <AuthContext.Consumer>
          {(context) =>
            context.authenticated ? <p>Authenticated</p> : <p>Please Log In</p>
          }
        </AuthContext.Consumer> */}
        {/* {this.props.isAuth ?< p>Authenticated</> : <p>Please Log In</p> } */}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          key='i3'
          ref={this.inputElementRef}
          // ref={(inputEl) => {
          //   this.inputElement = inputEl;
          // }}
          type='text'
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxiliary>
      // </div>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);

// Removed StyleSheet
// import Radium from "radium";
// const style = {
//   "@media (min-width : 500px)": {
//     width: "450px",
//   },
// };
// export default Radium(person); no longer wrap with radium
// style={style} not being invoked
