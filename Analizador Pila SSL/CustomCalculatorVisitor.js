import CalculatorVisitor from "./generated/CalculatorVisitor.js";

export class CustomCalculatorVisitor extends CalculatorVisitor {

  constructor() {
    super();
    this.nombrePila = "";
  }

  visitPrograma(ctx) {
    this.nombrePila = ctx.PALABRA().getText();

    // Visitamos los comandos internos y juntamos su resultado
    const cuerpoComandos = this.visit(ctx.comando());

    // Devolvemos el código final concatenado
    return `
// Traducción del programa
let ${this.nombrePila} = [];
${cuerpoComandos}
`;
  }

  // Visita la lista de comandos
  visitComando(ctx) {
    let codigo = "";

    // Iteramos por todas las operaciones que haya dentro
    for (let i = 0; i < ctx.getChildCount(); i++) {
      codigo += this.visit(ctx.getChild(i)) + "\n";
    }
    return codigo;
  }

  visitCmdCrear(ctx) {
    // Para crear, obtenemos la lista y la asignamos
    const elementos = this.visit(ctx.crear().lista());
    return `${this.nombrePila} = ${elementos};`;
  }

  visitCmdPush(ctx) {
    const valor = this.visit(ctx.push().valor());
    return `${this.nombrePila}.push(${valor});`;
  }

  visitCmdPop(ctx) {
    return `${this.nombrePila}.pop();`;
  }

  visitCmdPeek(ctx) {
    return `console.log(${this.nombrePila}[${this.nombrePila}.length - 1]);`;
  }

  visitLista(ctx) {
    return ctx.getText();
  }

  visitValor(ctx) {
    return ctx.getText();
  }
}
