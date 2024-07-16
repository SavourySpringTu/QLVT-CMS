import axios from 'axios';
import instance from './custom-axios';

const URL = "/phieunhap/";

class PhieuNhapService {
    getListPhieuNhap(data) {
        return instance.post(URL + 'list',data);
    }
    insertPhieuNhap(data){
        return instance.post(URL +'insert',data)
    }
    updatePhieuNhap(data){
        return instance.post(URL +'',data)
    }
    
}
export default new PhieuNhapService();