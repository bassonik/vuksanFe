import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Racun} from '../models/racun';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RacunService {
  racun: BehaviorSubject<Racun> = new BehaviorSubject<Racun>(new Racun());
  dataChange: BehaviorSubject<Racun[]> = new BehaviorSubject<Racun[]>([]);
  private readonly API_URL = 'http://localhost:8083/racun/';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Racun[]> {
    this.httpClient.get<Racun[]>(environment.API_URL).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
    return this.dataChange.asObservable();
  }

  public getOne(id: number): Observable<Racun> {
    this.httpClient.get<Racun>(environment.API_URL + id).subscribe(data => {
        this.racun.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
    return this.racun.asObservable();
  }

  public add(racun: Racun): void {
    this.httpClient.post(environment.API_URL, racun).subscribe();
  }

  public update(racun: Racun): void {
    this.httpClient.put(environment.API_URL, racun).subscribe();
  }

  public delete(id: number): void {
    console.log(environment.API_URL + id);
    this.httpClient.delete(environment.API_URL + id).subscribe();
  }
}
