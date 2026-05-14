// Generated from e:\Coding\repo\53327\Analizador Pila SSL\Calculator.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import CalculatorListener from './CalculatorListener.js';
import CalculatorVisitor from './CalculatorVisitor.js';

const serializedATN = [4,1,17,74,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,1,0,1,0,1,0,1,1,5,1,26,8,1,10,
1,12,1,29,9,1,1,2,1,2,1,2,1,2,3,2,35,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,
1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,8,1,8,
1,8,1,8,5,8,65,8,8,10,8,12,8,68,9,8,3,8,70,8,8,1,8,1,8,1,8,0,0,9,0,2,4,6,
8,10,12,14,16,0,1,2,0,12,12,14,14,70,0,18,1,0,0,0,2,27,1,0,0,0,4,34,1,0,
0,0,6,36,1,0,0,0,8,42,1,0,0,0,10,48,1,0,0,0,12,53,1,0,0,0,14,58,1,0,0,0,
16,60,1,0,0,0,18,19,5,1,0,0,19,20,5,13,0,0,20,21,5,2,0,0,21,22,3,2,1,0,22,
23,5,3,0,0,23,1,1,0,0,0,24,26,3,4,2,0,25,24,1,0,0,0,26,29,1,0,0,0,27,25,
1,0,0,0,27,28,1,0,0,0,28,3,1,0,0,0,29,27,1,0,0,0,30,35,3,8,4,0,31,35,3,10,
5,0,32,35,3,12,6,0,33,35,3,6,3,0,34,30,1,0,0,0,34,31,1,0,0,0,34,32,1,0,0,
0,34,33,1,0,0,0,35,5,1,0,0,0,36,37,5,4,0,0,37,38,5,15,0,0,38,39,3,16,8,0,
39,40,5,16,0,0,40,41,5,5,0,0,41,7,1,0,0,0,42,43,5,6,0,0,43,44,5,15,0,0,44,
45,3,14,7,0,45,46,5,16,0,0,46,47,5,5,0,0,47,9,1,0,0,0,48,49,5,7,0,0,49,50,
5,15,0,0,50,51,5,16,0,0,51,52,5,5,0,0,52,11,1,0,0,0,53,54,5,8,0,0,54,55,
5,15,0,0,55,56,5,16,0,0,56,57,5,5,0,0,57,13,1,0,0,0,58,59,7,0,0,0,59,15,
1,0,0,0,60,69,5,9,0,0,61,66,3,14,7,0,62,63,5,10,0,0,63,65,3,14,7,0,64,62,
1,0,0,0,65,68,1,0,0,0,66,64,1,0,0,0,66,67,1,0,0,0,67,70,1,0,0,0,68,66,1,
0,0,0,69,61,1,0,0,0,69,70,1,0,0,0,70,71,1,0,0,0,71,72,5,11,0,0,72,17,1,0,
0,0,4,27,34,66,69];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CalculatorParser extends antlr4.Parser {

    static grammarFileName = "Calculator.g4";
    static literalNames = [ null, "'pila'", "'{'", "'}'", "'crear'", "'!'", 
                            "'empujar'", "'sacar'", "'mirar'", "'['", "','", 
                            "']'", null, null, null, "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, "TEXTO", "PALABRA", 
                             "INT", "LPAREN", "RPAREN", "WS" ];
    static ruleNames = [ "programa", "comando", "operacion", "crear", "push", 
                         "pop", "peek", "valor", "lista" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CalculatorParser.ruleNames;
        this.literalNames = CalculatorParser.literalNames;
        this.symbolicNames = CalculatorParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CalculatorParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.match(CalculatorParser.T__0);
	        this.state = 19;
	        this.match(CalculatorParser.PALABRA);
	        this.state = 20;
	        this.match(CalculatorParser.T__1);
	        this.state = 21;
	        this.comando();
	        this.state = 22;
	        this.match(CalculatorParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comando() {
	    let localctx = new ComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CalculatorParser.RULE_comando);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 464) !== 0)) {
	            this.state = 24;
	            this.operacion();
	            this.state = 29;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operacion() {
	    let localctx = new OperacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CalculatorParser.RULE_operacion);
	    try {
	        this.state = 34;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            localctx = new CmdPushContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 30;
	            this.push();
	            break;
	        case 7:
	            localctx = new CmdPopContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 31;
	            this.pop();
	            break;
	        case 8:
	            localctx = new CmdPeekContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 32;
	            this.peek();
	            break;
	        case 4:
	            localctx = new CmdCrearContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 33;
	            this.crear();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	crear() {
	    let localctx = new CrearContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CalculatorParser.RULE_crear);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(CalculatorParser.T__3);
	        this.state = 37;
	        this.match(CalculatorParser.LPAREN);
	        this.state = 38;
	        this.lista();
	        this.state = 39;
	        this.match(CalculatorParser.RPAREN);
	        this.state = 40;
	        this.match(CalculatorParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	push() {
	    let localctx = new PushContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CalculatorParser.RULE_push);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(CalculatorParser.T__5);
	        this.state = 43;
	        this.match(CalculatorParser.LPAREN);
	        this.state = 44;
	        this.valor();
	        this.state = 45;
	        this.match(CalculatorParser.RPAREN);
	        this.state = 46;
	        this.match(CalculatorParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pop() {
	    let localctx = new PopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CalculatorParser.RULE_pop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(CalculatorParser.T__6);
	        this.state = 49;
	        this.match(CalculatorParser.LPAREN);
	        this.state = 50;
	        this.match(CalculatorParser.RPAREN);
	        this.state = 51;
	        this.match(CalculatorParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	peek() {
	    let localctx = new PeekContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CalculatorParser.RULE_peek);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(CalculatorParser.T__7);
	        this.state = 54;
	        this.match(CalculatorParser.LPAREN);
	        this.state = 55;
	        this.match(CalculatorParser.RPAREN);
	        this.state = 56;
	        this.match(CalculatorParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CalculatorParser.RULE_valor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        _la = this._input.LA(1);
	        if(!(_la===12 || _la===14)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista() {
	    let localctx = new ListaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CalculatorParser.RULE_lista);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(CalculatorParser.T__8);
	        this.state = 69;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12 || _la===14) {
	            this.state = 61;
	            this.valor();
	            this.state = 66;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===10) {
	                this.state = 62;
	                this.match(CalculatorParser.T__9);
	                this.state = 63;
	                this.valor();
	                this.state = 68;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 71;
	        this.match(CalculatorParser.T__10);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CalculatorParser.EOF = antlr4.Token.EOF;
CalculatorParser.T__0 = 1;
CalculatorParser.T__1 = 2;
CalculatorParser.T__2 = 3;
CalculatorParser.T__3 = 4;
CalculatorParser.T__4 = 5;
CalculatorParser.T__5 = 6;
CalculatorParser.T__6 = 7;
CalculatorParser.T__7 = 8;
CalculatorParser.T__8 = 9;
CalculatorParser.T__9 = 10;
CalculatorParser.T__10 = 11;
CalculatorParser.TEXTO = 12;
CalculatorParser.PALABRA = 13;
CalculatorParser.INT = 14;
CalculatorParser.LPAREN = 15;
CalculatorParser.RPAREN = 16;
CalculatorParser.WS = 17;

CalculatorParser.RULE_programa = 0;
CalculatorParser.RULE_comando = 1;
CalculatorParser.RULE_operacion = 2;
CalculatorParser.RULE_crear = 3;
CalculatorParser.RULE_push = 4;
CalculatorParser.RULE_pop = 5;
CalculatorParser.RULE_peek = 6;
CalculatorParser.RULE_valor = 7;
CalculatorParser.RULE_lista = 8;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_programa;
    }

	PALABRA() {
	    return this.getToken(CalculatorParser.PALABRA, 0);
	};

	comando() {
	    return this.getTypedRuleContext(ComandoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_comando;
    }

	operacion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OperacionContext);
	    } else {
	        return this.getTypedRuleContext(OperacionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitComando(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitComando(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OperacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_operacion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CmdPushContext extends OperacionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	push() {
	    return this.getTypedRuleContext(PushContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterCmdPush(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitCmdPush(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitCmdPush(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculatorParser.CmdPushContext = CmdPushContext;

class CmdPeekContext extends OperacionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	peek() {
	    return this.getTypedRuleContext(PeekContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterCmdPeek(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitCmdPeek(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitCmdPeek(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculatorParser.CmdPeekContext = CmdPeekContext;

class CmdCrearContext extends OperacionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	crear() {
	    return this.getTypedRuleContext(CrearContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterCmdCrear(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitCmdCrear(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitCmdCrear(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculatorParser.CmdCrearContext = CmdCrearContext;

class CmdPopContext extends OperacionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	pop() {
	    return this.getTypedRuleContext(PopContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterCmdPop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitCmdPop(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitCmdPop(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculatorParser.CmdPopContext = CmdPopContext;

class CrearContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_crear;
    }

	LPAREN() {
	    return this.getToken(CalculatorParser.LPAREN, 0);
	};

	lista() {
	    return this.getTypedRuleContext(ListaContext,0);
	};

	RPAREN() {
	    return this.getToken(CalculatorParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterCrear(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitCrear(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitCrear(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PushContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_push;
    }

	LPAREN() {
	    return this.getToken(CalculatorParser.LPAREN, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	RPAREN() {
	    return this.getToken(CalculatorParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterPush(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitPush(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitPush(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_pop;
    }

	LPAREN() {
	    return this.getToken(CalculatorParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(CalculatorParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterPop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitPop(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitPop(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PeekContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_peek;
    }

	LPAREN() {
	    return this.getToken(CalculatorParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(CalculatorParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterPeek(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitPeek(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitPeek(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_valor;
    }

	INT() {
	    return this.getToken(CalculatorParser.INT, 0);
	};

	TEXTO() {
	    return this.getToken(CalculatorParser.TEXTO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_lista;
    }

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterLista(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitLista(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitLista(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CalculatorParser.ProgramaContext = ProgramaContext; 
CalculatorParser.ComandoContext = ComandoContext; 
CalculatorParser.OperacionContext = OperacionContext; 
CalculatorParser.CrearContext = CrearContext; 
CalculatorParser.PushContext = PushContext; 
CalculatorParser.PopContext = PopContext; 
CalculatorParser.PeekContext = PeekContext; 
CalculatorParser.ValorContext = ValorContext; 
CalculatorParser.ListaContext = ListaContext; 
