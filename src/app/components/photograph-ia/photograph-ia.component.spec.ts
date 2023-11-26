import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographIAComponent } from './photograph-ia.component';

describe('PhotographIAComponent', () => {
  let component: PhotographIAComponent;
  let fixture: ComponentFixture<PhotographIAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotographIAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotographIAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
