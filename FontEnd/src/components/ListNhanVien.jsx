import React, { useState, useEffect } from "react";
import Popup from 'reactjs-popup';
import FormNhanVien from './FormNhanVien.jsx'
import "../styles/listNhanVien.scss"
import { fetchAllNhanVien } from "../redux/slices/nhanvienSlice";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as IconInsert } from "../styles/image/icon-add.svg"
import { ReactComponent as IconDelete } from "../styles/image/icon-delete.svg"
import { ToastContainer, toast } from 'react-toastify';
import NhanVienService from '../services/NhanVienService.js'

const ListNhanVien = () => {
    const dispatch = useDispatch();
    const listNhanVien = useSelector(state => state.nhanvien.listNhanVien);

    useEffect(() => {
        dispatch(fetchAllNhanVien())
    }, [])

    async function handleClickXoa(event) {
        event.preventDefault();
        console.log(event.target.value)
        let nhanvien = {
            manv: event.target.value
        }
        const response = await NhanVienService.deleteNhanVien(nhanvien);
        dispatch(fetchAllNhanVien())
        toast.success("Xóa Nhân Viên Thành Công")
    }

    return (
        <>
            <Popup trigger={
                <div>
                    <IconInsert className="btnThem"></IconInsert>
                </div>} position="bottom center">
                {close => (
                    <div>
                        <FormNhanVien></FormNhanVien>
                    </div>
                )}
            </Popup>

            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </head>
            <body>
                <table id="customers">
                    <thead>
                        <tr>
                            <th>Mã NV</th>
                            <th>Họ Tên</th>
                            <th>Ngày Sinh</th>
                            <th>Số CMND</th>
                            <th>Địa Chỉ</th>
                            <th>Lương</th>
                            <th>Mã Quyền</th>
                            <th>Chi Nhánh</th>
                            <th>Trạng Thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listNhanVien.map(nv =>
                                <tr key={nv.manv}>
                                    <td>{nv.manv}</td>
                                    <td>{nv.hoten}</td>
                                    <td>{nv.ngaysinh}</td>
                                    <td>{nv.socmnd}</td>
                                    <td>{nv.diachi}</td>
                                    <td>{nv.luong}</td>
                                    <td>{nv.maquyen}</td>
                                    <td>{nv.macn}</td>
                                    <td>{nv.trangthai == true ? "Đã Nghỉ" : "Chưa Nghỉ"}</td>
                                    <td className="table-Icon">            <Popup trigger={
                                        <div>
                                            <IconDelete className="btnXoa"></IconDelete>
                                        </div>} position="right">
                                        {close => (
                                            <div className="popupDelete">
                                                <button className="btnXacNhanXoa" value={nv.manv} onClick={handleClickXoa.bind()}>Xác Nhận !</button>
                                            </div>
                                        )}
                                    </Popup></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </body>
            <ToastContainer />
        </>
    )
}
export default ListNhanVien;