import {Component, OnInit, ViewChild} from '@angular/core';
import {KlijentService} from 'src/app/services/klijent.service';
import {KlijentDialogComponent} from '../dialogs/klijent-dialog/klijent-dialog.component';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Klijent} from 'src/app/models/klijent';
import {HttpClient} from '@angular/common/http';
import {Kredit} from 'src/app/models/kredit';
import {KreditInfoDialogComponent} from '../dialogs/kredit-info-dialog/kredit-info-dialog.component';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-klijent',
  templateUrl: './klijent.component.html',
  styleUrls: ['./klijent.component.css']
})
export class KlijentComponent implements OnInit {

  displayedColumns = ['id', 'ime', 'prezime', 'brojLk', 'kredit', 'actions'];
  dataSource: MatTableDataSource<Klijent>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public httpClient: HttpClient,
              public dialog: MatDialog,
              public klijentService: KlijentService) {
  }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.klijentService.getAll().subscribe(data => {
      data.forEach(element => {
        if (element.kredit == null) {
          element.kredit = {
            id: -100,
            naziv: 'Trenutno nema kredit',
            opis: 'Trenutno nema kredit',
            oznaka: 'Nema kredit',
            klijent_id: -100,
          };
        }
      });
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sortingDataAccessor = (data, property) => {
        switch (property) {
          case 'id':
            return data[property];
          default:
            return data[property].toLocaleLowerCase();
        }
      };
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public openDialog(flag: number, id: number, ime: string, prezime: string, brojLk: number, kredit: Kredit) {
    const dialogRef = this.dialog.open(KlijentDialogComponent,
      {data: {id, ime, prezime, brojLk, kredit}});
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
        this.loadData();
      }
    });
  }
  public openKreditInfoDialog(flag: number, id: number, ime: string, prezime: string, brojLk: number, kredit: Kredit) {
    const dialogRef = this.dialog.open(KreditInfoDialogComponent,
      {data: {id, ime, prezime, brojLk, kredit}});
    dialogRef.componentInstance.id = id;
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
        this.loadData();
      }
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}

