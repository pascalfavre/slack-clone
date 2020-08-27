import React from 'react'
import '../styles/Header.css';
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import SearchIcon from "@material-ui/icons/Search";
import HelpIcon from "@material-ui/icons/Help";

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <Avatar 
                    className="header__avatar"
                    alt=""
                    src=""
                    /* alt={user?.displayName}
                    src={user?.photoUrl} */
                />
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                <SearchIcon />
                <input placeholder="Search on this slack clone" />
            </div>
            <div className="header__right">
                <HelpIcon />
            </div>
        </div>
    )
}

export default Header
