import axios from 'axios';
import instance from './custom-axios';

const URL = "/phieuxuat/";

class PhieuXuatService {
    getListPhieuXuat(data) {
        return instance.post(URL + 'list',data);
    }
    insertPhieuXuat(data){
        return instance.post(URL +'insert',data)
    }
    updatePhieuXuat(data){
        return instance.post(URL +'update',data)
    }
    
}
export default new PhieuXuatService();