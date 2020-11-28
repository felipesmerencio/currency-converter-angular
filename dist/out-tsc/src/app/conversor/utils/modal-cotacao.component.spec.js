import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { ModalCotacaoComponent } from './modal-cotacao.component';
describe('ModalCotacaoComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [ModalCotacaoComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ModalCotacaoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=modal-cotacao.component.spec.js.map