import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipRacunInfoDialogComponent } from './tip-racun-info-dialog.component';

describe('TipRacunInfoDialogComponent', () => {
  let component: TipRacunInfoDialogComponent;
  let fixture: ComponentFixture<TipRacunInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipRacunInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipRacunInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
