import instance from './custom-axios';

const URL = "/kho/";

class KhoService {

    getListKho() {
        return instance.get(URL + 'list');
    }
}

export default new KhoService();