﻿/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.0.1.0 (NJsonSchema v10.0.19.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

import * as moment from 'moment';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable()
export class CountryServiceProxy {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @param nameFilter (optional) 
     * @param skipCount (optional) 
     * @param maxResult (optional) 
     * @param orderByField (optional) 
     * @return Success
     */
    getAll(nameFilter: string | null | undefined, skipCount: number | null | undefined, maxResult: number | null | undefined, orderByField: string | null | undefined): Observable<GetAllPaisResponse[]> {
        let url_ = this.baseUrl + "/Country/GetAll?";
        if (nameFilter !== undefined)
            url_ += "NameFilter=" + encodeURIComponent("" + nameFilter) + "&"; 
        if (skipCount !== undefined)
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&"; 
        if (maxResult !== undefined)
            url_ += "MaxResult=" + encodeURIComponent("" + maxResult) + "&"; 
        if (orderByField !== undefined)
            url_ += "OrderByField=" + encodeURIComponent("" + orderByField) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetAll(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetAll(<any>response_);
                } catch (e) {
                    return <Observable<GetAllPaisResponse[]>><any>_observableThrow(e);
                }
            } else
                return <Observable<GetAllPaisResponse[]>><any>_observableThrow(response_);
        }));
    }

    protected processGetAll(response: HttpResponseBase): Observable<GetAllPaisResponse[]> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(GetAllPaisResponse.fromJS(item));
            }
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<GetAllPaisResponse[]>(<any>null);
    }

    /**
     * @param countryName (optional) 
     * @param countryIso2 (optional) 
     * @return Success
     */
    get(countryName: string | null | undefined, countryIso2: string | null | undefined): Observable<PaisView> {
        let url_ = this.baseUrl + "/Country/Get?";
        if (countryName !== undefined)
            url_ += "CountryName=" + encodeURIComponent("" + countryName) + "&"; 
        if (countryIso2 !== undefined)
            url_ += "CountryIso2=" + encodeURIComponent("" + countryIso2) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGet(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGet(<any>response_);
                } catch (e) {
                    return <Observable<PaisView>><any>_observableThrow(e);
                }
            } else
                return <Observable<PaisView>><any>_observableThrow(response_);
        }));
    }

    protected processGet(response: HttpResponseBase): Observable<PaisView> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = PaisView.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<PaisView>(<any>null);
    }

    /**
     * @return Success
     */
    getCountriesList(): Observable<CountryBaseResponse[]> {
        let url_ = this.baseUrl + "/Country/GetCountriesList";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetCountriesList(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetCountriesList(<any>response_);
                } catch (e) {
                    return <Observable<CountryBaseResponse[]>><any>_observableThrow(e);
                }
            } else
                return <Observable<CountryBaseResponse[]>><any>_observableThrow(response_);
        }));
    }

    protected processGetCountriesList(response: HttpResponseBase): Observable<CountryBaseResponse[]> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(CountryBaseResponse.fromJS(item));
            }
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<CountryBaseResponse[]>(<any>null);
    }
}

@Injectable()
export class ServiceProxy {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @return Success
     */
    seed(): Observable<void> {
        let url_ = this.baseUrl + "/Seed";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processSeed(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processSeed(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>_observableThrow(e);
                }
            } else
                return <Observable<void>><any>_observableThrow(response_);
        }));
    }

    protected processSeed(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return _observableOf<void>(<any>null);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<void>(<any>null);
    }
}

export class GetAllPaisResponse implements IGetAllPaisResponse {
    nome!: string | undefined;
    nomeCompleto!: string | undefined;
    siglaPais2Digitos!: string | undefined;
    siglaPais3Digitos!: string | undefined;
    imagemBandeira!: string | undefined;

    constructor(data?: IGetAllPaisResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.nome = data["nome"];
            this.nomeCompleto = data["nomeCompleto"];
            this.siglaPais2Digitos = data["siglaPais2Digitos"];
            this.siglaPais3Digitos = data["siglaPais3Digitos"];
            this.imagemBandeira = data["imagemBandeira"];
        }
    }

    static fromJS(data: any): GetAllPaisResponse {
        data = typeof data === 'object' ? data : {};
        let result = new GetAllPaisResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["nome"] = this.nome;
        data["nomeCompleto"] = this.nomeCompleto;
        data["siglaPais2Digitos"] = this.siglaPais2Digitos;
        data["siglaPais3Digitos"] = this.siglaPais3Digitos;
        data["imagemBandeira"] = this.imagemBandeira;
        return data; 
    }
}

