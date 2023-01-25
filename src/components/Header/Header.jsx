import React from 'react';
import './Header.css';
const Header = ({ headTitle, headexpanded }) => {
    return (
        <div className="head-container">
            <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" alt="HeaderImage"
                className={`head-img ${headexpanded ? `head-img-expand ` : `head-img-contract `} `} />
            <h1 className={`head-text ${headexpanded ? `head-text-expand` : `head-text-contract`} `}>
                {headTitle}
            </h1>
        </div>
    )
};

export default Header;