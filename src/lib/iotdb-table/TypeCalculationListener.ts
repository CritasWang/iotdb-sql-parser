// Generated from dt-sql-parser/src/grammar/iotdb-table/TypeCalculation.g4 by ANTLR 4.13.1

// @ts-nocheck

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { TypeCalculationContext } from "./TypeCalculationParser.js";
import { BinaryFunctionContext } from "./TypeCalculationParser.js";
import { IdentifierContext } from "./TypeCalculationParser.js";
import { NullLiteralContext } from "./TypeCalculationParser.js";
import { ParenthesizedExpressionContext } from "./TypeCalculationParser.js";
import { ArithmeticBinaryContext } from "./TypeCalculationParser.js";
import { NumericLiteralContext } from "./TypeCalculationParser.js";
import { ArithmeticUnaryContext } from "./TypeCalculationParser.js";
import { BinaryFunctionNameContext } from "./TypeCalculationParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `TypeCalculationParser`.
 */
export class TypeCalculationListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `TypeCalculationParser.typeCalculation`.
     * @param ctx the parse tree
     */
    enterTypeCalculation?: (ctx: TypeCalculationContext) => void;
    /**
     * Exit a parse tree produced by `TypeCalculationParser.typeCalculation`.
     * @param ctx the parse tree
     */
    exitTypeCalculation?: (ctx: TypeCalculationContext) => void;
    /**
     * Enter a parse tree produced by the `binaryFunction`
     * labeled alternative in `TypeCalculationParser.expression`.
     * @param ctx the parse tree
     */
    enterBinaryFunction?: (ctx: BinaryFunctionContext) => void;
    /**
     * Exit a parse tree produced by the `binaryFunction`
     * labeled alternative in `TypeCalculationParser.expression`.
     * @param ctx the parse tree
     */
    exitBinaryFunction?: (ctx: BinaryFunctionContext) => void;
    /**
     * Enter a parse tree produced by the `identifier`
     * labeled alternative in `TypeCalculationParser.expression`.
     * @param ctx the parse tree
     */
    enterIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Exit a parse tree produced by the `identifier`
     * labeled alternative in `TypeCalculationParser.expression`.
     * @param ctx the parse tree
     */
    exitIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Enter a parse tree produced by the `nullLiteral`
     * labeled alternative in `TypeCalculationParser.expression`.
     * @param ctx the parse tree
     */
    enterNullLiteral?: (ctx: NullLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `nullLiteral`
     * labeled alternative in `TypeCalculationParser.expression`.
     * @param ctx the parse tree
     */
    exitNullLiteral?: (ctx: NullLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `TypeCalculationParser.expression`.
     * @param ctx the parse tree
     */
    enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `TypeCalculationParser.expression`.
     * @param ctx the parse tree
     */
    exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `TypeCalculationParser.expression`.
     * @param ctx the parse tree
     */
    enterArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
    /**
     * Exit a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `TypeCalculationParser.expression`.
     * @param ctx the parse tree
     */
    exitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
    /**
     * Enter a parse tree produced by the `numericLiteral`
     * labeled alternative in `TypeCalculationParser.expression`.
     * @param ctx the parse tree
     */
    enterNumericLiteral?: (ctx: NumericLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `numericLiteral`
     * labeled alternative in `TypeCalculationParser.expression`.
     * @param ctx the parse tree
     */
    exitNumericLiteral?: (ctx: NumericLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `TypeCalculationParser.expression`.
     * @param ctx the parse tree
     */
    enterArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
    /**
     * Exit a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `TypeCalculationParser.expression`.
     * @param ctx the parse tree
     */
    exitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
    /**
     * Enter a parse tree produced by `TypeCalculationParser.binaryFunctionName`.
     * @param ctx the parse tree
     */
    enterBinaryFunctionName?: (ctx: BinaryFunctionNameContext) => void;
    /**
     * Exit a parse tree produced by `TypeCalculationParser.binaryFunctionName`.
     * @param ctx the parse tree
     */
    exitBinaryFunctionName?: (ctx: BinaryFunctionNameContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