export interface IGetAllPaisResponse {
    nome: string | undefined;
    nomeCompleto: string | undefined;
    siglaPais2Digitos: string | undefined;
    siglaPais3Digitos: string | undefined;
    imagemBandeira: string | undefined;
}

export class PaisView implements IPaisView {
    nome!: string | undefined;
    nomeCompleto!: string | undefined;
    nomeNormalizado!: string | undefined;
    siglaPais2Digitos!: string | undefined;
    siglaPais3Digitos!: string | undefined;
    quantidadePopulacao!: number | undefined;
    imagemBandeira!: string | undefined;
    nomenclaturaNativos!: string | undefined;
    localizacao!: LocalizacaoPais | undefined;
    moeda!: Moeda[] | undefined;
    linguagens!: Linguagem[] | undefined;
    telefone!: Telefone | undefined;
    vacina!: Vacina[] | undefined;
    eletricidade!: Eletricidade | undefined;
    creationTime!: moment.Moment | undefined;
    lastTimeUpdated!: moment.Moment | undefined;

    constructor(data?: IPaisView) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.nome = data["nome"];
            this.nomeCompleto = data["nomeCompleto"];
            this.nomeNormalizado = data["nomeNormalizado"];
            this.siglaPais2Digitos = data["siglaPais2Digitos"];
            this.siglaPais3Digitos = data["siglaPais3Digitos"];
            this.quantidadePopulacao = data["quantidadePopulacao"];
            this.imagemBandeira = data["imagemBandeira"];
            this.nomenclaturaNativos = data["nomenclaturaNativos"];
            this.localizacao = data["localizacao"] ? LocalizacaoPais.fromJS(data["localizacao"]) : <any>undefined;
            if (Array.isArray(data["moeda"])) {
                this.moeda = [] as any;
                for (let item of data["moeda"])
                    this.moeda!.push(Moeda.fromJS(item));
            }
            if (Array.isArray(data["linguagens"])) {
                this.linguagens = [] as any;
                for (let item of data["linguagens"])
                    this.linguagens!.push(Linguagem.fromJS(item));
            }
            this.telefone = data["telefone"] ? Telefone.fromJS(data["telefone"]) : <any>undefined;
            if (Array.isArray(data["vacina"])) {
                this.vacina = [] as any;
                for (let item of data["vacina"])
                    this.vacina!.push(Vacina.fromJS(item));
            }
            this.eletricidade = data["eletricidade"] ? Eletricidade.fromJS(data["eletricidade"]) : <any>undefined;
            this.creationTime = data["creationTime"] ? moment(data["creationTime"].toString()) : <any>undefined;
            this.lastTimeUpdated = data["lastTimeUpdated"] ? moment(data["lastTimeUpdated"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): PaisView {
        data = typeof data === 'object' ? data : {};
        let result = new PaisView();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["nome"] = this.nome;
        data["nomeCompleto"] = this.nomeCompleto;
        data["nomeNormalizado"] = this.nomeNormalizado;
        data["siglaPais2Digitos"] = this.siglaPais2Digitos;
        data["siglaPais3Digitos"] = this.siglaPais3Digitos;
        data["quantidadePopulacao"] = this.quantidadePopulacao;
        data["imagemBandeira"] = this.imagemBandeira;
        data["nomenclaturaNativos"] = this.nomenclaturaNativos;
        data["localizacao"] = this.localizacao ? this.localizacao.toJSON() : <any>undefined;
        if (Array.isArray(this.moeda)) {
            data["moeda"] = [];
            for (let item of this.moeda)
                data["moeda"].push(item.toJSON());
        }
        if (Array.isArray(this.linguagens)) {
            data["linguagens"] = [];
            for (let item of this.linguagens)
                data["linguagens"].push(item.toJSON());
        }
        data["telefone"] = this.telefone ? this.telefone.toJSON() : <any>undefined;
        if (Array.isArray(this.vacina)) {
            data["vacina"] = [];
            for (let item of this.vacina)
                data["vacina"].push(item.toJSON());
        }
        data["eletricidade"] = this.eletricidade ? this.eletricidade.toJSON() : <any>undefined;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : <any>undefined;
        data["lastTimeUpdated"] = this.lastTimeUpdated ? this.lastTimeUpdated.toISOString() : <any>undefined;
        return data; 
    }
}

export interface IPaisView {
    nome: string | undefined;
    nomeCompleto: string | undefined;
    nomeNormalizado: string | undefined;
    siglaPais2Digitos: string | undefined;
    siglaPais3Digitos: string | undefined;
    quantidadePopulacao: number | undefined;
    imagemBandeira: string | undefined;
    nomenclaturaNativos: string | undefined;
    localizacao: LocalizacaoPais | undefined;
    moeda: Moeda[] | undefined;
    linguagens: Linguagem[] | undefined;
    telefone: Telefone | undefined;
    vacina: Vacina[] | undefined;
    eletricidade: Eletricidade | undefined;
    creationTime: moment.Moment | undefined;
    lastTimeUpdated: moment.Moment | undefined;
}

export class LocalizacaoPais implements ILocalizacaoPais {
    continente!: string | undefined;
    regiaoContinental!: string | undefined;
    capital!: string | undefined;
    latitude!: string | undefined;
    longitude!: string | undefined;
    zoom!: string | undefined;
    fusoHorario!: string | undefined;
    paisesVizinhos!: LocalizacaoPais[] | undefined;
    observacao!: string | undefined;
    id!: string | undefined;

