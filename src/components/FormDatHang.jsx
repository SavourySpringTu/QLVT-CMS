import DatHangService from "../services/DatHangService";
import React, { useState, useEffect } from "react";
import { fetchDatHangbyQuyenandChiNhanh } from "../redux/slices/dathangSlice.js";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { format } from "date-fns";
import "react-toastify/dist/ReactToastify.css";

const FormDatHang = ({ close, dh }) => {
  const dispatch = useDispatch();
  const listKhobyQuyenandChiNhanh = useSelector((state) => state.kho.listKho);

  const [cookies] = useCookies(["nhanvien"]);
  const [maddh, setMaDDH] = useState("");
  const [ngay, setNgay] = useState("");
  const [nhacc, setNhaCC] = useState("");
  const [manv, setMaNV] = useState("");
  const [makho, setMaKho] = useState("");

  const handleChangeMaKho = (event) => {
    setMaKho(event.target.value);
  };
  const handleChangeNhaCC = (event) => {
    console.log(manv);
    setNhaCC(event.target.value);
  };

  useEffect(() => {
    setMaKho(Object.values(listKhobyQuyenandChiNhanh)[0].makho);
    if (typeof dh === "undefined") {
      let today = format(new Date(), "yyyy-MM-dd");
      document.querySelector('input[name="inputNgay"]').value = today;
      setNgay(today);
      document.querySelector('input[name="inputMaNV"]').value = cookies.nhanvien.manv;
      setMaNV(cookies.nhanvien.manv);
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
      document.querySelector('select[name="inputMaKho"]').value = dh.makho;
      setMaKho(dh.makho);
    }
  }, []);

  function verify() {
    if (nhacc.trim().length < 3) {
      console.log(nhacc);
      toast.error("Nhà Cung Cấp Phải 3 Kí Tự!");
      return false;
    }
    return true;
  }
  async function handleSubmit(event) {
    event.preventDefault();
    if (verify() == true) {
      let dathang = {
        ngay: ngay,
        nhacc: nhacc,
        manv: manv,
        makho: makho,
      };
      const response = await DatHangService.insertDatHang(dathang);
      if (response == 0) {
        toast.error("Cập Nhật Thất Bại!");
      } else {
        let fetch = {
          maquyen: cookies.nhanvien.vaiTroNV.maquyen,
          macn: cookies.nhanvien.chiNhanhNV.macn,
        };
        dispatch(fetchDatHangbyQuyenandChiNhanh(fetch));
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
                <input type="text" name="inputMaDDH" className="formbold-form-input" readOnly="true" />
              </div>
              <div>
                <label className="formbold-form-label"> Ngày Lập Phiếu </label>
                <input type="date" name="inputNgay" className="formbold-form-input" placeholder="dd-mm-yyyy" />
              </div>
            </div>

            <div className="formbold-mb-3">
              <div>
                <label className="formbold-form-label"> Nhà Cung Cấp</label>
                <input type="text" name="inputNhaCC" className="formbold-form-input" onChange={handleChangeNhaCC} />
              </div>
            </div>
            <div className="formbold-input-flex">
              <div>
                <label className="formbold-form-label"> Tên Kho</label>
                <select className="formbold-form-input" name="inputMaKho" onChange={handleChangeMaKho}>
                  {listKhobyQuyenandChiNhanh.map((kho) => (
                    <option value={kho.makho}>{kho.tenkho}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="formbold-form-label"> Mã Nhân Viên </label>
                <input type="text" name="inputMaNV" className="formbold-form-input" readonly="true" />
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
