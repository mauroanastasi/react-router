import React from 'react'
import MainNavbar from '../Components/MainNavbar'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Products = () => {

    const [products, setProducts] = useState(null);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((resp) => {
            setProducts(resp.data)
        });
    }, []);

    return (
        <>

        </>
    )
}

export default Products
