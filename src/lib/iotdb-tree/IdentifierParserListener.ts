// Generated from dt-sql-parser/src/grammar/iotdb-tree/IdentifierParser.g4 by ANTLR 4.13.1

// @ts-nocheck

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { IdentifierContext } from "./IdentifierParser.js";
import { KeyWordsContext } from "./IdentifierParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `IdentifierParser`.
 */
export class IdentifierParserListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `IdentifierParser.identifier`.
     * @param ctx the parse tree
     */
    enterIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Exit a parse tree produced by `IdentifierParser.identifier`.
     * @param ctx the parse tree
     */
    exitIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Enter a parse tree produced by `IdentifierParser.keyWords`.
     * @param ctx the parse tree
     */
    enterKeyWords?: (ctx: KeyWordsContext) => void;
    /**
     * Exit a parse tree produced by `IdentifierParser.keyWords`.
     * @param ctx the parse tree
     */
    exitKeyWords?: (ctx: KeyWordsContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

