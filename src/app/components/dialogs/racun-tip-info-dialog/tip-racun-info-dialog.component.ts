import { Component, OnInit } from '@angular/core';
import {Racun} from '../../../models/racun';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material';
import {RacunService} from '../../../services/racun.service';

@Component({
  selector: 'app-tip-racun-info-dialog',
  templateUrl: './tip-racun-info-dialog.component.html',
  styleUrls: ['./tip-racun-info-dialog.component.css']
})
export class TipRacunInfoDialogComponent implements OnInit {

  public racun: Racun;
  public id: number;
  public flag: number;
  constructor(public httpClient: HttpClient,
              public dialog: MatDialog,
              public racunService: RacunService) {
  }

  ngOnInit() {
    this.racunService.getOne(this.id).subscribe(
      data => {
        this.racun = data;
      }
    );

  }

}
