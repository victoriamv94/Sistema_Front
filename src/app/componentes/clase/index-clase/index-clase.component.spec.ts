import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexClaseComponent } from './index-clase.component';

describe('IndexClaseComponent', () => {
  let component: IndexClaseComponent;
  let fixture: ComponentFixture<IndexClaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexClaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
