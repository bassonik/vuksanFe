import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatOptionModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {HomeComponent} from './components/core/home/home.component';
import {AboutComponent} from './components/core/about/about.component';
import {AuthorComponent} from './components/core/author/author.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {TipRacunaComponent} from './components/tip-racuna/tip-racuna.component';
import {TipRacunaService} from './services/tipRacuna.service';
import {TipRacunaDialogComponent} from './components/dialogs/tipRacuna-dialog/tipRacuna-dialog.component';
import {RacunComponent} from './components/racun/racun.component';
import {KreditComponent} from './components/kredit/kredit.component';
import {KlijentComponent} from './components/klijent/klijent.component';
import {RacunDialogComponent} from './components/dialogs/racun-dialog/racun-dialog.component';
import {KreditDialogComponent} from './components/dialogs/kredit-dialog/kredit-dialog.component';
import {KlijentDialogComponent} from './components/dialogs/klijent-dialog/klijent-dialog.component';
import {KreditService} from './services/kredit.service';
import {KlijentService} from './services/klijent.service';
import {RacunService} from './services/racun.service';
import {RacunInfoDialogComponent} from './components/dialogs/racun-info-dialog/racun-info-dialog.component';
import {TipRacunInfoDialogComponent} from './components/dialogs/racun-tip-info-dialog/tip-racun-info-dialog.component';
import { KreditInfoDialogComponent } from './components/dialogs/kredit-info-dialog/kredit-info-dialog.component';

const Routes = [
  {path: 'tip-racuna', component: TipRacunaComponent},
  {path: 'racun', component: RacunComponent},
  {path: 'kredit', component: KreditComponent},
  {path: 'klijent', component: KlijentComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'author', component: AuthorComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AuthorComponent,
    TipRacunaComponent,
    TipRacunaDialogComponent,
    RacunComponent,
    KreditComponent,
    KlijentComponent,
    RacunDialogComponent,
    KreditDialogComponent,
    KlijentDialogComponent,
    RacunInfoDialogComponent,
    TipRacunInfoDialogComponent,
    KreditInfoDialogComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatTableModule,
    MatToolbarModule,
    MatSelectModule,
    MatOptionModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSortModule,
    MatPaginatorModule,
    RouterModule.forRoot(Routes)
  ],
  entryComponents: [
    TipRacunaDialogComponent,
    KreditDialogComponent,
    KlijentDialogComponent,
    RacunDialogComponent,
    RacunInfoDialogComponent,
    TipRacunInfoDialogComponent,
    KreditInfoDialogComponent
  ],
  providers: [
    TipRacunaService,
    KreditService,
    KlijentService,
    RacunService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
