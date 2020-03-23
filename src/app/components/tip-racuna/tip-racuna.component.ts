import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { TipRacuna } from 'src/app/models/tip_racuna';
import { HttpClient } from '@angular/common/http';
import { TipRacunaService } from 'src/app/services/tipRacuna.service';
import { TipRacunaDialogComponent } from '../dialogs/tipRacuna-dialog/tipRacuna-dialog.component';

@Component({
  selector: 'app-tip-racuna',
  templateUrl: './tip-racuna.component.html',
  styleUrls: ['./tip-racuna.component.css']
})
export class TipRacunaComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'opis', 'oznaka', 'actions'];
  dataSource: MatTableDataSource<TipRacuna>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public httpClient: HttpClient,
              public dialog: MatDialog,
              public tipRacunaService: TipRacunaService) {
  }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.tipRacunaService.getAll().subscribe(data => {
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

  public openDialog(flag: number, id: number, naziv: string, opis: string, oznaka: string) {
    const dialogRef = this.dialog.open(TipRacunaDialogComponent,
                      { data: { id, naziv, opis, oznaka } });
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
