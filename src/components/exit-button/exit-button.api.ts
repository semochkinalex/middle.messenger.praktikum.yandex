import BaseAPI from '../../modules/api/base-api';
import HTTP from '../../modules/api/http';

const api = new HTTP('https://ya-praktikum.tech/api/v2');

export default class ExitAPI extends BaseAPI {
    constructor() {
        super();
    }

    public async request() {
        return api.post('/auth/logout')
    }
}
   