export type Headers = { [k: string]: string };

export type QueryParams = {
  [k: string]: any;
};

export type FetchClientInit = {
  baseUri?: string;
  headers?: Headers;
};

export type FetchClientOpts = {
  headers?: Headers;
  jsonBody?: object;
  multipartBody?: FormData;
  responseType?: string;
  responseHandler?: (response: Response) => void;
};
