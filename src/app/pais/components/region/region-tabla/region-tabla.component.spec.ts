import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionTablaComponent } from './region-tabla.component';

describe('RegionTablaComponent', () => {
  let component: RegionTablaComponent;
  let fixture: ComponentFixture<RegionTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
