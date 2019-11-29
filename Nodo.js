class Nodo {
    constructor(v) {
        this._valor = v;
        this._sig = null;
        this._ant = null;
        this._izq = null;
        this._der = null;
    }
    get valor() {
        return this._valor;
    }
    get sig() {
        return this._sig;
    }
    get ant() {
        return this._ant;
    }
    set sig(n) {
        this._sig = n;
    }
    set ant(n) {
        this._ant = n;
    }
}