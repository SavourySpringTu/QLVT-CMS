import React from "react";
import login from "../styles/login.scss"
import NhanVienService from "../services/NhanVienService";
import ListNhanVien from "../components/ListNhanVien";
class Login extends React.Component {
    state = {
        manv: "",
        matkhau: "",
        macn: "CN01",
        noti: ""
    }
    handleChangeMaNV = (event) => {
        this.setState({
            manv: event.target.value
        })
    }
    handleChangePassword = (event) => {
        this.setState({
            matkhau: event.target.value
        })
    }
    handleChangeNoti = (mes) => {
        this.setState({
            noti: mes
        })
    }
    handleCheckRadio = (cn) => {
        this.setState({
            macn: cn
        })
    }
    handleLogin = (event) => {
        event.preventDefault();
        let NV = {
            manv: this.state.manv,
            matkhau: this.state.matkhau,
            chiNhanhNV: {
                macn: this.state.macn
            }
        }
        //let obj = JSON.parse(NV);
        NhanVienService.loginNhanVien(NV).then((response) => {
            console.log(NV)
            if (response.data == 'Failed') {
                this.handleChangeNoti("Sai mã nhân viên hoặc mật khẩu")
            } else {
                console.log("dung roi")
                return (<ListNhanVien></ListNhanVien>)
            }
        });
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="screen">
                        <div className="screen__content">
                            <form className="login">
                                <div className="login__field">
                                    <input type="text" className="login__input" placeholder="Mã Nhân Viên" defaultValue={this.state.manv} onChange={(event) => this.handleChangeMaNV(event)} />
                                </div>
                                <div className="login__field">
                                    <input type="password" className="login__input" placeholder="Mật Khẩu" defaultValue={this.state.matkhau} onChange={(event) => this.handleChangePassword(event)} />
                                </div>
                                <fieldset>
                                    <div className="toggle">
                                        <input type="radio" name="sizeBy" value="weight" id="sizeWeight" onClick={(event) => { this.handleCheckRadio("CN01") }} defaultChecked="checked" />
                                        <label htmlFor="sizeWeight">Hà Nội</label>
                                        <input type="radio" name="sizeBy" value="dimensions" id="sizeDimensions" onClick={(event) => { this.handleCheckRadio("CN02") }} />
                                        <label htmlFor="sizeDimensions">Hồ Chí Minh</label>
                                    </div>
                                </fieldset>
                                <button className="button login__submit" onClick={(event) => this.handleLogin(event)}>
                                    <span className="button__text">Đăng Nhập</span>
                                </button>
                                <div className="noti">{this.state.noti}</div>
                            </form>
                        </div>
                        <div className="screen__background">
                            <span className="screen__background__shape screen__background__shape4"></span>
                            <span className="screen__background__shape screen__background__shape3"></span>
                            <span className="screen__background__shape screen__background__shape2"></span>
                            <span className="screen__background__shape screen__background__shape1"></span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Login;