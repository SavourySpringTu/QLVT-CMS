import instance from './custom-axios';

const URL = "/nhanvien/";

class NhanVienService {

    getListNhanVien() {
        return instance.get(URL + 'list');
    }
    loginNhanVien(data) {
        return instance.post(URL + 'login', data)
    }
    insertNhanVien(data) {
        return instance.post(URL + 'save', data)
    }
}

export default new NhanVienService();