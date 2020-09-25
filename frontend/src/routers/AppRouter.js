import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  
  import { NavegationBar } from '../components/ui/NavegationBar';
//   import { Footer } from '../components/ui/Footer';

import { ArchivedScreen } from '../components/ui/ArchivedScreen';
import { HomeScreen } from '../components/ui/HomeScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavegationBar />

                <Switch>
                    <Route exact path="/Archived" component={ArchivedScreen} />

                    <Route path="/" component={HomeScreen} />

                </Switch>

                {/* <Footer /> */}
            </div>
        </Router>
    )
}