    constructor(data?: ILocalizacaoPais) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.continente = data["continente"];
            this.regiaoContinental = data["regiaoContinental"];
            this.capital = data["capital"];
            this.latitude = data["latitude"];
            this.longitude = data["longitude"];
            this.zoom = data["zoom"];
            this.fusoHorario = data["fusoHorario"];
            if (Array.isArray(data["paisesVizinhos"])) {
                this.paisesVizinhos = [] as any;
                for (let item of data["paisesVizinhos"])
                    this.paisesVizinhos!.push(LocalizacaoPais.fromJS(item));
            }
            this.observacao = data["observacao"];
            this.id = data["id"];
        }
    }

    static fromJS(data: any): LocalizacaoPais {
        data = typeof data === 'object' ? data : {};
        let result = new LocalizacaoPais();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["continente"] = this.continente;
        data["regiaoContinental"] = this.regiaoContinental;
        data["capital"] = this.capital;
        data["latitude"] = this.latitude;
        data["longitude"] = this.longitude;
        data["zoom"] = this.zoom;
        data["fusoHorario"] = this.fusoHorario;
        if (Array.isArray(this.paisesVizinhos)) {
            data["paisesVizinhos"] = [];
            for (let item of this.paisesVizinhos)
                data["paisesVizinhos"].push(item.toJSON());
        }
        data["observacao"] = this.observacao;
        data["id"] = this.id;
        return data; 
    }
}

export interface ILocalizacaoPais {
    continente: string | undefined;
    regiaoContinental: string | undefined;
    capital: string | undefined;
    latitude: string | undefined;
    longitude: string | undefined;
    zoom: string | undefined;
    fusoHorario: string | undefined;
    paisesVizinhos: LocalizacaoPais[] | undefined;
    observacao: string | undefined;
    id: string | undefined;
}

export class Moeda implements IMoeda {
    nome!: string | undefined;
    codigo!: string | undefined;
    simbolo!: string | undefined;
    principal!: boolean | undefined;
    id!: string | undefined;

    constructor(data?: IMoeda) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.nome = data["nome"];
            this.codigo = data["codigo"];
            this.simbolo = data["simbolo"];
            this.principal = data["principal"];
            this.id = data["id"];
        }
    }

    static fromJS(data: any): Moeda {
        data = typeof data === 'object' ? data : {};
        let result = new Moeda();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["nome"] = this.nome;
        data["codigo"] = this.codigo;
        data["simbolo"] = this.simbolo;
        data["principal"] = this.principal;
        data["id"] = this.id;
        return data; 
    }
}

