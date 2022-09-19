import React, { Component } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
 
 
function Navigation(props) {
const userData = props.isData
const Navigate =  useNavigate()
console.log(userData)
    let islogin=false
    if(userData.key){
        islogin=true
    }
    function logout()
    {
        localStorage.clear();
        Navigate('/Login')
    }
    const userProfile=()=>{
        if(islogin){
            return(
                
                <NavDropdown style={{color:"Red"}}>
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
               <NavDropdown.Item><NavLink to="/PostAd">PostAd</NavLink></NavDropdown.Item> 
            </NavDropdown>
            )
        }
    }
    return ( 
        <Navbar bg="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/">Home</NavLink>
                    {userProfile()}
                        {/* <NavDropdown title={"UserInfo"} id="username">
                            <LinkContainer to='/profile'>
                                <NavDropdown.Item>
                                    Profile
                                </NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown> */}
                    
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/Login">Login</NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/Registration">Registration</NavLink>
                    
 
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    )
 
 }
 
export default Navigation;

 