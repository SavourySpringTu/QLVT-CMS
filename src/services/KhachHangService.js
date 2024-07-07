import instance from './custom-axios';

const URL = "/khachhang/";

class KhachHangService {
    getListKhachHang() {
        return instance.get(URL + 'list')
    }
    
}
export default new KhachHangService();