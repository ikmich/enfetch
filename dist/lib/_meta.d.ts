import { Response } from "node-fetch";
export declare type Headers = {
    [k: string]: string;
};
export declare type QueryParams = {
    [k: string]: any;
};
export declare type FetchClientInit = {
    baseUri?: string;
    headers?: Headers;
};
export declare type FetchClientOpts = {
    headers?: Headers;
    jsonBody?: object;
    multipartBody?: FormData;
    responseType?: string;
    responseHandler?: (response: Response) => void;
};
