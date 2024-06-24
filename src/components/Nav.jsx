import React from "react";
import "../styles/nav.scss";
import { NavLink } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
const Nav = () => {
  const handleChangeBar = () => {
    if (document.getElementById("mySidebar").style.display == "none")
      document.getElementById("mySidebar").style.display = "block";
    else document.getElementById("mySidebar").style.display = "none";
  };

  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <link
        rel="stylesheet"
        href="https://www.w3schools.com/w3css/4/w3.css"
      ></link>

      <body className="navItem">
        <div
          className="w3-sidebar w3-bar-block w3-border-right"
          style={{ display: "none" }}
          id="mySidebar"
        >
          <div onClick={handleChangeBar}>
            <Player
              src="https://lottie.host/d4b2de71-48d6-4ef7-84fb-907f90f00b6c/np0kjd3ZN8.json"
              id="closeMenu"
              loop
              autoplay
              className="w3-bar-item w3-large"
            ></Player>
          </div>

          <a className="w3-bar-item w3-button">
            <NavLink to="/QLVT-CMS/trangchu">Nhân Viên</NavLink>
          </a>
          <a className="w3-bar-item w3-button">
            <NavLink to="/QLVT-CMS/vattu">Vật Tư</NavLink>
          </a>
          <a className="w3-bar-item w3-button">
            <NavLink to="/QLVT-CMS/kho">Kho</NavLink>
          </a>
          <a className="w3-bar-item w3-button">
            <NavLink to="/QLVT-CMS/dathang">Đặt Hàng</NavLink>
          </a>
          <a className="w3-bar-item w3-button">
            <NavLink to="/QLVT-CMS/ctdh">CTDH</NavLink>
          </a>
          <a className="w3-bar-item w3-button">
            <NavLink to="/QLVT-CMS/phieunhap">Phiếu Nhập</NavLink>
          </a>
          <a className="w3-bar-item w3-button">
            <NavLink to="/QLVT-CMS/ctpn">CTPN</NavLink>
          </a>
          <a className="w3-bar-item w3-button">
            <NavLink to="/QLVT-CMS/phieuxuat">Phiếu Xuất</NavLink>
          </a>
          <a className="w3-bar-item w3-button">
            <NavLink to="/QLVT-CMS/ctpx">CTPX</NavLink>
          </a>
        </div>

        <div className="menu" onClick={handleChangeBar}>
          <Player
            src="https://lottie.host/bd6bc7dd-0c12-4e54-885a-642899f09e71/6Hk8RjlBDp.json"
            loop
            autoplay
          />
        </div>
      </body>
    </>
  );
};
export default Nav;
