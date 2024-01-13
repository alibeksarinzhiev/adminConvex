import React from 'react';
import './AddProduct.scss'
import {useForm} from "react-hook-form";
import axios from "axios";


const AddProduct = () => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm()

    const addProduct = (data) => {
        axios.post(`http://localhost:8080/product_convex`, data)
        window.location.reload()
    }
    return (
        <div className='addProduct'>
            <h2>
                Добавление товаров
            </h2>
            <form className='addProduct__filling' onSubmit={handleSubmit(addProduct)}>
                <div className="addProduct__dop">
                    <div className="addProduct__input">
                        <p>Введите название</p>
                        <input {...register('title')} placeholder='title' type="text"/>
                    </div>
                    <div className="addProduct__input">
                        <p>Введите описание товара</p>
                        <input {...register('description')} placeholder='description' type="text"/>
                    </div>
                    <div className="addProduct__input">
                        <p>Напишите true если товар Новинка или false если нет</p>
                        <input {...register('new')} placeholder='new' type="text"/>
                    </div>
                    <div className="addProduct__input">
                        <p>Напишите true если товар на Акции или false если нет</p>
                        <input {...register('action')} placeholder='action' type="text"/>
                    </div>
                    <div className="addProduct__input">
                        <p>Напишите true если товар Популярем или false если нет</p>
                        <input {...register('popular')} placeholder='popular' type="text"/>
                    </div>
                    <div className="addProduct__input">
                        <p>Введите на английском категории товара</p>
                        <input {...register('category')} placeholder='category' type="text"/>
                    </div>
                    <div className="addProduct__input">
                        <p>Введите ссылку на фото товара</p>
                        <input {...register('image')} placeholder='image URL' type="text"/>
                    </div>
                    <div className="addProduct__input">
                        <p>Введите количество товара в цифрах</p>
                        <input {...register('quantity')} placeholder='quantity' type="text"/>
                    </div>
                    <div className="addProduct__input">
                        <p>Введите количество товара на складе в цифрах</p>
                        <input {...register('quantity_in_stock')} placeholder='quantity_in_stock' type="text"/>
                    </div>
                    <div className="addProduct__input">
                        <p>Введите цену</p>
                        <input {...register('price')} placeholder='price' type="text"/>
                    </div>
                    <div className="addProduct__input">
                        <p>Введите старую цену</p>
                        <input {...register('old_price')} placeholder='old_price' type="text"/>
                    </div>
                </div>
                <div className="addProduct__button">
                    <button>Добавить товар</button>
                </div>
            </form>

        </div>
    );
};

export default AddProduct;