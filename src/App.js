import './App.scss';
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import React, {useState} from "react";
import {IoIosArrowRoundUp} from "react-icons/io";
import {Route, Routes} from "react-router-dom";
import Admin from "./Pages/Admin/Admin";
import LogIn from "./LogIn/LogIn";
import Login2 from "./Login2/Login2";
import Profile from "./Pages/Profile/Profile";
import Block from "./Pages/block/block";


function App() {
    const [dark, setDark] = useState(false)
    const [value, setValue] = useState('')
    const top = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div className="App">
            <Header value={value} dark={dark} setDark={setDark} setValue={setValue}/>
            {/*<Login2/>*/}
            <Routes>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/profile" element={<Profile/>}>
                    <Route path='/profile/block' element={<Admin/>}/>
                    <Route path='/profile/block1' element={<Block/>}/>
                </Route>
                <Route path="/" element={
                    <div style={{backgroundColor: dark ? '#000000' : '', transition: "0.3s"}} className="App">
                        <Home value={value} dark={dark}/>
                        <div className="top" onClick={top}><IoIosArrowRoundUp/></div>
                    </div>
                }/>
                <Route path='/log_in' element={<LogIn/>}/>
            </Routes>
        </div>
    );
}

export default App;
