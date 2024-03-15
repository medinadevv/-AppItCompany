import React from 'react';
import './App.scss'
import Information from "../Information/Information";

// Бул 8-section бул жакта курс тууралуу маалыматтар жазылганл

const AppCompany = ({dark, value}) => {
    return (
        <>
            <div id="app">
                <div className="container">
                    <div className="app">
                        <div className="app--title">
                            <h1 style={{color: dark ? '#fff' : ''}}>{value === 'kg' ? 'App IT Company тууралуу маалымат' : "\n" +
                                "Information about App IT Company"}</h1>
                            <p style={{color: dark ? '#fff' : ''}}>{value === 'kg' ? 'App IT Company – азыркы учурда мобилдик колдонмолорду өлкөбүздөн жана чет өлкөдөн\n' +
                                '                               заказдарды алып иштейт. Учурда компаниябыз тарабынан 3 тиркеме ийгиликтүү \n' +
                                '                               иштелип чыкты жана Орусиядан буйрутмаларды алып иштеп жаткан учуру.' : 'App IT Company is currently developing mobile applications from our country and abroad\n' +
                                '                               takes orders. Currently, 3 applications have been successfully completed by our company\n' +
                                '                               has been developed and is currently receiving orders from Russia.'}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Information value={value} dark={dark}/>
        </>
    );
};

export default AppCompany;