import React from "react"
import userImg from "../../assets/img/user.jpg"
import { FaBookmark, FaComments } from "react-icons/fa";

export const UserNav = () => {
    return (
        <nav className='user-nav'>
            <div className="user-nav__icon-box">
                <FaBookmark className="user-nav__icon" />
                <span className="user-nav__notification">7</span>
            </div>
            <div className="user-nav__icon-box">
                <FaComments className="user-nav__icon" />
                <span className="user-nav__notification">13</span>
            </div>
            <div className="user-nav__user">
                <img src={userImg} alt="User" className="user-nav__user-photo" />
                <span className="user-nav__user-name">Jonas</span>
            </div>
        </nav>
    )
}