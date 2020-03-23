import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {Kredit} from 'src/app/models/kredit';
import {KreditService} from 'src/app/services/kredit.service';
import {KlijentService} from '../../../services/klijent.service';
import {Klijent} from '../../../models/klijent';

@Component({
  selector: 'app-kredit-dialog',
  templateUrl: './kredit-dialog.component.html',
  styleUrls: ['./kredit-dialog.component.css']
})
export class KreditDialogComponent implements OnInit {

  public flag: number;
  public klijenti: Klijent[];

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<KreditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Kredit,
              public klijentService: KlijentService,
              public kreditService: KreditService) {
  }

  ngOnInit() {
    this.klijentService.getAll().subscribe(data => {
      this.klijenti = data;
    });
  }

  public add(): void {
    this.data.id = -1;
    this.kreditService.add(this.data);
    this.snackBar.open('Uspešno dodat kredit: ' + this.data.id, 'U redu', {
      duration: 2500,
    });
  }

  public update(): void {
    this.kreditService.update(this.data);
    this.snackBar.open('Uspešno modifikovan kredit: ' + this.data.id, 'U redu', {
      duration: 2000,
    });
  }

  public delete(): void {
    this.kreditService.delete(this.data.id);
    this.snackBar.open('Uspešno obrisan kredit: ' + this.data.id, 'U redu', {
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

