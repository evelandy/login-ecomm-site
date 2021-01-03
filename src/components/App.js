import React, {Fragment} from 'react';
import Banner from './header/Banner';
import Navbar from './header/Navbar';
import ItemList from './main/ItemList';
import Footer from './footer/Footer';
import Media from 'react-media';

import './styles/app.css';

export default function App() {
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
                            <div className="smMainContainer">
                                <span>
                                    <Navbar />
                                </span>
                                <span>
                                    <Banner />
                                </span>
                                <span>
                                    <ItemList />
                                </span>
                                <span>
                                    <Footer />
                                </span>
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
