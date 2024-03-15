import React from 'react';
import './Price.scss'
import Accordion from "../Accordion/Accordion";

// Бул 6-section бул жакта курс тууралуу маалыматтар жазылганл

const Price = ({dark,value}) => {
    return (
        <>
            <div id="price" style={{background:dark ? 'black' : '', transition:"0.3s"}}>
                <div className="container">
                    <div className="price">
                        <div className="price--list">
                            <h1 style={{color: dark ? "#fff" : ''}}>{value==='kg'?'Курстун баасы айына 20 миң сом, курс жалпы 6 ай окутулат.':'The price of the course is 20,000 soms per month, the course is taught for a total of 6 months.'}</h1>
                            <h2 style={{color: dark ? "#fff" : ''}}>{value==='kg'?'Эгер 6 ай үчүн бир жолу төлөм кылам десеңиз <span>105</span> миң сом кылып беребиз!':'If you want to make a one-time payment for 6 months, we will make 105 thousand soms!'}</h2>
                            <button>{value==='kg'?'Байланышуу':'\n' +
                                'To communicate'}</button>
                        </div>
                    </div>
                </div>
            </div>
            <Accordion value={value} dark={dark}/>
        </>
    );
};

export default Price;