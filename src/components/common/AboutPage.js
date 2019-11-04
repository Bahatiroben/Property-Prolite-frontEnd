import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return(
    <div>
        <h1>About</h1>
        <p>React, reduc, react router for utls and responsive we applications</p>
        <Link to="/" className="btn btn-primary btn-lg">
            Home
        </Link>
    </div>)
}

export default AboutPage;