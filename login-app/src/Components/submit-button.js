//For the SubmitButton construction, only React was imported
//into this file.

import React from "react";

//This creates the SubmitButton componant that will be used in
//the login-card.js file to complete the Login Form.
export default class SubmitButton extends React.Component {
    render() {
        return <button className="btn">Submit</button>;
    }
}