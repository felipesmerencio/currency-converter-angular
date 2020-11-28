import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Conversao } from '../models';
let ModalCotacaoComponent = /** @class */ (() => {
    let ModalCotacaoComponent = class ModalCotacaoComponent {
        constructor(conversorService) {
            this.conversorService = conversorService;
            this.conversao = new Conversao();
            this.onCofirm = new EventEmitter();
        }
        ngOnInit() {
        }
        novaConsulta() {
            this.onCofirm.emit();
        }
        get valorConvertido() {
            if (this.conversaoResponse === undefined) {
                return;
            }
            return (this.conversao.valor *
                this.conversaoResponse.rates[this.conversao.moedaPara])
                .toFixed(2);
        }
        get cotacaoPara() {
            return this.conversorService.cotacaoPara(this.conversaoResponse, this.conversao);
        }
        get cotacaoDe() {
            return this.conversorService.cotacaoDe(this.conversaoResponse, this.conversao);
        }
        get dataCotacao() {
            return this.conversorService.dataCotacao(this.conversaoResponse);
        }
    };
    __decorate([
        Input()
    ], ModalCotacaoComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], ModalCotacaoComponent.prototype, "conversaoResponse", void 0);
    __decorate([
        Input()
    ], ModalCotacaoComponent.prototype, "conversao", void 0);
    __decorate([
        Output()
    ], ModalCotacaoComponent.prototype, "onCofirm", void 0);
    ModalCotacaoComponent = __decorate([
        Component({
            selector: 'modal-cotacao',
            templateUrl: './modal-cotacao.component.html',
            styleUrls: ['./modal-cotacao.component.css']
        })
    ], ModalCotacaoComponent);
    return ModalCotacaoComponent;
})();
export { ModalCotacaoComponent };
//# sourceMappingURL=modal-cotacao.component.js.map