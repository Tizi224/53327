import CalculatorLexer from "./generated/CalculatorLexer.js";
import CalculatorParser from "./generated/CalculatorParser.js";
import { CustomCalculatorVisitor } from "./CustomCalculatorVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import fs from 'fs';

// 1. Análisis léxico y sintáctico con manejo de errores
class CustomErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        console.error(`Error en la línea ${line}:${column} - Causa: ${msg}`);
    }
}

function main() {
    let input;
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        console.error("Error al leer el archivo input.txt");
        return;
    }

    const inputStream = CharStreams.fromString(input);
    const lexer = new CalculatorLexer(inputStream);
    lexer.removeErrorListeners();
    lexer.addErrorListener(new CustomErrorListener());

    const tokenStream = new CommonTokenStream(lexer);
    tokenStream.fill(); // Necesario para iterar tokens antes del parser

    // 2. Tabla de lexemas-tokens
    console.log("--- Tabla de lexemas-tokens ---");
    for (let token of tokenStream.tokens) {
        if (token.type !== antlr4.Token.EOF) {
            const tokenName = CalculatorLexer.symbolicNames[token.type] || CalculatorLexer.literalNames[token.type] || "UNKNOWN";
            console.log(`Lexema: '${token.text}' -> Token: ${tokenName}`);
        }
    }

    const parser = new CalculatorParser(tokenStream);
    parser.removeErrorListeners();
    parser.addErrorListener(new CustomErrorListener());

    const tree = parser.programa();

    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores en la entrada. Ejecución detenida.");
        return;
    }

    console.log("\nEntrada válida.");

    // 3. Árbol de análisis sintáctico
    console.log("\n--- Árbol de análisis sintáctico ---");
    console.log(tree.toStringTree(parser.ruleNames));

    // 4. Interpretación (Traducción y ejecución)
    const visitor = new CustomCalculatorVisitor();
    const codigoJS = visitor.visit(tree);

    console.log("\n-- Código JS --");
    console.log(codigoJS);

    console.log("--- Resultados ---");
    eval(codigoJS);
}

main();
