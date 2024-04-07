import instance from './custom-axios';


class NhanVienService {
    getListNhanVien() {
        return instance.get('/nhanvien/list');
    }
    loginNhanVien(Data) {
        return instance.post('/nhanvien/login', Data)
    }
}

export default new NhanVienService();