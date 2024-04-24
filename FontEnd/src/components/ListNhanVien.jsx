import React, { useState, useEffect } from "react";
import NhanVienService from "../services/NhanVienService"
import listnv from "../styles/listNhanVien.scss"
import { fetchAllNhanVien } from "../redux/slices/nhanvienSlice";
import { useDispatch, useSelector } from "react-redux";

const ListNhanVien = () => {
    const dispatch = useDispatch();
    const listNhanVien = useSelector(state => state.nhanvien.listNhanVien);
    useEffect(() => {
        dispatch(fetchAllNhanVien())
    }, [])
    return (
        <>
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
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </body>
        </>
    )
}
export default ListNhanVien;