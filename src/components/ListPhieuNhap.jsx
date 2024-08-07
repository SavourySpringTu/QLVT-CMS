import React, { useState, useEffect } from "react";
import { fetchPhieuNhapbyQuyenandChiNhanh } from "../redux/slices/phieunhapSlice.js";
import { fetchCTPNbyQuyenandChiNhanh } from "../redux/slices/ctpnSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Player } from "@lottiefiles/react-lottie-player";
import FormPhieuNhap from "./FormPhieuNhap.jsx";
import FormCTPN from "./FormCTPN.jsx";
import Popup from "reactjs-popup";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/dathang.scss";

const ListPhieuNhap = () => {
  const dispatch = useDispatch();
  const listPhieuNhap = useSelector((state) => state.phieunhap.listPhieuNhap);
  const listCTPN = useSelector((state) => state.chitietphieunhap.listCTPN);
  const [inputPhieuNhap, setInputPhieuNhap] = useState("");
  const [inputCTPN, setInputCTPN] = useState("");

  useEffect(() => {}, []);

  async function handleClickXoa(event) {
    event.preventDefault();
  }
  return (
    <>
      <input type="number" className="inputSearchDH" onChange={(e) => setInputPhieuNhap(e.target.value)}></input>
      <input type="number" className="inputSearchCT" onChange={(e) => setInputCTPN(e.target.value)}></input>
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
              <FormPhieuNhap close={close} />
            </div>
          )}
        </Popup>
      </div>
      <div className="addAnimationCT">
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
              <FormCTPN close={close} />
            </div>
          )}
        </Popup>
      </div>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </head>
      <body>
        <table id="table" className="dathang">
          <thead>
            <tr>
              <th>Mã PN</th>
              <th>Ngày Lập Phiếu</th>
              <th>Mã DDH</th>
              <th>Mã Kho</th>
              <th>Mã NV</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listPhieuNhap
              .filter((pn) => {
                return inputPhieuNhap == "" ? listPhieuNhap : pn.mapn == inputPhieuNhap;
              })
              .map((pn) => (
                <Popup
                  trigger={
                    <tr key={pn.mapn}>
                      <td>{pn.mapn}</td>
                      <td>{pn.ngay}</td>
                      <td>{pn.maddh}</td>
                      <td>{pn.makho}</td>
                      <td>{pn.manv}</td>

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
                              <button className="btnXacNhanXoa" value={pn.mapn} onClick={handleClickXoa.bind()}>
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
                      <FormPhieuNhap pn={pn} close={close} />
                    </div>
                  )}
                </Popup>
              ))}
          </tbody>
        </table>
        <table id="table" className="ctdh">
          <thead>
            <tr>
              <th>Mã PN</th>
              <th>Mã VT</th>
              <th>Số Lượng</th>
              <th>Đơn Giá</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listCTPN
              .filter((ctpn) => {
                return inputCTPN == "" ? listCTPN : ctpn.mapn == inputCTPN;
              })
              .map((ctpn) => (
                <Popup
                  trigger={
                    <tr key={ctpn.mapn}>
                      <td>{ctpn.mapn}</td>
                      <td>{ctpn.mavt}</td>
                      <td>{ctpn.soluong}</td>
                      <td>{ctpn.dongia}</td>

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
                              <button className="btnXacNhanXoa" value={ctpn.mapn} onClick={handleClickXoa.bind()}>
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
                      <FormCTPN ctpn={ctpn} close={close} />
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
export default ListPhieuNhap;
