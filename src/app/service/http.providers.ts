import {Injectable} from '@angular/core';
import {Http, Response, Request,RequestMethod, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class Httpprovider {
    cities: Response;
    http: Http;
    baseurl:string="http://125.255.0.1:8008";
    constructor(http: Http){
        this.http = http;
    }
    httpReq(url: string, method: string, data: any, header: Headers){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        if (method === 'GET'){ var methods = RequestMethod.Get} 
        else if (method === 'POST'){ var methods = RequestMethod.Post}
        else if (method === 'PUT'){var methods = RequestMethod.Put}
        else if (method === 'PATCH'){var methods = RequestMethod.Patch} 
        else if (method === 'DELETE'){var methods = RequestMethod.Delete}
        else {methods = RequestMethod.Get};
        
        return this.http.request(new Request({
                    method: methods,
                    url: this.baseurl+url,
                    body: JSON.stringify(data),
                    headers: headers
                })).map(res => res.json());
    }

}
