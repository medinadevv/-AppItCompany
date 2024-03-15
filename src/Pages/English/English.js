import React from 'react';
import "./English.scss"
import Price from "../Price/Price";

// Бул 5-section бул жакта курс тууралуу маалыматтар жазылганл

const English = ({dark, value}) => {
    return (
        <>
            <div id="english" style={{background: dark ? 'black' : '', transition: "0.3s"}}>
                <div className="container">
                    <div className="english">
                        <div className="english--title">
                            <h1 style={{color: dark ? "#fff" : ''}}>{value === "kg" ? 'Англис тилин же орус тилин билбесеңиз деле окуп\n' +
                                'баштасаңыз болот.' : 'Read even if you don\'t know English or Russian\n' +
                                'you can start.'}</h1>
                            <h2 style={{color: dark ? "#fff" : ''}}>{value === 'kg' ? 'Бирок бул дегеним англис тилинин такыр кереги жок\n' +
                                '                                экен дегендик эмес, окуу учурунда 6 айда англис тилин окуп үйрөнүп алсаңыз болот.' : 'But this means that English is not necessary at all\n' +
                                '                                It doesn\'t mean that you can study and learn English in 6 months.'}</h2>
                        </div>
                        <div className="english--nav">
                            <div className="english--nav__90">
                                <h3>90%</h3>
                                <p style={{color: dark ? "#fff" : ''}}>{value === 'kg' ? 'Курсту аяктап иштеп жаткан катышуучулардын\n' +
                                    '                                    көпчүлүгү пайызы чет өлкөлөрдө иштеп жатышат. Швейцарияда, Түркияда, Тайванда,\n' +
                                    '                                    Орусияда жана Бишкек шаарыбызда иштеп жатышат.' : 'Participants who are completing the course\n' +
                                    '                                    Most of them are working abroad. Switzerland, Turkey, Taiwan,\n' +
                                    '                                    They are working in Russia and in our city of Bishkek.'}</p>
                            </div>
                            <div className="english--nav__1"></div>

                            <div className="english--nav__100">
                                <h3>100%</h3>
                                <p style={{color: dark ? "#fff" : ''}}>{value === 'kg' ? 'Көпчүлүк учурда өлкөбүздөн жумуш таап иштеп, анан\n' +
                                    '                                    тажрыйба топтоп алып чет өлкөдөн жумуш таап кетем деп ойлошот, чынында тескерисинче\n' +
                                    '                                    чет өлкөдөн жумуш табуу оңой жана айлык маяналары дагы абдан жакшы. Тамашалап көп\n' +
                                    '                                    айтам, бизде 30 жылдык тажрыйбасы бар, 20 жаштагы адистерди издейбиз дегендей эле\n' +
                                    '                                    акылга сыйбаган талаптар менен кабыл алышат, ошондуктан бизден жумуш табуу чынында\n' +
                                    '                                    абдан оор, табылса дагы сизди ишке албай, көңүлүңүздү такыр түшүрүп, АйТи жаатын\n' +
                                    '                                    таштап кетишиңизге түртөт.' : 'In most cases, they find work in our country and then work\n' +
                                    '                                    They think that they will gain experience and find a job abroad, but in fact it is the opposite\n' +
                                    '                                    It is easy to find a job abroad and the salaries are also very good. Lots of jokes\n' +
                                    '                                    I mean, we have 30 years of experience, and we are looking for 20-year-old specialists\n' +
                                    '                                    They are accepted with unreasonable demands, so finding a job with us is real\n' +
                                    '                                    It\'s very difficult, even if you are found, you will not be hired, it will completely depress you, and it will rain\n' +
                                    '                                    prompts you to leave.'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Price value={value} dark={dark}/>
        </>
    );
};

export default English;