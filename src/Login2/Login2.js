// import React, {useState} from 'react';
// import './Login2.scss'
// import {useNavigate} from "react-router-dom";
// import {admin} from "../API/API";
//
// const Login2 = () => {
//     const navigate = useNavigate()
//     const [values, setValues] = useState({
//         log: '',
//         pass: ''
//     })
//
//     const [valid, setValid] = useState({
//         log: false,
//         pass: false
//     })
//     function handleLogin() {
//         if (admin.password != values.password || values.password.length === 0) {
//             navigate("/admin")
//         }
//     }
//
//     function EventLog(e) {
//         setValues({...values, login: e.target.value})
//         setValid({...valid, log: false})
//     }
//
//     function EventPass(e) {
//         let str = e.target.value
//         str = str.split('').filter(el => +el || el === "0").join('').slice(0,9)
//         setValues({...values, password: str})
//         setValid({...valid, pass: false})
//     }
//
//
//
//     return (
//         <div id="login2">
//             <div className="container">
//                 <div className="login2">
//                     <input value={values.login} onChange={EventLog} type="text" placeholder="Name"/>
//                     <input value={values.password} onChange={EventPass} type="number" placeholder="Login"/>
//                     <button onClick={handleLogin}>past</button>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Login2;