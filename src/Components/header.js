import React from 'react';

const Header = ({routeChange}) => {
    return (
        <nav className="pa3 pa4-ns">
            <div className="link dim black b f6 f5-ns dib mr3" onClick={() => routeChange('home')}>Headbanger Brewery</div>
            <div className="link dim gray    f6 f5-ns dib mr3" onClick={() => routeChange('home')}>Home</div>
            <div className="link dim gray    f6 f5-ns dib mr3" onClick={() => routeChange('home')}>About</div>
            <div className="link dim gray    f6 f5-ns dib mr3" onClick={() => routeChange('home')}>Store</div>
            <div className="link dim gray    f6 f5-ns dib" onClick={() => routeChange('home')}>Contact</div>
        </nav>
    )
}

export default Header;