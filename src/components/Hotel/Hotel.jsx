import React from 'react';
import User1 from '../../assets/img/user-1.jpg';
import User2 from '../../assets/img/user-2.jpg';
import { Gallery, Overview, Description } from '../index';


export const Hotel = () => {
    return (
        <main className='hotel-view'>
            <Gallery />
            <Overview />
            <div className='detail'>
                <Description />
                <div className='user-reviews'>
                    <figure className="review">
                        <blockquote className="review__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                        </blockquote>
                        <figcaption className="review__user">
                            <img src={User1} alt="User 1" className="review__photo" />
                            <div className="review__user-box">
                                <p className="review__user-name">Nick Smith</p>
                                <p className="review__user-date">Feb 23rd, 2017</p>
                            </div>
                            <div className="review__rating">7.8</div>
                        </figcaption>
                    </figure>

                    <figure className="review">
                        <blockquote className="review__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.
                        </blockquote>
                        <figcaption className="review__user">
                            <img src={User2} alt="User 2" className="review__photo" />
                            <div className="review__user-box">
                                <p className="review__user-name">Mary Thomas</p>
                                <p className="review__user-date">Sept 13th, 2017</p>
                            </div>
                            <div className="review__rating">9.3</div>
                        </figcaption>
                    </figure>
                    <button className="btn-inline">Show all <span>&rarr;</span></button>
                </div>
            </div>
            <div className='cta'>
                <h2 className="cta__book-now">
                    Good news! We have 4 free rooms for your selected dates!
                </h2>
                <button className="btn">
                    <span className="btn__visible">Book now</span>
                </button>
            </div>
        </main>
    )
}