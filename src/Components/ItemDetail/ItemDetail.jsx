import React from 'react'

const ItemDetail = ({ item }) => {
    return (
        <div className="itemDetail">
            <div className="itemDetail-image">
                <img src={item.image} alt={item.name} />
            </div>
            <div className="itemDetail-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className='itemDetail-price'>$ {item.price}</p>
                <p className='itemDetail-stock'>Stock: {item.stock}</p>
            </div>
        </div>
    )
}

export default ItemDetail
