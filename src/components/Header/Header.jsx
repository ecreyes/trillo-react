import React from 'react';
import { Logo, UserNav, SearchBar } from '../index';

export const Header = () => {
    return (
        <header className='header'>
            <Logo/>
            <SearchBar/>
            <UserNav/>
        </header>
    )
}