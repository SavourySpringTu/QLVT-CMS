import instance from './custom-axios';

const URL = "/chitietdathang/";

class CTDHService {
    getListCTDH(data) {
        return instance.post(URL + 'list',data)
    }
    insertCTDH(data){
        return instance.post(URL + 'insert',data)
    }
    updateCTDH(data){
        return instance.put(URL + 'update',data)
    }
    deleteCTDH(data){
        return instance.post(URL + 'delete',data)
    }
}
export default new CTDHService();