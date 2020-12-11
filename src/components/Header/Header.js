import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
    return (
        <div className="header">
            <h1>Header</h1>
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/480px-Facebook_logo_%28square%29.png"
                 alt="Facebook Logo"/>
            </div>
            <div className="header__input">
                <SearchIcon />
                <input type="text" placeholder="Search Facebook" />
            </div>
        </div>
    );
};

export default Header;