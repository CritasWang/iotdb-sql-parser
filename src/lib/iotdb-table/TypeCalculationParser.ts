// Generated from dt-sql-parser/src/grammar/iotdb-table/TypeCalculation.g4 by ANTLR 4.13.1

// @ts-nocheck

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { TypeCalculationListener } from "./TypeCalculationListener.js";
import { TypeCalculationVisitor } from "./TypeCalculationVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class TypeCalculationParser extends antlr.Parser {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly PLUS = 4;
    public static readonly MINUS = 5;
    public static readonly ASTERISK = 6;
    public static readonly SLASH = 7;
    public static readonly NULL = 8;
    public static readonly MIN = 9;
    public static readonly MAX = 10;
    public static readonly IDENTIFIER = 11;
    public static readonly INTEGER_VALUE = 12;
    public static readonly WS = 13;
    public static readonly RULE_typeCalculation = 0;
    public static readonly RULE_expression = 1;
    public static readonly RULE_binaryFunctionName = 2;

    public static readonly literalNames = [
        null, "'('", "','", "')'", "'+'", "'-'", "'*'", "'/'", "'NULL'", 
        "'MIN'", "'MAX'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, "PLUS", "MINUS", "ASTERISK", "SLASH", "NULL", 
        "MIN", "MAX", "IDENTIFIER", "INTEGER_VALUE", "WS"
    ];
    public static readonly ruleNames = [
        "typeCalculation", "expression", "binaryFunctionName",
    ];

    public get grammarFileName(): string { return "TypeCalculation.g4"; }
    public get literalNames(): (string | null)[] { return TypeCalculationParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return TypeCalculationParser.symbolicNames; }
    public get ruleNames(): string[] { return TypeCalculationParser.ruleNames; }
    public get serializedATN(): number[] { return TypeCalculationParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, TypeCalculationParser._ATN, TypeCalculationParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public typeCalculation(): TypeCalculationContext {
        let localContext = new TypeCalculationContext(this.context, this.state);
        this.enterRule(localContext, 0, TypeCalculationParser.RULE_typeCalculation);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 6;
            this.expression(0);
            this.state = 7;
            this.match(TypeCalculationParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expression(): ExpressionContext;
    public expression(_p: number): ExpressionContext;
    public expression(_p?: number): ExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 2;
        this.enterRecursionRule(localContext, 2, TypeCalculationParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 26;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case TypeCalculationParser.NULL:
                {
                localContext = new NullLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 10;
                this.match(TypeCalculationParser.NULL);
                }
                break;
            case TypeCalculationParser.INTEGER_VALUE:
                {
                localContext = new NumericLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 11;
                this.match(TypeCalculationParser.INTEGER_VALUE);
                }
                break;
            case TypeCalculationParser.MIN:
            case TypeCalculationParser.MAX:
                {
                localContext = new BinaryFunctionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 12;
                this.binaryFunctionName();
                this.state = 13;
                this.match(TypeCalculationParser.T__0);
                this.state = 14;
                (localContext as BinaryFunctionContext)._left = this.expression(0);
                this.state = 15;
                this.match(TypeCalculationParser.T__1);
                this.state = 16;
                (localContext as BinaryFunctionContext)._right = this.expression(0);
                this.state = 17;
                this.match(TypeCalculationParser.T__2);
                }
                break;
            case TypeCalculationParser.IDENTIFIER:
                {
                localContext = new IdentifierContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 19;
                this.match(TypeCalculationParser.IDENTIFIER);
                }
                break;
            case TypeCalculationParser.T__0:
                {
                localContext = new ParenthesizedExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 20;
                this.match(TypeCalculationParser.T__0);
                this.state = 21;
                this.expression(0);
                this.state = 22;
                this.match(TypeCalculationParser.T__2);
                }
                break;
            case TypeCalculationParser.PLUS:
            case TypeCalculationParser.MINUS:
                {
                localContext = new ArithmeticUnaryContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 24;
                (localContext as ArithmeticUnaryContext)._operator = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 4 || _la === 5)) {
                    (localContext as ArithmeticUnaryContext)._operator = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 25;
                this.expression(3);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 36;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 2, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 34;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
                    case 1:
                        {
                        localContext = new ArithmeticBinaryContext(new ExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, TypeCalculationParser.RULE_expression);
                        this.state = 28;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 29;
                        (localContext as ArithmeticBinaryContext)._operator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 6 || _la === 7)) {
                            (localContext as ArithmeticBinaryContext)._operator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 30;
                        (localContext as ArithmeticBinaryContext)._right = this.expression(3);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ArithmeticBinaryContext(new ExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, TypeCalculationParser.RULE_expression);
                        this.state = 31;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 32;
                        (localContext as ArithmeticBinaryContext)._operator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 4 || _la === 5)) {
                            (localContext as ArithmeticBinaryContext)._operator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 33;
                        (localContext as ArithmeticBinaryContext)._right = this.expression(2);
                        }
                        break;
                    }
                    }
                }
                this.state = 38;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 2, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public binaryFunctionName(): BinaryFunctionNameContext {
        let localContext = new BinaryFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 4, TypeCalculationParser.RULE_binaryFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 39;
            localContext._name = this.tokenStream.LT(1);
            _la = this.tokenStream.LA(1);
            if(!(_la === 9 || _la === 10)) {
                localContext._name = this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.RuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 1:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        }
        return true;
    }
    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 2);
        case 1:
            return this.precpred(this.context, 1);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,13,42,2,0,7,0,2,1,7,1,2,2,7,2,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,27,8,1,1,1,
        1,1,1,1,1,1,1,1,1,1,5,1,35,8,1,10,1,12,1,38,9,1,1,2,1,2,1,2,0,1,
        2,3,0,2,4,0,3,1,0,4,5,1,0,6,7,1,0,9,10,45,0,6,1,0,0,0,2,26,1,0,0,
        0,4,39,1,0,0,0,6,7,3,2,1,0,7,8,5,0,0,1,8,1,1,0,0,0,9,10,6,1,-1,0,
        10,27,5,8,0,0,11,27,5,12,0,0,12,13,3,4,2,0,13,14,5,1,0,0,14,15,3,
        2,1,0,15,16,5,2,0,0,16,17,3,2,1,0,17,18,5,3,0,0,18,27,1,0,0,0,19,
        27,5,11,0,0,20,21,5,1,0,0,21,22,3,2,1,0,22,23,5,3,0,0,23,27,1,0,
        0,0,24,25,7,0,0,0,25,27,3,2,1,3,26,9,1,0,0,0,26,11,1,0,0,0,26,12,
        1,0,0,0,26,19,1,0,0,0,26,20,1,0,0,0,26,24,1,0,0,0,27,36,1,0,0,0,
        28,29,10,2,0,0,29,30,7,1,0,0,30,35,3,2,1,3,31,32,10,1,0,0,32,33,
        7,0,0,0,33,35,3,2,1,2,34,28,1,0,0,0,34,31,1,0,0,0,35,38,1,0,0,0,
        36,34,1,0,0,0,36,37,1,0,0,0,37,3,1,0,0,0,38,36,1,0,0,0,39,40,7,2,
        0,0,40,5,1,0,0,0,3,26,34,36
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!TypeCalculationParser.__ATN) {
            TypeCalculationParser.__ATN = new antlr.ATNDeserializer().deserialize(TypeCalculationParser._serializedATN);
        }

        return TypeCalculationParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(TypeCalculationParser.literalNames, TypeCalculationParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return TypeCalculationParser.vocabulary;
    }

    private static readonly decisionsToDFA = TypeCalculationParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class TypeCalculationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(TypeCalculationParser.EOF, 0)!;
    }
    public override get ruleIndex(): number {
        return TypeCalculationParser.RULE_typeCalculation;
    }
    public override enterRule(listener: TypeCalculationListener): void {
        if(listener.enterTypeCalculation) {
             listener.enterTypeCalculation(this);
        }
    }
    public override exitRule(listener: TypeCalculationListener): void {
        if(listener.exitTypeCalculation) {
             listener.exitTypeCalculation(this);
        }
    }
    public override accept<Result>(visitor: TypeCalculationVisitor<Result>): Result | null {
        if (visitor.visitTypeCalculation) {
            return visitor.visitTypeCalculation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return TypeCalculationParser.RULE_expression;
    }
    public override copyFrom(ctx: ExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class BinaryFunctionContext extends ExpressionContext {
    public _left?: ExpressionContext;
    public _right?: ExpressionContext;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public binaryFunctionName(): BinaryFunctionNameContext {
        return this.getRuleContext(0, BinaryFunctionNameContext)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override enterRule(listener: TypeCalculationListener): void {
        if(listener.enterBinaryFunction) {
             listener.enterBinaryFunction(this);
        }
    }
    public override exitRule(listener: TypeCalculationListener): void {
        if(listener.exitBinaryFunction) {
             listener.exitBinaryFunction(this);
        }
    }
    public override accept<Result>(visitor: TypeCalculationVisitor<Result>): Result | null {
        if (visitor.visitBinaryFunction) {
            return visitor.visitBinaryFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IdentifierContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(TypeCalculationParser.IDENTIFIER, 0)!;
    }
    public override enterRule(listener: TypeCalculationListener): void {
        if(listener.enterIdentifier) {
             listener.enterIdentifier(this);
        }
    }
    public override exitRule(listener: TypeCalculationListener): void {
        if(listener.exitIdentifier) {
             listener.exitIdentifier(this);
        }
    }
    public override accept<Result>(visitor: TypeCalculationVisitor<Result>): Result | null {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NullLiteralContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public NULL(): antlr.TerminalNode {
        return this.getToken(TypeCalculationParser.NULL, 0)!;
    }
    public override enterRule(listener: TypeCalculationListener): void {
        if(listener.enterNullLiteral) {
             listener.enterNullLiteral(this);
        }
    }
    public override exitRule(listener: TypeCalculationListener): void {
        if(listener.exitNullLiteral) {
             listener.exitNullLiteral(this);
        }
    }
    public override accept<Result>(visitor: TypeCalculationVisitor<Result>): Result | null {
        if (visitor.visitNullLiteral) {
            return visitor.visitNullLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParenthesizedExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override enterRule(listener: TypeCalculationListener): void {
        if(listener.enterParenthesizedExpression) {
             listener.enterParenthesizedExpression(this);
        }
    }
    public override exitRule(listener: TypeCalculationListener): void {
        if(listener.exitParenthesizedExpression) {
             listener.exitParenthesizedExpression(this);
        }
    }
    public override accept<Result>(visitor: TypeCalculationVisitor<Result>): Result | null {
        if (visitor.visitParenthesizedExpression) {
            return visitor.visitParenthesizedExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArithmeticBinaryContext extends ExpressionContext {
    public _left?: ExpressionContext;
    public _operator?: Token | null;
    public _right?: ExpressionContext;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public ASTERISK(): antlr.TerminalNode | null {
        return this.getToken(TypeCalculationParser.ASTERISK, 0);
    }
    public SLASH(): antlr.TerminalNode | null {
        return this.getToken(TypeCalculationParser.SLASH, 0);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(TypeCalculationParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(TypeCalculationParser.MINUS, 0);
    }
    public override enterRule(listener: TypeCalculationListener): void {
        if(listener.enterArithmeticBinary) {
             listener.enterArithmeticBinary(this);
        }
    }
    public override exitRule(listener: TypeCalculationListener): void {
        if(listener.exitArithmeticBinary) {
             listener.exitArithmeticBinary(this);
        }
    }
    public override accept<Result>(visitor: TypeCalculationVisitor<Result>): Result | null {
        if (visitor.visitArithmeticBinary) {
            return visitor.visitArithmeticBinary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NumericLiteralContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public INTEGER_VALUE(): antlr.TerminalNode {
        return this.getToken(TypeCalculationParser.INTEGER_VALUE, 0)!;
    }
    public override enterRule(listener: TypeCalculationListener): void {
        if(listener.enterNumericLiteral) {
             listener.enterNumericLiteral(this);
        }
    }
    public override exitRule(listener: TypeCalculationListener): void {
        if(listener.exitNumericLiteral) {
             listener.exitNumericLiteral(this);
        }
    }
    public override accept<Result>(visitor: TypeCalculationVisitor<Result>): Result | null {
        if (visitor.visitNumericLiteral) {
            return visitor.visitNumericLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArithmeticUnaryContext extends ExpressionContext {
    public _operator?: Token | null;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(TypeCalculationParser.MINUS, 0);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(TypeCalculationParser.PLUS, 0);
    }
    public override enterRule(listener: TypeCalculationListener): void {
        if(listener.enterArithmeticUnary) {
             listener.enterArithmeticUnary(this);
        }
    }
    public override exitRule(listener: TypeCalculationListener): void {
        if(listener.exitArithmeticUnary) {
             listener.exitArithmeticUnary(this);
        }
    }
    public override accept<Result>(visitor: TypeCalculationVisitor<Result>): Result | null {
        if (visitor.visitArithmeticUnary) {
            return visitor.visitArithmeticUnary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BinaryFunctionNameContext extends antlr.ParserRuleContext {
    public _name?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MAX(): antlr.TerminalNode | null {
        return this.getToken(TypeCalculationParser.MAX, 0);
    }
    public MIN(): antlr.TerminalNode | null {
        return this.getToken(TypeCalculationParser.MIN, 0);
    }
    public override get ruleIndex(): number {
        return TypeCalculationParser.RULE_binaryFunctionName;
    }
    public override enterRule(listener: TypeCalculationListener): void {
        if(listener.enterBinaryFunctionName) {
             listener.enterBinaryFunctionName(this);
        }
    }
    public override exitRule(listener: TypeCalculationListener): void {
        if(listener.exitBinaryFunctionName) {
             listener.exitBinaryFunctionName(this);
        }
    }
    public override accept<Result>(visitor: TypeCalculationVisitor<Result>): Result | null {
        if (visitor.visitBinaryFunctionName) {
            return visitor.visitBinaryFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
