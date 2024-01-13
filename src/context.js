import {createContext, useEffect, useState} from "react"
import {useLocation} from "react-router-dom";
import axios from "axios";

export const CustomContext = createContext();

export const Context = (props) => {
    const [path,setPath]= useState('')
    const [product,setProduct] = useState([])

    const location = useLocation()
    console.log(location)
    useEffect(()=>{
            if (location.pathname ==='/'){
                setPath('главная')
            }else if (location.pathname ==='/users'){
                setPath('пользователи')
            }else if (location.pathname ==='/product'){
                setPath('Товары')
            }
        },
        [location])


    useEffect(()=>{
        fetch('http://localhost:8080/product_convex')
            .then((res)=>res.json())
            .then((res)=>setProduct(res))
    },[])

    const deleteProduct = (id)=>{
        axios.delete(`http://localhost:8080/product_convex/${id}`)
        window.location.reload()
    }





    const value = {
        path,
        product,
        deleteProduct
    }
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}