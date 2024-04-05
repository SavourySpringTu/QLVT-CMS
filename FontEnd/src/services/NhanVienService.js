import axios from 'axios';
import instance from './custom-axios';

const NhanVien_URL = "nhanvien";

class NhanVienService {
    getNhanVien() {
        return axios.get("http://localhost:8086/backend/api/nhanvien/list");
    }
}

export default new NhanVienService();