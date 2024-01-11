import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useLocation} from "react-router-dom";
import {useForm} from "react-hook-form";



const Patch = () => {
    const [oneProduct,setOneProduct] = useState({})

    const id = useLocation().pathname.split('/').at(-1);



    useEffect(()=>{
        axios(`http://localhost:8080/product_convex/${id}`)
            .then(({data})=>setOneProduct(data))
    },[])

    const {
        register,
        handleSubmit,
        reset
    } = useForm()

    const patchProduct =(obj)=>{
        axios.patch(`http://localhost:8080/product_convex/${id}`,obj)

    }
    return (
        <section>
            <form onSubmit={handleSubmit(patchProduct)}>
            <input {...register('title')} defaultValue={oneProduct.title} type="text"/>
            <input  type="text"/>
            <input type="text"/>
            <input type="text"/>
                <button>изменить</button>
            </form>
        </section>
    );
};

export default Patch;