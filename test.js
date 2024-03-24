"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../images/logo.svg";
import { FaHouse, FaRegCalendar, FaCrown } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
import { GrDocumentVerified } from "react-icons/gr";
import { BiMessageRoundedMinus } from "react-icons/bi";

export default function Sidebar() {
  const [sidebarActive, setSidebarActive] = useState(false);
  return (
    <div
      className={"sidebar" + (sidebarActive ? " active" : "")}
      id="side_nav"
      style={{ background: "#5439f4" }}
    >
      <div className="header-box px-2 pt-3 pb-4 d-flex justify-content-center">
        <a href="#" className="fs-4">
          <Image src={logo} alt="logo" className="p-2 text-center" />
        </a>
        <button
          className={
            "btn d-md-none d-block close-btn px-1 py-0 text-white" +
            (sidebarActive ? " active" : "")
          }
          onClick={() => setSidebarActive(!sidebarActive)}
        >
          <i className="fal fa-stream"></i>
        </button>
      </div>

      <ul className="list-unstyled px-2">
        <li className="active">
          <a
            href="#"
            className="text-decoration-none text-white d-flex justify-content-start align-items-center px-3 py-2 d-block"
          >
            <FaHouse className="me-2" color="white" />
            Anasayfa
          </a>
        </li>
        <li className="">
          <a
            href="#"
            className="text-decoration-none text-white d-flex justify-content-start align-items-center px-3 py-2 d-block"
          >
            <FaRegCalendar className="me-2" color="white" /> Randevularım
          </a>
        </li>
        <li className="">
          <a
            href="#"
            className="text-decoration-none text-white d-flex justify-content-start align-items-center px-3 py-2 d-block "
          >
            <AiFillMessage className="me-2" color="white" />
            Mesajlarım
            <span className="bg-dark rounded-pill text-white py-0 px-2">
              02
            </span>
          </a>
        </li>
        <li className="">
          <a
            href="#"
            className="text-decoration-none text-white d-flex justify-content-start align-items-center px-3 py-2 d-block"
          >
            <GrDocumentVerified className="me-2" color="white" />
            Bloglarım
          </a>
        </li>
        <li className="">
          <a
            href="#"
            className="text-decoration-none text-white d-flex justify-content-start align-items-center px-3 py-2 d-block"
          >
            <GrDocumentVerified className="me-2" color="white" />
            Testler
          </a>
        </li>
        <li className="">
          <a
            href="#"
            className="text-decoration-none text-white d-flex justify-content-start align-items-center px-3 py-2 d-block"
          >
            <BiMessageRoundedMinus className="me-2" color="white" />
            Neyim Var?
          </a>
        </li>
        <li className="">
          <a
            href="#"
            className="text-decoration-none text-white d-flex justify-content-start align-items-center px-3 py-2 d-block"
          >
            <FaCrown className="me-2" color="white" />
            Psiko+
          </a>
        </li>
      </ul>
      <ul className="list-unstyled px-2"></ul>

      <div
        className="position-absolute "
        style={{ padding: "10px", height: "60px", bottom: 0, right: 0 }}
        onClick={() => setSidebarActive(!sidebarActive)}
      >
        aç 
      </div>
    </div>
  );
}