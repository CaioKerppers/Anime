export class Catalogo{
    private _temporada: number;
    private _nome: string;
    private _datalancamento: Date;
    private _episodios: number;
    private _estudio: string;
    
    constructor(nome : string, temporada: number, datalancamento: Date, episodios: number, estudio: string){
        this._datalancamento = datalancamento;
        this._episodios = episodios;
        this._nome = nome;
        this._temporada = temporada;
        this._estudio = estudio;   
    }
    public get temporada(): number {
        return this._temporada;
    }
    public set temporada(value: number) {
        this._temporada = value;
    }
    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }
    public get datalancamento(): Date {
        return this._datalancamento;
    }
    public set datalancamento(value: Date) {
        this._datalancamento = value;
    }
    public get episodios(): number {
        return this._episodios;
    }
    public set episodios(value: number) {
        this._episodios = value;
    }
    public get estudio(): string {
        return this._estudio;
    }
    public set estudio(value: string) {
        this._estudio = value;
    }
}

