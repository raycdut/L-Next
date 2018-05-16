import { TestBed, inject } from '@angular/core/testing';

import { ControlSetServiceService } from './control-set-service.service';

describe('ControlSetServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ControlSetServiceService]
    });
  });

  it('should be created', inject([ControlSetServiceService], (service: ControlSetServiceService) => {
    expect(service).toBeTruthy();
  }));
});
