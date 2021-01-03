import React, {Fragment} from 'react';
import Media from 'react-media';
import banner from '../img/banner.jpg';

import '../styles/banner.css';

export default function Banner() {
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
                            <div className="smBannerContainer">
                                <span>
                                    <img className="smBannerImg" src={banner} alt="banner" />
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
