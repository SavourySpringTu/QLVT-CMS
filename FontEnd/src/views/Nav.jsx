import React from "react";
import nav from "../styles/nav.scss"
import { NavLink } from "react-router-dom";
class Nav extends React.Component {
    render() {
        return (<>
            <body className="navItem">
                <ul>
                    <li><NavLink class="active" to="/trangchu">Nhân Viên</NavLink></li>
                    <li><NavLink to="/vattu">Vật Tư</NavLink></li>
                    <li><NavLink to="/phieunhap">Phiếu Nhập</NavLink></li>
                    <li><NavLink to="/phieuxuat">Phiếu Xuất</NavLink></li>
                    <li><div ></div></li>
                    <li><div ></div></li>
                    <li><NavLink className="btnOut" to="/">Đăng Xuất</NavLink></li>

                </ul>
            </body>
        </>)
    }
}
export default Nav