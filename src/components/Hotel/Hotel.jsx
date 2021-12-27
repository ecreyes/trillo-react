import React from 'react';
import Hotel1 from '../../assets/img/hotel-1.jpg';
import Hotel2 from '../../assets/img/hotel-2.jpg';
import Hotel3 from '../../assets/img/hotel-3.jpg';
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

export const Hotel = () => {
    return (
        <main className='hotel-view'>
            <div className='gallery'>
                <figure className='gallery__item'>
                    <img src={Hotel1} alt="hotel 1" className="gallery__photo" />
                </figure>
                <figure className='gallery__item'>
                    <img src={Hotel2} alt="hotel 1" className="gallery__photo" />
                </figure>
                <figure className='gallery__item'>
                    <img src={Hotel3} alt="hotel 1" className="gallery__photo" />
                </figure>
            </div>

            <div className='overview'>
                <h1 className="overview__heading">
                    Hotel Las Palmas
                </h1>
                <div className="overview__stars">
                    <FaStar className="overview__icon-star" />
                    <FaStar className="overview__icon-star" />
                    <FaStar className="overview__icon-star" />
                    <FaStar className="overview__icon-star" />
                    <FaStar className="overview__icon-star" />
                </div>

                <div className="overview__location">
                    <FaMapMarkerAlt className="overview__icon-location" />
                    <button className="btn-inline">Albufeira, Portugal</button>
                </div>

                <div className="overview__rating">
                    <div className="overview__rating-average">8.6</div>
                    <div className="overview__rating-count">429 votes</div>
                </div>
            </div>
    
            <div className='detail'></div>
        </main>
    )
}