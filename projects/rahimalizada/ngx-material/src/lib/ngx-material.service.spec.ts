import { TestBed } from '@angular/core/testing';

import { NgxMaterialService } from './ngx-material.service';

describe('NgxMaterialService', () => {
  let service: NgxMaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
