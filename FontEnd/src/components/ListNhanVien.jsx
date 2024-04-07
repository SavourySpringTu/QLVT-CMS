import React from "react";
import NhanVienService from "../services/NhanVienService"


class ListNhanVien extends React.Component {
    state = {
        ArrNhanVien: []
    }
    async componentDidMount() {
        NhanVienService.getListNhanVien().then((res) => {
            const nv = res.data
            this.setState({ ArrNhanVien: nv })
        }).catch(function (ex) {
            console.log('Response parsing failed. Error: ', ex);
        });;
    }
    render() {
        return (
            <>
                <div>
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
                                this.state.ArrNhanVien.map(book =>
                                    <tr key={book.manv}>
                                        <td>{book.manv}</td>
                                        <td>{book.hoten}</td>
                                        <td>{book.socmnd}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}
export default ListNhanVien;