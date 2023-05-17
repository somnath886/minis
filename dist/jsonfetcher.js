var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class JSONFetcher {
    constructor(url, extraHeaders) {
        this._headers = {
            'content-type': 'application/json',
            accept: 'application/json',
        };
        this.Get = () => __awaiter(this, void 0, void 0, function* () { return (yield yield fetch(this._url).then((res) => res.json())); });
        this.Post_Or_Update = (b, method) => __awaiter(this, void 0, void 0, function* () {
            return (yield yield fetch(this._url, {
                method,
                body: b,
                headers: Object.assign(Object.assign({}, this._headers), this._extraHeaders),
            }).then((res) => res.json()));
        });
        this.Delete = () => __awaiter(this, void 0, void 0, function* () {
            return (yield yield fetch(this._url, {
                method: 'DELETE',
                headers: Object.assign(Object.assign({}, this._headers), this._extraHeaders),
            }).then((res) => res.json()));
        });
        this._url = url;
        this._extraHeaders = extraHeaders;
    }
}
export const GetJSONFetcherInterface = (url, extraHeaders) => new JSONFetcher(url, extraHeaders);
//# sourceMappingURL=jsonfetcher.js.map