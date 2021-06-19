import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelularUpdateComponent } from './celular-update.component';

describe('CelularUpdateComponent', () => {
  let component: CelularUpdateComponent;
  let fixture: ComponentFixture<CelularUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelularUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CelularUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
