import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  
  import { NavegationBar } from '../components/ui/NavegationBar';
//   import { Footer } from '../components/ui/Footer';

  import { TodoApp } from '../components/todoApp/TodoApp.js';
  import { Archived } from '../components/ui/Archived.js';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavegationBar />

                <Switch>
                    <Route path="/Archived" component={Archived} />

                    <Route path="/" component={TodoApp} />

                </Switch>

                {/* <Footer /> */}
            </div>
        </Router>
    )
}
