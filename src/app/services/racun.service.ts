import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Racun } from '../models/racun';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class RacunService {
  private readonly API_URL = 'http://localhost:8083/racun/';

  racun: BehaviorSubject<Racun> = new BehaviorSubject<Racun>(new Racun());
  dataChange: BehaviorSubject<Racun[]> = new BehaviorSubject<Racun[]>([]);
  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Racun[]> {
      this.httpClient.get<Racun[]>(this.API_URL).subscribe(data => {
          this.dataChange.next(data);
      },
          (error: HttpErrorResponse) => {
              console.log(error.name + ' ' + error.message);
          });
      return this.dataChange.asObservable();
  }

  public getOne(id: number): Observable<Racun> {
    this.httpClient.get<Racun>(this.API_URL + id).subscribe(data => {
        this.racun.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
    return this.racun.asObservable();
  }
  public add(racun: Racun): void {
      this.httpClient.post(this.API_URL, racun).subscribe();
  }

  public update(racun: Racun): void {
      this.httpClient.put(this.API_URL, racun).subscribe();
  }

  public delete(id: number): void {
      console.log(this.API_URL + id);
      this.httpClient.delete(this.API_URL + id).subscribe();
  }
}