export interface IMoeda {
    nome: string | undefined;
    codigo: string | undefined;
    simbolo: string | undefined;
    principal: boolean | undefined;
    id: string | undefined;
}

export class Linguagem implements ILinguagem {
    nome!: string | undefined;
    porcentagem!: number | undefined;
    oficial!: boolean | undefined;
    id!: string | undefined;

    constructor(data?: ILinguagem) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.nome = data["nome"];
            this.porcentagem = data["porcentagem"];
            this.oficial = data["oficial"];
            this.id = data["id"];
        }
    }

    static fromJS(data: any): Linguagem {
        data = typeof data === 'object' ? data : {};
        let result = new Linguagem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["nome"] = this.nome;
        data["porcentagem"] = this.porcentagem;
        data["oficial"] = this.oficial;
        data["id"] = this.id;
        return data; 
    }
}

export interface ILinguagem {
    nome: string | undefined;
    porcentagem: number | undefined;
    oficial: boolean | undefined;
    id: string | undefined;
}

export class Telefone implements ITelefone {
    codigoTelefone!: string | undefined;
    telefoneBombeiros!: string | undefined;
    telefonePolicia!: string | undefined;
    telefoneAmbulancia!: string | undefined;
    id!: string | undefined;

    constructor(data?: ITelefone) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.codigoTelefone = data["codigoTelefone"];
            this.telefoneBombeiros = data["telefoneBombeiros"];
            this.telefonePolicia = data["telefonePolicia"];
            this.telefoneAmbulancia = data["telefoneAmbulancia"];
            this.id = data["id"];
        }
    }

    static fromJS(data: any): Telefone {
        data = typeof data === 'object' ? data : {};
        let result = new Telefone();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["codigoTelefone"] = this.codigoTelefone;
        data["telefoneBombeiros"] = this.telefoneBombeiros;
        data["telefonePolicia"] = this.telefonePolicia;
        data["telefoneAmbulancia"] = this.telefoneAmbulancia;
        data["id"] = this.id;
        return data; 
    }
}

export interface ITelefone {
    codigoTelefone: string | undefined;
    telefoneBombeiros: string | undefined;
    telefonePolicia: string | undefined;
    telefoneAmbulancia: string | undefined;
    id: string | undefined;
}

export class Vacina implements IVacina {
    nome!: string | undefined;
    riscoVacina!: VacinaRiscoVacina | undefined;
    observacoes!: string | undefined;
    id!: string | undefined;

    constructor(data?: IVacina) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.nome = data["nome"];
            this.riscoVacina = data["riscoVacina"];
            this.observacoes = data["observacoes"];
            this.id = data["id"];
        }
    }

    static fromJS(data: any): Vacina {
        data = typeof data === 'object' ? data : {};
        let result = new Vacina();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["nome"] = this.nome;
        data["riscoVacina"] = this.riscoVacina;
        data["observacoes"] = this.observacoes;
        data["id"] = this.id;
        return data; 
    }
}

export interface IVacina {
    nome: string | undefined;
    riscoVacina: VacinaRiscoVacina | undefined;
    observacoes: string | undefined;
    id: string | undefined;
}

export class Eletricidade implements IEletricidade {
    voltagens!: EletricidadeVoltagem | undefined;
    frequencias!: EletricidadeFrequencia | undefined;
    plugsTomadas!: PlugTomada[] | undefined;
    id!: string | undefined;

    constructor(data?: IEletricidade) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.voltagens = data["voltagens"] ? EletricidadeVoltagem.fromJS(data["voltagens"]) : <any>undefined;
            this.frequencias = data["frequencias"] ? EletricidadeFrequencia.fromJS(data["frequencias"]) : <any>undefined;
            if (Array.isArray(data["plugsTomadas"])) {
                this.plugsTomadas = [] as any;
                for (let item of data["plugsTomadas"])
                    this.plugsTomadas!.push(PlugTomada.fromJS(item));
            }
            this.id = data["id"];
        }
    }

    static fromJS(data: any): Eletricidade {
        data = typeof data === 'object' ? data : {};
        let result = new Eletricidade();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["voltagens"] = this.voltagens ? this.voltagens.toJSON() : <any>undefined;
        data["frequencias"] = this.frequencias ? this.frequencias.toJSON() : <any>undefined;
        if (Array.isArray(this.plugsTomadas)) {
            data["plugsTomadas"] = [];
            for (let item of this.plugsTomadas)
                data["plugsTomadas"].push(item.toJSON());
        }
        data["id"] = this.id;
        return data; 
    }
}

