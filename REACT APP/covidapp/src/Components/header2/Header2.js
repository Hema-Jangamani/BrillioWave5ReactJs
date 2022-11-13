import React,{ useState } from 'react';
import './Header2.css'
const Header = () => {
    let [inputValue,setInputValue]=useState("");
    const searchCountry = () => {
        console.log(inputValue);
        localStorage.setItem('searchValue',inputValue);
    }
    return (
        
            <nav className="navbar navbar-expand-lg navbar-dark " style={{position:'fixed',top:'0',width:'100%',display:'block',zIndex:'9999',backgroundColor:'#000'}}>
                
                <div id="header" className="container-fluid">
                    <a className="navbar-brand" to="#">CovidTrack</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="">Home</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <form className="d-flex" action="#">
                                <input className="form-control me-2" value={inputValue} onChange={(e) =>setInputValue(e.target.value) } type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="button" onClick={searchCountry}>Search</button>
                            </form>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link">Registration</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Login</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        
    );
}

export default Header;

