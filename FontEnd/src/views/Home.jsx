import React from "react";
import Nav from "./Nav"
import { useLocation } from "react-router-dom";
import home from "../styles/home.scss"
import "tailwindcss/tailwind.css";

const Home = () => {
    const location = useLocation();
    const data = location.state;
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(data)
    }
    return (<>
        <Nav></Nav>
        <div className="formbold-main-wrapper">
            <div className="formbold-form-wrapper">
                <form action="https://formbold.com/s/FORM_ID" method="POST">

                    <div className="formbold-input-flex">
                        <div>
                            <label htmlFor="firstname" className="formbold-form-label">Mã NV</label>
                            <input type="number" className="formbold-form-input" />
                        </div>
                        <div>
                            <label htmlFor="lastname" className="formbold-form-label"> Họ Tên </label>
                            <input type="text" className="formbold-form-input" />
                        </div>
                    </div>

                    <div className="formbold-input-flex">
                        <div>
                            <label htmlFor="email" className="formbold-form-label"> Số CMND </label>
                            <input type="text" className="formbold-form-input" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="formbold-form-label"> Ngày Sinh </label>
                            <input type="date" className="formbold-form-input" />
                        </div>
                    </div>

                    <div className="formbold-mb-3">
                        <label htmlFor="address" className="formbold-form-label">Địa Chỉ</label>
                        <input type="text" className="formbold-form-input" />
                    </div>

                    <div className="formbold-input-flex">
                        <div>
                            <label htmlFor="state" className="formbold-form-label"> Lương </label>
                            <input type="number" className="formbold-form-input" />
                        </div>
                        <div>
                            <label htmlFor="country" className="formbold-form-label"> Mã CN </label>
                            <input type="text" className="formbold-form-input" />
                        </div>
                    </div>

                    <div className="formbold-input-flex">
                        <div>
                            <label htmlFor="post" className="formbold-form-label"> Mã Quyền</label>
                            <input type="text" className="formbold-form-input" />
                        </div>
                        <div>
                            <label htmlFor="area" className="formbold-form-label">Trạng Thái</label>
                            <input classNameName="box" type="checkbox" className="formbold-form-input" />
                        </div>
                    </div>

                    <div className="formbold-checkbox-wrapper">
                        <label htmlFor="supportCheckbox" className="formbold-checkbox-label">
                            <div className="formbold-relative">
                                <input type="checkbox" id="supportCheckbox" className="formbold-input-checkbox" />
                            </div>
                        </label>
                    </div>
                    <button className="formbold-btn" onClick={handleSubmit}>Xác Nhận</button>
                </form>
            </div>
        </div>
    </>)
}
export default Home;