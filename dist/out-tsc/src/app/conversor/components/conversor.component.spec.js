import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { ConversorComponent } from './conversor.component';
import { MoedaService, ConversorService } from '../services';
describe('ConversorComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [
                ConversorComponent
            ],
            providers: [
                MoedaService,
                ConversorService
            ]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ConversorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=conversor.component.spec.js.map