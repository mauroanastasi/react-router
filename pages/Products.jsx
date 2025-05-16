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
            <MainNavbar />
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Lista prodotti</h1>
                        </div>
                    </div>

                    {products === null ? (
                        <span class="loader"></span>
                    ) : (
                        <div className="row g-3">
                            {products.map((product) => {
                                return (
                                    <div className="col-12 col-md-6 col-lg-4" key={product.id} >
                                        <div className="card">
                                            <div className="card-image-top">
                                                <img src={product.image} className="img-fluid" alt="" />
                                            </div>
                                            <div className="card-body">
                                                <h3>{product.title}</h3>

                                                <p>{product.price}</p>
                                                <p>{product.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                </div>

            </div>

        </>
    )
}

export default Products
