import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TipRacuna } from 'src/app/models/tip_racuna';
import { TipRacunaService } from 'src/app/services/tipRacuna.service';

@Component({
  selector: 'app-tip-racuna-dialog',
  templateUrl: './tipRacuna-dialog.component.html',
  styleUrls: ['./tipRacuna-dialog.component.css']
})
export class TipRacunaDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<TipRacunaDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: TipRacuna,
              public tipRacunaService: TipRacunaService) { }

  ngOnInit() {
  }

  public add(): void {
    this.data.id = -1;
    this.tipRacunaService.add(this.data);
    this.snackBar.open('Uspešno dodat tip racuna: ' + this.data.id, 'U redu', {
      duration: 2500,
    });
  }

  public update(): void {
    this.tipRacunaService.update(this.data);
    this.snackBar.open('Uspešno modifikovan tip racuna: ' + this.data.id, 'U redu', {
      duration: 2000,
    });
  }

  public delete(): void {
    this.tipRacunaService.delete(this.data.id);
    this.snackBar.open('Uspešno obrisan tip racuna: ' + this.data.id, 'U redu', {
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
