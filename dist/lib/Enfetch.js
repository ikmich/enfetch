"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enfetch = void 0;
const node_fetch_1 = require("node-fetch");
const fetch = require("node-fetch");
class Enfetch {
    constructor(init) {
        var _a, _b;
        this.baseUri = "";
        this.headers = {
            "Content-Type": "application/json",
        };
        this.defaultRequestInit = {
            headers: this.headers,
        };
        this.baseUri = (_a = init === null || init === void 0 ? void 0 : init.baseUri) !== null && _a !== void 0 ? _a : "";
        this.headers = (_b = init === null || init === void 0 ? void 0 : init.headers) !== null && _b !== void 0 ? _b : this.headers;
    }
    addHeaders(headers) {
        this.headers = Object.assign(Object.assign({}, this.headers), headers);
    }
    buildUrl(path) {
        return `${this.baseUri}/${path}`.replace(/\/{2,}/g, '/');
    }
    // ----
    async get(path, opts) {
        return await this.sendRequest("GET", path, opts);
    }
    async post(path, opts) {
        return await this.sendRequest("POST", path, opts);
    }
    async put(path, opts) {
        return await this.sendRequest("PUT", path, opts);
    }
    async patch(path, opts) {
        return await this.sendRequest("PATCH", path, opts);
    }
    async del(path, opts) {
        return await this.sendRequest("DELETE", path, opts);
    }
    async sendRequest(method, path, opts) {
        method = method.toUpperCase();
        let url = this.buildUrl(path);
        let init = Object.assign(Object.assign({}, this.defaultRequestInit), { method: method });
        if (!opts) {
            opts = {};
        }
        if (!opts.responseType) {
            opts.responseType = "application/json";
        }
        if (opts.headers) {
            init.headers = Object.assign(Object.assign({}, init.headers), opts.headers);
        }
        if (opts.jsonBody) {
            init.body = JSON.stringify(opts.jsonBody);
        }
        if (opts.multipartBody) {
            init.body = opts.multipartBody;
            // delete content-type header, for multipart/form-data request
            delete init.headers["Content-Type"];
        }
        const req = new node_fetch_1.Request(url, init);
        const response = await fetch(req);
        if (opts === null || opts === void 0 ? void 0 : opts.responseHandler) {
            opts === null || opts === void 0 ? void 0 : opts.responseHandler(response);
        }
        return response;
    }
    async json(response) {
        return JSON.parse(await response.text());
    }
}
exports.Enfetch = Enfetch;
