import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../../stylesheets/header.css"
import name from "../../../assets/FREN.png"
import { Link } from "react-router-dom";

const Header = () =>{

    //Home is going to be a car logo 

    //
    return(
        <>
        <MobileHeader/>
        <div className="header">
            
            <div className="left-header">
            <Link to={'/'}> <img className="name-of-website" src={name}></img></Link>
            <Link to={'/Buy'} className="buy-logo"><p>Buy</p></Link>
            <Link to={"/Research"} className="buy-logo">Research</Link>
            <Link to={'/Finance'} className="buy-logo"><p>Finance</p></Link>
            </div>
            <div className="right-header">
                <a>Saved Cars</a>
                <a className="signin">SignIn</a>
            </div>
        </div>
        </>
    )
}

const MobileHeader = () =>{
    const [sideBar, setSideBar] = useState(false)

    function handleSideBar(){
        setSideBar(true)
    }
    function exitSideBar(){
        setSideBar(false)
    }

    const RenderSideBar = () =>{
        

        return (
            <div className="mobile-header-side-bar">
                <div className="mobile-header-icon"><i onClick={exitSideBar}class="fa-solid fa-circle-xmark"></i></div>
                <a className="signin">SignIn</a>
                <Link to={'/Buy'} className="header-options"><p>Buy</p></Link>
                <Link to={"/Research"} className="header-options">Research</Link>
                <Link to={'/Finance'} className="header-options"><p>Finance</p></Link>
                <a className="saved-cars">Saved Cars</a>
                
            </div>
        )
    }

    return(
        <div className="mobile-header">
            <div className="left-header">
            <Link to={'/'}> <img className="name-of-website" src={name}></img></Link>
            </div>
            <div className="right-header">
                <i class="fa-solid fa-bars" onClick={handleSideBar}></i>
            </div>
            {
                sideBar ? <RenderSideBar/> : <></>
            }
        </div>
    )
}

export default Header