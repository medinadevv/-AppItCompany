import React, { useEffect, useState } from "react";
import img1 from "../../Img/turat-alybaev.jpg";
import img2 from "../../Img/turat-paris.jpg";
import img3 from "../../Img/turat-flutter.jpg";
import "./Home.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Flutter from "../Flutter/Flutter";
import Modal from "../Modal/Modal";

// Бул 2-section,бул жакта модальный окно,сүрөттөр жана маалыматтар жазылган.
const Home = ({ dark, value }) => {
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        style={{ background: dark ? "black" : "", transition: "0.3s" }}
        id="home"
      >
        <div className="container">
          <div className="home">
            <div className="home--title">
              <h1>
                {value === "kg" ? "АЙТИГЕ КОШ КЕЛДИҢИЗ" : "Welcome to IT"}
              </h1>
              <h2 style={{ color: dark ? "#fff" : "" }}>
                {value === "kg" ? "App IT компаниясы" : "App IT Company"}
              </h2>
              <p style={{ color: dark ? "#fff" : "" }}>
                {value === "kg"
                  ? "Android жана iOS үчүн мобилдик колдонмо иштеп чыгуу жана Кыргыз тилинде програмчыларды даярдоо."
                  : "" +
                    "Mobile application development for Android and iOS and training of programmers in Kyrgyz language"}
              </p>
              {/*Бул жактан модальный окно жазылган*/}
              <button onClick={() => setModalActive(true)}>
                {value === "kg" ? "Байланышуу" : "" + "to communicate"}
              </button>
            </div>
            {/*Бул жакта сүрөттөр ччыгат*/}
            <div className="home--images">
              <img
                data-aos="fade-left"
                // data-aos-offset="450"
                data-aos-duration="900"
                data-aos-easing="ease-in-sine"
                className="home--images__img1"
                src={img1}
                alt=""
              />
              <img
                data-aos="fade-right"
                // data-aos-offset="400"
                data-aos-duration="900"
                data-aos-easing="ease-in-sine"
                className="home--images__img2"
                src={img2}
                alt=""
              />
              <img
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="900"
                className="home--images__img3"
                src={img3}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Flutter value={value} dark={dark} />
      <Modal value={value} active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default Home;
