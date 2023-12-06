import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ item }) => {
    return (
        <Link to={'/item/' + item.id} className='item'>
            <div className="item-card-image">
                <img src={item.image} alt={item.name} />
            </div>
            <div className="item-card-info">
                <p className='item-name'>{item.name}</p>
                <p className='item-price'>${item.price}</p>
            </div>
        </Link>
    )
}

export default Item
