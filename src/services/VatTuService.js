import instance from "./custom-axios";

const URL = "/vattu/";

class VatTuService {
    getListVatTu() {
        return instance().get(URL + 'list')
    }
}
export default new VatTuService;