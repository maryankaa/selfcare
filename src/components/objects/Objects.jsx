import React from "react";

import './objects.css'
import Card from '../card/Card'


import advantage from './../img/advantage.svg'
// import rubinImg from './../../img/rubin.jpg'
// import smaragdImg from './../../img/smaragd.jpg'
// import stoneImg from './../../img/stone.jpg'

const advantagesData = [
    {id: 0, title: "", img: advantage, description: "Швидкий запис - запис до улюбленого майстра за декілька секунд"},
    {id: 1, title: "", img: advantage, description: "Онлайн календар майстра - вибирай час, зручний саме для тебе"},
    {id: 2, title: "", img: advantage, description: "Нагадування про подію за добу та зручна система оплати у додатку"},
];

const Objects = () => {
    return (
        <section className="objects">
            <div className="container">
                <div className="objects__cards">
                    {advantagesData.map((card, e) => (
                        <Card key={e} img={card.img} description={card.description} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Objects;