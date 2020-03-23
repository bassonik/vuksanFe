import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KreditInfoDialogComponent } from './kredit-info-dialog.component';

describe('KreditInfoDialogComponent', () => {
  let component: KreditInfoDialogComponent;
  let fixture: ComponentFixture<KreditInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KreditInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KreditInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
