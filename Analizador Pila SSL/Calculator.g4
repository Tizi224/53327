grammar Calculator;

//Gramatica

programa: 'pila' PALABRA '{' comando '}';

comando: (operacion)*;

operacion:
	push	# cmdPush
	| pop	# cmdPop
	| peek	# cmdPeek
	| crear	# cmdCrear;

crear: 'crear' LPAREN lista RPAREN '!';

push: 'empujar' LPAREN valor RPAREN '!';

pop: 'sacar' LPAREN RPAREN '!';

peek: 'mirar' LPAREN RPAREN '!';

valor: INT | TEXTO;

lista: '[' (valor (',' valor)*)? ']';

//Lexemas

TEXTO: '"' .*? '"';
PALABRA: [a-zA-Z]+;
INT: [0-9]+;
LPAREN: '(';
RPAREN: ')';
WS: [ \t\r\n]+ -> skip;