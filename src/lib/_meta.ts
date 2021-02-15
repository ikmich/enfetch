import {Response} from "node-fetch";

export type Headers = { [k: string]: string };


export type QueryParams = {
  [k: string]: any;
};

export type EnfetchInit = {
  baseUri?: string;
  headers?: Headers;
};

export type EnfetchOpts = {
  headers?: Headers;
  jsonBody?: object;
  multipartBody?: FormData;
  responseType?: string;
  responseHandler?: (response: Response) => void;
};
