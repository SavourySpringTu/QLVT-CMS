import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Player } from "@lottiefiles/react-lottie-player";
import { useDispatch } from "react-redux";
import { fetchDatHangbyQuyenandChiNhanh } from "../redux/slices/dathangSlice.js";
import { useCookies } from "react-cookie";
import Popup from "reactjs-popup";
import FormDatHang from "./FormDatHang.jsx";
import FormCTDH from "./FormCTDH.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/listchitiet.scss";
import DatHangService from "../services/DatHangService.js";

const ListDatHang = () => {
  const dispatch = useDispatch();
  const listDatHang = useSelector((state) => state.dathang.listDatHang);
  const listCTDH = useSelector((state) => state.chitietdathang.listCTDH);

  const [cookies] = useCookies(["nhanvien"]);
  const [listCTDH1, setListCTDH1] = useState([]);
  const [inputSearchCT, setInputSearchCT] = useState();

  useEffect(() => {
    if (listCTDH == "") {
      setListCTDH1([]);
    } else {
      setListCTDH1(listCTDH);
    }
  }, []);

  const handleChangSearch = (event) => {
    console.log(event.target.value);
    setInputSearchCT(event.target.value);
  };
  const handleSearchCTDH = () => {
    if (inputSearchCT == "") {
      setListCTDH1(listCTDH);
    } else {
      let array = [];
      listCTDH.map((i) => {
        if (inputSearchCT == i.maddh) {
          array.push(i);
        }
      });
      setListCTDH1(array);
    }
  };

  function checkDeleteDatHang(maddh) {
    for (let i = 0; i < listCTDH.length; i++) {
      console.log(i);
      if (listCTDH[i].maddh == maddh) {
        return false;
      }
    }
    return true;
  }

  async function handleClickXoa(event) {
    event.preventDefault();
    if (checkDeleteDatHang(event.target.value) == true) {
      let input = {
        maddh: event.target.value,
      };
      let fetch = {
        maquyen: cookies.nhanvien.vaiTroNV.maquyen,
        macn: cookies.nhanvien.chiNhanhNV.macn,
      };
      console.log(input.maddh);
      const response = await DatHangService.deleteDatHang(input);
      dispatch(fetchDatHangbyQuyenandChiNhanh(fetch));
      toast.success("Xóa Thành Công!");
    } else {
      toast.error("Không Thể Xóa!");
      return;
    }
  }
  return (
    <>
      <div className="searchCT">
        <input type="number" className="inputSearch" onChange={handleChangSearch}></input>
        <button className="btnSearch" onClick={handleSearchCTDH}>
          T
        </button>
      </div>
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
            {listDatHang.map((dh) => (
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
                            <button className="btnXacNhanXoa" value={dh.maddh} onClick={handleClickXoa.bind()}>
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
            {listCTDH1.map((ctdh) => (
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
                            <button className="btnXacNhanXoa" value={ctdh.mapn} onClick={handleClickXoa.bind()}>
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
