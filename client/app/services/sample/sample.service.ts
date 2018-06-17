import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import SampleRequest = require('../../../../middle/exchange/sample/sample.request');
import SampleResponse = require('../../../../middle/exchange/sample/sample.response');

@Injectable()
export class SampleService {

  constructor(private http: HttpClient) { }

  /** GET通信 サンプル */
  public async getReq(): Promise<any> {
    // GETリクエスト作成
    const httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    let httpParams: HttpParams = new HttpParams();
    httpParams = httpParams.append('testKey', 'aaaaa');
    httpParams = httpParams.append('otherKey', 'bbbbb');
    httpParams = httpParams.append('testKey', 'ccccc');

    // GETリクエスト送信
    return await this.http.get<SampleResponse>('/api/get-sample', {
      headers: httpHeaders,
      params: httpParams
    }).toPromise();
  }

  /** POST通信 サンプル */
  public async postReq(): Promise<any> {
    // POSTリクエスト作成
    const httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    const body = {
      num1: 7,
      num2: 9
    } as SampleRequest;

    // POSTリクエスト送信
    return await this.http.post<SampleResponse>('/api/post-sample', body, {
      headers: httpHeaders
    }).toPromise();
  }
}
