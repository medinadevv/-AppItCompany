import React from 'react';
import blog2 from '../../Img/blog2.jpg'
import English from "../English/English";
import './Blog2.scss'
// Бул 6-section бул жакта курс тууралуу маалыматтар жазылганл

const Blog2 = ({dark, value}) => {
    return (
        <>
            <div id="blog2" style={{background: dark ? 'black' : '', transition: "0.3s"}}>
                <div className="container">
                    <div className="blog2">
                        <div className="blog2--text">
                            <h1 style={{color: dark ? "#fff" : ''}}>{value === "kg" ? 'Flutter менен мобилдик колдонмо жасоону үйрөнүп кандай натыйжага чыга аласыз?' : 'How can you learn to build a mobile app with Flutter?'}</h1>
                            <p style={{color: dark ? "#fff" : ''}}>{value === 'kg' ? 'Мобилдик колдонмо иштеп чыгуучу програмчылар\n' +
                                '                                Кыргызстанда жашап дүйнөнүн каалаган жеринде иштей алат. Үйүңдө отуруп, каалаган жериңде\n' +
                                '                                иштеген, же каалаган жериңде жашап, каалаган жериңде иштеген кандай сонун!' : 'Mobile application development programmers\n' +
                                '                                He can live in Kyrgyzstan and work anywhere in the world. Sit at home, wherever you want\n' +
                                '                                How great it is to work, or live and work wherever you want!'}</p>
                        </div>
                        <div className="blog2--img2">
                            <img src={blog2} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <English value={value} dark={dark}/>
        </>
    );
};

export default Blog2;