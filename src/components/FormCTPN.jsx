import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { fetchCTPNbyQuyenandChiNhanh } from "../redux/slices/ctpnSlice";
import { useDispatch, useSelector } from "react-redux";
import CTPNService from "../services/CTPNService";
//import "react-toastify/dist/ReactToastify.css";

const FormCTPN = ({ close, ctpn }) => {
  const dispatch = useDispatch();
  const listVatTu = useSelector((state) => state.vattu.listVatTu);

  const [cookies] = useCookies(["nhanvien"]);
  const [mapn, setMaDDH] = useState("");
  const [mavt, setMaVT] = useState("");
  const [soluong, setSoLuong] = useState("");
  const [dongia, setDonGia] = useState("");

  const handleChangeMaDDH = (event) => {
    setMaDDH(event.target.value);
  };
  const handleChangeMaVT = (event) => {
    setMaVT(event.target.value);
  };
  const handleChangeSoLuong = (event) => {
    setSoLuong(event.target.value);
  };
  const handleChangeDonGia = (event) => {
    setDonGia(event.target.value);
  };

  function verify() {
    if (soluong <= 0) {
      toast.error("Số Lượng Tồn Phải Lớn Hơn 0!");
      return false;
    } else if (dongia <= 0) {
      toast.error("Đơn Giá Phải Lớn Hơn 0!");
      return false;
    }
    return true;
  }
  useEffect(() => {
    setMaVT(Object.values(listVatTu)[0].mavt);
    if (typeof ctpn === "undefined") {
      console.log("undefined");
      return;
    } else {
      document.querySelector('input[name="inputMaDDH"]').value = ctpn.mapn;
      setMaDDH(ctpn.mapn);
      document.querySelector('select[name="inputMaVT"]').value = ctpn.mavt;
      setMaVT(ctpn.mavt);
      document.querySelector('input[name="inputSoLuong"]').value = ctpn.soluong;
      setSoLuong(ctpn.soluong);
      document.querySelector('input[name="inputDonGia"]').value = ctpn.dongia;
      setDonGia(ctpn.dongia);
    }
  }, []);
  async function handleSubmit(event) {
    event.preventDefault();
    if (verify() == true) {
      let data = {
        mapn: mapn,
        mavt: mavt,
        soluong: soluong,
        dongia: dongia,
      };
      let fetch = {
        maquyen: cookies.nhanvien.vaiTroNV.maquyen,
        macn: cookies.nhanvien.chiNhanhNV.macn,
      };

      if (typeof ctpn === "undefined") {
        const response = await CTPNService.insertCTPN(data);
        if (response == 0) {
          toast.error("Thêm Thất Bại!");
        } else {
          dispatch(fetchCTPNbyQuyenandChiNhanh(fetch));
          toast.success("Thêm Thành Công!");
        }
      } else {
        let dataupdate = {
          mavt: ctpn.mavt.toString(),
          mavtupdate: mavt.toString(),
          mapn: ctpn.mapn.toString(),
          soluong: soluong.toString(),
          dongia: dongia.toString(),
        };
        const response = await CTPNService.updateCTPN(dataupdate);
        if (response == 0) {
          toast.error("Cập Nhật Thất Bại!");
        } else {
          dispatch(fetchCTPNbyQuyenandChiNhanh(fetch));
          toast.success("Cập Nhật Thành Công!");
        }
      }
    }
  }
  return (
    <>
      <div className="fixed inset-0 backdrop-blur-sm">
        <div className="formbold-form-wrapper">
          <div className="formbold-input-flex">
            <div>
              <label className="formbold-form-label">Mã PN</label>
              <input type="number" name="inputMaDDH" className="formbold-form-input" onChange={handleChangeMaDDH} />
            </div>
            <div>
              <label className="formbold-form-label"> Mã VT </label>
              <select className="formbold-form-input" name="inputMaVT" onChange={handleChangeMaVT}>
                {listVatTu.map((vt) => (
                  <option value={vt.mavt}>{vt.tenvt}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="formbold-input-flex">
            <div>
              <label className="formbold-form-label"> Số Lượng</label>
              <input type="number" name="inputSoLuong" className="formbold-form-input" onChange={handleChangeSoLuong} />
            </div>
            <div>
              <label className="formbold-form-label"> Đơn Giá</label>
              <input type="number" name="inputDonGia" className="formbold-form-input" onChange={handleChangeDonGia} />
            </div>
          </div>
          <button className="formbold-btn" onClick={handleSubmit}>
            Xác Nhận
          </button>
          <button className="formbold-btn" id="btnClose" onClick={close}>
            Đóng
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default FormCTPN;
