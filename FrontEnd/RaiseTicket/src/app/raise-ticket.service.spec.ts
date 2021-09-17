import { TestBed } from '@angular/core/testing';

import { RaiseTicketService } from './raise-ticket.service';

describe('RaiseTicketService', () => {
  let service: RaiseTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaiseTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
