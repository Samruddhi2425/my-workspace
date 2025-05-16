import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAccessServiceComponent } from './data-access-service.component';

describe('DataAccessServiceComponent', () => {
  let component: DataAccessServiceComponent;
  let fixture: ComponentFixture<DataAccessServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataAccessServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataAccessServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
