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

    useEffect(() => {
        getSingleProduct()
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Dettaglio Prodotto</h1>
                </div>
                <div className="col-12">
                    <img src={product.image} alt="" className='fixed-dim-img' />
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct
