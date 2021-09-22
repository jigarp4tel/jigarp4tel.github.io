import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import logo from '../assets/logo2.png';

import { navLinks } from '../config';
import Menu from './Menu';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <header>

            <nav>
                <Fade>
                    <Link to="/">
                        <img className="logo" src={logo} alt="logo" />
                    </Link>
                </Fade>

                <Menu toggleMenu={toggleMenu} menuOpen={menuOpen} />

                <div className={menuOpen ? 'navlinks show' : 'navlinks'}>
                    <Fade top cascade>
                        <ul>

                            {
                                navLinks &&
                                navLinks.map(({ url, name }, i) => (
                                    <li key={i}>
                                        <Link to={url} onClick={toggleMenu}>{name}</Link>
                                    </li>
                                )
                                )
                            }

                        </ul>
                    </Fade>
                </div>
            </nav>

        </header>
    )
}

export default Navbar
