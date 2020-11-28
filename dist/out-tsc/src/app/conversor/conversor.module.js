import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ConversorComponent } from './components';
import { MoedaService, ConversorService } from './services';
import { NumeroDirective } from './directives';
import { ModalCotacaoComponent } from './utils';
let ConversorModule = /** @class */ (() => {
    let ConversorModule = class ConversorModule {
    };
    ConversorModule = __decorate([
        NgModule({
            declarations: [
                ConversorComponent,
                NumeroDirective,
                ModalCotacaoComponent
            ],
            imports: [
                CommonModule,
                HttpClientModule,
                FormsModule
            ],
            exports: [
                ConversorComponent
            ],
            providers: [
                MoedaService,
                ConversorService
            ]
        })
    ], ConversorModule);
    return ConversorModule;
})();
export { ConversorModule };
//# sourceMappingURL=conversor.module.js.map