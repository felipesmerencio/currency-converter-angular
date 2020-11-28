import { TestBed } from '@angular/core/testing';
import { MoedaService } from './moeda.service';
describe('MoedaService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MoedaService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=moeda.service.spec.js.map