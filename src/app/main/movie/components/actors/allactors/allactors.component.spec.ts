import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllactorsComponent } from './allactors.component';

describe('AllactorsComponent', () => {
  let component: AllactorsComponent;
  let fixture: ComponentFixture<AllactorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllactorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
