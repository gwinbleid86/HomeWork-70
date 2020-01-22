import React from 'react';

import Navbar from './components/UI/Nav/Navbar';

import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import MovieInfo from "./containers/MovieInfo/MovieInfo";
import Home from "./containers/Home/Home";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/shows/:id" exact component={MovieInfo}/>
                <Route render={() => <h1>Not Found</h1>}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
