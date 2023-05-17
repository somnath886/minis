export type TResponse<T, E> =
  | {
      data: T;
      error: null;
    }
  | {
      data: null;
      error: E;
    };

interface IJSONFetcher {
  /**
   * @description Must adhere to the specified {@link TResponse} type JSON
   */
  Get: <T, E>() => Promise<TResponse<T, E>>;
  /**
   * @description Must adhere to the specified {@link TResponse} type JSON
   */
  Post_Or_Update: <T, E>(
    b: string,
    method: 'POST' | 'PATCH' | 'PUT'
  ) => Promise<TResponse<T, E>>;
  /**
   * @description Must adhere to the specified {@link TResponse} type JSON
   */
  Delete: <T, E>() => Promise<TResponse<T, E>>;
}

class JSONFetcher implements IJSONFetcher {
  private _url: string;
  private _extraHeaders: { [key: string]: string } | undefined;
  private _headers = {
    'content-type': 'application/json',
    accept: 'application/json',
  };

  constructor(url: string, extraHeaders?: { [key: string]: string }) {
    this._url = url;
    this._extraHeaders = extraHeaders;
  }

  Get = async <T, E>() =>
    (await await fetch(this._url).then((res) => res.json())) as TResponse<T, E>;

  Post_Or_Update = async <T, E>(b: string, method: 'POST' | 'PATCH' | 'PUT') =>
    (await await fetch(this._url, {
      method,
      body: b,
      headers: {
        ...this._headers,
        ...this._extraHeaders,
      },
    }).then((res) => res.json())) as TResponse<T, E>;

  Delete = async <T, E>() =>
    (await await fetch(this._url, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        ...this._extraHeaders,
      },
    }).then((res) => res.json())) as TResponse<T, E>;
}

export const GetJSONFetcherInterface = (
  url: string,
  extraHeaders?: { [key: string]: string }
): IJSONFetcher => new JSONFetcher(url, extraHeaders);
