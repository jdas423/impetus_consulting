import { TestBed } from '@angular/core/testing';

import { TestimonialContentService } from './testimonial-content.service';

describe('TestimonialContentService', () => {
  let service: TestimonialContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestimonialContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
