import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNormalUserComponent } from './register-normal-user.component';

describe('RegisterNormalUserComponent', () => {
  let component: RegisterNormalUserComponent;
  let fixture: ComponentFixture<RegisterNormalUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterNormalUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNormalUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
