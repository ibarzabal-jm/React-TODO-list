import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { Archived } from '../components/ui/Archived';
import { Home } from '../components/ui/Home';
import { NavegationBar } from '../components/ui/NavegationBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavegationBar />

                <Switch>
                    <Route path="/Archived" component={Archived} />

                    <Route path="/" component={Home} />

                </Switch>
            </div>
        </Router>
    )
}
