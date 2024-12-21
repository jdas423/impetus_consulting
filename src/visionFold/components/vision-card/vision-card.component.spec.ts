import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionCardComponent } from './vision-card.component';

describe('VisionCardComponent', () => {
  let component: VisionCardComponent;
  let fixture: ComponentFixture<VisionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
