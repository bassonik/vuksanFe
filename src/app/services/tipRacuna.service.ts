import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {TipRacuna} from '../models/tip_racuna';
import {Racun} from '../models/racun';
import {environment} from "../../environments/environment";

@Injectable()
export class TipRacunaService {

  tipRacuna: BehaviorSubject<TipRacuna> = new BehaviorSubject<TipRacuna>(new TipRacuna());
  dataChange: BehaviorSubject<TipRacuna[]> = new BehaviorSubject<TipRacuna[]>([]);

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<TipRacuna[]> {
    this.httpClient.get<TipRacuna[]>(environment.API_URL + '/tip_racuna/').subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });

    return this.dataChange.asObservable();
  }
  public getOne(id: number): Observable<TipRacuna> {
    this.httpClient.get<TipRacuna>(environment.API_URL + '/tip_racuna/' + id).subscribe(data => {
        this.tipRacuna.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
    return this.tipRacuna.asObservable();
  }

  public add(tipRacuna: TipRacuna): void {
    this.httpClient.post(environment.API_URL + '/tip_racuna/', tipRacuna).subscribe();
  }

  public update(artikl: TipRacuna): void {
    this.httpClient.put(environment.API_URL + '/tip_racuna/', artikl).subscribe();
  }

  public delete(id: number): void {
    console.log(environment.API_URL + '/tip_racuna/' + id);
    this.httpClient.delete(environment.API_URL + '/tip_racuna/' + id).subscribe();
  }
}
