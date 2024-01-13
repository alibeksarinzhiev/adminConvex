import React, {useContext, useEffect, useState} from 'react';
import './aside.scss'
import logo from '../../Utils/image/Logo (2).png'
import {Link, useLocation} from "react-router-dom";
import {CustomContext} from "../../context";

const Aside = () => {
    const {path} = useContext(CustomContext)
    return (
        <aside className='aside'>
            <div className="aside__container">
                <img src={logo} alt=""/>
                <h2>Menu</h2>
                <ul className='aside__menu'>
                    <Link className={`${path ==='главная'?'aside__li active':'aside__li'}`} to='/' >Главная</Link>
                    <Link className={`${path ==='Товары'?'aside__li active':'aside__li'}`} to='/product'>Товары</Link>
                    <Link>Отзывы</Link>
                    <Link className={`${path ==='пользователи'?'aside__li active':'aside__li'}`} to='/users'>Пользователи</Link>
                </ul>
            </div>

        </aside>
    );
};

export default Aside;