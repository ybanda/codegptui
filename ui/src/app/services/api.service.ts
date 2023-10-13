import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CODE_GPT_GET_COMPANY_INFO } from "../configs/app-properties.config";

@Injectable({
    providedIn: 'root'
})

export class ChartApiService{

    constructor(private httpClient : HttpClient){

    }

    getStockInfo(data: any):Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Methods':'*',
               
            }),
            processData:false,
            withCredentials:true
        }
return this.httpClient.post(environment.serviceUrl+CODE_GPT_GET_COMPANY_INFO,data,httpOptions);
    }
}