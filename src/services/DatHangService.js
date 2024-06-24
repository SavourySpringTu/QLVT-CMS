import instance from './custom-axios';

const URL = "/dathang/";

class DatHangService {
    getListDatHang() {
        return instance.get(URL + 'list')
    }
    
}
export default new DatHangService();