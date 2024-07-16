import instance from './custom-axios';

const URL = "/kho/";

class KhoService {

    getListKho(data) {
        return instance.post(URL + 'list',data);
    }
    insertKho(data){
        return instance.post(URL + 'insert',data);
    }
    updateKho(data){
        return instance.post(URL + 'update',data);
    }
}

export default new KhoService();