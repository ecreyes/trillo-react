import React from 'react';

import Hotel1 from '../../assets/img/hotel-1.jpg';
import Hotel2 from '../../assets/img/hotel-2.jpg';
import Hotel3 from '../../assets/img/hotel-3.jpg';

export const Gallery = () => {
    return (
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
    )
}