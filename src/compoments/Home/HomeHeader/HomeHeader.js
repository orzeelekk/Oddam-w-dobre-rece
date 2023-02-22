import React from 'react';
import "./_homeHeader.scss"
import { Link } from "react-router-dom";
// lepsza nazwa góra
import { Link as LinkTo } from "react-scroll";

const HomeHeader = () => {
    return (
        <>
            <header className="HeaderHeader">
                <div className="HeaderHeader_container container">
                        <ul className="HeaderHeader_login">
                            <li>
                                <Link className="login_element_link" to="/Login">Log in</Link>
                            </li>
                            <li>
                                <Link className="login_element_link" to="/Register">Create an account</Link>
                            </li>
                        </ul>
                        <ul className="HeaderHeader_nav">
                            <li className="nav_element">
                                <LinkTo
                                    className="nav_element_link"
                                    activeClass="active"
                                    to="start"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                >
                                    Start
                                </LinkTo>
                            </li>
                            <li className="nav_element">
                                <LinkTo
                                    className="nav_element_link"
                                    activeClass="active"
                                    to="whatIsItAbout"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                >
                                    What is it about
                                </LinkTo>
                            </li>
                            <li className="nav_element">
                                <LinkTo
                                    className="nav_element_link"
                                    activeClass="active"
                                    to="aboutUs"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                >
                                    About us
                                </LinkTo>
                            </li>
                            <li className="nav_element">
                                <LinkTo
                                    className="nav_element_link"
                                    activeClass="active"
                                    to="foundation"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                >
                                    Foundation and organization
                                </LinkTo>
                            </li>
                            <li className="nav_element">
                                <LinkTo
                                    className="nav_element_link"
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                >
                                    Contact
                                </LinkTo>
                            </li>
                        </ul>
                </div>
            </header>
        </>
    );
};

export default HomeHeader;