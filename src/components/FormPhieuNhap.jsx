import React, { useState, useEffect } from "react";
import PhieuNhapService from "../services/PhieuNhapService";
import { ToastContainer, toast } from "react-toastify";
import { fetchPhieuNhapbyQuyenandChiNhanh } from "../redux/slices/phieunhapSlice";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { format } from "date-fns";
import "react-toastify/dist/ReactToastify.css";

const FormPhieuNhap = ({ close, pn }) => {
  const dispatch = useDispatch();
  const listKhobyQuyenandChiNhanh = useSelector((state) => state.kho.listKho);

  const [cookies, setCookies] = useCookies(["nhanvien"]);
  const [mapn, setMaPN] = useState("");
  const [ngay, setNgay] = useState("");
  const [maddh, setMaDDH] = useState("");
  const [manv, setMaNV] = useState("");
  const [makho, setMaKho] = useState("");

  const handleChangeMaKho = (event) => {
    setMaKho(event.target.value);
  };

  useEffect(() => {
    console.log("zo day");
    setMaKho(Object.values(listKhobyQuyenandChiNhanh)[0].makho);
    if (typeof pn === "undefined") {
      let today = format(new Date(), "yyyy-MM-dd");
      document.querySelector('input[name="inputNgay"]').value = today;
      setNgay(today);
      document.querySelector('input[name="inputMaNV"]').value = cookies.nhanvien.manv;
      setMaNV(cookies.nhanvien.manv);
      return;
    } else {
      console.log(pn);
      document.querySelector('input[name="inputMaPN"]').value = pn.mapn;
      setMaDDH(pn.mapn);
      document.querySelector('input[name="inputNgay"]').value = pn.ngay;
      setNgay(pn.ngay);
      document.querySelector('input[name="inputMaDDH"]').value = pn.maddh;
      setMaDDH(pn.maddh);
      document.querySelector('input[name="inputMaNV"]').value = pn.manv;
      setMaNV(pn.manv);
      document.querySelector('select[name="inputMaKho"]').value = pn.makho;
      setMaKho(pn.makho);
    }
  }, []);

  function verify() {
    if (maddh <= 0) {
      toast.error("Mã Đơn Đặt Hàng Phải Lớn Hơn 0!");
      return false;
    }
    return true;
  }
  async function handleSubmit(event) {
    event.preventDefault();
    if (verify() == true) {
      var today = new Date();
      let year = today.getDay.toString;
      let phieunhap = {
        mapn: mapn,
        ngay: year,
      };
      if (typeof ctdh === "undefined") {
        const response = await PhieuNhapService.insertPhieuNhap(phieunhap);
        if (response == 0) {
          toast.error("Cập Nhật Thất Bại!");
        } else {
          toast.success("Cập Nhật Thành Công!");
        }
      } else {
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
                <label className="formbold-form-label">Mã PN</label>
                <input type="text" name="inputMaPN" className="formbold-form-input" readOnly="true" />
              </div>
              <div>
                <label className="formbold-form-label"> Ngày Lập Phiếu </label>
                <input type="date" name="inputNgay" className="formbold-form-input" placeholder="dd-mm-yyyy" />
              </div>
            </div>
            <div>
              <label className="formbold-form-label"> MaDDH</label>
              <input type="text" name="inputMaDDH" className="formbold-form-input" />
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
export default FormPhieuNhap;
