import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacunInfoDialogComponent } from './racun-info-dialog.component';

describe('RacunInfoDialogComponent', () => {
  let component: RacunInfoDialogComponent;
  let fixture: ComponentFixture<RacunInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacunInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacunInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
