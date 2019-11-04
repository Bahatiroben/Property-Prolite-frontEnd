import React from 'react';
import { Route , Switch } from 'react-router-dom';
import AboutPage from './common/AboutPage'
import HomePage from './home/Home';
import Header from './common/Header';
import NotFound from './common/NotFound';
import PropertiesPage from './Properties/PropertyComponent';
import LoginPage from './Login';
import RegisterPage from './register';
import SignOut from './common/signOut';

const App = () => {
    return(
        <div>
            <Header/>
            <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/properties" component={PropertiesPage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/signup" component={RegisterPage}/>
            <Route path="/logout" component={SignOut}/>
            <Route component={NotFound}/>
            </Switch>
        </div>
    )
}

export default App;