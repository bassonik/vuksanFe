import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Klijent} from '../models/klijent';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Racun} from '../models/racun';

@Injectable({
  providedIn: 'root'
})
export class KlijentService {
  klijent: BehaviorSubject<Klijent> = new BehaviorSubject<Klijent>(new Klijent());
  dataChange: BehaviorSubject<Klijent[]> = new BehaviorSubject<Klijent[]>([]);
  private readonly API_URL = 'http://localhost:8083/klijent/';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Klijent[]> {
    this.httpClient.get<Klijent[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });

    return this.dataChange.asObservable();
  }

  public getOne(id: number): Observable<Klijent> {
    this.httpClient.get<Klijent>(this.API_URL + id).subscribe(data => {
        this.klijent.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
    return this.klijent.asObservable();
  }

  public add(klijent: Klijent): void {
    this.httpClient.post(this.API_URL, klijent).subscribe();
  }

  public update(artikl: Klijent): void {
    this.httpClient.put(this.API_URL, artikl).subscribe();
  }

  public delete(id: number): void {
    console.log(this.API_URL + id);
    this.httpClient.delete(this.API_URL + id).subscribe();
  }
}
