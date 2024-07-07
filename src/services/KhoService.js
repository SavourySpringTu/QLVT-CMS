import instance from './custom-axios';

const URL = "/kho/";

class KhoService {

    getListKho(data) {
        return instance.post(URL + 'list',data);
    }
}

export default new KhoService();