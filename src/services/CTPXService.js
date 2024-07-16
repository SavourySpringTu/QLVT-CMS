import axios from 'axios';
import instance from './custom-axios';

const URL = "/chitietphieuxuat/";

class CTPXService {
    getListCTPX(data) {
        return instance.post(URL + 'list',data);
    }
    insertCTPX(data){
        return instance.post(URL +'insert',data)
    }
    updateCTPX(data){
        return instance.post(URL +'update',data)
    }
    
}
export default new CTPXService();