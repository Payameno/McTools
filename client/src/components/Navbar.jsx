import React from "react";

const Navbar = (props) => {
  return (
    <header>
      <div className="logo">M C T O O L S</div>
      <nav>
        <ul className="nav_links" >
          <li><a href="#">Machinery</a></li>
          <li><a href="#">Inspection</a></li>
          <li><a href="#">Handtools</a></li>
        </ul>
      </nav>
      <a className="login" href="#"><button>Log in</button></a>
    </header>
  )
}

export default Navbar;