import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatainteractComponent } from './datainteract.component';

describe('DatainteractComponent', () => {
  let component: DatainteractComponent;
  let fixture: ComponentFixture<DatainteractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatainteractComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatainteractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
