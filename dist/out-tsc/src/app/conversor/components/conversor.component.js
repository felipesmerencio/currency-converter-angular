import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Conversao } from '../models';
let ConversorComponent = /** @class */ (() => {
    let ConversorComponent = class ConversorComponent {
        constructor(moedaService, conversorService) {
            this.moedaService = moedaService;
            this.conversorService = conversorService;
        }
        ngOnInit() {
            this.moedas = this.moedaService.listarTodas();
            this.init();
        }
        /**
        * Efetua a chamada para a conversão dos valores.
        *
        * @return void
        */
        init() {
            this.conversao = new Conversao('EUR', 'BRL', null);
            this.possuiErro = false;
        }
        /**
        * Efetua a chamada para a conversão dos valores
        *
        * @return void
        */
        converter() {
            if (this.conversaoForm.form.valid) {
                this.conversorService
                    .converter(this.conversao)
                    .subscribe(response => this.conversaoResponse = response, error => this.possuiErro = true);
            }
        }
    };
    __decorate([
        ViewChild("conversaoForm", { static: true })
    ], ConversorComponent.prototype, "conversaoForm", void 0);
    ConversorComponent = __decorate([
        Component({
            selector: 'app-conversor',
            templateUrl: './conversor.component.html',
            styleUrls: ['./conversor.component.css']
        })
    ], ConversorComponent);
    return ConversorComponent;
})();
export { ConversorComponent };
//# sourceMappingURL=conversor.component.js.map