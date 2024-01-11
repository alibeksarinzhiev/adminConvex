import React, {useEffect, useState} from 'react';
import './users.scss'
import {useLocation} from "react-router-dom";

const Users = () => {

    const [loading,setLoading] = useState(false)
    const [user,setUser] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8080/users')
            .then((res)=>res.json())
            .then((json)=>{
                setUser(json)
            })
            .catch((err)=>{
                console.log(err)
            }).finally(()=>setLoading(true))
    },[])



    return (
        <div>
           <h1>Пользователи</h1>

            {
                loading === false? <h1>Идет загрузка...</h1>:<table >
                    <tr >
                        <th>имя</th>
                        <th>email</th>

                    </tr>

                        {

                            user.map((el)=>(
                                <tr>

                                    <td>{el.name}</td>
                                </tr>
                            ))
                        }
                        {

                            user.map((el)=>(
                                <tr>
                                    <td>{el.email}</td>

                                </tr>
                            ))
                        }

                </table>
            }

        </div>
    );
};

export default Users;