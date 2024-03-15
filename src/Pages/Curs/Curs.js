import React from 'react';
import './Curs.scss'
import Blog from "../Blog1/Blog";
//Бул 4-section,бул жакта курс тууралуу маалыматтар жазылган
const Curse = ({dark,value}) => {
    return (
        <>
            <div id="curs" style={{background:dark ? 'black' : '', transition:"0.3s"}}>
                <div className="container">
                    <div className="curs">
                        <h1 style={{color: dark ? "#fff" : ''}}>{value==='kg'?'Курс он-лайн окутулат':'The course is taught online'}</h1>
                        <h2 style={{color: dark ? "#fff" : ''}}>{value==='kg' ? 'Жумасына 5 күн 2 сааттан сабак, 2 күн теориялык  сабак, бул\n' +
                            '                            сабактар  болуп сакталат, 3 күн практикалык сабак, бул\n' +
                            '                            сабактар запись кылынбайт.': '5 days a week for 2 hours of lessons, 2 days of theoretical lessons, that\'s it\n' +
                            '                            Lessons are recorded for 3 days\n' +
                            'practical lesson, this\n' +
                            '                            Lessons are not recorded.'}</h2>

                    </div>
                </div>
            </div>
            <Blog value={value} dark={dark}/>
        </>
    );
};

export default Curse;