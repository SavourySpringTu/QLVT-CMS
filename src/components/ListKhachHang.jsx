import React, { useState, useEffect } from "react";
import { fetchAllKhachHang } from "../redux/slices/khachhangSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import Popup from "reactjs-popup";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/list.scss";
import FormKhachHang from "./FormKhachHang.jsx";
import { Player } from "@lottiefiles/react-lottie-player";

const ListKhachHang = () => {
  const dispatch = useDispatch();
  const listKhachHang = useSelector((state) => state.khachhang.listKhachHang);

  useEffect(() => {
    dispatch(fetchAllKhachHang());
  }, []);

  async function handleClickXoa(event) {
    event.preventDefault();
  }
  return (
    <>
      <div className="addAnimation">
        <Popup
          modal
          trigger={
            <div>
              <Player
                src="https://lottie.host/d9e3aee3-60f6-4156-8cfc-85ac413b500e/okqwVQmCwv.json"
                loop
                autoplay
                style={{ height: "70px", width: "70px" }}
              />
            </div>
          }
        >
          {(close) => (
            <div>
              <FormKhachHang close={close} />
            </div>
          )}
        </Popup>
      </div>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </head>
      <body>
        <table id="customers">
          <thead>
            <tr>
              <th>Mã KH</th>
              <th>Họ Tên</th>
              <th>Email</th>
              <th>Số Điện Thoại</th>
              <th>Địa Chỉ</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listKhachHang.map((kh) => (
              <Popup
                trigger={
                  <tr key={kh.makh}>
                    <td>{kh.makh}</td>
                    <td>{kh.hoten}</td>
                    <td>{kh.email}</td>
                    <td>{kh.sdt}</td>
                    <td>{kh.diachi}</td>

                    <td className="table-Icon">
                      <Popup
                        trigger={
                          <div>
                            <Player
                              src="https://lottie.host/be0667b2-da1b-42f0-a4e5-cfbae1112225/ZIARx3NoBt.json"
                              className="player"
                              loop
                              autoplay
                              style={{ height: "35px", width: "35px" }}
                            />
                          </div>
                        }
                        position="right"
                      >
                        {(close) => (
                          <div className="popupDelete">
                            <button className="btnXacNhanXoa" value={kh.makh} onClick={handleClickXoa.bind()}>
                              Xác Nhận
                            </button>
                          </div>
                        )}
                      </Popup>
                    </td>
                  </tr>
                }
              >
                {(close) => (
                  <div>
                    <FormKhachHang kh={kh} close={close} />
                  </div>
                )}
              </Popup>
            ))}
          </tbody>
        </table>
      </body>
      <ToastContainer />
    </>
  );
};
export default ListKhachHang;
