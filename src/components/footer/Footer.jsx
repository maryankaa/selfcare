import React from "react";

import './footer.css'
import logoImg from "./../img/selfcare.svg";
import facebookImg from "./../img/facebook.png";
import instagramImg from "./../img/instagram.png";


const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="footer__part1">
                    <div className="footer__text">
                        <div className="footer__title">
                            Branding stuff
                        </div>
                        <div className="footer__desc">
                            DITOW
                        </div>
                    </div>
                    <div className="footer__logo">
                        <img src={logoImg} alt="Logo" height={40} width={40}/>
                        <span>Selfcare Notes</span>
                    </div>
                    <div className="footer__socials">
                        <img src={facebookImg} alt="facebook" height={40} width={40}/>
                        <img src={instagramImg} alt="instagram" height={40} width={40}/>
                    </div>
                </div>
                <div className="footer__line"></div>
                <div className="footer__part2">
                    2023 DITOW @Copyright all rights reserved
                </div>
            </div>
        </section>
    );
}

export default Footer;