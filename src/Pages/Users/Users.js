import React, {useEffect, useState} from 'react';
import './users.scss'
import {useLocation} from "react-router-dom";

const Users = () => {

    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState([])
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/users')
            .then((res) => res.json())
            .then((json) => {
                setUser(json)
            })
            .catch((err) => {
                console.log(err)
            }).finally(() => setLoading(true))
    }, [])

    useEffect(() => {
        fetch('http://localhost:8080/reviews')
            .then((res) => res.json())
            .then((json) => {
                setReviews(json)
            })
            .catch((err) => {
                console.log(err)
            }).finally(() => setLoading(true))
    }, [])


    return (
        <section className='users'>
            <h2>Пользователи</h2>
            <div className="users__table">
                {
                    loading === false ? <h1>Идет загрузка...</h1> :
                        <table>
                            <tr>
                                <th>id</th>
                                <th>Имя</th>
                                <th>Фамилия</th>
                                <th>email</th>
                            </tr>

                            {

                                user.map((el) => (
                                    <tr>
                                        <td>{el.id}</td>
                                        <td>{el.name}</td>
                                        <td>{el.surname}</td>
                                        <td>{el.email}</td>
                                    </tr>
                                ))
                            }

                        </table>
                }
            </div>



            <h2>Пользователи с комментариями и вопросоми</h2>
            <div className="users__table">
                {
                    loading === false ? <h1>Идет загрузка...</h1> :
                        <table>
                            <tr>
                                <th>id</th>
                                <th>Имя</th>
                                <th>Номер тел:</th>
                                <th>email</th>
                                <th>Комментарии</th>
                            </tr>

                            {

                                reviews.map((el) => (
                                    <tr>
                                        <td>{el.id}</td>
                                        <td>{el.fio}</td>
                                        <td>{el.number}</td>
                                        <td>{el.email}</td>
                                        <td>{el.message}</td>
                                    </tr>
                                ))
                            }

                        </table>
                }
            </div>
        </section>
    );
};

export default Users;