import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {TipRacuna} from '../models/tip_racuna';
import {Racun} from '../models/racun';

@Injectable()
export class TipRacunaService {

  tipRacuna: BehaviorSubject<TipRacuna> = new BehaviorSubject<TipRacuna>(new TipRacuna());
  dataChange: BehaviorSubject<TipRacuna[]> = new BehaviorSubject<TipRacuna[]>([]);
  private readonly API_URL = 'http://localhost:8083/tip_racuna/';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<TipRacuna[]> {
    this.httpClient.get<TipRacuna[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });

    return this.dataChange.asObservable();
  }
  public getOne(id: number): Observable<TipRacuna> {
    this.httpClient.get<TipRacuna>(this.API_URL + id).subscribe(data => {
        this.tipRacuna.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
    return this.tipRacuna.asObservable();
  }

  public add(tipRacuna: TipRacuna): void {
    this.httpClient.post(this.API_URL, tipRacuna).subscribe();
  }

  public update(artikl: TipRacuna): void {
    this.httpClient.put(this.API_URL, artikl).subscribe();
  }

  public delete(id: number): void {
    console.log(this.API_URL + id);
    this.httpClient.delete(this.API_URL + id).subscribe();
  }
}
