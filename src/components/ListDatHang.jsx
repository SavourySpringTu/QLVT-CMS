import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Player } from "@lottiefiles/react-lottie-player";
import { useDispatch } from "react-redux";
import { fetchDatHangbyQuyenandChiNhanh } from "../redux/slices/dathangSlice.js";
import { fetchCTDHbyQuyenandChiNhanh } from "../redux/slices/ctdhSlice.js";
import { useCookies } from "react-cookie";
import DatHangService from "../services/DatHangService.js";
import Popup from "reactjs-popup";
import FormDatHang from "./FormDatHang.jsx";
import FormCTDH from "./FormCTDH.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/dathang.scss";
import CTDHService from "../services/CTDHService.js";

const ListDatHang = () => {
  const dispatch = useDispatch();
  const listDatHang = useSelector((state) => state.dathang.listDatHang);
  const listCTDH = useSelector((state) => state.chitietdathang.listCTDH);

  const [cookies] = useCookies(["nhanvien"]);
  const [inputSearchCT, setInputSearchCT] = useState("");
  const [inputSearchDH, setInputSearchDH] = useState("");
  const [fetch, setFetch] = useState({});

  useEffect(() => {
    setFetch({
      maquyen: cookies.nhanvien.vaiTroNV.maquyen,
      macn: cookies.nhanvien.chiNhanhNV.macn,
    });
  }, []);

  function checkDeleteDatHang(maddh) {
    for (let i = 0; i < listCTDH.length; i++) {
      if (listCTDH[i].maddh == maddh) {
        return false;
      }
    }
    return true;
  }

  async function handleClickXoaDH(event) {
    event.preventDefault();
    console.log("toi day");
    if (checkDeleteDatHang(event.target.value) == true) {
      let input = {
        maddh: event.target.value,
      };
      const response = await DatHangService.deleteDatHang(input);
      if (response.data == 1) {
        dispatch(fetchDatHangbyQuyenandChiNhanh(fetch));
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
      maddh: v1.toString(),
      mavt: v2,
    };

    const response = await CTDHService.deleteCTDH(input);
    if (response.data == 1) {
      dispatch(fetchCTDHbyQuyenandChiNhanh(fetch));
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
              <FormDatHang close={close} />
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
              <FormCTDH close={close} />
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
            {listDatHang
              .filter((dh) => {
                return inputSearchDH === "" ? listDatHang : dh.maddh == inputSearchDH;
              })
              .map((dh) => (
                <Popup
                  trigger={
                    <tr key={dh.maddh}>
                      <td>{dh.maddh}</td>
                      <td>{dh.ngay}</td>
                      <td>{dh.nhacc}</td>
                      <td>{dh.makho}</td>
                      <td>{dh.manv}</td>
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
                              <button className="btnXacNhanXoa" value={dh.maddh} onClick={(e) => handleClickXoaDH(e)}>
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
        <table id="table" className="ctdh">
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
            {listCTDH
              .filter((ctdh) => {
                return inputSearchCT === "" ? ctdh : ctdh.maddh == inputSearchCT;
              })
              .map((ctdh) => (
                <Popup
                  trigger={
                    <tr key={(ctdh.mapn, ctdh.mavt)}>
                      <td>{ctdh.maddh}</td>
                      <td>{ctdh.mavt}</td>
                      <td>{ctdh.soluong}</td>
                      <td>{ctdh.dongia}</td>

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
                                value={(ctdh.maddh, ctdh.mavt)}
                                onClick={(e) => handleClickXoaCT(e, ctdh.maddh, ctdh.mavt)}
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
                      <FormCTDH ctdh={ctdh} close={close} />
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
