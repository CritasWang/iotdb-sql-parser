// Generated from dt-sql-parser/src/grammar/iotdb-tree/IdentifierParser.g4 by ANTLR 4.13.1

// @ts-nocheck

import { AbstractParseTreeVisitor } from "antlr4ng";


import { IdentifierContext } from "./IdentifierParser.js";
import { KeyWordsContext } from "./IdentifierParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `IdentifierParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class IdentifierParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `IdentifierParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier?: (ctx: IdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `IdentifierParser.keyWords`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKeyWords?: (ctx: KeyWordsContext) => Result;
}

