import React, { useEffect, useState } from "react";
import "./OurTeam.scss";
import images1 from "../../Img/Turat.jpg";
import Contact from "../Contact/Contact";
import axios from "axios";

// Бул 10-section бул жакта App It академиясында иштеген адамдар тууралуу маалымат  жазылган

const OurTeam = ({ dark, value }) => {
  const [person, setPerson] = useState([]);

  async function getEmplover() {
    let { data } = await axios("http://3.91.193.191/api/auth");
    setPerson(data);
  }

  async function deleteEmplover(id) {
    await axios.delete(`http://3.91.193.191/api/auth/${id}`);
  }

  useEffect(() => {
    getEmplover();
  }, []);

  return (
    <>
      <div id="team">
        <div className="container">
          <h1 style={{ color: dark ? "#fff" : "" }}>Биздин команда</h1>
          <div className="team">
            {person.map((el, idx) => (
              <div key={idx} className="team--all">
                <div className="team--all__img">
                  <img src={el.image} alt="" />
                </div>
                <div className="team--all__text">
                  <h2 style={{ color: dark ? "#fff" : "" }}>{el.fullName}</h2>
                  <h3 style={{ color: dark ? "#fff" : "" }}>{el.occupation}</h3>
                  <button
                    onClick={() => {
                      deleteEmplover(el.id);
                    }}
                  >
                    delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Contact value={value} dark={dark} />
    </>
  );
};

export default OurTeam;
