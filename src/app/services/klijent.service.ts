import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Klijent} from '../models/klijent';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KlijentService {
  klijent: BehaviorSubject<Klijent> = new BehaviorSubject<Klijent>(new Klijent());
  dataChange: BehaviorSubject<Klijent[]> = new BehaviorSubject<Klijent[]>([]);

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Klijent[]> {
    this.httpClient.get<Klijent[]>(environment.API_URL + '/klijent/').subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });

    return this.dataChange.asObservable();
  }

  public getOne(id: number): Observable<Klijent> {
    this.httpClient.get<Klijent>(environment.API_URL + '/klijent/' + id).subscribe(data => {
        this.klijent.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
    return this.klijent.asObservable();
  }

  public add(klijent: Klijent): void {
    this.httpClient.post(environment.API_URL + '/klijent/', klijent).subscribe();
  }

  public update(artikl: Klijent): void {
    this.httpClient.put(environment.API_URL + '/klijent/', artikl).subscribe();
  }

  public delete(id: number): void {
    this.httpClient.delete(environment.API_URL + '/klijent/' + id).subscribe();
  }
}
