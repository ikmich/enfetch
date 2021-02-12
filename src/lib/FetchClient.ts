import { FetchClientInit, FetchClientOpts, Headers } from "./_meta";
import { Request, Response } from "node-fetch";

const fetch = require("node-fetch");

export class FetchClient {
  protected baseUri: string = "";

  protected headers: Headers = {
    "Content-Type": "application/json",
  };

  private defaultRequestInit = {
    headers: this.headers,
  };

  constructor(init?: FetchClientInit) {
    this.baseUri = init?.baseUri ?? "";
    this.headers = init?.headers ?? this.headers;
  }

  public addHeaders(headers: Headers) {
    this.headers = {
      ...this.headers,
      ...headers,
    };
  }

  protected buildUrl(path: string): string {
    return `${this.baseUri}${path}`;
  }

  // ----

  public async get(path: string, opts?: FetchClientOpts) {
    return await this.sendRequest("GET", path, opts);
  }

  public async post(path: string, opts?: FetchClientOpts) {
    return await this.sendRequest("POST", path, opts);
  }

  public async put(path: string, opts?: FetchClientOpts) {
    return await this.sendRequest("PUT", path, opts);
  }

  public async patch(path: string, opts?: FetchClientOpts) {
    return await this.sendRequest("PATCH", path, opts);
  }

  public async del(path: string, opts?: FetchClientOpts) {
    return await this.sendRequest("DELETE", path, opts);
  }

  public async sendRequest(
    method: string,
    path: string,
    opts?: FetchClientOpts
  ) {
    method = method.toUpperCase();
    let url = this.buildUrl(path);

    let init: any = {
      ...this.defaultRequestInit,
      method: method,
    };

    if (!opts) {
      opts = {};
    }

    if (!opts.responseType) {
      opts.responseType = "application/json";
    }

    if (opts.headers) {
      init.headers = {
        ...init.headers,
        ...opts.headers,
      };
    }

    if (opts.jsonBody) {
      init.body = JSON.stringify(opts.jsonBody);
    }

    if (opts.multipartBody) {
      init.body = opts.multipartBody;

      // delete content-type header, for multipart/form-data request
      delete init.headers["Content-Type"];
    }

    const req = new Request(url, init);

    const response = await fetch(req);

    if (opts?.responseHandler) {
      opts?.responseHandler(response);
    }
    return response;
  }

  async json(response: Response) {
    return JSON.parse(await response.text());
  }
}
