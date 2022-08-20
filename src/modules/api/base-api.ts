export default class BaseAPI {
    public create(...args: any[]): any { throw new Error('Not implemented'); }
    request() { throw new Error('Not implemented'); }
    update() { throw new Error('Not implemented'); }
    delete() { throw new Error('Not implemented'); }
}