import React, {useState} from 'react';
import './LogIn.scss'
import {admin} from "../API/API";
import {useNavigate} from "react-router-dom";

const LogIn = () => {
    const navigate = useNavigate()
    const [valid, setValid] = useState({
        log:false,
        pass:false
    })

    const [values, setValues] = useState({
        login: '',
        password: '',
    })


    function handleLogIn(){
        if(admin.login !== values.login || values.login.length === 0){
            setValid({...valid, log: valid.log = true})
        }else {
            setValid({...valid, log:false})
        }
        if (admin.password != values.password || values.password.length === 0){
            setValid({...valid, pass:true})
        }else {
            setValid({...valid, pass:false})
        }

        if(admin.login === values.login && admin.password === values.password) {
            navigate('/profile')
        }
    }
    function EventLog(e){
        setValues({...values, login: e.target.value})
        setValid({...valid, log:false})
    }
    function EventPass(e){
        let str = e.target.value
        str = str.split('').filter(el => +el || el === '0').join('').slice(0,9)
        setValues({...values, password: str})
        setValid({...valid, pass:false})
    }
    return (
        <section id='log-in'>
            <div className="container">
                <div className="log-in">
                    <input style={{borderColor: valid.log ? 'red' : ''}} value={values.login} onChange={EventLog} type="text" placeholder='Логин'/>
                    <input style={{borderColor: valid.pass ? 'red' : ''}} value={values.password} onChange={EventPass} type="text" placeholder='Пароль'/>
                    <button onClick={handleLogIn}>Войти</button>
                </div>
            </div>
        </section>
    );
};

export default LogIn;