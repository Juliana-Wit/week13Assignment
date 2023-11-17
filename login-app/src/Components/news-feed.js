//Below connects all of the elements and components that are needed 
//to create the finished look of the user interface.

import React from "react";
import Navigation from "./navigation";
import LoginCard from "./login-card";

export default class NewsFeed extends React.Component {
    render() {
        return (
            <div className="container">
                <Navigation />
                <LoginCard />
            </div>
        );
    }
}
