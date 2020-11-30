import React from 'react'
import CardItems from './CardItems';

function Cards() {
    return (
        <div className="cards">
        <h1> Check out the Details</h1>
        <div className="cards_container">
            <div className="cards_wraper">
            <ul className="cards_items">
                <CardItems/> 
            </ul>

            </div>

        </div>
            
        </div>
    )
}

export default Cards 
