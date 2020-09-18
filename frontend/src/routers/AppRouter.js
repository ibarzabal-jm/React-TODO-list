import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { Archived } from '../components/ui/Archived';
import { Home } from '../components/ui/Home';
import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />

                <Switch>
                    <Route path="/Archived" component={Archived} />

                    <Route path="/" component={Home} />

                </Switch>
            </div>
        </Router>
    )
}
