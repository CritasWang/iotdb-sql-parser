// Generated from dt-sql-parser/src/grammar/iotdb-table/TypeCalculation.g4 by ANTLR 4.13.1

// @ts-nocheck

import { AbstractParseTreeVisitor } from "antlr4ng";


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `TypeCalculationParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class TypeCalculationVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `TypeCalculationParser.typeCalculation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeCalculation?: (ctx: TypeCalculationContext) => Result;
    /**
     * Visit a parse tree produced by the `binaryFunction`
     * labeled alternative in `TypeCalculationParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBinaryFunction?: (ctx: BinaryFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `identifier`
     * labeled alternative in `TypeCalculationParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier?: (ctx: IdentifierContext) => Result;
    /**
     * Visit a parse tree produced by the `nullLiteral`
     * labeled alternative in `TypeCalculationParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNullLiteral?: (ctx: NullLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `TypeCalculationParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `TypeCalculationParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => Result;
    /**
     * Visit a parse tree produced by the `numericLiteral`
     * labeled alternative in `TypeCalculationParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumericLiteral?: (ctx: NumericLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `TypeCalculationParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => Result;
    /**
     * Visit a parse tree produced by `TypeCalculationParser.binaryFunctionName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBinaryFunctionName?: (ctx: BinaryFunctionNameContext) => Result;
}

