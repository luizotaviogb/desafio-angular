import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardbodyaccountComponent } from './cardbodyaccount.component';

describe('CardbodyaccountComponent', () => {
  let component: CardbodyaccountComponent;
  let fixture: ComponentFixture<CardbodyaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardbodyaccountComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardbodyaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
