import React, {useEffect, useState} from 'react';
import './aside.scss'
import logo from '../../Utils/image/Logo (2).png'
import {Link, useLocation} from "react-router-dom";

const Aside = () => {
    const [path,setPath]= useState('')
    const location = useLocation()
    console.log(location)
    useEffect(()=>{
            if (location.pathname ==='/'){
                setPath('главная')
            }else if (location.pathname ==='/users'){
                setPath('пользователи')
            }
        },
        [location])
    return (
        <aside className='aside'>
            <div className="aside__container">
                <img src={logo} alt=""/>
                <h2 className=''>Menu</h2>
                <ul className='aside__menu'>
                    <Link className={`${path ==='главная'?'aside__li active':'aside__li'}`} to='/' >Главная</Link>
                    <Link>Товары</Link>
                    <Link>Отзывы</Link>
                    <Link className={`${path ==='пользователи'?'aside__li active':'aside__li'}`} to='/users'>Пользователи</Link>
                </ul>
            </div>

        </aside>
    );
};

export default Aside;