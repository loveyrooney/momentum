import React from 'react';

const Header = (props) => {
    const {title, subtitle1, subtitle2} = props.obj;
    return (
        <header>
            <h3>Pick Helper</h3>
            <h1>{title}</h1>
            <div>
                <span className="subtitle">{subtitle1}</span><br/>
                <span className="subtitle">{subtitle2}</span>
            </div>
        </header>
    );
};

export default Header;