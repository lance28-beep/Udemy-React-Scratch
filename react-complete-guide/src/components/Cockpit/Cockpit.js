import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  // STATIC another way of using context//alternative ways for functional
  const authContext = useContext(AuthContext);

  console.log("[Cockpit.js] authCOntex " + authContext.authenticated);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    //Https request. . . .
    // setTimeout(() => {
    //   alert("Saved data to cloud! ");
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log("[Cockpit.js cleanup work in useEffect]");
    };
  }, []);
  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js 2nd cleanup work in useEffect]");
    };
  }, []);

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}> This is really working!</p>
      <button
        // style={style}
        ref={toggleBtnRef}
        onClick={props.clicked}
        className={btnClass}
        // onClick={() => this.switchNameHandler("Janet")}
      >
        Toggle Person
      </button>
      {/* // STATIC another way of using context//alternative ways for functional */}
      {<button onClick={authContext.login}> Log In</button>}
      {/* <AuthContext.Consumer>
        {(context) => <button onClick={context.login}> Log In</button>}
      </AuthContext.Consumer> */}
      {/* <button onClick={props.login}> Log In</button> */}
    </div>
  );
};

export default React.memo(cockpit);
