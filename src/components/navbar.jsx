import React, { Component } from 'react';

//Stateless Functional component
const NavBar =({totalCounters})=> {
    return (
        <nav className="navbar bg-body-tertiary">
         <div className="container-fluid">
             <a class="navbar-brand" >
                 Navbar{""}
                 <span className="badge badge-pill badge-secondary">
                     {totalCounters}
                 </span>
                 </a>
               </div>
               </nav>
     );
};


export default NavBar;