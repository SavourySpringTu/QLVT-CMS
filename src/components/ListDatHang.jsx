import React, { useState, useEffect } from "react";
import { fetchAllDatHang } from "../redux/slices/dathangSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import Popup from "reactjs-popup";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/listNhanVien.scss";
import FormDatHang from "./FormDatHang.jsx";
import { Player } from "@lottiefiles/react-lottie-player";

const ListDatHang = () => {
  const dispatch = useDispatch();
  const listDatHang = useSelector((state) => state.dathang.listDatHang);

  useEffect(() => {
    dispatch(fetchAllDatHang());
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
              <FormDatHang close={close} />
            </div>
          )}
        </Popup>
      </div>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </head>
      <body>
        <table id="customers">
          <thead>
            <tr>
              <th>Mã DDH</th>
              <th>Ngày</th>
              <th>Nhà CC</th>
              <th>Mã NV</th>
              <th>Mã Kho</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listDatHang.map((dh) => (
              <Popup
                trigger={
                  <tr key={dh.maddh}>
                    <td>{dh.maddh}</td>
                    <td>{dh.ngay}</td>
                    <td>{dh.nhacc}</td>
                    <td>{dh.manv}</td>
                    <td>{dh.makho}</td>

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
                            <button
                              className="btnXacNhanXoa"
                              value={dh.madh}
                              onClick={handleClickXoa.bind()}
                            >
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
                    <FormDatHang dh={dh} close={close} />
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
export default ListDatHang;
