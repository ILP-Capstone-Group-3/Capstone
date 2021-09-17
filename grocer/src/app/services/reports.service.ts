import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Report } from '../report.model';

// This url is used in manipulating the data. It needs to 
// be the same as the one from the respective router.
const baseUrl = "http://localhost:9090/api/reports";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http:HttpClient) { }

  // Creates a new report to the database
  // Object to enter: {_id:number, userid:number, product:string}
  createReport(data:any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  // Query reports just by time
  getReportsByTime(time:string): Observable<Report[]> {
    return this.http.get<Report[]>(`${baseUrl}/${time}`);
  }

  // Query reports based on user id
  getReportsByUser(time:string, user:string): Observable<Report[]> {
    return this.http.get<Report[]>(`${baseUrl}/${time}/${user}`);
  }

  // Query reports based on product name
  getReportsByProduct(time:string, product:string): Observable<Report[]> {
    return this.http.get<Report[]>(`${baseUrl}/${time}/${product}`);
  }

  // Query reports by all parameters
  getReportsByAll(time:string, user:string, product:string): Observable<Report[]> {
    return this.http.get<Report[]>(`${baseUrl}/${time}/${user}/${product}`);
  }
}
