import React, { useState } from 'react';
import { useEffect } from 'react';
import ItemDetail from './ItemDetail';
//import customFetch from '../utils/customFetch';
import { useParams } from 'react-router-dom';
import { getDoc,doc,getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
   
    const [products, setProducts] = useState({});

    const [cantidad, setCantidad] = useState(0);

    const { id } = useParams()

/*     useEffect(() => {
        customFetch(500)
        .then(resultado => setProducts(resultado.find(i => i.id === Number(id))))
        .catch(error => console.log(error));
    }, [id])

    console.log(products) */

    useEffect(()=>{
      const db = getFirestore();
      const prodRef = doc(db, "products", id);
      getDoc(prodRef).then((res) => {
        setProducts({id: res.id, ...res.data()})
      });

      console.log(cantidad);
    }, [cantidad, id]);




    return (
        <>
            <ItemDetail item={products}/>
        </>
    );
};

export default ItemDetailContainer;