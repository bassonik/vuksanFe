import { Component, OnInit, Inject } from '@angular/core';
import { Klijent } from 'src/app/models/klijent';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { KlijentService } from 'src/app/services/klijent.service';
import { KreditService } from 'src/app/services/kredit.service';
import { Kredit } from 'src/app/models/kredit';

@Component({
  selector: 'app-klijent-dialog',
  templateUrl: './klijent-dialog.component.html',
  styleUrls: ['./klijent-dialog.component.css']
})
export class KlijentDialogComponent implements OnInit {

  public flag: number;
  public krediti: Kredit[];
  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<KlijentDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Klijent,
              public klijentService: KlijentService,
              public kreditService: KreditService) { }

  ngOnInit() {
      this.kreditService.getAll().subscribe(data => {
        this.krediti = data;
      })
  }

  public add(): void {
    this.data.id = -1;
    this.klijentService.add(this.data);
    this.snackBar.open('Uspešno dodat klijent: ' + this.data.id, 'U redu', {
      duration: 2500,
    });
  }

  public update(): void {
    this.klijentService.update(this.data);
    this.snackBar.open('Uspešno modifikovan klijent: ' + this.data.id, 'U redu', {
      duration: 2000,
    });
  }

  public delete(): void {
    this.klijentService.delete(this.data.id);
    this.snackBar.open('Uspešno obrisan klijent: ' + this.data.id, 'U redu', {
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
