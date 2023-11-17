//Below imports React and the SubmitButton into the login-card-js file.
//This allows the login-card.js file to use the SubmitButton to create the
//login form that will be seen in the user interface.

import React from "react";
import SubmitButton from "./submit-button";

//Creates the component that will translate as the Login Form on 
//the user interface. The SubmmitButton is placed in the card-footer div
//so that it can be placed underneath the other content in the form.
export default class LoginCard extends React.Component {
    render() {
        return (
        <div className="card w-80">
            <div className="card-header">
               <h3 align="center">Login</h3> 
            </div>
            <div className="card-body">
                Username:
                <input type="text" placeholder="@userexample"/>
            </div>
            <div className="card-body">
                Password:
                <input type="text" placeholder="Example0123"/>
            </div>
            <div className="card-footer">
                <SubmitButton />
            </div>
        </div>

        );
        
        
    }
}

