import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexMaestroComponent } from './index-maestro.component';

describe('IndexMaestroComponent', () => {
  let component: IndexMaestroComponent;
  let fixture: ComponentFixture<IndexMaestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexMaestroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
