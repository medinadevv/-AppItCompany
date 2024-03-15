import React from 'react';
import "./information.scss"
import OurTeam from "../OurTeam/OurTeam";

// Бул 9-section бул жакта курс тууралуу маалыматтар жазылганл

const Information = ({dark, value}) => {
    return (
        <>
            <div id="information" style={{background: dark ? 'black' : '', transition: "0.3s"}}>
                <div className="container">
                    <div className="information">
                        <div className="information--titles">
                            <h1 style={{color: dark ? '#fff' : ''}}>{value === 'kg' ? 'Урматтуу окурманым, анда сиздерге курстарыбыз жана өзүбүз\n' +
                                '                               тууралуу кыскача маалымат жаза кетейин' : 'Dear reader, here are our courses and ourselves\n' +
                                '                               I will write brief information about it'}</h1>
                            <h2 style={{color: dark ? '#fff' : ''}}>{value === 'kg' ? 'App IT Company – азыркы учурда мобилдик\n' +
                                '                                колдонмолорду\n' +
                                '                                өлкөбүздөн жана чет өлкөдөн заказдарды алып иштейт. Учурда компаниябыз тарабынан 2\n' +
                                '                                тиркеме\n' +
                                '                                ийгиликтүү иштелип чыкты жана Орусиядан үчүнчү колдонмону алып иштеп жаткан учуру.' : 'App IT Company is now mobile\n' +
                                '                                applications\n' +
                                '                                takes orders from our country and abroad. Currently, 2 by our company\n' +
                                '                                attachment\n' +
                                '                                Successfully developed and currently receiving the third application from Russia.'}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <OurTeam value={value} dark={dark}/>
        </>
    )
    };

export default Information;