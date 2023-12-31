import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import productos from '../Json/Productos.json'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos.find(item => item.id === parseInt(id)))
            }, 1000)
        })
        promise.then((data) => setItem(data))
    }, [id])


    return (
        <div className="itemDetailContainer">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer
