import { Component, OnInit } from '@angular/core';
import { RacunService } from 'src/app/services/racun.service';
import { MatDialog } from '@angular/material';
import { Racun } from 'src/app/models/racun';
import { HttpClient } from '@angular/common/http';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-racun-info',
  templateUrl: './racun-info-dialog.component.html',
  styleUrls: ['./racun-info-dialog.component.css']
})
export class RacunInfoDialogComponent implements OnInit {

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
