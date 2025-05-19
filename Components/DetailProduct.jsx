import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const DetailProduct = () => {
    const { id } = useParams();

    const [product, setProduct] = useState({})

    const getSingleProduct = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
            setProduct(resp.data)
        });
    }

    return (

    )
}

export default DetailProduct
