import React from 'react';
import blog from '../../Img/blog.jpg'
import './Blog.scss'
import Blog2 from "../Blog2/Blog2";

// Бул 5-section бул жакта курс тууралуу маалыматтар жазылганл

const Blog = ({dark, value}) => {
    return (
        <>
            <div id="blog1" style={{background: dark ? 'black' : '', transition: "0.3s"}}>
                <div className="container">
                    <div className="blog">
                        <img src={blog} alt=""/>
                        <div className="blog--text">
                            <h1 style={{color: dark ? "#fff" : ''}}>{value === "kg" ? 'Эмне үчүн Flutter үйрөнүшүңүз керек?' : '\n' +
                                'Why should you learn Flutter?'}</h1>
                            <p style={{color: dark ? "#fff" : ''}}>{value === "kg" ? 'Учурда интернет колдонуучулардын 90 пайыздан ашыгы\n' +
                                '                                интернетти телефон аркылуу колдонушат. Демек мобилдик колдонмолорду иштеп чыгуу күн\n' +
                                '                                өткөн сайын актуалдуу болуп жатат. Сиз дагы мобилдик колдонмо иштеп чыгуучу програмчы\n' +
                                '                                болуп, өзүңүздүн кыялдарыңызга жетиңиз!' : "Currently, more than 90 percent of Internet users\n" +
                                "                                use the Internet by phone. Hence the development of mobile applications\n" +
                                "                                is becoming more and more relevant. You are also a mobile app developer\n" +
                                "                                be and achieve your dreams!"}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Blog2 style={{display: "none "}} value={value} dark={dark}/>
        </>
    );
};

export default Blog;