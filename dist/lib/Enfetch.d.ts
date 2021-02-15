import { EnfetchInit, EnfetchOpts, Headers } from "./_meta";
import { Response } from "node-fetch";
export declare class Enfetch {
    protected baseUri: string;
    protected headers: Headers;
    private defaultRequestInit;
    constructor(init?: EnfetchInit);
    addHeaders(headers: Headers): void;
    protected buildUrl(path: string): string;
    get(path: string, opts?: EnfetchOpts): Promise<any>;
    post(path: string, opts?: EnfetchOpts): Promise<any>;
    put(path: string, opts?: EnfetchOpts): Promise<any>;
    patch(path: string, opts?: EnfetchOpts): Promise<any>;
    del(path: string, opts?: EnfetchOpts): Promise<any>;
    sendRequest(method: string, path: string, opts?: EnfetchOpts): Promise<any>;
    json(response: Response): Promise<any>;
}
