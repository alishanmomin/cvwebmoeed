import React, { useState, useEffect, Fragment, useRef } from "react";
import Scrollspy from "react-scrollspy";
import avatar from '../../assets/images/Linkitsoft-profile-CV-05.png'

const Navbar = ({ item }) => {

const [showMenu, setShowMenu] = useState(false)

const componentRef = useRef()

const closeSidebar = (e) => {
    if(componentRef){
       if (!componentRef.current.contains(e.target)) {
        setShowMenu(false)
       }
    }      
}

useEffect(() => {
   document.body.addEventListener("click", closeSidebar, true)
  }, [])

  return (
      <Fragment>
        <div className="hitn">
            {!showMenu  && <i className="fas fa-bars" onClick={() => setShowMenu(!showMenu)}></i>}
        </div>        
        <div className={showMenu ? "subMenuActive" : "subMenuDisappear"} onClick={(e) => closeSidebar(e)} ref={componentRef}>
            {/* <i className="fas fa-times" onClick={() => setShowMenu(!showMenu)}></i> */}
            <div className="leftbar_items" >
                <ul onClick={() => setShowMenu(false)}>
                    <li><span>-1</span><a href="#section-1">Hello</a></li>
                    <li><span>-2</span><a href="#section-2">About</a></li>
                    <li><span>-3</span><a href="#section-3">Mindsets</a></li>
                    <li><span>-4</span><a href="#section-4">Clients</a></li>
                    <li><span>-5</span><a href="#section-5">Projects</a></li>
                    <li><span>-6</span><a href="#section-6">Skills</a></li>
                    <li><span>-7</span><a href="#section-7">Contact</a></li>
                </ul>
            </div>
        </div>
    <div className="leftbar">
        <div className="leftbar_top">
            <img alt="" src={avatar} />
            <p>Zohaib</p>
        </div>
        <div className="leftbar_items">
            <ul>
                <Scrollspy 
                    className="scrollspy" 
                    items={ ['section-1', 'section-2', 'section-3', 'section-4', 'section-5', 'section-6', 'section-7'] } 
                    currentClassName="isCurrent">
                <li><span>-1</span><a className="hover-underline-animation" href="#section-1">Hello</a></li>
                <li><span>-2</span><a className="hover-underline-animation" href="#section-2">About</a></li>
                <li><span>-3</span><a className="hover-underline-animation" href="#section-3">Mindsets</a></li>
                <li><span>-4</span><a className="hover-underline-animation" href="#section-4">Clients</a></li>
                <li><span>-5</span><a className="hover-underline-animation" href="#section-5">Projects</a></li>
                <li><span>-6</span><a className="hover-underline-animation" href="#section-6">Skills</a></li>
                <li><span>-7</span><a className="hover-underline-animation" href="#section-7">Contact</a></li>
                </Scrollspy>
            </ul>
        </div>
    </div> 
      
    </Fragment>
  );
};

export default Navbar;
