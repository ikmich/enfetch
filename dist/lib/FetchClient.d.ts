import { FetchClientInit, FetchClientOpts, Headers } from "./_meta";
import { Response } from "node-fetch";
export declare class FetchClient {
    protected baseUri: string;
    protected headers: Headers;
    private defaultRequestInit;
    constructor(init?: FetchClientInit);
    addHeaders(headers: Headers): void;
    protected buildUrl(path: string): string;
    get(path: string, opts?: FetchClientOpts): Promise<any>;
    post(path: string, opts?: FetchClientOpts): Promise<any>;
    put(path: string, opts?: FetchClientOpts): Promise<any>;
    patch(path: string, opts?: FetchClientOpts): Promise<any>;
    del(path: string, opts?: FetchClientOpts): Promise<any>;
    sendRequest(method: string, path: string, opts?: FetchClientOpts): Promise<any>;
    json(response: Response): Promise<any>;
}
