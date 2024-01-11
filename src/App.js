import React from 'react';
import './App.scss'
import {Route, Routes, useLocation} from "react-router-dom";
import Layout from "./Layout/Layout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Users from "./Pages/Users/Users";
import Comment from "./Pages/comment/comment";

const App = () => {


    return (
        <>
           <Routes>
               <Route path='/' element={<Layout/>}>
                   <Route path='' element={<Dashboard/>}/>
                   <Route path='users' element={<Users/>}/>
                   <Route path='comment'element={<Comment/>}/>
               </Route>
           </Routes>
        </>
    );
};

export default App;