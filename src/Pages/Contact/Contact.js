import React from 'react';
import img11 from "../../Img/turat11.png"
import {BiLogoTelegram} from "react-icons/bi";
import {FaWhatsapp} from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa6";
import {FaYoutube} from "react-icons/fa";
import './Contact.scss'

// Бул 11-section бул жакта App It академисы менен байланышуу боюнча маалыматтар жазылган


const Contact = ({dark,value}) => {

    return (
        <div id="contact" style={{background: dark ? 'black' : '', transition: "0.3s"}}>
            <div className="container">
                <div className="contact">
                    <div className="contact--title">
                        <img src={img11} alt=""/>
                        <button>{value==='kg'?"Турат Алыбаев":'Turat Alybaev'}</button>
                        <h1 style={{color: dark ? '#fff' : ''}}>{value==='kg'?'Өзүңдү өнүктүр, өлкөнүн өнүгүшүнө салым кош!':'Develop yourself, contribute to the development of the country!'}</h1>
                    </div>

                    <div className="contact--link">
                        <div className="contact--link__btn">
                            <div className="contact--link__btn--btn1">
                                <a href="https://t.me/turat_alybaev"><BiLogoTelegram className="icon"/>Turat Alybaev -
                                    Telegram</a>
                            </div>
                            <div className="contact--link__btn--btn2">
                                <a href="https://wa.me/996557106446"><FaWhatsapp className="icon"/>Turat Alybaev -
                                    WhatsApp</a>
                            </div>
                        </div>
                        <div className="contact--link__btn">
                            <div className="contact--link__btn--btn3">
                                <a href="https://www.instagram.com/turat_alybaev/"><FaInstagram className="icon"/>Turat
                                    Alybaev - Instagram</a>
                            </div>
                            <div className="contact--link__btn--btn4">
                                <a href="https://www.youtube.com/channel/UCWIwjKkO3KD3VCJrjvGVHmw"><FaYoutube className="icon"/>Turat Alybaev - YouTube</a>
                            </div>
                            <div className="contact--link__btn--btn1">
                                <a href="https://t.me/turatalybaev"><BiLogoTelegram className="icon"/>Turat Alybaev -
                                    Telegram</a>
                            </div>
                        </div>
                    </div>

                    <div className="contact--titles">
                        <h5 style={{color: dark ? '#fff' : ''}}>{value==='kg'?'© 2024 Турат Алыбаев':'© 2024 Turat Alybaev'}</h5>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;
