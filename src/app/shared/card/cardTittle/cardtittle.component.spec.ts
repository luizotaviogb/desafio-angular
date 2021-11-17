import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardtittleComponent } from './cardtittle.component';

describe('CardtittleComponent', () => {
  let component: CardtittleComponent;
  let fixture: ComponentFixture<CardtittleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardtittleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardtittleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
