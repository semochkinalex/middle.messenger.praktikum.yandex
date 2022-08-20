import { IRequest } from "../types/types";

const enum METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

function queryStringify(
  data: Document | XMLHttpRequestBodyInit | null | undefined
) {
  if (!data) {
    throw new Error("Data must be object");
  }

  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key as keyof typeof data]}${
      index < keys.length - 1 ? "&" : ""
    }`;
  }, "?");
}

export default class HTTPTransport {
  _baseURL: string;

  constructor(baseURL: string) {
    this._baseURL = baseURL;
  }


  get = (url: string, options: IRequest = {}) => {
    // console.log(url);
    return this.request(
      url,
      { ...options, method: METHODS.GET },
    );
  };

  post = (url: string, body: object, options: IRequest = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.POST, data: JSON.stringify(body) },
    );
  };

  put = (url: string, options: IRequest = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.PUT },
    );
  };

  delete = (url: string, options: IRequest = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.DELETE },
    );
  };

  request = (url: string, options: IRequest = {}) => {
    const { headers = {}, method, timeout = 5000, data } = options;

    if (this._baseURL) {
      url = `${this._baseURL}${url}`
      console.log(url)
    }

    return new Promise(function (resolve, reject) {
      if (!method) {
        reject("No method");
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;
      console.log(url);
      xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url);

      Object.keys(headers).forEach((key: string) => {
        xhr.setRequestHeader(key, headers[key as keyof typeof headers]);
      });

      xhr.onload = function () {
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
