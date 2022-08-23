import BaseAPI from '../../modules/api/base-api';
import HTTP from '../../modules/api/http';
import { TFormValues } from '../../modules/types/types';

const api = new HTTP('https://ya-praktikum.tech/api/v2');

export default class ProfileAPI extends BaseAPI {
    constructor() {
        super();
    }

    public async update(data: TFormValues) {
        return api.put('/user/profile', data, {headers: {
            'Content-Type': 'application/json'
        }});
    }

    public create(data: FormData) {
        return api.put('/user/profile/avatar', data);
    }
}
   