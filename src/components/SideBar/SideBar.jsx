import React from 'react';
import { FaHome, FaPlaneDeparture, FaKey, FaMap } from "react-icons/fa";

export const SideBar = () => {
    return (
        <nav className='sidebar'>
            <ul className='side-nav mt-m'>
                <li className="side-nav__item side-nav__item--active">
                    <a href="#/" className="side-nav__link">
                        <FaHome className="side-nav__icon" />
                        <span>Hotel</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="#/" className="side-nav__link">
                        <FaPlaneDeparture className="side-nav__icon" />
                        <span>Flight</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="#/" className="side-nav__link">
                        <FaKey className="side-nav__icon" />
                        <span>Car rental</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="#/" className="side-nav__link">
                        <FaMap className="side-nav__icon" />
                        <span>Tours</span>
                    </a>
                </li>
            </ul>

            <div className="legal mb-sm">
                &copy; 2017 by trillo. All rights reserved.
            </div>
        </nav>
    )
}