import React from 'react';

import User3 from '../../assets/img/user-3.jpg';
import User4 from '../../assets/img/user-4.jpg';
import User5 from '../../assets/img/user-5.jpg';
import User6 from '../../assets/img/user-6.jpg';

export const Description = () => {
    return (
        <div className='description'>
            <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
            </p>
            <p className="paragraph">
                Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
            </p>

            <ul className="list">
                <li className="list__item">Close to the beach</li>
                <li className="list__item">Breakfast included</li>
                <li className="list__item">Free airport shuttle</li>
                <li className="list__item">Free wifi in all rooms</li>
                <li className="list__item">Air conditioning and heating</li>
                <li className="list__item">Pets allowed</li>
                <li className="list__item">We speak all languages</li>
                <li className="list__item">Perfect for families</li>
            </ul>

            <div className="recommend">
                <p className="recommend__count">
                    Lucy and 3 other friends recommend this hotel.
                </p>
                <div className="recommend__friends">
                    <img src={User3} alt="Friend 1" className="recommend__photo" />
                    <img src={User4} alt="Friend 2" className="recommend__photo" />
                    <img src={User5} alt="Friend 3" className="recommend__photo" />
                    <img src={User6} alt="Friend 4" className="recommend__photo" />
                </div>
            </div>
        </div>
    )
}