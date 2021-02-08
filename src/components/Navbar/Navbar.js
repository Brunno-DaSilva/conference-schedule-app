import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar__logo">
        <img
          src="https://res.cloudinary.com/duprwuo4j/image/upload/v1612825569/WHITECONFERENCE_CODE_gruvhv.png"
          alt="ConfCode"
        />{" "}
        <p>ConfCode</p>
      </div>
      <div className="Navbar__items">
        <p>Home</p>
        <p>Schedule</p>
        <p>Blog</p>
        <p>Pages</p>
        <p>Contact</p>
      </div>
      <div className="Navbar__button">
        <button type="button">Buy Ticket</button>
      </div>
    </div>
  );
};

export default Navbar;
