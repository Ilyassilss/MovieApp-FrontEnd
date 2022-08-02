import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldirectorsComponent } from './alldirectors.component';

describe('AlldirectorsComponent', () => {
  let component: AlldirectorsComponent;
  let fixture: ComponentFixture<AlldirectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlldirectorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlldirectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
