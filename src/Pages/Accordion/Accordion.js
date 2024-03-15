import React, {useState} from 'react';
import './Accordion.scss'
import AppCompany from "../App/AppCompany";
import {HiChevronUp} from "react-icons/hi";


// Бул 7-section бул жакта курс тууралуу маалыматтар жазылганл жана аккордион бар

const Accordion = ({dark, value}) => {
    const [acc1, setAcc1] = useState(false)
    const [acc2, setAcc2] = useState(false)
    const [acc3, setAcc3] = useState(false)
    const [acc4, setAcc4] = useState(false)
    const [acc5, setAcc5] = useState(false)
    console.log(acc5)

    console.log('dark', dark)

    function Acc1() {
        setAcc1(!acc1)
        setAcc2(false)
        setAcc3(false)
        setAcc4(false)
        setAcc5(false)
    }

    function Acc2() {
        setAcc1(false)
        setAcc2(!acc2)
        setAcc3(false)
        setAcc4(false)
        setAcc5(false)
    }

    function Acc3() {
        setAcc1(false)
        setAcc2(false)
        setAcc3(!acc3)
        setAcc4(false)
        setAcc5(false)
    }

    function Acc4() {
        setAcc1(false)
        setAcc2(false)
        setAcc3(false)
        setAcc4(!acc4)
        setAcc5(false)
    }

    function Acc5() {
        setAcc1(false)
        setAcc2(false)
        setAcc3(false)
        setAcc4(false)
        setAcc5(!acc5)
    }

    return (
        <>
            <section id="accardeon" style={{background: dark ? 'black' : '', transition: "0.3s"}}>
                <div className="container">
                    <div className="accardeon">
                        <h1 style={{color: dark ? "#fff" : ''}}>{value === 'kg' ? 'Суроо - Жооп' : '\n' +
                            'Question - Answer'}</h1>
                        <div className="accardeon__all">
                            <div style={{background: dark ? 'black' : '', transition: "0.3s"}} className='acc-bottom'>

                            </div>
                            <div onClick={Acc1} className="accardeon__all__one">
                                <div style={{
                                    background: acc1 ? '#f6f6f6' : 'white'
                                }} style={{background: dark ? 'black' : '', transition: "0.3s"}}
                                     className="accardeon__all__one__title">
                                    <h2 style={{color: dark ? '#fff' : ''}}>{value === 'kg' ? 'Flutter деген эмне?' : 'What is Flutter?'}</h2>
                                    <h3 style={{
                                        rotate: acc1 ? '-180deg' : '',
                                        color: dark ? '#fff' : ''
                                    }}><HiChevronUp/></h3>
                                </div>
                                <div style={{height: acc1 ? "" : "0px", padding: acc1 ? '' : '0 0'}}
                                     className="accardeon__all__one__body">
                                    <p style={{
                                        color: dark ? '#FFF' : '',
                                        borderBottom: acc1 ? '1px solid #d5d8dc' : '',
                                        transform: acc1 ? 'translate(-50%, 0%)' : 'translate(-50%,-40%)',
                                    }}>Flutter – бул мобилдик колдонмолорду,
                                        тиркемелерди иштеп чыгуу үчүн колдонулган,
                                        кроссплатформалуу фреймворк. Азыркы учурда iOS жана Android cистемалары үчүн
                                        бирдей код
                                        менен колдонмо иштеп чыгуу үчүн колдонулган эң популярдуу платформа десек
                                        жаңылышпайбыз.</p>
                                </div>
                            </div>
                            <div onClick={Acc2} className="accardeon__all__one">
                                <div style={{
                                    background: acc2 ? '#f6f6f6' : 'white'
                                }} style={{background: dark ? 'black' : '', transition: "0.3s"}}
                                     className="accardeon__all__one__title">
                                    <h2 style={{color: dark ? '#fff' : ''}}>{value === 'kg' ? 'Он-лайн окусам түшүнбөй калбаймбы?' : 'Will I get confused if I read online?'}</h2>
                                    <h3 style={{rotate: acc2 ? '-180deg' : '', color: dark ? '#fff' : ''}}>
                                        <HiChevronUp/></h3>
                                </div>
                                <div style={{height: acc2 ? "" : "0px", padding: acc2 ? '' : '0 0'}}
                                     className="accardeon__all__one__body">
                                    <p style={{
                                        color: dark ? '#FFF' : '',
                                        borderBottom: acc2 ? '1px solid #d5d8dc' : '',
                                        transform: acc2 ? 'translate(-50%, 0%)' : 'translate(-50%,-60%)',

                                    }}>{value === 'kg' ? 'Он-лайн окусам түшүнбөй калбаймбы? Жооп Бизде сабактар негизинен он-лайн\n' +
                                        '                                        окутулат. Сабактар зум аркылуу өтүлүп, запись болуп сакталат, ал сабактарды\n' +
                                        '                                        каалаган учурда, калагандай кайталап көрө аласыз. Ошондуктан оф-лайн окуганга\n' +
                                        '                                        караганда он-лайн окууну көбүрөөк сунуштайбыз. Дагы бир себеп, он-лайн окуганда\n' +
                                        '                                        ашыкча энергия кетпейт, жол жүрбөйсүз, концентрация бузбайсыз. Каякта болсоңуз,\n' +
                                        '                                        ошол жактан окуй бересиз.' : 'Will I get confused if I read online? Answer: Our classes are mostly online\n' +
                                        '                                        is taught. Lessons are held via Zoom and recorded\n' +
                                        '                                        You can rewatch as many times as you want. Therefore, to study offline\n' +
                                        '                                        We recommend reading online. Another reason is when you study online\n' +
                                        '                                        You won\'t lose excess energy, you won\'t travel, you won\'t lose concentration. wherever you are\n' +
                                        '                                        You can read from there.'}</p>
                                </div>
                            </div>
                            <div onClick={Acc3} className="accardeon__all__one">
                                <div style={{
                                    background: acc3 ? '#f6f6f6' : 'white'
                                }} style={{background: dark ? 'black' : '', transition: "0.3s"}}
                                     className="accardeon__all__one__title">

                                    <h2 style={{color: dark ? '#fff' : ''}}>{value === 'kg' ? 'Flutter\'ди окуп ким болуп чыгам?' : 'Who will I become after reading Flutter?'}</h2>
                                    <h3 style={{rotate: acc3 ? '-180deg' : '', color: dark ? '#fff' : ''}}>
                                        <HiChevronUp/></h3>
                                </div>
                                <div style={{height: acc3 ? "" : "0px", padding: acc3 ? '' : '0 0'}}
                                     className="accardeon__all__one__body">
                                    <p style={{
                                        color: dark ? '#FFF' : '',
                                        borderBottom: acc3 ? '1px solid #d5d8dc' : '',
                                        transform: acc3 ? 'translate(-50%, 0%)' : 'translate(-50%,-60%)',

                                    }}>{value === 'kg' ? 'Flutter’ди окуп, мобилдик колдонмо иштеп чыгуучу програмчы болуп чыгасыз. Азыркы\n' +
                                        '                                        учурда интернет колдонуучулардын 97 пайызы телефон аркылуу интернет колдонот,\n' +
                                        '                                        демек алар үчүн ар кандай колдонмолорду (приложениелерди) иштеп чыгуучу\n' +
                                        '                                        програмчыларга муктаждык абдан чоң.' : 'Learn Flutter and become a mobile app developer. Present\n' +
                                        '                                        Currently, 97 percent of Internet users use the Internet by phone,\n' +
                                        '                                        hence the developer of various applications (applications) for them\n' +
                                        '                                        The need for programmers is huge.'}</p>
                                </div>
                            </div>
                            <div onClick={Acc4} className="accardeon__all__one">
                                <div style={{
                                    background: acc4 ? '#f6f6f6' : 'white'
                                }} style={{background: dark ? 'black' : '', transition: "0.3s"}}
                                     className="accardeon__all__one__title">
                                    <h2 style={{color: dark ? '#fff' : ''}}>{value === 'kg' ? 'Кыргызстандан жумуш табылабы?' : '\n' +
                                        'Can you find a job in Kyrgyzstan?'}</h2>
                                    <h3 style={{rotate: acc4 ? '-180deg' : '', color: dark ? '#fff' : ''}}>
                                        <HiChevronUp/></h3>
                                </div>
                                <div style={{height: acc4 ? "" : "0px", padding: acc4 ? '' : '0 0'}}
                                     className="accardeon__all__one__body">
                                    <p style={{
                                        color: dark ? '#FFF' : '',
                                        borderBottom: acc4 ? '1px solid #d5d8dc' : '',
                                        transform: acc4 ? 'translate(-50%, 0%)' : 'translate(-50%,-60%)',

                                    }}>Негизи бул тармакта өлкөбүздө деле абдан көп иш орундары бар, бирок биздин
                                        компания чет өлкөдөн жумуш табууну сунуштайбыз. Мунун биринчи себеби эмгек акысы
                                        жакшы төлөнөт, экинчи себеби биздин өлкөдө иштеп баштагандан көрө, чет өлкөдө
                                        иштеп баштоо, жаңы башталгыч програмчылар үчүн кыйла оңой болуп саналат.</p>
                                </div>
                            </div>
                            <div onClick={Acc5} className="accardeon__all__one">
                                <div style={{
                                    background: acc5 ? '#f6f6f6' : 'white'
                                }} style={{background: dark ? 'black' : '', transition: "0.3s"}}
                                     className="accardeon__all__one__title">
                                    <h2 style={{color: dark ? '#fff' : ''}}>{value === "kg" ? 'Англис тилин билүү шартпы?' : 'Is it necessary to know English?'}</h2>
                                    <h3 style={{rotate: acc5 ? '-180deg' : '', color: dark ? '#fff' : ''}}>
                                        <HiChevronUp/></h3>
                                </div>
                                <div style={{height: acc5 ? "" : "0px", padding: acc5 ? '' : '0 0'}}
                                     className="accardeon__all__one__body">
                                    <p style={{
                                        borderBottom: acc5 ? '1px solid #d5d8dc' : '',
                                        transform: acc5 ? 'translate(-50%, 0%)' : 'translate(-50%,-60%)',
                                        color: dark ? '#FFF' : '',
                                    }}>{value === 'kg' ? '1Курсту окуу үчүн негизги шарт эмес. Бирок билсеңиз сиз үчүн жакшы. Эгер англис\n' +
                                        '                                        тилин билбей туруп окуп баштай турган болсоңуз, окууну аяктаганга чейин сөзсүз\n' +
                                        '                                        англис тилин дагы кошумча үйрөнүшүңүз керек, себеби жогоруда айтылгандай жумушту\n' +
                                        '                                        чет өлкөдөн тапкан жеңилирээк жана иштегенге дагы ыңгайлуураак.' : '1 Not a prerequisite for taking the course. But good for you if you know. If English\n' +
                                        '                                        If you are going to start studying without knowing the language, definitely before you graduate\n' +
                                        '                                        You need to learn English in addition, because of the job as mentioned above\n' +
                                        '                                        It is easier and more convenient to work abroad.'}</p>
                                </div>
                            </div>
                            <div style={{background: dark ? 'black' : '', transition: "0.3s"}} className='acc-bottom'>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AppCompany value={value} dark={dark}/>
        </>
    );
};

export default Accordion;