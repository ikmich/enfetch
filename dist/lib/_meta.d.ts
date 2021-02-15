import { Response } from "node-fetch";
export declare type Headers = {
    [k: string]: string;
};
export declare type QueryParams = {
    [k: string]: any;
};
export declare type EnfetchInit = {
    baseUri?: string;
    headers?: Headers;
};
export declare type EnfetchOpts = {
    headers?: Headers;
    jsonBody?: object;
    multipartBody?: FormData;
    responseType?: string;
    responseHandler?: (response: Response) => void;
};
