import React from 'react';
import './Flutter.scss'
import Curs from "../Curs/Curs";

// Бул 3-section,бул жакта курс боюнча маалыматтар жазылган
const Flutter = ({dark, value}) => {
    console.log('dark', dark)
    return (
        <>
            <div id="flutter">
                <div className="container"></div>
                <div className="flutter">
                    <h1 style={{color: dark ? "#fff" : ''}}>{value === 'kg' ? 'Кыргызча Flutter курсубуз тууралуу маалымат' : 'Information about our Kyrgyz Flutter course'}</h1>
                    <h2 style={{color: dark ? "#fff" : ''}}>{value === 'kg' ? 'Курс бизде жалпы 6 ай окутулат' : 'The course is taught for a total of 6 months'}</h2>
                    <p style={{color: dark ? "#fff" : ''}}>{value === 'kg' ? 'Бул 6 ай\n' +
                        '                        аралыгында <span>iOS</span> жана <span>Android </span>телефондорго\n' +
                        '                        мобилдик колдонмо жасоону үйрөнүп чыгабыз' : 'This is 6 months' +
                        '                        between iOS and Android  phones' +
                        '                        We will learn how to make a mobile application'}</p>
                    <h3 style={{color: dark ? "#fff" : ''}}>{value === 'kg' ? '4-март, 2024' : 'March 4, 2024'}</h3>
                </div>
            </div>
            <Curs value={value} dark={dark}/>
        </>
    );
};

export default Flutter;