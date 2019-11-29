var o = "5/10+12*4+1";

var l = new Lista();

for (var i = 0; i < o.length; i++) {
	l.agregar(new Nodo(o.charAt(i)));
}

l.generarArbol();