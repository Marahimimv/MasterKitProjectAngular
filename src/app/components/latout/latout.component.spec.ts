import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatoutComponent } from './latout.component';

describe('LatoutComponent', () => {
  let component: LatoutComponent;
  let fixture: ComponentFixture<LatoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LatoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
