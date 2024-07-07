import instance from './custom-axios';

const URL = "/dathang/";

class DatHangService {
    getListDatHang(data) {
        return instance.post(URL + 'list',data)
    }
    insertDatHang(data){
        return instance.post(URL + 'insert',data)
    }
    deleteDatHang(data){
        return instance.put(URL +"delete",data)
    }
    
}
export default new DatHangService();