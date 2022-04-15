import React, { useState } from 'react';
import { useEffect } from 'react';
import ItemDetail from './ItemDetail';
import customFetch from '../utils/customFetch';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
   
    const [products, setProducts] = useState({});

    const { id } = useParams()

    useEffect(() => {
        customFetch(500)
        .then(resultado => setProducts(resultado.find(i => i.id === Number(id))))
        .catch(error => console.log(error));
    }, [id])

    console.log(products)



    return (
        <>
            <ItemDetail {...products}/>
        </>
    );
};

export default ItemDetailContainer;