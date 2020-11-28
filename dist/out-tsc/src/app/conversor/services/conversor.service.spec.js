import { TestBed } from '@angular/core/testing';
import { ConversorService } from './conversor.service';
describe('ConversorService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ConversorService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=conversor.service.spec.js.map