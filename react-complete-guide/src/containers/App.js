// import React, { useState } from "react"; //uses for functional components react hooks
import React, { Component } from "react"; /// use for class base components
import classes from "./App.css";
// import Radium, { StyleRoot }  from "radium";
// import Person from "../Persons/Person/Person";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Auxiliary from "../hoc/Auxiliary";
import AuthContext from "../context/auth-context";
// import { render } from "react-dom";

class App extends Component {
  //component lifecycle
  //1.constructor (props)
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  // const app = (props) => { //use for functional components
  //   const [personState, setPersonsState] = useState({
  state = {
    persons: [
      { id: "aa1", name: "Lance", age: 25 },
      { id: "aa2", name: "Janet", age: 22 },
      { id: "aa3", name: "Mark", age: 27 },
    ],
    otherState: "Some Other Value",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false,
  };
  //2.getDerivedStateFromProps(props,state)
  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDeriveStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  } // console.log(personState);
  // const switchNameHandler = () => {  //use for functional components
  //   //  console.log("was clicked");
  //   setPersonsState({  //use for functional components
  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons: [
  //       { name: "Rolando", age: 25 },
  //       { name: newName, age: 22 },
  //       { name: "Mark", age: 23 },
  //     ],
  //   });
  //   // persons: [
  //   //   { name: "Rolando", age: 25 },
  //   //   { name: "Janet", age: 22 },
  //   //   { name: "Mark", age: 23 },
  //   // ],
  //   // otherState: personState.otherState,
  // };

  // componentDidMount(){
  //   console.log('[App.js] componentDidMount')
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }
  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    ///setting the setState correctly
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      };
    });

    /// const person = Object.assign({}, this.state.persons[personIndex]);
    //   this.setState({
    //     persons: [
    //       { name: "Rolando", age: 25 },
    //       { name: event.target.value, age: 22 },
    //       { name: "Mark", age: 23 },
    //     ],
    //   });
    // };
  };
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; /// same code of const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    return this.setState({ persons, persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    // const style = {
    console.log("[App.js] render");
    //   backgroundColor: "green",
    //   color: "white",
    //   font: "inherit",
    //   border: "1px solid bule",
    //   padding: "8px",
    //   cursor: "pointer",
    // };

    let person = null;

    if (this.state.showPersons) {
      person = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
      // style.backgroundColor = "red";
    }
    return (
      // <Auxiliary classes={classes.App}>
      <Auxiliary>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler,
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
              login={this.loginHandler}
            />
          ) : null}
          {person}
        </AuthContext.Provider>
      </Auxiliary>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h2",null, "this will work also in your browser")
    // );
  }
}

export default withClass(App, classes.App);
// export default Radium(App);
/* <StyleRoot></StyleRoot> */ ///removed wrapper to help you enable meadia query
// ":hover": {
//   backgroundColor: "lightgreen",
//   color: "black",
// },
// style[":hover"] = {
//   backgroundColor: "#D21F3C",
//   color: "black",
// };
//_---------------------------------------------------------------------------------
// import React, { Component } from "react";
// import Validation from "./Validation/Validation";
// import Char from "./Char/Char";
// import { render } from "react-dom";
// import char from "./Char/Char";

// class App extends Component {
//   state = {
//     userInput: "",
//   };

//   inputChangeHandler = (event) => {
//     this.setState({ userInput: event.target.value });
//   };

//   deleteCharHandler = (index) => {
//     const text = this.state.userInput.split("");
//     text.splice(index, 1);
//     const updatedText = text.join("");
//     this.setState({ userInput: updatedText });
//   };
//   render() {
//     const charList = this.state.userInput.split("").map((ch, index) => {
//       return (
//         <Char
//           character={ch}
//           key={index}
//           clicked={() => this.deleteCharHandler(index)}
//         />
//       );
//     });
//     return (
//       <div>
//         <ul>
//           <li>
//             Create an input field(in App component) with a change listener which
//             outputs the length of the entered text below it(e.g. in a
//             paragraph),
//           </li>
//           <li>
//             Create a new component (=> ValidationComponent) which receives the
//             length as prop.
//           </li>
//           <li>
//             Inside the ValidationComponent either output "Text too short" or
//             "Text long enough" depending on the text length (e.g take 5 as a
//             minimum length)
//           </li>
//           <li>
//             Create another component(=> CharComponent) and style it as an inline
//             box (=> display:inline-block, padding:16px, text-align:center,
//             margin:16px, border:1px solid black)
//           </li>
//           <li>
//             REnder a list of CharComponents where each CharComponent receives a
//             different letter of the entered text (in the initial input field) as
//             a prop.
//           </li>
//           <li>
//             When you click a CharComponent,it should be removed from the entered
//             text.
//           </li>
//         </ul>
//         <p>Hint! Keep in mind that JavaScript strings are basically arrays</p>
//         <hr />
//         <input
//           type='text'
//           onChange={this.inputChangeHandler}
//           value={this.state.userInput}
//         />
//         <p>{this.state.userInput}</p>
//         <Validation inputLength={this.state.userInput.length} />
//         {charList}
//       </div>
//     );
//   }
// }

