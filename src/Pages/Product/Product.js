import React, {useContext, useEffect, useState} from 'react';
import './product.scss'
import {Link} from "react-router-dom";
import {CustomContext} from "../../context";


const Product = () => {
    const {product, deleteProduct} = useContext(CustomContext)


    return (
        <section className='product'>
            <Link to='/add-product'>
                <button className='product__addProduct'>Добавить товар</button>
            </Link>
            <div className="product__carts">
                {
                    product.map((el) => (
                        <div className='product__cart__goods'>
                            <h2>{el.title}</h2>
                            <div className="product__center">
                                <Link to={`/product/${el.id}`}>
                                    <img src={el.image} alt=""/>
                                </Link>
                                <p>{el.description.split(' ').slice(0, 5).join(' ')}</p>
                            </div>
                            <div className="product__bottom">
                                <h3>{el.price} сом/кг</h3>
                                <button onClick={() => deleteProduct(el.id)}>удалить</button>
                                <Link to={`/patch/${el.id}`}>
                                    <button>Редактировать</button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Product;