import React from "react";
import "../styles/nav.scss";
import { NavLink } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(["nhanvien"]);

  const handleChangeBar = () => {
    if (document.getElementById("mySidebar").style.display == "none")
      document.getElementById("mySidebar").style.display = "block";
    else document.getElementById("mySidebar").style.display = "none";
  };

  const handleLogOut = () => {
    removeCookie("nhanvien");
    navigate("/QLVT-CMS");
  };

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>

      <body className="navItem">
        <div className="TopNav">
          <div className="info">
            Họ Tên: &nbsp; {cookies.nhanvien.hoten} &nbsp; &nbsp; &nbsp; Mã CN: &nbsp;{" "}
            {cookies.nhanvien.chiNhanhNV.macn}&nbsp; &nbsp; &nbsp; Mã NV: &nbsp; {cookies.nhanvien.manv} &nbsp; &nbsp;
            &nbsp; Mã Quyền: &nbsp; {cookies.nhanvien.vaiTroNV.maquyen}
          </div>
          <div className="btnOut" onClick={handleLogOut}>
            <Player src="https://lottie.host/4b31c9f7-b2c9-4b24-9878-016868cbf2a6/7LFG7Z0z4I.json" loop autoplay />
          </div>
        </div>
        <div className="w3-sidebar w3-bar-block w3-border-right" style={{ display: "none" }} id="mySidebar">
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
            <NavLink to="/QLVT-CMS/phieunhap">Phiếu Nhập</NavLink>
          </a>
          <a className="w3-bar-item w3-button">
            <NavLink to="/QLVT-CMS/phieuxuat">Phiếu Xuất</NavLink>
          </a>
          <a className="w3-bar-item w3-button">
            <NavLink to="/QLVT-CMS/khachhang">Khách Hàng</NavLink>
          </a>
        </div>
        <div className="menu" onClick={handleChangeBar}>
          <Player src="https://lottie.host/6590041c-820c-4077-8634-1efb2199e4d4/9rDA8AqGoT.json" loop autoplay />
        </div>
        <div className="info"></div>
      </body>
    </>
  );
};
export default Nav;
