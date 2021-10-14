import React, { useState } from 'react'
import Fade from 'react-reveal/Fade';
import logo from '../assets/logo2.png';

import { navLinks } from '../config';
import Menu from './Menu';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const scrollTo = (url) => {
        const ele = document.getElementById(url);

        ele.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    }

    return (
        <header>

            <nav>
                <Fade>
                    <button className="logo">
                        <img src={logo} alt="logo" />
                    </button>
                </Fade>

                <Menu toggleMenu={toggleMenu} menuOpen={menuOpen} />

                <div className={menuOpen ? 'navlinks show' : 'navlinks'}>
                    <Fade top cascade>
                        <ul>

                            {
                                navLinks &&
                                navLinks.map(({ url, name }, i) => (
                                    <li key={i}>
                                        <button className="navlink" onClick={() => {
                                            scrollTo(url)
                                            toggleMenu()
                                        }}>{name}</button>
                                    </li>
                                )
                                )
                            }

                        </ul>
                    </Fade>
                </div>
            </nav>

        </header >
    )
}

export default Navbar
