import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelularesAddComponent } from './celulares-add.component';

describe('CelularesAddComponent', () => {
  let component: CelularesAddComponent;
  let fixture: ComponentFixture<CelularesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelularesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CelularesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
