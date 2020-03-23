import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {Racun} from 'src/app/models/racun';
import {TipRacunaService} from 'src/app/services/tipRacuna.service';
import {RacunService} from 'src/app/services/racun.service';
import {Klijent} from 'src/app/models/klijent';
import {KlijentService} from 'src/app/services/klijent.service';
import {TipRacuna} from 'src/app/models/tip_racuna';

@Component({
  selector: 'app-racun-dialog',
  templateUrl: './racun-dialog.component.html',
  styleUrls: ['./racun-dialog.component.css']
})
export class RacunDialogComponent implements OnInit {

  public flag: number;
  public klijenti: Klijent[];
  public tipRacunas: TipRacuna[];

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<RacunDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Racun,
              public racunService: RacunService,
              public klijentService: KlijentService,
              public tipRacunaService: TipRacunaService) {
  }

  ngOnInit() {
    this.klijentService.getAll().subscribe(data => {
      this.klijenti = data;
    });
    this.tipRacunaService.getAll().subscribe(data => {
      this.tipRacunas = data;
    });
  }


  public add(): void {
    this.data.id = -1;
    this.racunService.add(this.data);
    this.snackBar.open('Uspešno dodat racun: ' + this.data.id, 'U redu', {
      duration: 2500,
    });
  }

  public update(): void {
    this.racunService.update(this.data);
    this.snackBar.open('Uspešno modifikovan racun: ' + this.data.id, 'U redu', {
      duration: 2000,
    });
  }

  public delete(): void {
    this.racunService.delete(this.data.id);
    this.snackBar.open('Uspešno obrisan racun: ' + this.data.id, 'U redu', {
      duration: 2000,
    });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'U redu', {
      duration: 1000,
    });
  }

}
