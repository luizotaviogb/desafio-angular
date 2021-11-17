import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardbodysituationComponent } from './cardbodysituation.component';

describe('CardbodysituationComponent', () => {
  let component: CardbodysituationComponent;
  let fixture: ComponentFixture<CardbodysituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardbodysituationComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardbodysituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
