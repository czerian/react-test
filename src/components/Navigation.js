import React from 'react'
import { NavLink } from "react-router-dom";


const Navigation = () => {
    return (
        <div className="navigation">
            <ul className="nav">
            <li><NavLink exact to="/">Lifting State</NavLink></li>
            <li><NavLink to="/rest-fetch-api">REST Fetch API</NavLink></li>
            <li><NavLink to="/rest-axios">REST Axios</NavLink></li>
        </ul>
        </div>
    )
}

export default Navigation;
