import React from 'react'
import Sidebar from "../../Components/Sidebar/Sidebar";
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';

const Router = () => {
  return (
    <div>
        <div className='flex'>
            <div>
                <Sidebar />

            </div>
            <div>
                <BrowserRouter>
                <Routes>
                    <Route Path ="/" element={<HomePage/>}></Route>
                </Routes>
                </BrowserRouter>
 
            </div>
        </div>
    </div>
  )
}

export default Router