import React from 'react';
import './OurTeam.scss'
import images1 from '../../Img/Turat.jpg'
import images2 from '../../Img/eldiar3.jpg'
import images3 from '../../Img/mustafa-nabiev.jpg'
import images4 from '../../Img/guljigit.jpeg'
import images5 from '../../Img/syimyk.jpg'
import images6 from '../../Img/www.jpeg'
import Contact from "../Contact/Contact";

// Бул 10-section бул жакта App It академиясында иштеген адамдар тууралуу маалымат  жазылган

const OurTeam = ({dark,value}) => {
    let newData = JSON.parse(localStorage.getItem('data')) || []
    console.log(newData)

    return (
        <>
            <div id="team">
                <div className="container">
                    <h1 style={{color: dark ? '#fff' : ''}}>Биздин команда</h1>
                    <div className="team">
                        <div className="team--all">
                            <div className="team--all__img">
                                <img src={images1} alt=""/>
                            </div>
                            <div className="team--all__text">
                                <h2 style={{color: dark ? '#fff' : ''}}>Турат Алыбаев</h2>
                                <h3 style={{color: dark ? '#fff' : ''}}>CEO, Director</h3>
                            </div>
                        </div>
                        <div className="team--all">
                            <div className="team--all__img">
                                <img src={images2} alt=""/>
                            </div>
                            <div className="team--all__text">
                                <h2 style={{color: dark ? '#fff' : ''}}>Элдияр Алмазбек</h2>
                                <h3 style={{color: dark ? '#fff' : ''}}>Flutter Developer</h3>
                            </div>
                        </div>
                        <div className="team--all">
                            <div className="team--all__img">
                                <img src={images3} alt=""/>
                            </div>
                            <div className="team--all__text">
                                <h2 style={{color: dark ? '#fff' : ''}}>Мустафа Набиев</h2>
                                <h3 style={{color: dark ? '#fff' : ''}}>Flutter Developer</h3>
                            </div>
                        </div>
                        <div className="team--all">
                            <div className="team--all__img">
                                <img src={images4} alt=""/>
                            </div>
                            <div className="team--all__text">
                                <h2 style={{color: dark ? '#fff' : ''}}>Гүлжигит Талантбеков</h2>
                                <h3 style={{color: dark ? '#fff' : ''}}>Mentor</h3>
                            </div>
                        </div>
                        <div className="team--all">
                            <div className="team--all__img">
                                <img src={images5} alt=""/>
                            </div>
                            <div className="team--all__text">
                                <h2 style={{color: dark ? '#fff' : ''}}>Сыймык Абдыбеков</h2>
                                <h3 style={{color: dark ? '#fff' : ''}}>Mentor</h3>
                            </div>
                        </div>
                        <div className="team--all">
                            <div className="team--all__img">
                                <img src={images6} alt=""/>
                            </div>
                            <div className="team--all__text">
                                <h2 style={{color: dark ? '#fff' : ''}}>Нурдөөлөт Рысбаев</h2>
                                <h3 style={{color: dark ? '#fff' : ''}}>Backend Developer</h3>
                            </div>
                        </div>
                        {
                            newData.map(el => (
                                <div className="team--data">
                                    <div className="team--data__datas">
                                        <div className="team--data__datas--img1">
                                            <img src={el.Img} alt="" />
                                        </div>
                                        <div className="team--data__datas--texts">
                                            <h1 style={{color: dark ? '#fff' : ''}} >{el.Name}</h1>
                                            <h2 style={{color: dark ? '#fff' : ''}}>{el.SirName}</h2>
                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Contact value={value} dark={dark}/>
        </>
    );
};

export default OurTeam;