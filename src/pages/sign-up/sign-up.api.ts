import BaseAPI from '../../modules/api/base-api';
import HTTP from '../../modules/api/http';

const api = new HTTP('https://ya-praktikum.tech/api/v2');

export default class UserSignUpAPI extends BaseAPI {
    constructor() {
        super();
    }

    public async create(first_name: string, second_name: string, login: string, email: string, password: string, phone: string) {
        return api.post('/auth/signup', {
            first_name,
            second_name,
            login,
            email,
            password,
            phone
        }, {headers: {
            'Content-Type': 'application/json'
        }})
    }
}
   