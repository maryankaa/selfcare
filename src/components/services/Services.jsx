import React, { useEffect } from 'react';
import './services.css';
import image_1 from './../img/image_1.svg';
import image_2 from './../img/image_2.svg';
import image_3 from './../img/image_3.svg';
import image_4 from './../img/image_4.svg';
import image_5 from './../img/image_5.svg';
import image_6 from './../img/image_6.svg';
import arrow from './../img/arrow.svg';

const Services = () => {
    useEffect(() => {
        const images = document.querySelectorAll('.column img');

        const handleMouseOver = (event) => {
            const overlay = event.target.nextElementSibling;
            if (overlay) {
                overlay.classList.add('active');
            }
        };

        const handleMouseOut = (event) => {
            const overlay = event.target.nextElementSibling;
            if (overlay) {
                overlay.classList.remove('active');
            }
        };

        images.forEach(image => {
            image.addEventListener('mouseover', handleMouseOver);
            image.addEventListener('mouseout', handleMouseOut);
        });

        // Видалення подій
        return () => {
            images.forEach(image => {
                image.removeEventListener('mouseover', handleMouseOver);
                image.removeEventListener('mouseout', handleMouseOut);
            });
        };
    }, []);



    return (
        <section className="services">
            <div className="services__content">
                <div className='services__title'>
                    Наші послуги:
                </div>
                <div className="six-column-layout">
                    <div className="row">
                        <div className="column">
                            <img src={image_1} width={467} height={430} alt='manicure'/>
                            <div className="image-overlay">
                                <div className="overlay-content">
                                    <p className='overlay-content__text'> Манікюр - це не лише процедура догляду за нігтями,
                                        але і чудовий спосіб підкреслити вашу красу.  Ми пропонуємо професійний манікюр,
                                        який допоможе вам відчути себе охайно та впевнено.
                                    </p>
                                    <a href={'/price'} >
                                        <img className='overlay-content__button' src={arrow} width={57} height={57} alt='button'/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <img src={image_2} width={467} height={430} alt='men haircut'/>
                            <div className="image-overlay">
                                <div className="overlay-content">
                                    <p className='overlay-content__text'>
                                        У нашій студії кожна чоловіча стрижка виконується з особливим увагою
                                        до деталей, підкреслюючи ваш стиль та неповторність.
                                    </p>
                                    <a href={'/price'} >
                                        <img className='overlay-content__button' src={arrow} width={57} height={57} alt='button'/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <img src={image_3} width={466} height={429} alt='lashes'/>
                            <div className="image-overlay">
                                <div className="overlay-content">
                                    <p className='overlay-content__text'>
                                        Подаруйте своїм віям дивовижний обʼєм та природний блиск за допомогою
                                        ламінування вій. Дозвольте їм засяяти яскравіше, надаючи вашому погляду
                                        чарівну привабливість та неповторний шарм.
                                    </p>
                                    <a href={'/price'}>
                                        <img className='overlay-content__button' src={arrow} width={57} height={57}
                                             alt='button'/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <img src={image_4} width={467} height={430} alt='pedicure'/>
                            <div className="image-overlay">
                                <div className="overlay-content">
                                    <p className='overlay-content__text'>
                                        Педикюр - це більше, ніж просто догляд за ногами. Наші професіонали створять
                                        для вас бездоганний педикюр, який допоможе вам відчути себе стильно
                                        та впевнено крокуючи по світу.
                                    </p>
                                    <a href={'/price'}>
                                        <img className='overlay-content__button' src={arrow} width={57} height={57}
                                             alt='button'/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <img src={image_5} width={467} height={430} alt='women haircut'/>
                            <div className="image-overlay">
                                <div className="overlay-content">
                                    <p className='overlay-content__text'>
                                        У Selfcare Studio ми створюємо жіночі стрижки, які відображають вашу
                                        індивідуальність та приносять вам впевненість у своєму вигляді.
                                    </p>
                                    <a href={'/price'}>
                                        <img className='overlay-content__button' src={arrow} width={57} height={57}
                                             alt='button'/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <img src={image_6} width={466} height={429} alt='brown'/>
                            <div className="image-overlay">
                                <div className="overlay-content">
                                    <p className='overlay-content__text'>
                                        Надайте своїм брівкам виразність та ідеальну форму завдяки корекції та
                                        фарбуванні. Наші спеціалісти допоможуть вам підібрати ідеальний колір,
                                        щоб не руйнуючи Ваш природний шарм.
                                    </p>
                                    <a href={'/price'}>
                                        <img className='overlay-content__button' src={arrow} width={57} height={57}
                                             alt='button'/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
