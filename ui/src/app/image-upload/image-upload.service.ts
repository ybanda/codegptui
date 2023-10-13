import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CODE_GPT_GET_COMPANY_INFO } from '../configs/app-properties.config';

@Injectable({
  providedIn: 'root',
})
export class ImageUploadService {
  private baseUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) {}

  upload(file: File): Observable<any> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST',environment.serviceUrl+CODE_GPT_GET_COMPANY_INFO, formData, {
      reportProgress: true,
      responseType: 'json',
    });
    const httpOptions = {
      headers: new HttpHeaders({
          'Access-Control-Allow-Methods':'*',
         
      }),
      processData:true
  }
   return this.http.post(environment.serviceUrl+CODE_GPT_GET_COMPANY_INFO,formData,httpOptions);

  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
}
