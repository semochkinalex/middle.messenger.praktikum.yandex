import BaseAPI from '../../modules/api/base-api';
import HTTP from '../../modules/api/http';

const api = new HTTP('https://ya-praktikum.tech/api/v2');

export default class UserSignInAPI extends BaseAPI {
    constructor() {
        super();
    }

    public async create(login: string, password: string) {
        return api.post('/auth/signin', {login, password}, {headers: {
            'Content-Type': 'application/json'
        }})
    }
}
   