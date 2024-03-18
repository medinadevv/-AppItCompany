import React, { useState, useEffect } from "react";
import "./Modal.scss";
import { MdClose } from "react-icons/md";
import axios from "axios";

const Modal = ({ active, setActive }) => {
  const [value, setValue] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  function handleInputValue(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }

  async function handleSubmit() {
    await axios.post(
      `http://3.91.193.191/api/auth?fullName=${value.fullName}&email=${value.email}&message=${value.message}`,
      value
    );
    setValue({
      fullName: "",
      email: "",
      message: "",
    });
  }

  // async function getContact(){
  //     let {data} = await axios('http://3.91.193.191/api/contacts')
  //     console.log(data)
  // }
  //
  // useEffect(()=>{
  //     getContact()
  // },[])

  // useEffect(() => {
  //     handleSubmit()
  // }, [])
  // const TELEGRAM_CHAT_ID = "@Gulzina_lol";
  // const TELEGRAM_BOT_TOKEN = "7112079752:AAGPf_Uc_bZy2C5dKXJsM2Te7ycJZntqT0Q";
  // const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  //
  // async function sendMessageBot() {
  //     let res = {
  //         name: name,
  //         gmail: gmail,
  //         texts: commit
  //     };
  //     let resMessage = `привет мененджер \n имя : '${res.name} \n нрмер: "${res.gmail}" \n text: "${res.texts}"`;
  //     await axios.post(API, {
  //         chat_id: TELEGRAM_CHAT_ID,
  //         parse_mode: "html",
  //         text: resMessage,
  //     });
  //     setName("");
  //     setGmail("");
  //     setCommit("");
  // }

  return (
    <div id="modal">
      <div
        className={active ? "modal active" : "modal"}
        onClick={() => setActive(false)}
      >
        <div className="modal--content" onClick={(e) => e.stopPropagation()}>
          <div className="modal--content__h3">
            <h1>Курска жазылуу</h1>
            <h3
              className={active ? "modal active " : "modal"}
              onClick={() => setActive(false)}
            >
              <MdClose />
            </h3>
          </div>
          <h2>Биз сиз менен байланышабыз.</h2>
          <input
            value={value.fullName}
            name="fullName"
            onChange={handleInputValue}
            type="text"
            placeholder="Аты-жөнү"
            required
          />
          <input
            value={value.email}
            name="email"
            onChange={handleInputValue}
            type="email"
            placeholder="Gmail "
            required
          />
          <textarea
            value={value.message}
            name="message"
            onChange={handleInputValue}
            className="text"
            placeholder="Комментарий"
          />
          <button onClick={handleSubmit}>Жиберүү</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
