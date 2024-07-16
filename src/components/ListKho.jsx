import React, { useEffect, useState } from "react";
import { fetchKhobyQuyenandChiNhanh } from "../redux/slices/khoSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Player } from "@lottiefiles/react-lottie-player";
import Popup from "reactjs-popup";
import FormKho from "./FormKho.jsx";
import KhoService from "../services/KhoService.js";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/list.scss";

const ListKho = () => {
  const dispatch = useDispatch();
  const listKho = useSelector((state) => state.kho.listKho);
  const [inputKho, setInputKho] = useState();

  useEffect(() => {
    dispatch(fetchKhobyQuyenandChiNhanh());
  }, []);

  async function handleClickXoa(event) {
    event.preventDefault();
    let kho = {
      makho: event.target.value,
    };
    const response = await KhoService.deleteKho(kho);
    console.log(response);
    if (response.data == 0) {
      toast.error("Xóa Vật Tư Thất Bại!");
    } else if (response.data == 1) {
      dispatch(fetchKhobyQuyenandChiNhanh());
      toast.success("Xóa Vật Tư Thành Công");
    }
  }
  return (
    <>
      <input type="text" className="inputSearchCT" onChange={(e) => setInputKho(e.target.value)}></input>
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
              <FormKho close={close} />
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
              <th>Mã Kho</th>
              <th>Tên Kho</th>
              <th>Địa Chỉ</th>
              <th>Chi Nhánh</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listKho
              .filter((kho) => {
                return inputKho == "" ? listKho : kho.makho.match(inputKho);
              })
              .map((kho) => (
                <Popup
                  trigger={
                    <tr key={kho.makho}>
                      <td>{kho.makho}</td>
                      <td>{kho.tenkho}</td>
                      <td>{kho.diachi}</td>
                      <td>{kho.chinhanh}</td>
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
                              <button className="btnXacNhanXoa" value={kho.makho} onClick={handleClickXoa.bind()}>
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
                      <FormKho kho={kho} close={close} />
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
export default ListKho;
