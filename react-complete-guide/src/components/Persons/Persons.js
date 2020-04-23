import React, { PureComponent } from "react";
import Person from "./Person/Person";
// import { Component } from "react";

// const persons = (props) =>
class Persons extends PureComponent {
  //purecomponent same result functio of shouldComponentUpdate()
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps");
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Persons.js] shouldComponentUpdate");
  //   if (
  //     nextProps.persons != this.props.persons ||
  //     nextProps.clicked != this.props.clicked ||
  //     nextProps.changed != this.props.changed
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // return true;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Person.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Person.js] componentDidUpdate ");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }
  render() {
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((i, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={i.name}
          age={i.age}
          key={i.id}
          changed={(event) => this.props.changed(event, i.id)}
          // isAuth={this.props.isAuthenticated}
        />
      );
    });
  }
}

export default Persons;
