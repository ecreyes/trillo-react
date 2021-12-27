import React from 'react';
import { FaSearch } from "react-icons/fa";

export const SearchBar = () => {
    return (
        <form action="#" className='search'>
            <input type="text" className="search__input" placeholder="Search hotels" />
            <button className="search__button">
                <FaSearch className="search__icon" />
            </button>
        </form>
    )
}