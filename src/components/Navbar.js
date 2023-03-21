import "./Navbar.css";
import { useState,useRef } from "react";
import left from "./assets/left-arrow.png";
import right from "./assets/right-arrow.png";
import open from "./assets/open.png";
import {Link} from 'react-router-dom';
function Navbar() {
  const containerRef = useRef(null);

  function scrollLeft() {
    containerRef.current.scrollLeft -= 300; // Change the value to adjust the scroll speed
  }

  function scrollRight() {
    containerRef.current.scrollLeft += 300; // Change the value to adjust the scroll speed
  }

  
  const [showDiv, setShowDiv] = useState(false);

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };

  const linkStyle = {
    textDecoration: 'none' // remove underline decoration
  };

  return (
    <div className="nav-section">
      {showDiv && (
        <div>
          <img onClick={scrollLeft} className="left-btn" src={left} alt="" />
          <img onClick={scrollRight} className="right-btn" src={right} alt="" />
        </div>
      )}
      {showDiv && (
        <div className="wrapper" ref={containerRef}>
          <Link style={linkStyle} to="/">
            <div className="box box-1"><p>Home</p></div>
          </Link>
          <Link style={linkStyle} to="/center">
            <div className="box box-2"><p>Center Block</p></div>
          </Link>
          <Link style={linkStyle} to="/west">
            <div className="box box-3"><p>West Block</p></div>
          </Link>
          <Link style={linkStyle} to="/east">
            <div className="box box-4"><p>East Block</p></div>
          </Link>
          <div className="box box-5"><p>Auditorium</p></div>
          <div className="box box-6"><p>Conference Hall</p></div>
          <div className="box box-7"><p>Boys hostel</p></div>
          <div className="box box-8"><p>Canteen</p></div>
          <div className="box box-9"><p>Mess</p></div>
          <div className="box box-10"><p>Class Room</p></div>
          <div className="box box-11"><p>Play ground</p></div>
          <div className="box box-12"><p>Basketball court</p></div>
        </div>
      )}
      <div>
        <img onClick={toggleDiv} className="toggle-menu" src={open} alt="" />
      </div>
    </div>
  );
}
export default Navbar;
