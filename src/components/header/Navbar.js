import React, {Fragment, useState} from 'react';
import Media from 'react-media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import '../styles/navbar.css';

export default function Navbar() {
    const [showmenu, setShowMenu] = useState(false);
    let menuMask;
    let menuItems;

    if(showmenu){
        menuItems = 
        <nav className="smMenuItemContainer">
            <span>
                <a className="smNavItem" href="">Pc-parts.net</a>
            </span>
            <span>
                <a className="smNavItem" href="">Login/Register</a>
            </span>
            <span>
                <a className="smNavItem" href="">Cart</a>
            </span>
        </nav>

        menuMask = 
            <div className="menuMask" onClick={() => setShowMenu(false)}></div>
    }

    function screenDisp() {
        return (
            <Media queries={{
                small: "(max-width: 425px)",
                medium: "(min-width: 426px) and (max-width: 1023px)",
                // medium: "(min-width: 426px) and (max-width: 699px)",
                // secondMed: "(min-width: 700px) and (max-width: 1023px)",
                large: "(min-width: 1024px) and (max-width: 1439px)",
                xxl: "(min-width: 1440px)"
            }}>
                {matches => (
                    <Fragment>
                        {matches.small && 
                            <div className="navbarMenu">
                                <span>
                                    <FontAwesomeIcon 
                                        icon={faBars}
                                        onClick={() => setShowMenu(!showmenu)}
                                    />
                                </span>
                                { menuMask }
                                { menuItems }
                            </div>
                        }
                    </Fragment>
                )}
            </Media>
        );
    }
    return (
        <div>
            {screenDisp()}
        </div>
    );
}
