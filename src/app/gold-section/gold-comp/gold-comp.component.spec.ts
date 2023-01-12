import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldCompComponent } from './gold-comp.component';

describe('GoldCompComponent', () => {
  let component: GoldCompComponent;
  let fixture: ComponentFixture<GoldCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
