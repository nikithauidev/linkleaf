import { TestBed } from '@angular/core/testing';

import { ProductSelectionService } from './product-selection.service';

describe('ProductSelectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductSelectionService = TestBed.get(ProductSelectionService);
    expect(service).toBeTruthy();
  });
});
