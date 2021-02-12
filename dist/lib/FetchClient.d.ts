import { FetchClientInit, FetchClientOpts, Headers } from "./_meta";
export declare class FetchClient {
    protected baseUri: string;
    protected headers: Headers;
    private defaultRequestInit;
    constructor(init?: FetchClientInit);
    addHeaders(headers: Headers): void;
    protected buildUrl(path: string): string;
    get(path: string, opts?: FetchClientOpts): Promise<Response>;
    post(path: string, opts?: FetchClientOpts): Promise<Response>;
    put(path: string, opts?: FetchClientOpts): Promise<Response>;
    del(path: string, opts?: FetchClientOpts): Promise<Response>;
    sendRequest(method: string, path: string, opts?: FetchClientOpts): Promise<Response>;
    json(response: Response): Promise<any>;
}
