import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectordetailsComponent } from './directordetails.component';

describe('DirectordetailsComponent', () => {
  let component: DirectordetailsComponent;
  let fixture: ComponentFixture<DirectordetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectordetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
