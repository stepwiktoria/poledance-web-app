import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferkidsComponent } from './offerkids.component';

describe('OfferkidsComponent', () => {
  let component: OfferkidsComponent;
  let fixture: ComponentFixture<OfferkidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferkidsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferkidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
