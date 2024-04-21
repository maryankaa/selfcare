import React from "react";

import './Card.modules.css'
import advantage from './../img/advantage.svg'


function Card ({title, strength, description, price, img, itemId}) {
    return (
        <div className='card'>
            <a href="#" className='card__link'></a>
            <img className='card__img' src={img} alt='card__title' height="200" width="200"/>
            <div className='card__body'>
                <div className='card__desc'>
                    <div className='card__desc'>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;