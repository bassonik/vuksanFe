import {Injectable} from '@angular/core';
import {Kredit} from '../models/kredit';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Racun} from '../models/racun';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class KreditService {
  kredit: BehaviorSubject<Kredit> = new BehaviorSubject<Kredit>(new Kredit());
  dataChange: BehaviorSubject<Kredit[]> = new BehaviorSubject<Kredit[]>([]);
  private readonly API_URL = 'http://localhost:8083/kredit/';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Kredit[]> {
    this.httpClient.get<Kredit[]>(environment.API_URL).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });

    return this.dataChange.asObservable();
  }

  public getOne(id: number): Observable<Kredit> {
    this.httpClient.get<Kredit>(environment.API_URL + id).subscribe(data => {
        this.kredit.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
    return this.kredit.asObservable();
  }
  public add(kredit: Kredit): void {
    this.httpClient.post(environment.API_URL, kredit).subscribe();
  }

  public update(artikl: Kredit): void {
    this.httpClient.put(environment.API_URL, artikl).subscribe();
  }

  public delete(id: number): void {
    console.log(environment.API_URL + id);
    this.httpClient.delete(environment.API_URL + id).subscribe();
  }
}
