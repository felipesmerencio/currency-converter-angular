import { __decorate } from "tslib";
import { Directive, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
let NumeroDirective = /** @class */ (() => {
    var NumeroDirective_1;
    let NumeroDirective = NumeroDirective_1 = class NumeroDirective {
        constructor(el) {
            this.el = el;
        }
        /**
        * Implementa evento de keyup para o elemento da diretiva.
        *
        * @param any $event
        */
        onKeyUp($event) {
            let valor = $event.target.value;
            let posDecimais = valor.indexOf('.');
            valor = valor.replace(/[\D]/g, '');
            if (posDecimais > 0) {
                valor = valor.substr(0, posDecimais) + '.' +
                    valor.substr(posDecimais);
            }
            $event.target.value = valor;
            this.OnChange(valor);
        }
        /**
        * Registra função a ser chamada para atualizar
        * valor da model.
        *
        * @param any fn
        */
        registerOnChange(fn) {
            this.OnChange = fn;
        }
        /**
        * Registra função a ser chamada para atualizar
        * valor na model para evento touched.
        *
        * @param any fn
        */
        registerOnTouched(fn) {
            this.onTouched = fn;
        }
        /**
        * Obtém o valor contido na model.
        *
        * @param any value
        */
        writeValue(value) {
            this.el.nativeElement.value = value;
        }
    };
    __decorate([
        HostListener('keyup', ['$event'])
    ], NumeroDirective.prototype, "onKeyUp", null);
    NumeroDirective = NumeroDirective_1 = __decorate([
        Directive({
            selector: '[numero]',
            providers: [{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: NumeroDirective_1,
                    multi: true
                }]
        })
    ], NumeroDirective);
    return NumeroDirective;
})();
export { NumeroDirective };
//# sourceMappingURL=numero.directive.js.map