import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ConversorService = /** @class */ (() => {
    let ConversorService = class ConversorService {
        constructor(http) {
            this.http = http;
            this.BASE_URL = "http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3";
        }
        /**
        * Realiza a chamada para a API de conversão de moedas.
        *
        * @param Conversao conversao
        * @return Observable<Conversaoresponse>
        */
        converter(conversao) {
            let params = `&base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;
            return this.http
                .get(this.BASE_URL + params);
            // .map(response => response.json() as ConversaoResponse)
            // .catch(error => Observable.throw(error));
        }
        /**
        * Retorna a cotação para dado uma response
        *
        * @param ConversaoResponse conversaoReponse
        * @param Conversao conversao
        * @return number
        */
        cotacaoPara(conversaoResponse, conversao) {
            if (conversaoResponse === undefined) {
                return 0;
            }
            return conversaoResponse.rates[conversao.moedaPara];
        }
        /**
        * Retorna a cotação de dado uma response
        *
        * @param ConversaoResponse conversaoResponse
        * @param Conversao conversao
        * @return string
        */
        cotacaoDe(conversaoResponse, conversao) {
            if (conversaoResponse === undefined) {
                return '0';
            }
            return (1 / conversaoResponse.rates[conversao.moedaPara])
                .toFixed(4);
        }
        /**
        * Retorna a data da cotação dado uma response.
        *
        * @param ConversaoResponse conversaoResponse
        * @return string
        */
        dataCotacao(conversaoResponse) {
            if (conversaoResponse === undefined) {
                return '';
            }
            return conversaoResponse.date;
        }
    };
    ConversorService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], ConversorService);
    return ConversorService;
})();
export { ConversorService };
//# sourceMappingURL=conversor.service.js.map