// export default App;
//----------------------------------------------------------------

// state = {
//   persons: [
//     { name: "Lance", age: 25 },
//     { name: "Janet", age: 22 },
//     { name: "Mark", age: 27 },
//   ],
//   otherState: "Some Other Value",
// };

// switchNameHandler = () => {
//   // console.log("was clicked");
//   this.setState({
//     persons: [
//       { name: "Rolando", age: 25 },
//       { name: "Janet", age: 22 },
//       { name: "Mark", age: 23 },
//     ],
//   });
// };

// notes:
//state and props
//-every components receives props
//React 16.8 you can manage state in every component

// class base components
// state
// setState - manipulate.
// -this feature is only available in class base components,
// class keyword which extend component imported from React.

// Functional Components - React Hooks
// -due ti React version 16.8
// useState

//stateless vs. stateful Components
//stateful Components
//-is a component that manages state,no matter if its using the usesState hook or
//-class based approach with the state property
//stateless Components
//example Person.js  - stateless components because it has no internal state management
//this also called dumb,presentational components - best practice

// 2 ways passing method reference beteen componets
// onClick={() => this.switchNameHandler("Ronilyn");
// this.switchNameHandler.bind(this, "Janet");  add onClick={props.click} to other file as ref extension

// import React, { Component } from "react"; /// use for class base components
// import "./App.css";
// import UserInput from "./UserInput/UserInput";
// import UserOutput from "./UserOutput/UserOutput";
// import Person from "./Person/Person";
// import { render } from "react-dom";

// class App extends Component {
//   state = {
//     userName: "superLance",
//   };

//   inputChangeHandler = (event) => {
//     this.setState({
//       userName: event.target.value,
//     });
//   };
//   render() {
//     return (
//       <div className='App'>
//         <ol>
//           <li>Create two new components:UserInput and UserOutput</li>
//           <li>
//             UserInput should hold an input element,UserOutput two paragraphs
//           </li>
//           <li>
//             Output multiple UserOutput components in the App component (any
//             paragraph texts of your choice)
//           </li>
//           <li>
//             Pass a username (of your choice) to userOutput via props and display
//             it there
//           </li>
//           <li>
//             Add state to the App component(=> the userName) and pass the
//             username to the UserOutput component
//           </li>
//           <li>Add method to manipulate the state (=> event-handler method</li>
//           <li>
//             Pass the event-handler method reference to the UserInput component
//             and bind it to the input-change event
//           </li>
//           <li>
//             Ensure that the new input entered by the user overwrites the old
//             username passed to UserOutput
//           </li>
//           <li>
//             Add two-way-binding to your input (In UserInput) to also display the
//             starting username
//           </li>
//           <li>
//             Add styling of your choice to your components / element in the
//             components - both with inline styles and stylesheets
//           </li>
//         </ol>
//         <UserInput
//           changed={this.inputChangeHandler}
//           currentName={this.state.userName}
//         />
//         <UserOutput userName={this.state.userName} />
//         <UserOutput userName={this.state.userName} />
//         <UserOutput userName={this.state.userName} />
//       </div>
//     );
//   }
// }

// export default App;

// {this.state.showPersons ? ( //ternary expression
//   <div>
//     <Person
//       name={this.state.persons[0].name}
//       age={this.state.persons[0].age}
//     />
//     <Person
//       name={this.state.persons[1].name}
//       age={this.state.persons[1].age}
//       click={this.switchNameHandler.bind(this, "Ronilyn")}
//       changed={this.nameChangeHandler}
//     >
//       My Hobbies: Racing
//     </Person>
//     <Person
//       name={this.state.persons[2].name}
//       age={this.state.persons[2].age}
//     />
//   </div>
// ) : null}
// {/* {this.state.persons.map((i, index) => {
//   return (
//     <Person
//       click={() => this.deletePersonHandler(index)}
//       name={i.name}
//       age={i.age}
//       key={i.id}
//       changed={(event) => this.nameChangeHandler(event, i.id)}
//     />
//   );
// })} */}
// <div>
//   {/* <Person
//     name={this.state.persons[0].name}
//     age={this.state.persons[0].age}
//   />
//   <Person
//     name={this.state.persons[1].name}
//     age={this.state.persons[1].age}
//     click={this.switchNameHandler.bind(this, "Ronilyn")}
//     changed={this.nameChangeHandler}
//   >
//     My Hobbies: Racing
//   </Person>
//   <Person
//     name={this.state.persons[2].name}
//     age={this.state.persons[2].age}
//   /> */}
// </div>
