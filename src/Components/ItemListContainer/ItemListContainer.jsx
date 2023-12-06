import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import productos from '../Json/Productos.json'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {

    const [item, setItem] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(id ? productos.filter(item => item.category === id) : productos)
                    }, 1000)
                });
                setItem(data);
            }catch(error) {
                console.log("Error: ", error)
            }
        }
        fetchData();
    }, [id])


    return (
        <div className='itemListContainer'>
            <ItemList item={item} />
        </div>
    )
}

export default ItemListContainer
