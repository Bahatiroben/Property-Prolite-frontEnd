import React from 'react';

const SideBar = () => {
    return(
        <div className="side-bar box">
        <div className="box">
        <a href="myposts.html"><button className="primary button side">All Properties</button></a>
        <a href="myposts.html"><button className="primary button side">My Properties</button></a>
        <a href="myposts.html"><button className="primary button side">Add Property</button></a>  
        </div>
        </div>
    
    )
}

export default SideBar;