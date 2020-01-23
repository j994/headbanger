import React from 'react';
import './header.css'

const Header = ({routeChange}) => {
    return (
        <nav className="pa3 pa4-ns">
            <div className="route link dim black b f6 f5-ns dib mr3" onClick={() => routeChange('home')}>Headbanger Brewery</div>
            <div className="route link dim gray    f6 f5-ns dib mr3" onClick={() => routeChange('about')}>About Us</div>
            <div className="route link dim gray    f6 f5-ns dib mr3" onClick={() => routeChange('beer')}>Our Beer</div>
            <div className="route link dim gray    f6 f5-ns dib mr3" onClick={() => routeChange('merch')}>Merch</div>
            <div className="route link dim gray    f6 f5-ns dib" onClick={() => routeChange('contact')}>Contact</div>
        </nav>
    )
}

export default Header;