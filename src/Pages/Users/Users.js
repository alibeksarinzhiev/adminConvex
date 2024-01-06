import React from 'react';
import './users.scss'
import {useLocation} from "react-router-dom";

const Users = () => {

    return (
        <div>
           <h1>Пользователи</h1>
            <table >
                <tr >
                    <th>имя</th>
                    <th>email</th>
                    <th>номер</th>
                </tr>
                <tr>
                    <td>алибек</td>
                    <td>алибек@mail.ri</td>
                    <td>055555555</td>
                </tr>
            </table>
        </div>
    );
};

export default Users;