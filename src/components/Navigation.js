import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css'

// Link -> <a href 랑은 다르게 페이지를 새로고침 하지 않음
function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to={{
                pathname: "/about",
                state: {
                    fromNavigation: true
                }
            }}>About</Link>
        </div>
    );  
}

export default Navigation;