export interface IEletricidade {
    voltagens: EletricidadeVoltagem | undefined;
    frequencias: EletricidadeFrequencia | undefined;
    plugsTomadas: PlugTomada[] | undefined;
    id: string | undefined;
}

export class EletricidadeVoltagem implements IEletricidadeVoltagem {
    numeroVoltagem!: string | undefined;
    id!: string | undefined;

    constructor(data?: IEletricidadeVoltagem) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.numeroVoltagem = data["numeroVoltagem"];
            this.id = data["id"];
        }
    }

    static fromJS(data: any): EletricidadeVoltagem {
        data = typeof data === 'object' ? data : {};
        let result = new EletricidadeVoltagem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["numeroVoltagem"] = this.numeroVoltagem;
        data["id"] = this.id;
        return data; 
    }
}

export interface IEletricidadeVoltagem {
    numeroVoltagem: string | undefined;
    id: string | undefined;
}

export class EletricidadeFrequencia implements IEletricidadeFrequencia {
    frequenciaValor!: string | undefined;
    id!: string | undefined;

    constructor(data?: IEletricidadeFrequencia) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.frequenciaValor = data["frequenciaValor"];
            this.id = data["id"];
        }
    }

    static fromJS(data: any): EletricidadeFrequencia {
        data = typeof data === 'object' ? data : {};
        let result = new EletricidadeFrequencia();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["frequenciaValor"] = this.frequenciaValor;
        data["id"] = this.id;
        return data; 
    }
}

export interface IEletricidadeFrequencia {
    frequenciaValor: string | undefined;
    id: string | undefined;
}

export class PlugTomada implements IPlugTomada {
    tipoTomada!: string | undefined;
    imagemTomada!: string | undefined;
    id!: string | undefined;

    constructor(data?: IPlugTomada) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.tipoTomada = data["tipoTomada"];
            this.imagemTomada = data["imagemTomada"];
            this.id = data["id"];
        }
    }

    static fromJS(data: any): PlugTomada {
        data = typeof data === 'object' ? data : {};
        let result = new PlugTomada();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["tipoTomada"] = this.tipoTomada;
        data["imagemTomada"] = this.imagemTomada;
        data["id"] = this.id;
        return data; 
    }
}

export interface IPlugTomada {
    tipoTomada: string | undefined;
    imagemTomada: string | undefined;
    id: string | undefined;
}

export class CountryBaseResponse implements ICountryBaseResponse {
    countryName!: string | undefined;
    countryIso2!: string | undefined;
    imagemBandeira!: string | undefined;
    id!: string | undefined;

    constructor(data?: ICountryBaseResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.countryName = data["countryName"];
            this.countryIso2 = data["countryIso2"];
            this.imagemBandeira = data["imagemBandeira"];
            this.id = data["id"];
        }
    }

    static fromJS(data: any): CountryBaseResponse {
        data = typeof data === 'object' ? data : {};
        let result = new CountryBaseResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["countryName"] = this.countryName;
        data["countryIso2"] = this.countryIso2;
        data["imagemBandeira"] = this.imagemBandeira;
        data["id"] = this.id;
        return data; 
    }
}

export interface ICountryBaseResponse {
    countryName: string | undefined;
    countryIso2: string | undefined;
    imagemBandeira: string | undefined;
    id: string | undefined;
}

export enum VacinaRiscoVacina {
    _0 = 0, 
    _1 = 1, 
    _2 = 2, 
    _3 = 3, 
    _4 = 4, 
    _5 = 5, 
}

export class ApiException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if(result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new ApiException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader(); 
            reader.onload = event => { 
                observer.next((<any>event.target).result);
                observer.complete();
            };
            reader.readAsText(blob); 
        }
    });
}