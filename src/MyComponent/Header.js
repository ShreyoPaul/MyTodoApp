import React from 'react';
import Prototypes from 'prop-types';
import { Avatar, Grid } from "@nextui-org/react";
import {Link} from "react-router-dom";

export default function Header(props) {
  let dp ={
    width : "100px",
    height : "auto"
  }
  return (
<nav className="navbar navbar-expand-lg bg-light">

  <div className="container-fluid">
  {/* <Grid.Container className='dp' style={dp}>
  <  Grid >
    <Avatar
          size="lg"
          src="https://i.pravatar.cc/"
          color="primary"
          bordered zoomed
    />
</Grid></Grid.Container> */}
<Link class="navbar-brand" to="#">
      <img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"/>
    </Link>

    <Link className="navbar-brand" to="/">{props.title}</Link>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
      {props.searchBar ?<form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> : ""}
    </div>
  </div>
</nav>

  )
}

Header.defaultProps = {
    title : "MyToDos",
    // searchBar : true
}

Header.prototypes = {
title : Prototypes.string,
searchBar : Prototypes.bool.isRequired
}

