import React from 'react';
//components
import Logo from './Logo/Logo';
import UserArea from './UserArea/UserArea';

import './Header.css';
const Header = () => (
    <div className="header">
        <Logo/>
        <h1>My App's name</h1>
        <UserArea/>
    </div>
);

export default Header;