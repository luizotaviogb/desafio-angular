import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountFoundComponent } from './account-found.component';

describe('AccountFoundComponent', () => {
  let component: AccountFoundComponent;
  let fixture: ComponentFixture<AccountFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
