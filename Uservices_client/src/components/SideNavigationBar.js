import React, { Component } from "react";
import logo from '../assets/logo.png';
import '../style.css';


class SideNavigationBar extends Component {

    render() {

        return (
            <div>
                <div className="vertical-nav " id="sidebar">
                    <div className="py-4 px-3 mb-4 ">
                        <div className="media d-flex align-items-center"><img src={logo} alt="Uservices Logo" width="230" className="mr-3" style={{margin: "auto"}} />
                        </div>
                    </div>

                    <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">Main</p>

                    <ul className="nav flex-column bg-white mb-0" style={{paddingLeft:"12px"}}>
                        <li className="nav-item">
                            <a href="/login" className="nav-link text-dark ">
                                Login
                            </a>
                            <a href="/profile" className="nav-link text-dark  ">
                                My Profile
                            </a>
                            <a href="#" className="nav-link text-dark ">
                                My Calendar
                            </a>
                            <a href="#" className="nav-link text-dark  ">
                                Favorities
                            </a>
                            <a href="#" className="nav-link text-dark  ">
                                Logout
                            </a>

                        </li>

                    </ul>

                    <p className="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">Services</p>

                    <ul className="nav flex-column bg-white mb-0" style={{paddingLeft:"12px"}}>
                        <li className="nav-item">
                            <a href="/pet" className="nav-link text-dark ">
                                Pet
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/housekeep" className="nav-link text-dark ">
                                Housekeep
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/beauty" className="nav-link text-dark ">
                                Beauty
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/applianceRepair" className="nav-link text-dark ">
                                Appliance Repair
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/houseRepair" className="nav-link text-dark ">
                                House Repair
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/personalCare" className="nav-link text-dark ">
                                Personal Care Assistance
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/healthCare" className="nav-link text-dark ">
                                Health Care
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/otherServices" className="nav-link text-dark ">
                                Others
                            </a>
                        </li>
                    </ul>
                    <p className="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">Help</p>

                    <ul className="nav flex-column bg-white mb-0" style={{paddingLeft:"12px"}}>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-dark ">
                                Contact Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-dark ">
                                Newsletter
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-dark ">
                                Subscribe
                            </a>
                        </li>
                    </ul>
                </div>
            </div>


        )
    }
}


export default SideNavigationBar;
