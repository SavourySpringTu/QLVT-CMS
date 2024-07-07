import instance from './custom-axios';

const URL = "/chitietdathang/";

class CTDHService {
    getListCTDH(data) {
        return instance.post(URL + 'list',data)
    }
    insertCTDH(data){
        return instance.post(URL + 'insert',data)
    }
    
}
export default new CTDHService();