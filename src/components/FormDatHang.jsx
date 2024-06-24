import React, { useState, useEffect } from "react";
import DatHangService from "../services/DatHangService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchAllDatHang } from "../redux/slices/dathangSlice";
import { useDispatch, useSelector } from "react-redux";

const FormDatHang = ({ close, dh }) => {
  const dispatch = useDispatch();
  const [maddh, setMaDDH] = useState("");
  const [ngay, setNgay] = useState("");
  const [nhacc, setNhaCC] = useState("");
  const [manv, setMaNV] = useState("");

  const handleChangeMaDDH = (event) => {
    setMaDDH(event.target.value);
  };

  useEffect(() => {
    if (typeof dh === "undefined") {
      console.log("undefined");
      return;
    } else {
      document.querySelector('input[name="inputMaDDH"]').value = dh.maddh;
      setMaDDH(dh.maddh);
      document.querySelector('input[name="inputNgay"]').value = dh.ngay;
      setNgay(dh.ngay);
      document.querySelector('input[name="inputNhaCC"]').value = dh.nhacc;
      setNhaCC(dh.nhacc);
      document.querySelector('input[name="inputMaNV"]').value = dh.manv;
      setMaNV(dh.manv);
    }
  }, []);

  function verify() {
    if (maddh.trim().length != 4) {
      toast.error("Mã Phiếu Nhập Phải 4 Kí Tự!");
      return false;
    }
    return true;
  }
  async function handleSubmit(event) {
    event.preventDefault();
    if (verify() == true) {
      var today = new Date();
      let year = today.getDay.toString;
      let dathang = {
        maddh: maddh,
        ngay: year,
        nhacc: nhacc,
        manv: manv,
      };
      console.log(dathang);
      const response = await DatHangService.saveDatHang(dathang);
      if (response == 0) {
        toast.error("Cập Nhật Thất Bại!");
      } else {
        dispatch(fetchAllDatHang());
        toast.success("Cập Nhật Thành Công!");
      }
    }
  }
  return (
    <>
      <div className="fixed inset-0 backdrop-blur-sm">
        <div className="formbold-form-wrapper">
          <form action="https://formbold.com/s/FORM_ID" method="POST">
            <div className="formbold-input-flex">
              <div>
                <label className="formbold-form-label">Mã DDH</label>
                <input
                  type="text"
                  name="inputMaDDH"
                  className="formbold-form-input"
                  onChange={handleChangeMaDDH}
                />
              </div>
              <div>
                <label className="formbold-form-label"> Ngày Lập Phiếu </label>
                <input
                  type="date"
                  name="inputNgay"
                  className="formbold-form-input"
                />
              </div>
            </div>

            <div className="formbold-input-flex">
              <div>
                <label className="formbold-form-label"> Nhà Cung Cấp</label>
                <input
                  type="text"
                  name="inputNhaCC"
                  className="formbold-form-input"
                />
              </div>
              <div>
                <label className="formbold-form-label"> Mã Nhân Viên </label>
                <input
                  type="text"
                  name="inputMaNV"
                  className="formbold-form-input"
                />
              </div>
            </div>
            <button className="formbold-btn" onClick={handleSubmit}>
              Xác Nhận
            </button>
            <button className="formbold-btn" id="btnClose" onClick={close}>
              Đóng
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default FormDatHang;
