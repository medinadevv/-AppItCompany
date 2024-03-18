import React, { useState } from "react";
import "./Header.scss";
import logo from "../../Img/logo.png";
import { BsMoon, BsSun } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useStateContext } from "./../../context/StateContext";

// burger menu
// backend
// dark mood localStorage
// стрелк>>

// Бул Header дин башталышы, мунун ичинде бургер меню, тил, мод бар.

const Header = ({ dark, setDark, setValue, value }) => {
  const [modalActive, setModalActive] = useState(false);
  const [burger, setBurger] = useState(false);
  const { open } = useStateContext();

  function Language(e) {
    localStorage.setItem("lang", JSON.stringify(e.target.value));
    setValue(e.target.value);
  }

  console.log("jh", burger);
  return (
    <>
      <div
        id="header"
        style={{
          background: dark ? "black" : "",
          transition: "0.3s",
          borderBottom: dark ? "2px solid #fff" : "",
        }}
      >
        <div className="container">
          <div className="header">
            <div onClick={() => window.scroll(0, 2)} className="header--title">
              <img src={logo} alt="img" />
              <NavLink to="/">
                <h1 style={{ color: dark ? "#fff" : "" }}>App IT Company</h1>
              </NavLink>
            </div>

            <div className="header--nav">
              <div
                className="contact1"
                style={{ color: dark ? "#fff" : "" }}
                onClick={() => {
                  window.scroll(0, 4700);
                }}
              >
                {value === "kg" ? "Биздин команда" : "Our team"}
              </div>
              <div
                className="contact2"
                style={{ color: dark ? "#fff" : "" }}
                onClick={() => {
                  window.scroll(0, 3300);
                }}
              >
                {value === "kg" ? "Маалымат" : "Information"}
              </div>
              <div
                className="contact3"
                style={{ color: dark ? "#fff" : "" }}
                onClick={() => {
                  window.scroll(0, 5900);
                }}
              >
                {value === "kg" ? "Байланышуу" : "Contact"}
              </div>
            </div>

            <div className="header--logo">
              <select
                value={value}
                style={{ color: dark ? "#fff" : "" }}
                onChange={Language}
              >
                <option value="en" style={{ color: dark ? "#fff" : "" }}>
                  EN
                </option>
                <option value="kg" style={{ color: dark ? "#fff" : "" }}>
                  КG
                </option>
              </select>
              {/*Бул жакта iconдор жазылган*/}
              <div className="header--icon">
                <h1
                  onClick={() => {
                    setDark(true);
                    localStorage.setItem("darkMode", JSON.stringify(true));
                  }}
                  style={{
                    display: dark ? "none" : "block",
                    color: dark ? "#fff" : "",
                    paddingRight: open !== 4 ? "40px" : "",
                  }}
                >
                  <BsSun />
                </h1>
                <h1
                  onClick={() => {
                    setDark(false);
                    localStorage.setItem("darkMode", JSON.stringify(false));
                  }}
                  style={{
                    display: dark ? "block" : "none",
                    color: dark ? "#fff" : "",
                    paddingRight: open !== 4 ? "40px" : "",
                  }}
                >
                  <BsMoon />
                </h1>
              </div>

              <div className="header--user">
                <NavLink to="/log_in">
                  <h2
                    onClick={() => setModalActive(true)}
                    style={{
                      color: dark ? "#fff" : "",
                      display: open === 4 ? "" : "none",
                    }}
                  >
                    <FaRegCircleUser />
                  </h2>
                </NavLink>
              </div>
            </div>
            {/*Бул жакта бургер меню жасалган*/}
            <div className="burger">
              <input className="checkbox" type="checkbox" name="" id="" />
              <div
                onClick={() => setBurger(!burger)}
                className="hamburger-lines"
              >
                <span
                  style={{ color: dark ? "#fff" : "" }}
                  className="line line1"
                ></span>
                <span
                  style={{ color: dark ? "#fff" : "" }}
                  className="line line2"
                ></span>
                <span
                  style={{ color: dark ? "#fff" : "" }}
                  className="line line3"
                ></span>
              </div>
              <div className="menu-items">
                <div className="nav">
                  <p
                    className="contact1"
                    style={{ color: dark ? "#fff" : "" }}
                    onClick={() => {
                      window.scroll(0, 4700);
                      setBurger(!burger);
                    }}
                  >
                    {value === "kg" ? "Биздин команда" : "Our team"}
                  </p>
                  <p
                    className="contact2"
                    style={{ color: dark ? "#fff" : "" }}
                    onClick={() => {
                      window.scroll(0, 3300);
                      setBurger(!burger);
                    }}
                  >
                    {value === "kg" ? "Маалымат" : "Information"}
                  </p>
                  <p
                    className="contact3"
                    style={{ color: dark ? "#fff" : "" }}
                    onClick={() => {
                      setBurger(!burger);
                      window.scroll(0, 9900);
                    }}
                  >
                    {value === "kg" ? "Байланышуу" : "Contact"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
