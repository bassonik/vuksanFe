import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material';
import {Klijent} from '../../../models/klijent';
import {KlijentService} from '../../../services/klijent.service';

@Component({
  selector: 'app-kredit-info-dialog',
  templateUrl: './kredit-info-dialog.component.html',
  styleUrls: ['./kredit-info-dialog.component.css']
})
export class KreditInfoDialogComponent implements OnInit {

  public klijent: Klijent;
  public id: number;
  public flag: number;
  constructor(public httpClient: HttpClient,
              public dialog: MatDialog,
              public klijentService: KlijentService) {
  }

  ngOnInit() {
    this.klijentService.getOne(this.id).subscribe(
      data => {
        this.klijent = data;
      }
    );

  }


}
