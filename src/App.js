import React from "react";
import SignUp from "./components/SignUp";
import { BrowserRouter } from "react-router-dom";
import logo from './components/logo.png'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
            <header className="App-header">
            <img src={logo} alt="logo image"/>
            </header><br/><br/>
                <SignUp />
            </div>
        </BrowserRouter>
    );
}

export default App;
