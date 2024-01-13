import React from 'react';
import './App.scss'
import {Route, Routes, useLocation} from "react-router-dom";
import Layout from "./Layout/Layout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Users from "./Pages/Users/Users";
import Comment from "./Pages/comment/comment";
import Product from "./Pages/Product/Product";
import Patch from "./Pages/Patch/Patch";
import AddProduct from "./Pages/AddProduct/AddProduct";

const App = () => {


    return (
        <>
           <Routes>
               <Route path='/' element={<Layout/>}>
                   <Route path='' element={<Dashboard/>}/>
                   <Route path='users' element={<Users/>}/>
                   <Route path='comment'element={<Comment/>}/>
                   <Route path='product' element={<Product/>}/>
                   <Route path='add-product' element={<AddProduct/>}/>
                   <Route path='patch/:id' element={<Patch/>}/>

               </Route>
           </Routes>
        </>
    );
};

export default App;