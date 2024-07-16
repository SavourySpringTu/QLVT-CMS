import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Player } from "@lottiefiles/react-lottie-player";
import { useDispatch } from "react-redux";
import { fetchPhieuXuatbyQuyenandChiNhanh } from "../redux/slices/phieuxuatSlice.js";
import { fetchCTPXbyQuyenandChiNhanh } from "../redux/slices/ctpxSlice.js";
import { useCookies } from "react-cookie";
import PhieuXuatService from "../services/PhieuXuatService.js";
import Popup from "reactjs-popup";
import FormPhieuXuat from "./FormPhieuXuat.jsx";
import FormCTPX from "./FormCTPX.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/dathang.scss";
import CTPXService from "../services/CTPXService.js";

const ListPhieuXuat = () => {
  const dispatch = useDispatch();
  const listPhieuXuat = useSelector((state) => state.dathang.listPhieuXuat);
  const listCTPX = useSelector((state) => state.chitietdathang.listCTPX);

  const [cookies] = useCookies(["nhanvien"]);
  const [inputSearchCT, setInputSearchCT] = useState("");
  const [inputSearchDH, setInputSearchDH] = useState("");
  const [fetch, setFetch] = useState({});

  useEffect(() => {
    console.log("px ne : " + listPhieuXuat);
    setFetch({
      maquyen: cookies.nhanvien.vaiTroNV.maquyen,
      macn: cookies.nhanvien.chiNhanhNV.macn,
    });
  }, []);

  function checkDeletePhieuXuat(madpx) {
    for (let i = 0; i < listCTPX.length; i++) {
      if (listCTPX[i].madpx == madpx) {
        return false;
      }
    }
    return true;
  }

  async function handleClickXoaDH(event) {
    event.preventDefault();
    console.log("toi day");
    if (checkDeletePhieuXuat(event.target.value) == true) {
      let input = {
        madpx: event.target.value,
      };
      const response = await PhieuXuatService.deletePhieuXuat(input);
      if (response.data == 1) {
        dispatch(fetchPhieuXuatbyQuyenandChiNhanh(fetch));
        toast.success("Xóa Thành Công!");
      } else {
        toast.error("Không Thể Xóa!");
      }
    } else {
      toast.error("Đã Có Chi Tiết!");
    }
  }

  async function handleClickXoaCT(event, v1, v2) {
    event.preventDefault();
    console.log(v1, v2);
    let input = {
      mapx: v1.toString(),
      mavt: v2,
    };

    const response = await CTPXService.deleteCTPX(input);
    if (response.data == 1) {
      dispatch(fetchCTPXbyQuyenandChiNhanh(fetch));
      toast.success("Xóa Thành Công!");
    } else {
      toast.error("Không Thể Xóa!");
    }
  }

  return (
    <>
      <input type="number" className="inputSearchDH" onChange={(e) => setInputSearchDH(e.target.value)}></input>
      <input type="number" className="inputSearchCT" onChange={(e) => setInputSearchCT(e.target.value)}></input>
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
              <FormPhieuXuat close={close} />
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
              <FormCTPX close={close} />
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
              <th>Mã DDH</th>
              <th>Ngày</th>
              <th>Nhà CC</th>
              <th>Mã Kho</th>
              <th>Mã NV</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listPhieuXuat
              .filter((px) => {
                return inputSearchDH === "" ? listPhieuXuat : px.mapx == inputSearchDH;
              })
              .map((px) => (
                <Popup
                  trigger={
                    <tr key={px.mapx}>
                      <td>{px.mapx}</td>
                      <td>{px.ngay}</td>
                      <td>{px.nhacc}</td>
                      <td>{px.makho}</td>
                      <td>{px.manv}</td>
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
                              <button className="btnXacNhanXoa" value={px.mapx} onClick={(e) => handleClickXoaDH(e)}>
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
                      <FormPhieuXuat px={px} close={close} />
                    </div>
                  )}
                </Popup>
              ))}
          </tbody>
        </table>
        <table id="table" className="ctpx">
          <thead>
            <tr>
              <th>Mã DDH</th>
              <th>Mã VT</th>
              <th>Số Lượng</th>
              <th>Đơn Giá</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listCTPX
              .filter((ctpx) => {
                return inputSearchCT === "" ? listCTPX : ctpx.mapx == inputSearchCT;
              })
              .map((ctpx) => (
                <Popup
                  trigger={
                    <tr key={(ctpx.mapn, ctpx.mavt)}>
                      <td>{ctpx.mapx}</td>
                      <td>{ctpx.mavt}</td>
                      <td>{ctpx.soluong}</td>
                      <td>{ctpx.dongia}</td>

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
                                value={(ctpx.mapx, ctpx.mavt)}
                                onClick={(e) => handleClickXoaCT(e, ctpx.mapx, ctpx.mavt)}
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
                      <FormCTPX ctpx={ctpx} close={close} />
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
export default ListPhieuXuat;
