import React, {useEffect, useState} from 'react';
import './product.scss'
import {Link} from "react-router-dom";
import axios from "axios";


const Product = () => {
    const [product,setProduct] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8080/product_convex')
            .then((res)=>res.json())
            .then((res)=>setProduct(res))
    },[])

    const deleteProduct = (id)=>{
            axios.delete(`http://localhost:8080/product_convex/${id}`)
        window.location.reload()
    }

    return (
        <section className='product'>
            {
                product.map((el)=>(
                    <div className='cart__goods'>
                        <h2>{el.title}</h2>
                        <Link to={`/product/${el.id}`}>
                            <img src={el.image} alt=""/>
                        </Link>
                        <h2>{el.title}</h2>
                        <p>{el.description.split(' ').slice(0,5).join(' ')}</p>
                        <h3>{el.price} сом/кг</h3>
                            <button onClick={()=>deleteProduct(el.id)}>удалить</button>
                        <Link to={`/patch/${el.id}`}>
                            <button>Редактировать</button>

                        </Link>
                    </div>
                ))
            }
        </section>
    );
};

export default Product;