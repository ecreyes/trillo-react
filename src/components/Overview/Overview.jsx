import React from "react";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { ButtonInline } from '../index';

export const Overview = () => {
    return (
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
                <ButtonInline text={'Albufeira, Portugal'} />
            </div>

            <div className="overview__rating">
                <div className="overview__rating-average">8.6</div>
                <div className="overview__rating-count">429 votes</div>
            </div>
        </div>
    )
}