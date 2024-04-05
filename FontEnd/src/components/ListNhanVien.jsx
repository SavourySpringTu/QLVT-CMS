import React from "react";
import axios from 'axios';
import NhanVienService from "../services/NhanVienService"
import { Axios } from "axios";


class ListNhanVien extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            NhanVien: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8086/backend/api/nhanvien/list').then((res) => {
            this.setState({ NhanVien: res.data })
            console.log(this.state.NhanVien)
        })
            .catch(function (ex) {
                console.log('Response parsing failed. Error: ', ex);
            });;
    }
    render() {
        return (
            <>
                {/* <div>
                    <h2 className="text-center">Book Details</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>CCID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.map(NhanVien =>
                                    <tr key={NhanVien.MANV}>
                                        <td>{NhanVien.HOTEN}</td>
                                        <td>{NhanVien.CMND}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div> */}
            </>
        )
    }
}
export default ListNhanVien;