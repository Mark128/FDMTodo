import { TestBed, inject } from '@angular/core/testing';

import { TodoDetailResolverService } from './todo-detail-resolver.service';

describe('TodoDetailResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDetailResolverService]
    });
  });

  it('should be created', inject([TodoDetailResolverService], (service: TodoDetailResolverService) => {
    expect(service).toBeTruthy();
  }));
});
