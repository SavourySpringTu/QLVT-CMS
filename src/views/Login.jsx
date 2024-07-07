import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { fetchKhobyQuyenandChiNhanh } from "../redux/slices/khoSlice.js";
import { fetchNhanVienbyQuyenandChiNhanh } from "../redux/slices/nhanvienSlice";
import { fetchAllVatTu } from "../redux/slices/vattuSlice";
import { fetchDatHangbyQuyenandChiNhanh } from "../redux/slices/dathangSlice.js";
import { fetchCTDHbyQuyenandChiNhanh } from "../redux/slices/ctdhSlice.js";
import NhanVienService from "../services/NhanVienService";
import Title from "../components/Title";
import "react-toastify/dist/ReactToastify.css";
import "../styles/login.scss";

const Login = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [cookies, setCookie] = useCookies(["nhanvien"]);
  const [manv, setMaNV] = useState("");
  const [password, setPassword] = useState("");
  const [cn, setCN] = useState("CN01");
  const handleChangeMaNV = (event) => {
    setMaNV(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleCheckRadio = (cn) => {
    setCN(cn);
  };

  async function handleLogin(event) {
    event.preventDefault();
    let nhanvien = {
      manv: manv,
      matkhau: password,
      hoten: "",
      vaiTroNV: {
        maquyen: "",
      },
      chiNhanhNV: {
        macn: cn,
      },
    };
    const response = await NhanVienService.loginNhanVien(nhanvien);
    if (response.data === "") {
      toast.error("Đăng Nhập Thất Bại!");
    } else {
      nhanvien.hoten = response.data.hoten;
      nhanvien.vaiTroNV.maquyen = response.data.vaiTroNV.maquyen;
      // ========================= LOAD STATE REDUX ======================
      let data = {
        maquyen: nhanvien.vaiTroNV.maquyen,
        macn: nhanvien.chiNhanhNV.macn,
      };
      dispatch(fetchDatHangbyQuyenandChiNhanh(data));
      dispatch(fetchNhanVienbyQuyenandChiNhanh(data));
      dispatch(fetchCTDHbyQuyenandChiNhanh(data));
      dispatch(fetchAllVatTu());
      dispatch(fetchKhobyQuyenandChiNhanh(data));
      // =================================================================
      setCookie("nhanvien", nhanvien, { path: "/", maxAge: 3600 });
      navigate("/QLVT-CMS/trangchu");
    }
  }
  return (
    <>
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form className="login">
              <div className="login__field">
                <input
                  type="text"
                  className="login__input"
                  placeholder="Mã Nhân Viên"
                  defaultValue={manv}
                  onChange={handleChangeMaNV}
                />
              </div>
              <div className="login__field">
                <input
                  type="password"
                  className="login__input"
                  placeholder="Mật Khẩu"
                  autoComplete="on"
                  defaultValue={password}
                  onChange={handleChangePassword}
                />
              </div>
              <fieldset>
                <div className="toggle">
                  <input
                    type="radio"
                    name="sizeBy"
                    id="sizeWeight"
                    onClick={() => handleCheckRadio("CN01")}
                    defaultChecked="checked"
                  />
                  <label htmlFor="sizeWeight">Hà Nội</label>
                  <input type="radio" name="sizeBy" id="sizeDimensions" onClick={() => handleCheckRadio("CN02")} />
                  <label htmlFor="sizeDimensions">Hồ Chí Minh</label>
                </div>
              </fieldset>
              <button className="button login__submit" onClick={handleLogin}>
                <span className="button__text">Đăng Nhập</span>
              </button>
              <ToastContainer />
            </form>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
        <Title></Title>
      </div>
    </>
  );
};
export default Login;
