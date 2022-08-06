import { IRequest } from "../types/types";

const enum METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
};

// Самая простая версия. Реализовать штучку со всеми проверками им предстоит в конце спринта
// Необязательный метод
function queryStringify(data: Document | XMLHttpRequestBodyInit | null | undefined) {
    if (!data) {
            throw new Error('Data must be object');
    }

    // Здесь достаточно и [object Object] для объекта
    const keys = Object.keys(data);
    return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key as keyof typeof data]}${index < keys.length - 1 ? '&' : ''}`;
    }, '?');
}

class HTTPTransport {
    get = (url: string, options: IRequest = {}) => {
             
            return this.request(url, {...options, method: METHODS.GET}, options.timeout ?? 0);
    };

    post = (url: string, options: IRequest = {}) => {
            return this.request(url, {...options, method: METHODS.POST}, options.timeout ?? 0);
    };

    put = (url: string, options: IRequest = {}) => {
            return this.request(url, {...options, method: METHODS.PUT}, options.timeout ?? 0);
    };

    delete = (url: string, options: IRequest = {}) => { 
            return this.request(url, {...options, method: METHODS.DELETE}, options.timeout ?? 0);
    };

    request = (url: string, options: IRequest = {}, timeout = 5000) => {
            const {headers = {}, method, data} = options;

            return new Promise(function(resolve, reject) {
                    if (!method) {
                            reject('No method');
                            return;
                    }

                const xhr = new XMLHttpRequest();
                    const isGet = method === METHODS.GET;

                xhr.open(
                            method, 
                            isGet && !!data
                                    ? `${url}${queryStringify(data)}`
                                    : url,
                    );
                    
                    Object.keys(headers).forEach((key: string) => {
                            xhr.setRequestHeader(key, headers[key as keyof typeof headers]);
                    });
            
                xhr.onload = function() {
                      resolve(xhr);
                };
            
                xhr.onabort = reject;
                xhr.onerror = reject;
            
                xhr.timeout = timeout;
                xhr.ontimeout = reject;
                    
                  if (isGet || !data) {
                        xhr.send();
                    } else {
                        xhr.send(data);
                    }
          });
    };
}