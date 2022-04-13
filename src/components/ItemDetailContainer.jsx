import React, { useState } from 'react';
import { useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { traerProducto } from "../utils/products";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        traerProducto().then((res) => {
            setProduct(res);
        });
    }, []);

    return (
        <>
            <ItemDetail {...product} />
        </>
    );
};

export default ItemDetailContainer;