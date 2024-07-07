import React, { useState, useEffect } from "react";
import KhoService from "../services/KhoService";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { fetchKhobyQuyenandChiNhanh } from "../redux/slices/khoSlice";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

const FormKho = ({ close, kho }) => {
  const dispatch = useDispatch();

  const [cookies] = useCookies(["nhanvien"]);
  const [makho, setMaKho] = useState("");
  const [tenkho, setTenKho] = useState("");
  const [diachi, setDiaChi] = useState("");
  const [cn, setCN] = useState("");

  const handleChangeMaKho = (event) => {
    setMaKho(event.target.value);
  };
  const handleChangeTenKho = (event) => {
    setTenKho(event.target.value);
  };
  const handleChangeDiaChi = (event) => {
    setDiaChi(event.target.value);
  };

  function verify() {
    if (makho.trim().length < 4) {
      toast.error("Mã Kho Tư Phải Lớn Hơn 4 Kí Tự!");
      return false;
    } else if (tenkho.trim().length < 6) {
      toast.error("Tên Kho Phải Lớn Hơn 6 Kí Tự!");
      return false;
    } else if (diachi.trim().length <= 5) {
      toast.error("Địa Chỉ Phải Lớn Hơn 7 Kí Tự");
      return false;
    }
    return true;
  }
  useEffect(() => {
    if (typeof kho === "undefined") {
      document.querySelector('input[name="inputChiNhanh"]').value = cookies.nhanvien.chiNhanhNV.macn;
      setCN(cookies.nhanvien.chiNhanhNV.macn);
      console.log("undefined");
      return;
    } else {
      document.querySelector('input[name="inputMaKho"]').value = kho.makho;
      setMaKho(kho.makho);
      document.querySelector('input[name="inputTenKho"]').value = kho.tenkho;
      setTenKho(kho.tenkho);
      document.querySelector('input[name="inputDiaChi"]').value = kho.diachi;
      setDiaChi(kho.donvitinh);
      console.log(kho.cn);
      document.querySelector('input[name="inputChiNhanh"]').value = kho.chinhanh;
      setCN(kho.cn);
    }
  }, []);
  async function handleSubmit(event) {
    event.preventDefault();
    if (verify() == true) {
      console.log(makho);
      let kho = {
        makho: makho,
        tenkho: tenkho,
        diachi: diachi,
        cn: cn,
      };
      console.log(kho);
      const response = await KhoService.saveKho(kho);
      if (response == 0) {
        toast.error("Cập Nhật Thất Bại!");
      } else {
        dispatch(fetchKhobyQuyenandChiNhanh());
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
                <label className="formbold-form-label">Mã Kho</label>
                <input type="text" name="inputMaKho" className="formbold-form-input" onChange={handleChangeMaKho} />
              </div>
              <div>
                <label className="formbold-form-label"> Tên Kho </label>
                <input type="text" name="inputTenKho" className="formbold-form-input" onChange={handleChangeTenKho} />
              </div>
            </div>

            <div className="formbold-input-flex">
              <div>
                <label className="formbold-form-label"> Địa Chỉ</label>
                <input
                  type="text"
                  name="inputDiaChi"
                  className="formbold-form-input"
                  onChange={handleChangeDiaChi}
                  eadonly="readonly"
                />
              </div>
              <div>
                <label className="formbold-form-label"> Chi Nhánh</label>
                <input type="text" name="inputChiNhanh" className="formbold-form-input" readOnly="true" />
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
export default FormKho;
