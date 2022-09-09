import React, { useState, useEffect, Fragment } from "react";
import Scrollspy from "react-scrollspy";


const Navbar = ({ item }) => {

const [showMenu, setShowMenu] = useState(false)
const [clickIndex, setClickIndex] = useState(1)
      
  return (
      <Fragment>
        <div className="hitn">
            {!showMenu  && <i className="fas fa-bars" onClick={() => setShowMenu(!showMenu)}></i>}
        </div>        
        <div className={showMenu ? "subMenuActive" : "subMenuDisappear"}>
            <i className="fas fa-times" onClick={() => setShowMenu(!showMenu)}></i>
            <div className="leftbar_items">
                <ul>
                    <li><span>-1</span><a href="#section-1">About Mazil</a></li>
                    <li><span>-2</span><a href="#section-2">Background And Skills</a></li>
                    <li><span>-3</span><a href="#section-3">Team (photos)</a></li>
                    <li><span>-4</span><a href="#section-4">Previous Clients</a></li>
                    <li><span>-5</span><a href="#section-5">Social Media Links</a></li>
                </ul>
            </div>
        </div>
    <div className="leftbar">
        <div className="leftbar_top">
            <img alt="" src="https://uploads-ssl.webflow.com/62c55bae09e0c918864f54ef/62c567965f116e0fc0d08146_favicon.png" />
            <p>Mazil</p>
        </div>
        <div className="leftbar_items">
            <ul>
                <Scrollspy 
                    className="scrollspy" 
                    items={ ['section-1', 'section-2', 'section-3', 'section-4', 'section-5'] } 
                    currentClassName="isCurrent">
                <li><span>-1</span><a  href="#section-1">About Mazil</a></li>
                <li><span>-2</span><a  href="#section-2">Background And Skills</a></li>
                <li><span>-3</span><a  href="#section-3">Team (photos)</a></li>
                <li><span>-4</span><a  href="#section-4">Previous Clients</a></li>
                <li><span>-5</span><a  href="#section-5">Social Media Links</a></li>
                </Scrollspy>
            </ul>
        </div>
    </div> 
      
    </Fragment>
  );
};

export default Navbar;
