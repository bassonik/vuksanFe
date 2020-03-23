import { Component, OnInit, ViewChild } from '@angular/core';
import { RacunService } from 'src/app/services/racun.service';
import { RacunDialogComponent } from '../dialogs/racun-dialog/racun-dialog.component';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Racun } from 'src/app/models/racun';
import { HttpClient } from '@angular/common/http';
import { Klijent } from 'src/app/models/klijent';
import { TipRacuna } from 'src/app/models/tip_racuna';
import {RacunInfoDialogComponent} from '../dialogs/racun-info-dialog/racun-info-dialog.component';
import {TipRacunInfoDialogComponent} from '../dialogs/racun-tip-info-dialog/tip-racun-info-dialog.component';

@Component({
  selector: 'app-racun',
  templateUrl: './racun.component.html',
  styleUrls: ['./racun.component.css']
})
export class RacunComponent implements OnInit {


  displayedColumns = ['id', 'naziv', 'opis', 'oznaka', 'tipRacuna', 'klijent', 'actions'];
  dataSource: MatTableDataSource<Racun>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public httpClient: HttpClient,
              public dialog: MatDialog,
              public racunService: RacunService) {
  }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.racunService.getAll().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sortingDataAccessor = (data, property) => {
        switch (property) {
          case 'id': return data[property];
          default: return data[property].toLocaleLowerCase();
        }
      };
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public openDialog(flag: number, id: number, naziv: string, opis: string, oznaka: string, tipRacuna: TipRacuna , klijent: Klijent, ) {
    const dialogRef = this.dialog.open(RacunDialogComponent,
                      { data: { id, naziv, opis, oznaka, tipRacuna, klijent} });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
        this.loadData();
      }
    });
  }

  public openInfoDialog(flag: number, id: number, naziv: string, opis: string, oznaka: string, tipRacuna: TipRacuna , klijent: Klijent, ) {
    const dialogRef = this.dialog.open(RacunInfoDialogComponent,
      { data: { id, naziv, opis, oznaka, tipRacuna, klijent} });
    dialogRef.componentInstance.flag = flag;
    dialogRef.componentInstance.id = id;
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
        this.loadData();
      }
    });
  }

  public openTipInfoDialog(flag: number, id: number, naziv: string, opis: string, oznaka: string, tipRacuna: TipRacuna , klijent: Klijent, ) {
    const dialogRef = this.dialog.open(TipRacunInfoDialogComponent,
      { data: { id, naziv, opis, oznaka, tipRacuna, klijent} });
    dialogRef.componentInstance.flag = flag;
    dialogRef.componentInstance.id = id;
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
