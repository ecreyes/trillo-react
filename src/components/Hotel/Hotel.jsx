import React from 'react';
import { Gallery, Overview, Description } from '../index';


export const Hotel = () => {
    return (
        <main className='hotel-view'>
            <Gallery />
            <Overview />
            <div className='detail'>
                <Description />
                <div className='user-reviews'> user reviews</div>
            </div>
            <div className='cta'>cta</div>
        </main>
    )
}