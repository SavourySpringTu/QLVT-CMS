import React, { useState, useEffect } from "react";
import formNhanVien from "../styles/formNhanVien.scss"
import VatTuService from "../services/VatTuService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchAllVatTu, insertNhanVien } from "../redux/slices/vattuSlice";
import { useDispatch, useSelector } from "react-redux";

const FormVatTu = ({ close, vt }) => {
    const dispatch = useDispatch();
    const [mavt, setMaVT] = useState("");
    const [tenvt, setTenVT] = useState("");
    const [donvitinh, setDonViTinh] = useState("");
    const [soluongton, setSoLuongTon] = useState("");

    const handleChangeMaVT = (event) => {
        setMaVT(event.target.value)
    }
    const handleChangeTenVT = (event) => {
        setTenVT(event.target.value)
    }
    const handleChangeDonViTinh = (event) => {
        setDonViTinh(event.target.value)
    }
    const handleChangeSoLuongTon = (event) => {
        setSoLuongTon(event.target.value)
    }

    // function verify() {
    //     if (hoten.trim().length < 3) {
    //         toast.error("Lỗi Nhập Họ Tên!")
    //         return false
    //     } else if (luong <= 0 || luong.length == "") {
    //         toast.error("Lương Phải Lơn Hơn 0!")
    //         return false
    //     } else if (ngaysinh == "" || ngaysinh.substring(0, 4) > 2010) {
    //         toast.error("Năm Phải Lơn Hơn 2010 !")
    //         return false
    //     } else if (diachi.trim().length <= 10) {
    //         toast.error("Lỗi Nhập Địa Chỉ!")
    //         return false
    //     } else if (socmnd.length < 12) {
    //         toast.error("Lỗi Nhập Số CMND!")
    //         return false
    //     }

    //     return true
    // }
    useEffect(() => {
        if (typeof vt === "undefined") {
            console.log('undefined')
            return
        } else {
            document.querySelector('input[name="inputMaNV"]').value = vt.mavt;
            setMaVT(vt.mavt)
            document.querySelector('input[name="inputHoTen"]').value = vt.tenvt;
            setTenVT(vt.tenvt)
            document.querySelector('input[name="inputDiaChi"]').value = vt.donvitinh;
            setDonViTinh(vt.donvitinh)
            document.querySelector('input[name="inputSoCMND"]').value = vt.soluongton;
            setSoLuongTon(vt.soluongton)
        }
    }, [])
    async function handleSubmit(event) {
        event.preventDefault();
        // if (verify() == true) {
        //     let vattu = {
        //         mavt: mavt,
        //         tenvt: tenvt,
        //         soluongton: soluongton,
        //         donvitinh: donvitinh,
        //     }
        // if (manv == "") {
        //     const response = await NhanVienService.insertNhanVien(nhanvien);
        //     if (response == 0) {
        //         toast.error("Thêm Thất Bại!")
        //     } else {
        //         dispatch(fetchAllNhanVien())
        //         toast.success("Thêm Thành Công!")
        //     }

        // } else {
        //     const response = await NhanVienService.updateNhanVien(nhanvien);
        //     if (response == 0) {
        //         toast.error("Thêm Thất Bại!")
        //     } else {
        //         dispatch(fetchAllNhanVien())
        //         toast.success("Sửa Thành Công!")
        //     }
        // }

        //      }
    }
    return (
        <>
            <div className="fixed inset-0 backdrop-blur-sm">
                <div className="formbold-form-wrapper">
                    <form action="https://formbold.com/s/FORM_ID" method="POST">

                        <div className="formbold-input-flex">
                            <div>
                                <label className="formbold-form-label">Mã VT</label>
                                <input type="text" name="inputMaNV" className="formbold-form-input" onChange={handleChangeMaVT} />
                            </div>
                            <div>
                                <label className="formbold-form-label"> Tên VT </label>
                                <input type="text" name="inputHoTen" className="formbold-form-input" onChange={handleChangeTenVT} />
                            </div>
                        </div>

                        <div className="formbold-input-flex">
                            <div>
                                <label className="formbold-form-label"> Số Lượng Tồn</label>
                                <input type="number" name="inputSoLuongTon" className="formbold-form-input" onChange={handleChangeSoLuongTon} />
                            </div>
                            <div>
                                <label className="formbold-form-label"> Đơn Vị Tính </label>
                                <input type="text" name="inputDonViTinh" className="formbold-form-input" onChange={handleChangeDonViTinh} />
                            </div>
                        </div>
                        <button className="formbold-btn" onClick={handleSubmit}>Xác Nhận</button>
                        <button className="formbold-btn" id="btnClose" onClick={close} >Đóng</button>
                    </form>
                </div>
            </div >
            <ToastContainer />
        </>
    )
}
export default FormVatTu;