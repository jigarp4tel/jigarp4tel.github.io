import React from 'react'

const Menu = ({ toggleMenu, menuOpen }) => {


    return (
        <div className="menu">

            <button className="hamburgerBtn" onClick={toggleMenu}>
                <div className="ham-box">
                    <div className={menuOpen ? 'ham-box-inner show' : 'ham-box-inner'}></div>
                </div>
            </button>

        </div>
    )
}

export default Menu
