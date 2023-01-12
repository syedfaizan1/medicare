import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkToDoctorFormComponent } from './talk-to-doctor-form.component';

describe('TalkToDoctorFormComponent', () => {
  let component: TalkToDoctorFormComponent;
  let fixture: ComponentFixture<TalkToDoctorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalkToDoctorFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalkToDoctorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
