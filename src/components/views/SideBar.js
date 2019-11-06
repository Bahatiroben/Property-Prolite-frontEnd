import React from 'react';
import { Link } from 'react-router-dom'

const SideBar = () => {
    return(
        <div className="side-bar box">
        <div className="box">
        <Link to="/properties" ><button className="primary button side">All Properties</button></Link>
        <Link to="/add"><button className="primary button side">Add Property</button></Link>  
        </div>
        </div>
    )
}

export default SideBar;