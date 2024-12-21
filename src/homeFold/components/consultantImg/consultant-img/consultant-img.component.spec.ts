import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantImgComponent } from './consultant-img.component';

describe('ConsultantImgComponent', () => {
  let component: ConsultantImgComponent;
  let fixture: ComponentFixture<ConsultantImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultantImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
