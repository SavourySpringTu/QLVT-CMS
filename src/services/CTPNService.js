import instance from './custom-axios';

const URL = "/chitietphieunhap/";

class CTPNService {
    getListCTPN(data) {
        return instance.post(URL + 'list',data)
    }
    insertCTPN(data){
        return instance.post(URL + 'insert',data)
    }
}
export default new CTPNService();