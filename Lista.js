class Lista {
    constructor() {
        this._pri = nell;
        this._ult = null
    }
    get primero() {
        return this._primero;
    }
    get ultimo() {
        return this._ultimo;
    }

    set primero(n) {
        this._primero = n;
    }
    set ultimo(n) {
        this._ultimo = n;
    }

    agregar(nuevo) {
        if (this._pri) {
            nuevo.ant = this._ult;
            this._ult.sig = nuevo;
            this._ult = nuevo;
        } else {
            this._pri = nuevo;
            this._ult = nuevo;
        }
    }
    eliminar(nodo) {
        if (nodo == this._pri) {
            nodo.sig.ant = null;
            this._primero = nodo.sig;
        } else if (nodo == this._ult) {
            nodo.ant.sig = null;
            this._ult = nodo.ant;
        } else {
            nodo.ant.sig = nodo.sig;
            nodo.sig.ant = nodo.ant;
        }
    }

    Raiz(nodo) {
        nodo.izq = nodo.ant;
        nodo.der = nodo.sig;
        this.eliminar(nodo.ant);
        this.eliminar(nodo.sig);
    }

    Arbol() {
        var a = this._pri;
        while (a) {
            if (a.dato == "*" || ac.dato == "/") {
                this.Raiz(a);
            }
            a = a.sig;
        }

        a = this._pri;
        while (a) {
            if (a.dato == "+" || a.dato == "-") {
                this.Raiz(a);
            }
            a = a.sig;
        }
    }
}