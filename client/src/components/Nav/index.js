import React from "react";
import { NavLink } from 'react-router-dom';
import "./style.css";

function Nav() {
  return (
     <div>
        <h1> Google Books Search </h1>
         <ul className="nav nav-tabs">
            <li className="nav-item">
               <NavLink to='/' className="nav-link " exact activeClassName="selected">
                  Search
               </NavLink>
            </li>
            <li className="nav-item">
               <NavLink to='/saved' className="nav-link" exact activeClassName="selected">
                  Saved
               </NavLink>
            </li>
         </ul>
     </div>
  );
}

export default Nav;
