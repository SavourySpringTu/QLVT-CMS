import instance from './custom-axios';

const URL = "/nhanvien/";

class NhanVienService {

    getListNhanVien(data) {
        return instance.post(URL + 'list',data);
    }
    loginNhanVien(data) {
        return instance.post(URL + 'login', data)
    }
    insertNhanVien(data) {
        return instance.post(URL + 'insert', data)
    }
    updateNhanVien(data) {
        return instance.post(URL + 'update', data)
    }
    deleteNhanVien(data) {
        return instance.put(URL + 'delete', data)
    }
}

export default new NhanVienService();