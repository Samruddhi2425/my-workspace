import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdowninputComponent } from './dropdowninput.component';

describe('DropdowninputComponent', () => {
  let component: DropdowninputComponent;
  let fixture: ComponentFixture<DropdowninputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdowninputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdowninputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
