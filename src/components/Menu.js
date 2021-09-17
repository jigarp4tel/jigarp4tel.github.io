import React from 'react'

const Menu = ({ toggleMenu }) => {


    return (
        <div className="menu">

            <button className="hamburgerBtn" onClick={toggleMenu}>
                <div className="ham-box">
                    <div className="ham-box-inner"></div>
                </div>
            </button>

        </div>
    )
}

export default Menu
