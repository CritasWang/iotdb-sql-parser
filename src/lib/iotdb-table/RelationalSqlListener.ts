// Generated from dt-sql-parser/src/grammar/iotdb-table/RelationalSql.g4 by ANTLR 4.13.1

// @ts-nocheck

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { SQLParserBase } from '../SQLParserBase';


import { ProgramContext } from "./RelationalSqlParser.js";
import { StatementsContext } from "./RelationalSqlParser.js";
import { SingleStatementContext } from "./RelationalSqlParser.js";
import { StandaloneExpressionContext } from "./RelationalSqlParser.js";
import { StandaloneTypeContext } from "./RelationalSqlParser.js";
import { StandaloneRowPatternContext } from "./RelationalSqlParser.js";
import { StatementContext } from "./RelationalSqlParser.js";
import { UseDatabaseStatementContext } from "./RelationalSqlParser.js";
import { ShowDatabasesStatementContext } from "./RelationalSqlParser.js";
import { CreateDbStatementContext } from "./RelationalSqlParser.js";
import { AlterDbStatementContext } from "./RelationalSqlParser.js";
import { DropDbStatementContext } from "./RelationalSqlParser.js";
import { CreateTableStatementContext } from "./RelationalSqlParser.js";
import { CharsetDescContext } from "./RelationalSqlParser.js";
import { ColumnDefinitionContext } from "./RelationalSqlParser.js";
import { CharsetNameContext } from "./RelationalSqlParser.js";
import { CommentContext } from "./RelationalSqlParser.js";
import { DropTableStatementContext } from "./RelationalSqlParser.js";
import { ShowTableStatementContext } from "./RelationalSqlParser.js";
import { DescTableStatementContext } from "./RelationalSqlParser.js";
import { RenameTableContext } from "./RelationalSqlParser.js";
import { AddColumnContext } from "./RelationalSqlParser.js";
import { RenameColumnContext } from "./RelationalSqlParser.js";
import { DropColumnContext } from "./RelationalSqlParser.js";
import { SetTablePropertiesContext } from "./RelationalSqlParser.js";
import { CommentTableContext } from "./RelationalSqlParser.js";
import { CommentViewContext } from "./RelationalSqlParser.js";
import { CommentColumnContext } from "./RelationalSqlParser.js";
import { ShowCreateTableStatementContext } from "./RelationalSqlParser.js";
import { CreateViewStatementContext } from "./RelationalSqlParser.js";
import { ViewColumnDefinitionContext } from "./RelationalSqlParser.js";
import { RenameTableViewContext } from "./RelationalSqlParser.js";
import { AddViewColumnContext } from "./RelationalSqlParser.js";
import { RenameViewColumnContext } from "./RelationalSqlParser.js";
import { DropViewColumnContext } from "./RelationalSqlParser.js";
import { SetTableViewPropertiesContext } from "./RelationalSqlParser.js";
import { DropViewStatementContext } from "./RelationalSqlParser.js";
import { ShowCreateViewStatementContext } from "./RelationalSqlParser.js";
import { PrefixPathContext } from "./RelationalSqlParser.js";
import { NodeNameContext } from "./RelationalSqlParser.js";
import { NodeNameWithoutWildcardContext } from "./RelationalSqlParser.js";
import { WildcardContext } from "./RelationalSqlParser.js";
import { CreateIndexStatementContext } from "./RelationalSqlParser.js";
import { IdentifierListContext } from "./RelationalSqlParser.js";
import { DropIndexStatementContext } from "./RelationalSqlParser.js";
import { ShowIndexStatementContext } from "./RelationalSqlParser.js";
import { InsertStatementContext } from "./RelationalSqlParser.js";
import { DeleteStatementContext } from "./RelationalSqlParser.js";
import { UpdateStatementContext } from "./RelationalSqlParser.js";
import { DeleteDeviceStatementContext } from "./RelationalSqlParser.js";
import { CreateFunctionStatementContext } from "./RelationalSqlParser.js";
import { UriClauseContext } from "./RelationalSqlParser.js";
import { DropFunctionStatementContext } from "./RelationalSqlParser.js";
import { ShowFunctionsStatementContext } from "./RelationalSqlParser.js";
import { LoadTsFileStatementContext } from "./RelationalSqlParser.js";
import { LoadFileWithAttributesClauseContext } from "./RelationalSqlParser.js";
import { LoadFileWithAttributeClauseContext } from "./RelationalSqlParser.js";
import { CreatePipeStatementContext } from "./RelationalSqlParser.js";
import { ExtractorAttributesClauseContext } from "./RelationalSqlParser.js";
import { ExtractorAttributeClauseContext } from "./RelationalSqlParser.js";
import { ProcessorAttributesClauseContext } from "./RelationalSqlParser.js";
import { ProcessorAttributeClauseContext } from "./RelationalSqlParser.js";
import { ConnectorAttributesClauseContext } from "./RelationalSqlParser.js";
import { ConnectorAttributesWithoutWithSinkClauseContext } from "./RelationalSqlParser.js";
import { ConnectorAttributeClauseContext } from "./RelationalSqlParser.js";
import { AlterPipeStatementContext } from "./RelationalSqlParser.js";
import { AlterExtractorAttributesClauseContext } from "./RelationalSqlParser.js";
import { AlterProcessorAttributesClauseContext } from "./RelationalSqlParser.js";
import { AlterConnectorAttributesClauseContext } from "./RelationalSqlParser.js";
import { DropPipeStatementContext } from "./RelationalSqlParser.js";
import { StartPipeStatementContext } from "./RelationalSqlParser.js";
import { StopPipeStatementContext } from "./RelationalSqlParser.js";
import { ShowPipesStatementContext } from "./RelationalSqlParser.js";
import { CreatePipePluginStatementContext } from "./RelationalSqlParser.js";
import { DropPipePluginStatementContext } from "./RelationalSqlParser.js";
import { ShowPipePluginsStatementContext } from "./RelationalSqlParser.js";
import { CreateTopicStatementContext } from "./RelationalSqlParser.js";
import { TopicAttributesClauseContext } from "./RelationalSqlParser.js";
import { TopicAttributeClauseContext } from "./RelationalSqlParser.js";
import { DropTopicStatementContext } from "./RelationalSqlParser.js";
import { ShowTopicsStatementContext } from "./RelationalSqlParser.js";
import { ShowSubscriptionsStatementContext } from "./RelationalSqlParser.js";
import { DropSubscriptionStatementContext } from "./RelationalSqlParser.js";
import { ShowDevicesStatementContext } from "./RelationalSqlParser.js";
import { CountDevicesStatementContext } from "./RelationalSqlParser.js";
import { ShowClusterStatementContext } from "./RelationalSqlParser.js";
import { ShowRegionsStatementContext } from "./RelationalSqlParser.js";
import { ShowDataNodesStatementContext } from "./RelationalSqlParser.js";
import { ShowConfigNodesStatementContext } from "./RelationalSqlParser.js";
import { ShowAINodesStatementContext } from "./RelationalSqlParser.js";
import { ShowClusterIdStatementContext } from "./RelationalSqlParser.js";
import { ShowRegionIdStatementContext } from "./RelationalSqlParser.js";
import { ShowTimeSlotListStatementContext } from "./RelationalSqlParser.js";
import { CountTimeSlotListStatementContext } from "./RelationalSqlParser.js";
import { ShowSeriesSlotListStatementContext } from "./RelationalSqlParser.js";
import { MigrateRegionStatementContext } from "./RelationalSqlParser.js";
import { ReconstructRegionStatementContext } from "./RelationalSqlParser.js";
import { ExtendRegionStatementContext } from "./RelationalSqlParser.js";
import { RemoveRegionStatementContext } from "./RelationalSqlParser.js";
import { RemoveDataNodeStatementContext } from "./RelationalSqlParser.js";
import { ShowSystemInfoContext } from "./RelationalSqlParser.js";
import { ActivateContext } from "./RelationalSqlParser.js";
import { ShowActivationContext } from "./RelationalSqlParser.js";
import { RemoveConfigNodeStatementContext } from "./RelationalSqlParser.js";
import { RemoveAINodeStatementContext } from "./RelationalSqlParser.js";
import { ShowVariablesStatementContext } from "./RelationalSqlParser.js";
import { FlushStatementContext } from "./RelationalSqlParser.js";
import { ClearCacheStatementContext } from "./RelationalSqlParser.js";
import { StartRepairDataStatementContext } from "./RelationalSqlParser.js";
import { StopRepairDataStatementContext } from "./RelationalSqlParser.js";
import { SetSystemStatusStatementContext } from "./RelationalSqlParser.js";
import { ShowVersionStatementContext } from "./RelationalSqlParser.js";
import { ShowQueriesStatementContext } from "./RelationalSqlParser.js";
import { KillQueryStatementContext } from "./RelationalSqlParser.js";
import { LoadConfigurationStatementContext } from "./RelationalSqlParser.js";
import { SetConfigurationStatementContext } from "./RelationalSqlParser.js";
import { ClearCacheOptionsContext } from "./RelationalSqlParser.js";
import { LocalOrClusterModeContext } from "./RelationalSqlParser.js";
import { ShowCurrentSqlDialectStatementContext } from "./RelationalSqlParser.js";
import { SetSqlDialectStatementContext } from "./RelationalSqlParser.js";
import { ShowCurrentUserStatementContext } from "./RelationalSqlParser.js";
import { ShowCurrentDatabaseStatementContext } from "./RelationalSqlParser.js";
import { ShowCurrentTimestampStatementContext } from "./RelationalSqlParser.js";
import { CreateUserStatementContext } from "./RelationalSqlParser.js";
import { CreateRoleStatementContext } from "./RelationalSqlParser.js";
import { DropUserStatementContext } from "./RelationalSqlParser.js";
import { DropRoleStatementContext } from "./RelationalSqlParser.js";
import { AlterUserStatementContext } from "./RelationalSqlParser.js";
import { GrantUserRoleStatementContext } from "./RelationalSqlParser.js";
import { RevokeUserRoleStatementContext } from "./RelationalSqlParser.js";
import { GrantStatementContext } from "./RelationalSqlParser.js";
import { ListUserPrivilegeStatementContext } from "./RelationalSqlParser.js";
import { ListRolePrivilegeStatementContext } from "./RelationalSqlParser.js";
import { ListUserStatementContext } from "./RelationalSqlParser.js";
import { ListRoleStatementContext } from "./RelationalSqlParser.js";
import { RevokeStatementContext } from "./RelationalSqlParser.js";
import { PrivilegeObjectScopeContext } from "./RelationalSqlParser.js";
import { SystemPrivilegesContext } from "./RelationalSqlParser.js";
import { ObjectPrivilegesContext } from "./RelationalSqlParser.js";
import { ObjectScopeContext } from "./RelationalSqlParser.js";
import { SystemPrivilegeContext } from "./RelationalSqlParser.js";
import { ObjectPrivilegeContext } from "./RelationalSqlParser.js";
import { ObjectTypeContext } from "./RelationalSqlParser.js";
import { HolderTypeContext } from "./RelationalSqlParser.js";
import { GrantOptContext } from "./RelationalSqlParser.js";
import { RevokeGrantOptContext } from "./RelationalSqlParser.js";
import { CreateModelStatementContext } from "./RelationalSqlParser.js";
import { HparamPairContext } from "./RelationalSqlParser.js";
import { DropModelStatementContext } from "./RelationalSqlParser.js";
import { ShowModelsStatementContext } from "./RelationalSqlParser.js";
import { StatementDefaultContext } from "./RelationalSqlParser.js";
import { ExplainContext } from "./RelationalSqlParser.js";
import { ExplainAnalyzeContext } from "./RelationalSqlParser.js";
import { QueryContext } from "./RelationalSqlParser.js";
import { WithContext } from "./RelationalSqlParser.js";
import { PropertiesContext } from "./RelationalSqlParser.js";
import { PropertyAssignmentsContext } from "./RelationalSqlParser.js";
import { PropertyContext } from "./RelationalSqlParser.js";
import { DefaultPropertyValueContext } from "./RelationalSqlParser.js";
import { NonDefaultPropertyValueContext } from "./RelationalSqlParser.js";
import { QueryNoWithContext } from "./RelationalSqlParser.js";
import { FillClauseContext } from "./RelationalSqlParser.js";
import { LinearFillContext } from "./RelationalSqlParser.js";
import { PreviousFillContext } from "./RelationalSqlParser.js";
import { ValueFillContext } from "./RelationalSqlParser.js";
import { TimeColumnClauseContext } from "./RelationalSqlParser.js";
import { FillGroupClauseContext } from "./RelationalSqlParser.js";
import { TimeBoundClauseContext } from "./RelationalSqlParser.js";
import { LimitOffsetClauseContext } from "./RelationalSqlParser.js";
import { LimitRowCountContext } from "./RelationalSqlParser.js";
import { RowCountContext } from "./RelationalSqlParser.js";
import { QueryTermDefaultContext } from "./RelationalSqlParser.js";
import { SetOperationContext } from "./RelationalSqlParser.js";
import { QueryPrimaryDefaultContext } from "./RelationalSqlParser.js";
import { TableContext } from "./RelationalSqlParser.js";
import { InlineTableContext } from "./RelationalSqlParser.js";
import { SubqueryContext } from "./RelationalSqlParser.js";
import { SortItemContext } from "./RelationalSqlParser.js";
import { QuerySpecificationContext } from "./RelationalSqlParser.js";
import { GroupByContext } from "./RelationalSqlParser.js";
import { SingleGroupingSetContext } from "./RelationalSqlParser.js";
import { RollupContext } from "./RelationalSqlParser.js";
import { CubeContext } from "./RelationalSqlParser.js";
import { MultipleGroupingSetsContext } from "./RelationalSqlParser.js";
import { TimeValueContext } from "./RelationalSqlParser.js";
import { DateExpressionContext } from "./RelationalSqlParser.js";
import { DatetimeContext } from "./RelationalSqlParser.js";
import { KeepExpressionContext } from "./RelationalSqlParser.js";
import { GroupingSetContext } from "./RelationalSqlParser.js";
import { NamedQueryContext } from "./RelationalSqlParser.js";
import { SetQuantifierContext } from "./RelationalSqlParser.js";
import { SelectSingleContext } from "./RelationalSqlParser.js";
import { SelectAllContext } from "./RelationalSqlParser.js";
import { RelationDefaultContext } from "./RelationalSqlParser.js";
import { PatternRecognitionRelationContext } from "./RelationalSqlParser.js";
import { JoinRelationContext } from "./RelationalSqlParser.js";
import { JoinTypeContext } from "./RelationalSqlParser.js";
import { JoinCriteriaContext } from "./RelationalSqlParser.js";
import { PatternRecognitionContext } from "./RelationalSqlParser.js";
import { MeasureDefinitionContext } from "./RelationalSqlParser.js";
import { RowsPerMatchContext } from "./RelationalSqlParser.js";
import { EmptyMatchHandlingContext } from "./RelationalSqlParser.js";
import { SkipToContext } from "./RelationalSqlParser.js";
import { SubsetDefinitionContext } from "./RelationalSqlParser.js";
import { VariableDefinitionContext } from "./RelationalSqlParser.js";
import { AliasedRelationContext } from "./RelationalSqlParser.js";
import { ColumnAliasesContext } from "./RelationalSqlParser.js";
import { TableNameContext } from "./RelationalSqlParser.js";
import { SubqueryRelationContext } from "./RelationalSqlParser.js";
import { ParenthesizedRelationContext } from "./RelationalSqlParser.js";
import { TableFunctionInvocationWithTableKeyWordContext } from "./RelationalSqlParser.js";
import { TableFunctionInvocationContext } from "./RelationalSqlParser.js";
import { TableFunctionCallContext } from "./RelationalSqlParser.js";
import { TableFunctionArgumentContext } from "./RelationalSqlParser.js";
import { TableArgumentContext } from "./RelationalSqlParser.js";
import { TableArgumentTableWithTableKeyWordContext } from "./RelationalSqlParser.js";
import { TableArgumentTableContext } from "./RelationalSqlParser.js";
import { TableArgumentQueryWithTableKeyWordContext } from "./RelationalSqlParser.js";
import { TableArgumentQueryContext } from "./RelationalSqlParser.js";
import { ScalarArgumentContext } from "./RelationalSqlParser.js";
import { ExpressionContext } from "./RelationalSqlParser.js";
import { LogicalNotContext } from "./RelationalSqlParser.js";
import { PredicatedContext } from "./RelationalSqlParser.js";
import { OrContext } from "./RelationalSqlParser.js";
import { AndContext } from "./RelationalSqlParser.js";
import { ComparisonContext } from "./RelationalSqlParser.js";
import { QuantifiedComparisonContext } from "./RelationalSqlParser.js";
import { BetweenContext } from "./RelationalSqlParser.js";
import { InListContext } from "./RelationalSqlParser.js";
import { InSubqueryContext } from "./RelationalSqlParser.js";
import { LikeContext } from "./RelationalSqlParser.js";
import { NullPredicateContext } from "./RelationalSqlParser.js";
import { DistinctFromContext } from "./RelationalSqlParser.js";
import { ValueExpressionDefaultContext } from "./RelationalSqlParser.js";
import { ConcatenationContext } from "./RelationalSqlParser.js";
import { ArithmeticBinaryContext } from "./RelationalSqlParser.js";
import { ArithmeticUnaryContext } from "./RelationalSqlParser.js";
import { DereferenceContext } from "./RelationalSqlParser.js";
import { DateTimeExpressionContext } from "./RelationalSqlParser.js";
import { SimpleCaseContext } from "./RelationalSqlParser.js";
import { ColumnReferenceContext } from "./RelationalSqlParser.js";
import { RowConstructorContext } from "./RelationalSqlParser.js";
import { ColumnsContext } from "./RelationalSqlParser.js";
import { SpecialDateTimeFunctionContext } from "./RelationalSqlParser.js";
import { SubqueryExpressionContext } from "./RelationalSqlParser.js";
import { CurrentDatabaseContext } from "./RelationalSqlParser.js";
import { SubstringContext } from "./RelationalSqlParser.js";
import { LiteralContext } from "./RelationalSqlParser.js";
import { DateBinGapFillContext } from "./RelationalSqlParser.js";
import { CastContext } from "./RelationalSqlParser.js";
import { CurrentUserContext } from "./RelationalSqlParser.js";
import { ExtractContext } from "./RelationalSqlParser.js";
import { ParenthesizedExpressionContext } from "./RelationalSqlParser.js";
import { TrimContext } from "./RelationalSqlParser.js";
import { FunctionCallContext } from "./RelationalSqlParser.js";
import { ExistsContext } from "./RelationalSqlParser.js";
import { SearchedCaseContext } from "./RelationalSqlParser.js";
import { DateBinContext } from "./RelationalSqlParser.js";
import { OverContext } from "./RelationalSqlParser.js";
import { WindowDefinitionContext } from "./RelationalSqlParser.js";
import { WindowSpecificationContext } from "./RelationalSqlParser.js";
import { WindowFrameContext } from "./RelationalSqlParser.js";
import { FrameExtentContext } from "./RelationalSqlParser.js";
import { UnboundedFrameContext } from "./RelationalSqlParser.js";
import { CurrentRowBoundContext } from "./RelationalSqlParser.js";
import { BoundedFrameContext } from "./RelationalSqlParser.js";
import { NullLiteralContext } from "./RelationalSqlParser.js";
import { NumericLiteralContext } from "./RelationalSqlParser.js";
import { BooleanLiteralContext } from "./RelationalSqlParser.js";
import { StringLiteralContext } from "./RelationalSqlParser.js";
import { DatetimeLiteralContext } from "./RelationalSqlParser.js";
import { BinaryLiteralContext } from "./RelationalSqlParser.js";
import { ParameterContext } from "./RelationalSqlParser.js";
import { ProcessingModeContext } from "./RelationalSqlParser.js";
import { TrimsSpecificationContext } from "./RelationalSqlParser.js";
import { NullTreatmentContext } from "./RelationalSqlParser.js";
import { BasicStringLiteralContext } from "./RelationalSqlParser.js";
import { UnicodeStringLiteralContext } from "./RelationalSqlParser.js";
import { IdentifierOrStringContext } from "./RelationalSqlParser.js";
import { ComparisonOperatorContext } from "./RelationalSqlParser.js";
import { ComparisonQuantifierContext } from "./RelationalSqlParser.js";
import { BooleanValueContext } from "./RelationalSqlParser.js";
import { IntervalContext } from "./RelationalSqlParser.js";
import { IntervalFieldContext } from "./RelationalSqlParser.js";
import { TimeDurationContext } from "./RelationalSqlParser.js";
import { GenericTypeContext } from "./RelationalSqlParser.js";
import { TypeParameterContext } from "./RelationalSqlParser.js";
import { WhenClauseContext } from "./RelationalSqlParser.js";
import { QuantifiedPrimaryContext } from "./RelationalSqlParser.js";
import { PatternConcatenationContext } from "./RelationalSqlParser.js";
import { PatternAlternationContext } from "./RelationalSqlParser.js";
import { PatternVariableContext } from "./RelationalSqlParser.js";
import { EmptyPatternContext } from "./RelationalSqlParser.js";
import { PatternPermutationContext } from "./RelationalSqlParser.js";
import { GroupedPatternContext } from "./RelationalSqlParser.js";
import { PartitionStartAnchorContext } from "./RelationalSqlParser.js";
import { PartitionEndAnchorContext } from "./RelationalSqlParser.js";
import { ExcludedPatternContext } from "./RelationalSqlParser.js";
import { ZeroOrMoreQuantifierContext } from "./RelationalSqlParser.js";
import { OneOrMoreQuantifierContext } from "./RelationalSqlParser.js";
import { ZeroOrOneQuantifierContext } from "./RelationalSqlParser.js";
import { RangeQuantifierContext } from "./RelationalSqlParser.js";
import { UpdateAssignmentContext } from "./RelationalSqlParser.js";
import { ReturnStatementContext } from "./RelationalSqlParser.js";
import { AssignmentStatementContext } from "./RelationalSqlParser.js";
import { SimpleCaseStatementContext } from "./RelationalSqlParser.js";
import { SearchedCaseStatementContext } from "./RelationalSqlParser.js";
import { IfStatementContext } from "./RelationalSqlParser.js";
import { IterateStatementContext } from "./RelationalSqlParser.js";
import { LeaveStatementContext } from "./RelationalSqlParser.js";
import { CompoundStatementContext } from "./RelationalSqlParser.js";
import { LoopStatementContext } from "./RelationalSqlParser.js";
import { WhileStatementContext } from "./RelationalSqlParser.js";
import { RepeatStatementContext } from "./RelationalSqlParser.js";
import { CaseStatementWhenClauseContext } from "./RelationalSqlParser.js";
import { ElseIfClauseContext } from "./RelationalSqlParser.js";
import { ElseClauseContext } from "./RelationalSqlParser.js";
import { VariableDeclarationContext } from "./RelationalSqlParser.js";
import { SqlStatementListContext } from "./RelationalSqlParser.js";
import { PrivilegeContext } from "./RelationalSqlParser.js";
import { QualifiedNameContext } from "./RelationalSqlParser.js";
import { SpecifiedPrincipalContext } from "./RelationalSqlParser.js";
import { CurrentUserGrantorContext } from "./RelationalSqlParser.js";
import { CurrentRoleGrantorContext } from "./RelationalSqlParser.js";
import { UnspecifiedPrincipalContext } from "./RelationalSqlParser.js";
import { UserPrincipalContext } from "./RelationalSqlParser.js";
import { RolePrincipalContext } from "./RelationalSqlParser.js";
import { RolesContext } from "./RelationalSqlParser.js";
import { UnquotedIdentifierContext } from "./RelationalSqlParser.js";
import { QuotedIdentifierContext } from "./RelationalSqlParser.js";
import { BackQuotedIdentifierContext } from "./RelationalSqlParser.js";
import { DecimalLiteralContext } from "./RelationalSqlParser.js";
import { DoubleLiteralContext } from "./RelationalSqlParser.js";
import { IntegerLiteralContext } from "./RelationalSqlParser.js";
import { IdentifierUserContext } from "./RelationalSqlParser.js";
import { StringUserContext } from "./RelationalSqlParser.js";
import { NonReservedContext } from "./RelationalSqlParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `RelationalSqlParser`.
 */
export class RelationalSqlListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `RelationalSqlParser.program`.
     * @param ctx the parse tree
     */
    enterProgram?: (ctx: ProgramContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.program`.
     * @param ctx the parse tree
     */
    exitProgram?: (ctx: ProgramContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.statements`.
     * @param ctx the parse tree
     */
    enterStatements?: (ctx: StatementsContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.statements`.
     * @param ctx the parse tree
     */
    exitStatements?: (ctx: StatementsContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.singleStatement`.
     * @param ctx the parse tree
     */
    enterSingleStatement?: (ctx: SingleStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.singleStatement`.
     * @param ctx the parse tree
     */
    exitSingleStatement?: (ctx: SingleStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.standaloneExpression`.
     * @param ctx the parse tree
     */
    enterStandaloneExpression?: (ctx: StandaloneExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.standaloneExpression`.
     * @param ctx the parse tree
     */
    exitStandaloneExpression?: (ctx: StandaloneExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.standaloneType`.
     * @param ctx the parse tree
     */
    enterStandaloneType?: (ctx: StandaloneTypeContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.standaloneType`.
     * @param ctx the parse tree
     */
    exitStandaloneType?: (ctx: StandaloneTypeContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.standaloneRowPattern`.
     * @param ctx the parse tree
     */
    enterStandaloneRowPattern?: (ctx: StandaloneRowPatternContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.standaloneRowPattern`.
     * @param ctx the parse tree
     */
    exitStandaloneRowPattern?: (ctx: StandaloneRowPatternContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterStatement?: (ctx: StatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitStatement?: (ctx: StatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.useDatabaseStatement`.
     * @param ctx the parse tree
     */
    enterUseDatabaseStatement?: (ctx: UseDatabaseStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.useDatabaseStatement`.
     * @param ctx the parse tree
     */
    exitUseDatabaseStatement?: (ctx: UseDatabaseStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.showDatabasesStatement`.
     * @param ctx the parse tree
     */
    enterShowDatabasesStatement?: (ctx: ShowDatabasesStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.showDatabasesStatement`.
     * @param ctx the parse tree
     */
    exitShowDatabasesStatement?: (ctx: ShowDatabasesStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.createDbStatement`.
     * @param ctx the parse tree
     */
    enterCreateDbStatement?: (ctx: CreateDbStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.createDbStatement`.
     * @param ctx the parse tree
     */
    exitCreateDbStatement?: (ctx: CreateDbStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.alterDbStatement`.
     * @param ctx the parse tree
     */
    enterAlterDbStatement?: (ctx: AlterDbStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.alterDbStatement`.
     * @param ctx the parse tree
     */
    exitAlterDbStatement?: (ctx: AlterDbStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.dropDbStatement`.
     * @param ctx the parse tree
     */
    enterDropDbStatement?: (ctx: DropDbStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.dropDbStatement`.
     * @param ctx the parse tree
     */
    exitDropDbStatement?: (ctx: DropDbStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.createTableStatement`.
     * @param ctx the parse tree
     */
    enterCreateTableStatement?: (ctx: CreateTableStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.createTableStatement`.
     * @param ctx the parse tree
     */
    exitCreateTableStatement?: (ctx: CreateTableStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.charsetDesc`.
     * @param ctx the parse tree
     */
    enterCharsetDesc?: (ctx: CharsetDescContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.charsetDesc`.
     * @param ctx the parse tree
     */
    exitCharsetDesc?: (ctx: CharsetDescContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.columnDefinition`.
     * @param ctx the parse tree
     */
    enterColumnDefinition?: (ctx: ColumnDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.columnDefinition`.
     * @param ctx the parse tree
     */
    exitColumnDefinition?: (ctx: ColumnDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.charsetName`.
     * @param ctx the parse tree
     */
    enterCharsetName?: (ctx: CharsetNameContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.charsetName`.
     * @param ctx the parse tree
     */
    exitCharsetName?: (ctx: CharsetNameContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.comment`.
     * @param ctx the parse tree
     */
    enterComment?: (ctx: CommentContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.comment`.
     * @param ctx the parse tree
     */
    exitComment?: (ctx: CommentContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.dropTableStatement`.
     * @param ctx the parse tree
     */
    enterDropTableStatement?: (ctx: DropTableStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.dropTableStatement`.
     * @param ctx the parse tree
     */
    exitDropTableStatement?: (ctx: DropTableStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.showTableStatement`.
     * @param ctx the parse tree
     */
    enterShowTableStatement?: (ctx: ShowTableStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.showTableStatement`.
     * @param ctx the parse tree
     */
    exitShowTableStatement?: (ctx: ShowTableStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.descTableStatement`.
     * @param ctx the parse tree
     */
    enterDescTableStatement?: (ctx: DescTableStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.descTableStatement`.
     * @param ctx the parse tree
     */
    exitDescTableStatement?: (ctx: DescTableStatementContext) => void;
    /**
     * Enter a parse tree produced by the `renameTable`
     * labeled alternative in `RelationalSqlParser.alterTableStatement`.
     * @param ctx the parse tree
     */
    enterRenameTable?: (ctx: RenameTableContext) => void;
    /**
     * Exit a parse tree produced by the `renameTable`
     * labeled alternative in `RelationalSqlParser.alterTableStatement`.
     * @param ctx the parse tree
     */
    exitRenameTable?: (ctx: RenameTableContext) => void;
    /**
     * Enter a parse tree produced by the `addColumn`
     * labeled alternative in `RelationalSqlParser.alterTableStatement`.
     * @param ctx the parse tree
     */
    enterAddColumn?: (ctx: AddColumnContext) => void;
    /**
     * Exit a parse tree produced by the `addColumn`
     * labeled alternative in `RelationalSqlParser.alterTableStatement`.
     * @param ctx the parse tree
     */
    exitAddColumn?: (ctx: AddColumnContext) => void;
    /**
     * Enter a parse tree produced by the `renameColumn`
     * labeled alternative in `RelationalSqlParser.alterTableStatement`.
     * @param ctx the parse tree
     */
    enterRenameColumn?: (ctx: RenameColumnContext) => void;
    /**
     * Exit a parse tree produced by the `renameColumn`
     * labeled alternative in `RelationalSqlParser.alterTableStatement`.
     * @param ctx the parse tree
     */
    exitRenameColumn?: (ctx: RenameColumnContext) => void;
    /**
     * Enter a parse tree produced by the `dropColumn`
     * labeled alternative in `RelationalSqlParser.alterTableStatement`.
     * @param ctx the parse tree
     */
    enterDropColumn?: (ctx: DropColumnContext) => void;
    /**
     * Exit a parse tree produced by the `dropColumn`
     * labeled alternative in `RelationalSqlParser.alterTableStatement`.
     * @param ctx the parse tree
     */
    exitDropColumn?: (ctx: DropColumnContext) => void;
    /**
     * Enter a parse tree produced by the `setTableProperties`
     * labeled alternative in `RelationalSqlParser.alterTableStatement`.
     * @param ctx the parse tree
     */
    enterSetTableProperties?: (ctx: SetTablePropertiesContext) => void;
    /**
     * Exit a parse tree produced by the `setTableProperties`
     * labeled alternative in `RelationalSqlParser.alterTableStatement`.
     * @param ctx the parse tree
     */
    exitSetTableProperties?: (ctx: SetTablePropertiesContext) => void;
    /**
     * Enter a parse tree produced by the `commentTable`
     * labeled alternative in `RelationalSqlParser.commentStatement`.
     * @param ctx the parse tree
     */
    enterCommentTable?: (ctx: CommentTableContext) => void;
    /**
     * Exit a parse tree produced by the `commentTable`
     * labeled alternative in `RelationalSqlParser.commentStatement`.
     * @param ctx the parse tree
     */
    exitCommentTable?: (ctx: CommentTableContext) => void;
    /**
     * Enter a parse tree produced by the `commentView`
     * labeled alternative in `RelationalSqlParser.commentStatement`.
     * @param ctx the parse tree
     */
    enterCommentView?: (ctx: CommentViewContext) => void;
    /**
     * Exit a parse tree produced by the `commentView`
     * labeled alternative in `RelationalSqlParser.commentStatement`.
     * @param ctx the parse tree
     */
    exitCommentView?: (ctx: CommentViewContext) => void;
    /**
     * Enter a parse tree produced by the `commentColumn`
     * labeled alternative in `RelationalSqlParser.commentStatement`.
     * @param ctx the parse tree
     */
    enterCommentColumn?: (ctx: CommentColumnContext) => void;
    /**
     * Exit a parse tree produced by the `commentColumn`
     * labeled alternative in `RelationalSqlParser.commentStatement`.
     * @param ctx the parse tree
     */
    exitCommentColumn?: (ctx: CommentColumnContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.showCreateTableStatement`.
     * @param ctx the parse tree
     */
    enterShowCreateTableStatement?: (ctx: ShowCreateTableStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.showCreateTableStatement`.
     * @param ctx the parse tree
     */
    exitShowCreateTableStatement?: (ctx: ShowCreateTableStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.createViewStatement`.
     * @param ctx the parse tree
     */
    enterCreateViewStatement?: (ctx: CreateViewStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.createViewStatement`.
     * @param ctx the parse tree
     */
    exitCreateViewStatement?: (ctx: CreateViewStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.viewColumnDefinition`.
     * @param ctx the parse tree
     */
    enterViewColumnDefinition?: (ctx: ViewColumnDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.viewColumnDefinition`.
     * @param ctx the parse tree
     */
    exitViewColumnDefinition?: (ctx: ViewColumnDefinitionContext) => void;
    /**
     * Enter a parse tree produced by the `renameTableView`
     * labeled alternative in `RelationalSqlParser.alterViewStatement`.
     * @param ctx the parse tree
     */
    enterRenameTableView?: (ctx: RenameTableViewContext) => void;
    /**
     * Exit a parse tree produced by the `renameTableView`
     * labeled alternative in `RelationalSqlParser.alterViewStatement`.
     * @param ctx the parse tree
     */
    exitRenameTableView?: (ctx: RenameTableViewContext) => void;
    /**
     * Enter a parse tree produced by the `addViewColumn`
     * labeled alternative in `RelationalSqlParser.alterViewStatement`.
     * @param ctx the parse tree
     */
    enterAddViewColumn?: (ctx: AddViewColumnContext) => void;
    /**
     * Exit a parse tree produced by the `addViewColumn`
     * labeled alternative in `RelationalSqlParser.alterViewStatement`.
     * @param ctx the parse tree
     */
    exitAddViewColumn?: (ctx: AddViewColumnContext) => void;
    /**
     * Enter a parse tree produced by the `renameViewColumn`
     * labeled alternative in `RelationalSqlParser.alterViewStatement`.
     * @param ctx the parse tree
     */
    enterRenameViewColumn?: (ctx: RenameViewColumnContext) => void;
    /**
     * Exit a parse tree produced by the `renameViewColumn`
     * labeled alternative in `RelationalSqlParser.alterViewStatement`.
     * @param ctx the parse tree
     */
    exitRenameViewColumn?: (ctx: RenameViewColumnContext) => void;
    /**
     * Enter a parse tree produced by the `dropViewColumn`
     * labeled alternative in `RelationalSqlParser.alterViewStatement`.
     * @param ctx the parse tree
     */
    enterDropViewColumn?: (ctx: DropViewColumnContext) => void;
    /**
     * Exit a parse tree produced by the `dropViewColumn`
     * labeled alternative in `RelationalSqlParser.alterViewStatement`.
     * @param ctx the parse tree
     */
    exitDropViewColumn?: (ctx: DropViewColumnContext) => void;
    /**
     * Enter a parse tree produced by the `setTableViewProperties`
     * labeled alternative in `RelationalSqlParser.alterViewStatement`.
     * @param ctx the parse tree
     */
    enterSetTableViewProperties?: (ctx: SetTableViewPropertiesContext) => void;
    /**
     * Exit a parse tree produced by the `setTableViewProperties`
     * labeled alternative in `RelationalSqlParser.alterViewStatement`.
     * @param ctx the parse tree
     */
    exitSetTableViewProperties?: (ctx: SetTableViewPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.dropViewStatement`.
     * @param ctx the parse tree
     */
    enterDropViewStatement?: (ctx: DropViewStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.dropViewStatement`.
     * @param ctx the parse tree
     */
    exitDropViewStatement?: (ctx: DropViewStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.showCreateViewStatement`.
     * @param ctx the parse tree
     */
    enterShowCreateViewStatement?: (ctx: ShowCreateViewStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.showCreateViewStatement`.
     * @param ctx the parse tree
     */
    exitShowCreateViewStatement?: (ctx: ShowCreateViewStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.prefixPath`.
     * @param ctx the parse tree
     */
    enterPrefixPath?: (ctx: PrefixPathContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.prefixPath`.
     * @param ctx the parse tree
     */
    exitPrefixPath?: (ctx: PrefixPathContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.nodeName`.
     * @param ctx the parse tree
     */
    enterNodeName?: (ctx: NodeNameContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.nodeName`.
     * @param ctx the parse tree
     */
    exitNodeName?: (ctx: NodeNameContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.nodeNameWithoutWildcard`.
     * @param ctx the parse tree
     */
    enterNodeNameWithoutWildcard?: (ctx: NodeNameWithoutWildcardContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.nodeNameWithoutWildcard`.
     * @param ctx the parse tree
     */
    exitNodeNameWithoutWildcard?: (ctx: NodeNameWithoutWildcardContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.wildcard`.
     * @param ctx the parse tree
     */
    enterWildcard?: (ctx: WildcardContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.wildcard`.
     * @param ctx the parse tree
     */
    exitWildcard?: (ctx: WildcardContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.createIndexStatement`.
     * @param ctx the parse tree
     */
    enterCreateIndexStatement?: (ctx: CreateIndexStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.createIndexStatement`.
     * @param ctx the parse tree
     */
    exitCreateIndexStatement?: (ctx: CreateIndexStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.identifierList`.
     * @param ctx the parse tree
     */
    enterIdentifierList?: (ctx: IdentifierListContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.identifierList`.
     * @param ctx the parse tree
     */
    exitIdentifierList?: (ctx: IdentifierListContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.dropIndexStatement`.
     * @param ctx the parse tree
     */
    enterDropIndexStatement?: (ctx: DropIndexStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.dropIndexStatement`.
     * @param ctx the parse tree
     */
    exitDropIndexStatement?: (ctx: DropIndexStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.showIndexStatement`.
     * @param ctx the parse tree
     */
    enterShowIndexStatement?: (ctx: ShowIndexStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.showIndexStatement`.
     * @param ctx the parse tree
     */
    exitShowIndexStatement?: (ctx: ShowIndexStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.insertStatement`.
     * @param ctx the parse tree
     */
    enterInsertStatement?: (ctx: InsertStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.insertStatement`.
     * @param ctx the parse tree
     */
    exitInsertStatement?: (ctx: InsertStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.deleteStatement`.
     * @param ctx the parse tree
     */
    enterDeleteStatement?: (ctx: DeleteStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.deleteStatement`.
     * @param ctx the parse tree
     */
    exitDeleteStatement?: (ctx: DeleteStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.updateStatement`.
     * @param ctx the parse tree
     */
    enterUpdateStatement?: (ctx: UpdateStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.updateStatement`.
     * @param ctx the parse tree
     */
    exitUpdateStatement?: (ctx: UpdateStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.deleteDeviceStatement`.
     * @param ctx the parse tree
     */
    enterDeleteDeviceStatement?: (ctx: DeleteDeviceStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.deleteDeviceStatement`.
     * @param ctx the parse tree
     */
    exitDeleteDeviceStatement?: (ctx: DeleteDeviceStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.createFunctionStatement`.
     * @param ctx the parse tree
     */
    enterCreateFunctionStatement?: (ctx: CreateFunctionStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.createFunctionStatement`.
     * @param ctx the parse tree
     */
    exitCreateFunctionStatement?: (ctx: CreateFunctionStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.uriClause`.
     * @param ctx the parse tree
     */
    enterUriClause?: (ctx: UriClauseContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.uriClause`.
     * @param ctx the parse tree
     */
    exitUriClause?: (ctx: UriClauseContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.dropFunctionStatement`.
     * @param ctx the parse tree
     */
    enterDropFunctionStatement?: (ctx: DropFunctionStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.dropFunctionStatement`.
     * @param ctx the parse tree
     */
    exitDropFunctionStatement?: (ctx: DropFunctionStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.showFunctionsStatement`.
     * @param ctx the parse tree
     */
    enterShowFunctionsStatement?: (ctx: ShowFunctionsStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.showFunctionsStatement`.
     * @param ctx the parse tree
     */
    exitShowFunctionsStatement?: (ctx: ShowFunctionsStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.loadTsFileStatement`.
     * @param ctx the parse tree
     */
    enterLoadTsFileStatement?: (ctx: LoadTsFileStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.loadTsFileStatement`.
     * @param ctx the parse tree
     */
    exitLoadTsFileStatement?: (ctx: LoadTsFileStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.loadFileWithAttributesClause`.
     * @param ctx the parse tree
     */
    enterLoadFileWithAttributesClause?: (ctx: LoadFileWithAttributesClauseContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.loadFileWithAttributesClause`.
     * @param ctx the parse tree
     */
    exitLoadFileWithAttributesClause?: (ctx: LoadFileWithAttributesClauseContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.loadFileWithAttributeClause`.
     * @param ctx the parse tree
     */
    enterLoadFileWithAttributeClause?: (ctx: LoadFileWithAttributeClauseContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.loadFileWithAttributeClause`.
     * @param ctx the parse tree
     */
    exitLoadFileWithAttributeClause?: (ctx: LoadFileWithAttributeClauseContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.createPipeStatement`.
     * @param ctx the parse tree
     */
    enterCreatePipeStatement?: (ctx: CreatePipeStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.createPipeStatement`.
     * @param ctx the parse tree
     */
    exitCreatePipeStatement?: (ctx: CreatePipeStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.extractorAttributesClause`.
     * @param ctx the parse tree
     */
    enterExtractorAttributesClause?: (ctx: ExtractorAttributesClauseContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.extractorAttributesClause`.
     * @param ctx the parse tree
     */
    exitExtractorAttributesClause?: (ctx: ExtractorAttributesClauseContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.extractorAttributeClause`.
     * @param ctx the parse tree
     */
    enterExtractorAttributeClause?: (ctx: ExtractorAttributeClauseContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.extractorAttributeClause`.
     * @param ctx the parse tree
     */
    exitExtractorAttributeClause?: (ctx: ExtractorAttributeClauseContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.processorAttributesClause`.
     * @param ctx the parse tree
     */
    enterProcessorAttributesClause?: (ctx: ProcessorAttributesClauseContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.processorAttributesClause`.
     * @param ctx the parse tree
     */
    exitProcessorAttributesClause?: (ctx: ProcessorAttributesClauseContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.processorAttributeClause`.
     * @param ctx the parse tree
     */
    enterProcessorAttributeClause?: (ctx: ProcessorAttributeClauseContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.processorAttributeClause`.
     * @param ctx the parse tree
     */
    exitProcessorAttributeClause?: (ctx: ProcessorAttributeClauseContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.connectorAttributesClause`.
     * @param ctx the parse tree
     */
    enterConnectorAttributesClause?: (ctx: ConnectorAttributesClauseContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.connectorAttributesClause`.
     * @param ctx the parse tree
     */
    exitConnectorAttributesClause?: (ctx: ConnectorAttributesClauseContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.connectorAttributesWithoutWithSinkClause`.
     * @param ctx the parse tree
     */
    enterConnectorAttributesWithoutWithSinkClause?: (ctx: ConnectorAttributesWithoutWithSinkClauseContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.connectorAttributesWithoutWithSinkClause`.
     * @param ctx the parse tree
     */
    exitConnectorAttributesWithoutWithSinkClause?: (ctx: ConnectorAttributesWithoutWithSinkClauseContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.connectorAttributeClause`.
     * @param ctx the parse tree
     */
    enterConnectorAttributeClause?: (ctx: ConnectorAttributeClauseContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.connectorAttributeClause`.
     * @param ctx the parse tree
     */
    exitConnectorAttributeClause?: (ctx: ConnectorAttributeClauseContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.alterPipeStatement`.
     * @param ctx the parse tree
     */
    enterAlterPipeStatement?: (ctx: AlterPipeStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.alterPipeStatement`.
     * @param ctx the parse tree
     */
    exitAlterPipeStatement?: (ctx: AlterPipeStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.alterExtractorAttributesClause`.
     * @param ctx the parse tree
     */
    enterAlterExtractorAttributesClause?: (ctx: AlterExtractorAttributesClauseContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.alterExtractorAttributesClause`.
     * @param ctx the parse tree
     */
    exitAlterExtractorAttributesClause?: (ctx: AlterExtractorAttributesClauseContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.alterProcessorAttributesClause`.
     * @param ctx the parse tree
     */
    enterAlterProcessorAttributesClause?: (ctx: AlterProcessorAttributesClauseContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.alterProcessorAttributesClause`.
     * @param ctx the parse tree
     */
    exitAlterProcessorAttributesClause?: (ctx: AlterProcessorAttributesClauseContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.alterConnectorAttributesClause`.
     * @param ctx the parse tree
     */
    enterAlterConnectorAttributesClause?: (ctx: AlterConnectorAttributesClauseContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.alterConnectorAttributesClause`.
     * @param ctx the parse tree
     */
    exitAlterConnectorAttributesClause?: (ctx: AlterConnectorAttributesClauseContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.dropPipeStatement`.
     * @param ctx the parse tree
     */
    enterDropPipeStatement?: (ctx: DropPipeStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.dropPipeStatement`.
     * @param ctx the parse tree
     */
    exitDropPipeStatement?: (ctx: DropPipeStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.startPipeStatement`.
     * @param ctx the parse tree
     */
    enterStartPipeStatement?: (ctx: StartPipeStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.startPipeStatement`.
     * @param ctx the parse tree
     */
    exitStartPipeStatement?: (ctx: StartPipeStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.stopPipeStatement`.
     * @param ctx the parse tree
     */
    enterStopPipeStatement?: (ctx: StopPipeStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.stopPipeStatement`.
     * @param ctx the parse tree
     */
    exitStopPipeStatement?: (ctx: StopPipeStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.showPipesStatement`.
     * @param ctx the parse tree
     */
    enterShowPipesStatement?: (ctx: ShowPipesStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.showPipesStatement`.
     * @param ctx the parse tree
     */
    exitShowPipesStatement?: (ctx: ShowPipesStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.createPipePluginStatement`.
     * @param ctx the parse tree
     */
    enterCreatePipePluginStatement?: (ctx: CreatePipePluginStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.createPipePluginStatement`.
     * @param ctx the parse tree
     */
    exitCreatePipePluginStatement?: (ctx: CreatePipePluginStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.dropPipePluginStatement`.
     * @param ctx the parse tree
     */
    enterDropPipePluginStatement?: (ctx: DropPipePluginStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.dropPipePluginStatement`.
     * @param ctx the parse tree
     */
    exitDropPipePluginStatement?: (ctx: DropPipePluginStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.showPipePluginsStatement`.
     * @param ctx the parse tree
     */
    enterShowPipePluginsStatement?: (ctx: ShowPipePluginsStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.showPipePluginsStatement`.
     * @param ctx the parse tree
     */
    exitShowPipePluginsStatement?: (ctx: ShowPipePluginsStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.createTopicStatement`.
     * @param ctx the parse tree
     */
    enterCreateTopicStatement?: (ctx: CreateTopicStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.createTopicStatement`.
     * @param ctx the parse tree
     */
    exitCreateTopicStatement?: (ctx: CreateTopicStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.topicAttributesClause`.
     * @param ctx the parse tree
     */
    enterTopicAttributesClause?: (ctx: TopicAttributesClauseContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.topicAttributesClause`.
     * @param ctx the parse tree
     */
    exitTopicAttributesClause?: (ctx: TopicAttributesClauseContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.topicAttributeClause`.
     * @param ctx the parse tree
     */
    enterTopicAttributeClause?: (ctx: TopicAttributeClauseContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.topicAttributeClause`.
     * @param ctx the parse tree
     */
    exitTopicAttributeClause?: (ctx: TopicAttributeClauseContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.dropTopicStatement`.
     * @param ctx the parse tree
     */
    enterDropTopicStatement?: (ctx: DropTopicStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.dropTopicStatement`.
     * @param ctx the parse tree
     */
    exitDropTopicStatement?: (ctx: DropTopicStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.showTopicsStatement`.
     * @param ctx the parse tree
     */
    enterShowTopicsStatement?: (ctx: ShowTopicsStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.showTopicsStatement`.
     * @param ctx the parse tree
     */
    exitShowTopicsStatement?: (ctx: ShowTopicsStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.showSubscriptionsStatement`.
     * @param ctx the parse tree
     */
    enterShowSubscriptionsStatement?: (ctx: ShowSubscriptionsStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.showSubscriptionsStatement`.
     * @param ctx the parse tree
     */
    exitShowSubscriptionsStatement?: (ctx: ShowSubscriptionsStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.dropSubscriptionStatement`.
     * @param ctx the parse tree
     */
    enterDropSubscriptionStatement?: (ctx: DropSubscriptionStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.dropSubscriptionStatement`.
     * @param ctx the parse tree
     */
    exitDropSubscriptionStatement?: (ctx: DropSubscriptionStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.showDevicesStatement`.
     * @param ctx the parse tree
     */
    enterShowDevicesStatement?: (ctx: ShowDevicesStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.showDevicesStatement`.
     * @param ctx the parse tree
     */
    exitShowDevicesStatement?: (ctx: ShowDevicesStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.countDevicesStatement`.
     * @param ctx the parse tree
     */
    enterCountDevicesStatement?: (ctx: CountDevicesStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.countDevicesStatement`.
     * @param ctx the parse tree
     */
    exitCountDevicesStatement?: (ctx: CountDevicesStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.showClusterStatement`.
     * @param ctx the parse tree
     */
    enterShowClusterStatement?: (ctx: ShowClusterStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.showClusterStatement`.
     * @param ctx the parse tree
     */
    exitShowClusterStatement?: (ctx: ShowClusterStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.showRegionsStatement`.
     * @param ctx the parse tree
     */
    enterShowRegionsStatement?: (ctx: ShowRegionsStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.showRegionsStatement`.
     * @param ctx the parse tree
     */
    exitShowRegionsStatement?: (ctx: ShowRegionsStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.showDataNodesStatement`.
     * @param ctx the parse tree
     */
    enterShowDataNodesStatement?: (ctx: ShowDataNodesStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.showDataNodesStatement`.
     * @param ctx the parse tree
     */
    exitShowDataNodesStatement?: (ctx: ShowDataNodesStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.showConfigNodesStatement`.
     * @param ctx the parse tree
     */
    enterShowConfigNodesStatement?: (ctx: ShowConfigNodesStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.showConfigNodesStatement`.
     * @param ctx the parse tree
     */
    exitShowConfigNodesStatement?: (ctx: ShowConfigNodesStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.showAINodesStatement`.
     * @param ctx the parse tree
     */
    enterShowAINodesStatement?: (ctx: ShowAINodesStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.showAINodesStatement`.
     * @param ctx the parse tree
     */
    exitShowAINodesStatement?: (ctx: ShowAINodesStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.showClusterIdStatement`.
     * @param ctx the parse tree
     */
    enterShowClusterIdStatement?: (ctx: ShowClusterIdStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.showClusterIdStatement`.
     * @param ctx the parse tree
     */
    exitShowClusterIdStatement?: (ctx: ShowClusterIdStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.showRegionIdStatement`.
     * @param ctx the parse tree
     */
    enterShowRegionIdStatement?: (ctx: ShowRegionIdStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.showRegionIdStatement`.
     * @param ctx the parse tree
     */
    exitShowRegionIdStatement?: (ctx: ShowRegionIdStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.showTimeSlotListStatement`.
     * @param ctx the parse tree
     */
    enterShowTimeSlotListStatement?: (ctx: ShowTimeSlotListStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.showTimeSlotListStatement`.
     * @param ctx the parse tree
     */
    exitShowTimeSlotListStatement?: (ctx: ShowTimeSlotListStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.countTimeSlotListStatement`.
     * @param ctx the parse tree
     */
    enterCountTimeSlotListStatement?: (ctx: CountTimeSlotListStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.countTimeSlotListStatement`.
     * @param ctx the parse tree
     */
    exitCountTimeSlotListStatement?: (ctx: CountTimeSlotListStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.showSeriesSlotListStatement`.
     * @param ctx the parse tree
     */
    enterShowSeriesSlotListStatement?: (ctx: ShowSeriesSlotListStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.showSeriesSlotListStatement`.
     * @param ctx the parse tree
     */
    exitShowSeriesSlotListStatement?: (ctx: ShowSeriesSlotListStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.migrateRegionStatement`.
     * @param ctx the parse tree
     */
    enterMigrateRegionStatement?: (ctx: MigrateRegionStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.migrateRegionStatement`.
     * @param ctx the parse tree
     */
    exitMigrateRegionStatement?: (ctx: MigrateRegionStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.reconstructRegionStatement`.
     * @param ctx the parse tree
     */
    enterReconstructRegionStatement?: (ctx: ReconstructRegionStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.reconstructRegionStatement`.
     * @param ctx the parse tree
     */
    exitReconstructRegionStatement?: (ctx: ReconstructRegionStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.extendRegionStatement`.
     * @param ctx the parse tree
     */
    enterExtendRegionStatement?: (ctx: ExtendRegionStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.extendRegionStatement`.
     * @param ctx the parse tree
     */
    exitExtendRegionStatement?: (ctx: ExtendRegionStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.removeRegionStatement`.
     * @param ctx the parse tree
     */
    enterRemoveRegionStatement?: (ctx: RemoveRegionStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.removeRegionStatement`.
     * @param ctx the parse tree
     */
    exitRemoveRegionStatement?: (ctx: RemoveRegionStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.removeDataNodeStatement`.
     * @param ctx the parse tree
     */
    enterRemoveDataNodeStatement?: (ctx: RemoveDataNodeStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.removeDataNodeStatement`.
     * @param ctx the parse tree
     */
    exitRemoveDataNodeStatement?: (ctx: RemoveDataNodeStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.showSystemInfo`.
     * @param ctx the parse tree
     */
    enterShowSystemInfo?: (ctx: ShowSystemInfoContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.showSystemInfo`.
     * @param ctx the parse tree
     */
    exitShowSystemInfo?: (ctx: ShowSystemInfoContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.activate`.
     * @param ctx the parse tree
     */
    enterActivate?: (ctx: ActivateContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.activate`.
     * @param ctx the parse tree
     */
    exitActivate?: (ctx: ActivateContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.showActivation`.
     * @param ctx the parse tree
     */
    enterShowActivation?: (ctx: ShowActivationContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.showActivation`.
     * @param ctx the parse tree
     */
    exitShowActivation?: (ctx: ShowActivationContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.removeConfigNodeStatement`.
     * @param ctx the parse tree
     */
    enterRemoveConfigNodeStatement?: (ctx: RemoveConfigNodeStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.removeConfigNodeStatement`.
     * @param ctx the parse tree
     */
    exitRemoveConfigNodeStatement?: (ctx: RemoveConfigNodeStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.removeAINodeStatement`.
     * @param ctx the parse tree
     */
    enterRemoveAINodeStatement?: (ctx: RemoveAINodeStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.removeAINodeStatement`.
     * @param ctx the parse tree
     */
    exitRemoveAINodeStatement?: (ctx: RemoveAINodeStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.showVariablesStatement`.
     * @param ctx the parse tree
     */
    enterShowVariablesStatement?: (ctx: ShowVariablesStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.showVariablesStatement`.
     * @param ctx the parse tree
     */
    exitShowVariablesStatement?: (ctx: ShowVariablesStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.flushStatement`.
     * @param ctx the parse tree
     */
    enterFlushStatement?: (ctx: FlushStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.flushStatement`.
     * @param ctx the parse tree
     */
    exitFlushStatement?: (ctx: FlushStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.clearCacheStatement`.
     * @param ctx the parse tree
     */
    enterClearCacheStatement?: (ctx: ClearCacheStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.clearCacheStatement`.
     * @param ctx the parse tree
     */
    exitClearCacheStatement?: (ctx: ClearCacheStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.startRepairDataStatement`.
     * @param ctx the parse tree
     */
    enterStartRepairDataStatement?: (ctx: StartRepairDataStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.startRepairDataStatement`.
     * @param ctx the parse tree
     */
    exitStartRepairDataStatement?: (ctx: StartRepairDataStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.stopRepairDataStatement`.
     * @param ctx the parse tree
     */
    enterStopRepairDataStatement?: (ctx: StopRepairDataStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.stopRepairDataStatement`.
     * @param ctx the parse tree
     */
    exitStopRepairDataStatement?: (ctx: StopRepairDataStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.setSystemStatusStatement`.
     * @param ctx the parse tree
     */
    enterSetSystemStatusStatement?: (ctx: SetSystemStatusStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.setSystemStatusStatement`.
     * @param ctx the parse tree
     */
    exitSetSystemStatusStatement?: (ctx: SetSystemStatusStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.showVersionStatement`.
     * @param ctx the parse tree
     */
    enterShowVersionStatement?: (ctx: ShowVersionStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.showVersionStatement`.
     * @param ctx the parse tree
     */
    exitShowVersionStatement?: (ctx: ShowVersionStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.showQueriesStatement`.
     * @param ctx the parse tree
     */
    enterShowQueriesStatement?: (ctx: ShowQueriesStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.showQueriesStatement`.
     * @param ctx the parse tree
     */
    exitShowQueriesStatement?: (ctx: ShowQueriesStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.killQueryStatement`.
     * @param ctx the parse tree
     */
    enterKillQueryStatement?: (ctx: KillQueryStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.killQueryStatement`.
     * @param ctx the parse tree
     */
    exitKillQueryStatement?: (ctx: KillQueryStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.loadConfigurationStatement`.
     * @param ctx the parse tree
     */
    enterLoadConfigurationStatement?: (ctx: LoadConfigurationStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.loadConfigurationStatement`.
     * @param ctx the parse tree
     */
    exitLoadConfigurationStatement?: (ctx: LoadConfigurationStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.setConfigurationStatement`.
     * @param ctx the parse tree
     */
    enterSetConfigurationStatement?: (ctx: SetConfigurationStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.setConfigurationStatement`.
     * @param ctx the parse tree
     */
    exitSetConfigurationStatement?: (ctx: SetConfigurationStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.clearCacheOptions`.
     * @param ctx the parse tree
     */
    enterClearCacheOptions?: (ctx: ClearCacheOptionsContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.clearCacheOptions`.
     * @param ctx the parse tree
     */
    exitClearCacheOptions?: (ctx: ClearCacheOptionsContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.localOrClusterMode`.
     * @param ctx the parse tree
     */
    enterLocalOrClusterMode?: (ctx: LocalOrClusterModeContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.localOrClusterMode`.
     * @param ctx the parse tree
     */
    exitLocalOrClusterMode?: (ctx: LocalOrClusterModeContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.showCurrentSqlDialectStatement`.
     * @param ctx the parse tree
     */
    enterShowCurrentSqlDialectStatement?: (ctx: ShowCurrentSqlDialectStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.showCurrentSqlDialectStatement`.
     * @param ctx the parse tree
     */
    exitShowCurrentSqlDialectStatement?: (ctx: ShowCurrentSqlDialectStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.setSqlDialectStatement`.
     * @param ctx the parse tree
     */
    enterSetSqlDialectStatement?: (ctx: SetSqlDialectStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.setSqlDialectStatement`.
     * @param ctx the parse tree
     */
    exitSetSqlDialectStatement?: (ctx: SetSqlDialectStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.showCurrentUserStatement`.
     * @param ctx the parse tree
     */
    enterShowCurrentUserStatement?: (ctx: ShowCurrentUserStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.showCurrentUserStatement`.
     * @param ctx the parse tree
     */
    exitShowCurrentUserStatement?: (ctx: ShowCurrentUserStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.showCurrentDatabaseStatement`.
     * @param ctx the parse tree
     */
    enterShowCurrentDatabaseStatement?: (ctx: ShowCurrentDatabaseStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.showCurrentDatabaseStatement`.
     * @param ctx the parse tree
     */
    exitShowCurrentDatabaseStatement?: (ctx: ShowCurrentDatabaseStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.showCurrentTimestampStatement`.
     * @param ctx the parse tree
     */
    enterShowCurrentTimestampStatement?: (ctx: ShowCurrentTimestampStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.showCurrentTimestampStatement`.
     * @param ctx the parse tree
     */
    exitShowCurrentTimestampStatement?: (ctx: ShowCurrentTimestampStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.createUserStatement`.
     * @param ctx the parse tree
     */
    enterCreateUserStatement?: (ctx: CreateUserStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.createUserStatement`.
     * @param ctx the parse tree
     */
    exitCreateUserStatement?: (ctx: CreateUserStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.createRoleStatement`.
     * @param ctx the parse tree
     */
    enterCreateRoleStatement?: (ctx: CreateRoleStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.createRoleStatement`.
     * @param ctx the parse tree
     */
    exitCreateRoleStatement?: (ctx: CreateRoleStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.dropUserStatement`.
     * @param ctx the parse tree
     */
    enterDropUserStatement?: (ctx: DropUserStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.dropUserStatement`.
     * @param ctx the parse tree
     */
    exitDropUserStatement?: (ctx: DropUserStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.dropRoleStatement`.
     * @param ctx the parse tree
     */
    enterDropRoleStatement?: (ctx: DropRoleStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.dropRoleStatement`.
     * @param ctx the parse tree
     */
    exitDropRoleStatement?: (ctx: DropRoleStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.alterUserStatement`.
     * @param ctx the parse tree
     */
    enterAlterUserStatement?: (ctx: AlterUserStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.alterUserStatement`.
     * @param ctx the parse tree
     */
    exitAlterUserStatement?: (ctx: AlterUserStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.grantUserRoleStatement`.
     * @param ctx the parse tree
     */
    enterGrantUserRoleStatement?: (ctx: GrantUserRoleStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.grantUserRoleStatement`.
     * @param ctx the parse tree
     */
    exitGrantUserRoleStatement?: (ctx: GrantUserRoleStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.revokeUserRoleStatement`.
     * @param ctx the parse tree
     */
    enterRevokeUserRoleStatement?: (ctx: RevokeUserRoleStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.revokeUserRoleStatement`.
     * @param ctx the parse tree
     */
    exitRevokeUserRoleStatement?: (ctx: RevokeUserRoleStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.grantStatement`.
     * @param ctx the parse tree
     */
    enterGrantStatement?: (ctx: GrantStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.grantStatement`.
     * @param ctx the parse tree
     */
    exitGrantStatement?: (ctx: GrantStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.listUserPrivilegeStatement`.
     * @param ctx the parse tree
     */
    enterListUserPrivilegeStatement?: (ctx: ListUserPrivilegeStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.listUserPrivilegeStatement`.
     * @param ctx the parse tree
     */
    exitListUserPrivilegeStatement?: (ctx: ListUserPrivilegeStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.listRolePrivilegeStatement`.
     * @param ctx the parse tree
     */
    enterListRolePrivilegeStatement?: (ctx: ListRolePrivilegeStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.listRolePrivilegeStatement`.
     * @param ctx the parse tree
     */
    exitListRolePrivilegeStatement?: (ctx: ListRolePrivilegeStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.listUserStatement`.
     * @param ctx the parse tree
     */
    enterListUserStatement?: (ctx: ListUserStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.listUserStatement`.
     * @param ctx the parse tree
     */
    exitListUserStatement?: (ctx: ListUserStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.listRoleStatement`.
     * @param ctx the parse tree
     */
    enterListRoleStatement?: (ctx: ListRoleStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.listRoleStatement`.
     * @param ctx the parse tree
     */
    exitListRoleStatement?: (ctx: ListRoleStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.revokeStatement`.
     * @param ctx the parse tree
     */
    enterRevokeStatement?: (ctx: RevokeStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.revokeStatement`.
     * @param ctx the parse tree
     */
    exitRevokeStatement?: (ctx: RevokeStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.privilegeObjectScope`.
     * @param ctx the parse tree
     */
    enterPrivilegeObjectScope?: (ctx: PrivilegeObjectScopeContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.privilegeObjectScope`.
     * @param ctx the parse tree
     */
    exitPrivilegeObjectScope?: (ctx: PrivilegeObjectScopeContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.systemPrivileges`.
     * @param ctx the parse tree
     */
    enterSystemPrivileges?: (ctx: SystemPrivilegesContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.systemPrivileges`.
     * @param ctx the parse tree
     */
    exitSystemPrivileges?: (ctx: SystemPrivilegesContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.objectPrivileges`.
     * @param ctx the parse tree
     */
    enterObjectPrivileges?: (ctx: ObjectPrivilegesContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.objectPrivileges`.
     * @param ctx the parse tree
     */
    exitObjectPrivileges?: (ctx: ObjectPrivilegesContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.objectScope`.
     * @param ctx the parse tree
     */
    enterObjectScope?: (ctx: ObjectScopeContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.objectScope`.
     * @param ctx the parse tree
     */
    exitObjectScope?: (ctx: ObjectScopeContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.systemPrivilege`.
     * @param ctx the parse tree
     */
    enterSystemPrivilege?: (ctx: SystemPrivilegeContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.systemPrivilege`.
     * @param ctx the parse tree
     */
    exitSystemPrivilege?: (ctx: SystemPrivilegeContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.objectPrivilege`.
     * @param ctx the parse tree
     */
    enterObjectPrivilege?: (ctx: ObjectPrivilegeContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.objectPrivilege`.
     * @param ctx the parse tree
     */
    exitObjectPrivilege?: (ctx: ObjectPrivilegeContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.objectType`.
     * @param ctx the parse tree
     */
    enterObjectType?: (ctx: ObjectTypeContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.objectType`.
     * @param ctx the parse tree
     */
    exitObjectType?: (ctx: ObjectTypeContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.holderType`.
     * @param ctx the parse tree
     */
    enterHolderType?: (ctx: HolderTypeContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.holderType`.
     * @param ctx the parse tree
     */
    exitHolderType?: (ctx: HolderTypeContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.grantOpt`.
     * @param ctx the parse tree
     */
    enterGrantOpt?: (ctx: GrantOptContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.grantOpt`.
     * @param ctx the parse tree
     */
    exitGrantOpt?: (ctx: GrantOptContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.revokeGrantOpt`.
     * @param ctx the parse tree
     */
    enterRevokeGrantOpt?: (ctx: RevokeGrantOptContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.revokeGrantOpt`.
     * @param ctx the parse tree
     */
    exitRevokeGrantOpt?: (ctx: RevokeGrantOptContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.createModelStatement`.
     * @param ctx the parse tree
     */
    enterCreateModelStatement?: (ctx: CreateModelStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.createModelStatement`.
     * @param ctx the parse tree
     */
    exitCreateModelStatement?: (ctx: CreateModelStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.hparamPair`.
     * @param ctx the parse tree
     */
    enterHparamPair?: (ctx: HparamPairContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.hparamPair`.
     * @param ctx the parse tree
     */
    exitHparamPair?: (ctx: HparamPairContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.dropModelStatement`.
     * @param ctx the parse tree
     */
    enterDropModelStatement?: (ctx: DropModelStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.dropModelStatement`.
     * @param ctx the parse tree
     */
    exitDropModelStatement?: (ctx: DropModelStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.showModelsStatement`.
     * @param ctx the parse tree
     */
    enterShowModelsStatement?: (ctx: ShowModelsStatementContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.showModelsStatement`.
     * @param ctx the parse tree
     */
    exitShowModelsStatement?: (ctx: ShowModelsStatementContext) => void;
    /**
     * Enter a parse tree produced by the `statementDefault`
     * labeled alternative in `RelationalSqlParser.queryStatement`.
     * @param ctx the parse tree
     */
    enterStatementDefault?: (ctx: StatementDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `statementDefault`
     * labeled alternative in `RelationalSqlParser.queryStatement`.
     * @param ctx the parse tree
     */
    exitStatementDefault?: (ctx: StatementDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `explain`
     * labeled alternative in `RelationalSqlParser.queryStatement`.
     * @param ctx the parse tree
     */
    enterExplain?: (ctx: ExplainContext) => void;
    /**
     * Exit a parse tree produced by the `explain`
     * labeled alternative in `RelationalSqlParser.queryStatement`.
     * @param ctx the parse tree
     */
    exitExplain?: (ctx: ExplainContext) => void;
    /**
     * Enter a parse tree produced by the `explainAnalyze`
     * labeled alternative in `RelationalSqlParser.queryStatement`.
     * @param ctx the parse tree
     */
    enterExplainAnalyze?: (ctx: ExplainAnalyzeContext) => void;
    /**
     * Exit a parse tree produced by the `explainAnalyze`
     * labeled alternative in `RelationalSqlParser.queryStatement`.
     * @param ctx the parse tree
     */
    exitExplainAnalyze?: (ctx: ExplainAnalyzeContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.query`.
     * @param ctx the parse tree
     */
    enterQuery?: (ctx: QueryContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.query`.
     * @param ctx the parse tree
     */
    exitQuery?: (ctx: QueryContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.with`.
     * @param ctx the parse tree
     */
    enterWith?: (ctx: WithContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.with`.
     * @param ctx the parse tree
     */
    exitWith?: (ctx: WithContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.properties`.
     * @param ctx the parse tree
     */
    enterProperties?: (ctx: PropertiesContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.properties`.
     * @param ctx the parse tree
     */
    exitProperties?: (ctx: PropertiesContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.propertyAssignments`.
     * @param ctx the parse tree
     */
    enterPropertyAssignments?: (ctx: PropertyAssignmentsContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.propertyAssignments`.
     * @param ctx the parse tree
     */
    exitPropertyAssignments?: (ctx: PropertyAssignmentsContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.property`.
     * @param ctx the parse tree
     */
    enterProperty?: (ctx: PropertyContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.property`.
     * @param ctx the parse tree
     */
    exitProperty?: (ctx: PropertyContext) => void;
    /**
     * Enter a parse tree produced by the `defaultPropertyValue`
     * labeled alternative in `RelationalSqlParser.propertyValue`.
     * @param ctx the parse tree
     */
    enterDefaultPropertyValue?: (ctx: DefaultPropertyValueContext) => void;
    /**
     * Exit a parse tree produced by the `defaultPropertyValue`
     * labeled alternative in `RelationalSqlParser.propertyValue`.
     * @param ctx the parse tree
     */
    exitDefaultPropertyValue?: (ctx: DefaultPropertyValueContext) => void;
    /**
     * Enter a parse tree produced by the `nonDefaultPropertyValue`
     * labeled alternative in `RelationalSqlParser.propertyValue`.
     * @param ctx the parse tree
     */
    enterNonDefaultPropertyValue?: (ctx: NonDefaultPropertyValueContext) => void;
    /**
     * Exit a parse tree produced by the `nonDefaultPropertyValue`
     * labeled alternative in `RelationalSqlParser.propertyValue`.
     * @param ctx the parse tree
     */
    exitNonDefaultPropertyValue?: (ctx: NonDefaultPropertyValueContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.queryNoWith`.
     * @param ctx the parse tree
     */
    enterQueryNoWith?: (ctx: QueryNoWithContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.queryNoWith`.
     * @param ctx the parse tree
     */
    exitQueryNoWith?: (ctx: QueryNoWithContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.fillClause`.
     * @param ctx the parse tree
     */
    enterFillClause?: (ctx: FillClauseContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.fillClause`.
     * @param ctx the parse tree
     */
    exitFillClause?: (ctx: FillClauseContext) => void;
    /**
     * Enter a parse tree produced by the `linearFill`
     * labeled alternative in `RelationalSqlParser.fillMethod`.
     * @param ctx the parse tree
     */
    enterLinearFill?: (ctx: LinearFillContext) => void;
    /**
     * Exit a parse tree produced by the `linearFill`
     * labeled alternative in `RelationalSqlParser.fillMethod`.
     * @param ctx the parse tree
     */
    exitLinearFill?: (ctx: LinearFillContext) => void;
    /**
     * Enter a parse tree produced by the `previousFill`
     * labeled alternative in `RelationalSqlParser.fillMethod`.
     * @param ctx the parse tree
     */
    enterPreviousFill?: (ctx: PreviousFillContext) => void;
    /**
     * Exit a parse tree produced by the `previousFill`
     * labeled alternative in `RelationalSqlParser.fillMethod`.
     * @param ctx the parse tree
     */
    exitPreviousFill?: (ctx: PreviousFillContext) => void;
    /**
     * Enter a parse tree produced by the `valueFill`
     * labeled alternative in `RelationalSqlParser.fillMethod`.
     * @param ctx the parse tree
     */
    enterValueFill?: (ctx: ValueFillContext) => void;
    /**
     * Exit a parse tree produced by the `valueFill`
     * labeled alternative in `RelationalSqlParser.fillMethod`.
     * @param ctx the parse tree
     */
    exitValueFill?: (ctx: ValueFillContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.timeColumnClause`.
     * @param ctx the parse tree
     */
    enterTimeColumnClause?: (ctx: TimeColumnClauseContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.timeColumnClause`.
     * @param ctx the parse tree
     */
    exitTimeColumnClause?: (ctx: TimeColumnClauseContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.fillGroupClause`.
     * @param ctx the parse tree
     */
    enterFillGroupClause?: (ctx: FillGroupClauseContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.fillGroupClause`.
     * @param ctx the parse tree
     */
    exitFillGroupClause?: (ctx: FillGroupClauseContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.timeBoundClause`.
     * @param ctx the parse tree
     */
    enterTimeBoundClause?: (ctx: TimeBoundClauseContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.timeBoundClause`.
     * @param ctx the parse tree
     */
    exitTimeBoundClause?: (ctx: TimeBoundClauseContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.limitOffsetClause`.
     * @param ctx the parse tree
     */
    enterLimitOffsetClause?: (ctx: LimitOffsetClauseContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.limitOffsetClause`.
     * @param ctx the parse tree
     */
    exitLimitOffsetClause?: (ctx: LimitOffsetClauseContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.limitRowCount`.
     * @param ctx the parse tree
     */
    enterLimitRowCount?: (ctx: LimitRowCountContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.limitRowCount`.
     * @param ctx the parse tree
     */
    exitLimitRowCount?: (ctx: LimitRowCountContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.rowCount`.
     * @param ctx the parse tree
     */
    enterRowCount?: (ctx: RowCountContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.rowCount`.
     * @param ctx the parse tree
     */
    exitRowCount?: (ctx: RowCountContext) => void;
    /**
     * Enter a parse tree produced by the `queryTermDefault`
     * labeled alternative in `RelationalSqlParser.queryTerm`.
     * @param ctx the parse tree
     */
    enterQueryTermDefault?: (ctx: QueryTermDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `queryTermDefault`
     * labeled alternative in `RelationalSqlParser.queryTerm`.
     * @param ctx the parse tree
     */
    exitQueryTermDefault?: (ctx: QueryTermDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `setOperation`
     * labeled alternative in `RelationalSqlParser.queryTerm`.
     * @param ctx the parse tree
     */
    enterSetOperation?: (ctx: SetOperationContext) => void;
    /**
     * Exit a parse tree produced by the `setOperation`
     * labeled alternative in `RelationalSqlParser.queryTerm`.
     * @param ctx the parse tree
     */
    exitSetOperation?: (ctx: SetOperationContext) => void;
    /**
     * Enter a parse tree produced by the `queryPrimaryDefault`
     * labeled alternative in `RelationalSqlParser.queryPrimary`.
     * @param ctx the parse tree
     */
    enterQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `queryPrimaryDefault`
     * labeled alternative in `RelationalSqlParser.queryPrimary`.
     * @param ctx the parse tree
     */
    exitQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `table`
     * labeled alternative in `RelationalSqlParser.queryPrimary`.
     * @param ctx the parse tree
     */
    enterTable?: (ctx: TableContext) => void;
    /**
     * Exit a parse tree produced by the `table`
     * labeled alternative in `RelationalSqlParser.queryPrimary`.
     * @param ctx the parse tree
     */
    exitTable?: (ctx: TableContext) => void;
    /**
     * Enter a parse tree produced by the `inlineTable`
     * labeled alternative in `RelationalSqlParser.queryPrimary`.
     * @param ctx the parse tree
     */
    enterInlineTable?: (ctx: InlineTableContext) => void;
    /**
     * Exit a parse tree produced by the `inlineTable`
     * labeled alternative in `RelationalSqlParser.queryPrimary`.
     * @param ctx the parse tree
     */
    exitInlineTable?: (ctx: InlineTableContext) => void;
    /**
     * Enter a parse tree produced by the `subquery`
     * labeled alternative in `RelationalSqlParser.queryPrimary`.
     * @param ctx the parse tree
     */
    enterSubquery?: (ctx: SubqueryContext) => void;
    /**
     * Exit a parse tree produced by the `subquery`
     * labeled alternative in `RelationalSqlParser.queryPrimary`.
     * @param ctx the parse tree
     */
    exitSubquery?: (ctx: SubqueryContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.sortItem`.
     * @param ctx the parse tree
     */
    enterSortItem?: (ctx: SortItemContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.sortItem`.
     * @param ctx the parse tree
     */
    exitSortItem?: (ctx: SortItemContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.querySpecification`.
     * @param ctx the parse tree
     */
    enterQuerySpecification?: (ctx: QuerySpecificationContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.querySpecification`.
     * @param ctx the parse tree
     */
    exitQuerySpecification?: (ctx: QuerySpecificationContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.groupBy`.
     * @param ctx the parse tree
     */
    enterGroupBy?: (ctx: GroupByContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.groupBy`.
     * @param ctx the parse tree
     */
    exitGroupBy?: (ctx: GroupByContext) => void;
    /**
     * Enter a parse tree produced by the `singleGroupingSet`
     * labeled alternative in `RelationalSqlParser.groupingElement`.
     * @param ctx the parse tree
     */
    enterSingleGroupingSet?: (ctx: SingleGroupingSetContext) => void;
    /**
     * Exit a parse tree produced by the `singleGroupingSet`
     * labeled alternative in `RelationalSqlParser.groupingElement`.
     * @param ctx the parse tree
     */
    exitSingleGroupingSet?: (ctx: SingleGroupingSetContext) => void;
    /**
     * Enter a parse tree produced by the `rollup`
     * labeled alternative in `RelationalSqlParser.groupingElement`.
     * @param ctx the parse tree
     */
    enterRollup?: (ctx: RollupContext) => void;
    /**
     * Exit a parse tree produced by the `rollup`
     * labeled alternative in `RelationalSqlParser.groupingElement`.
     * @param ctx the parse tree
     */
    exitRollup?: (ctx: RollupContext) => void;
    /**
     * Enter a parse tree produced by the `cube`
     * labeled alternative in `RelationalSqlParser.groupingElement`.
     * @param ctx the parse tree
     */
    enterCube?: (ctx: CubeContext) => void;
    /**
     * Exit a parse tree produced by the `cube`
     * labeled alternative in `RelationalSqlParser.groupingElement`.
     * @param ctx the parse tree
     */
    exitCube?: (ctx: CubeContext) => void;
    /**
     * Enter a parse tree produced by the `multipleGroupingSets`
     * labeled alternative in `RelationalSqlParser.groupingElement`.
     * @param ctx the parse tree
     */
    enterMultipleGroupingSets?: (ctx: MultipleGroupingSetsContext) => void;
    /**
     * Exit a parse tree produced by the `multipleGroupingSets`
     * labeled alternative in `RelationalSqlParser.groupingElement`.
     * @param ctx the parse tree
     */
    exitMultipleGroupingSets?: (ctx: MultipleGroupingSetsContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.timeValue`.
     * @param ctx the parse tree
     */
    enterTimeValue?: (ctx: TimeValueContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.timeValue`.
     * @param ctx the parse tree
     */
    exitTimeValue?: (ctx: TimeValueContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.dateExpression`.
     * @param ctx the parse tree
     */
    enterDateExpression?: (ctx: DateExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.dateExpression`.
     * @param ctx the parse tree
     */
    exitDateExpression?: (ctx: DateExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.datetime`.
     * @param ctx the parse tree
     */
    enterDatetime?: (ctx: DatetimeContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.datetime`.
     * @param ctx the parse tree
     */
    exitDatetime?: (ctx: DatetimeContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.keepExpression`.
     * @param ctx the parse tree
     */
    enterKeepExpression?: (ctx: KeepExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.keepExpression`.
     * @param ctx the parse tree
     */
    exitKeepExpression?: (ctx: KeepExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.groupingSet`.
     * @param ctx the parse tree
     */
    enterGroupingSet?: (ctx: GroupingSetContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.groupingSet`.
     * @param ctx the parse tree
     */
    exitGroupingSet?: (ctx: GroupingSetContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.namedQuery`.
     * @param ctx the parse tree
     */
    enterNamedQuery?: (ctx: NamedQueryContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.namedQuery`.
     * @param ctx the parse tree
     */
    exitNamedQuery?: (ctx: NamedQueryContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.setQuantifier`.
     * @param ctx the parse tree
     */
    enterSetQuantifier?: (ctx: SetQuantifierContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.setQuantifier`.
     * @param ctx the parse tree
     */
    exitSetQuantifier?: (ctx: SetQuantifierContext) => void;
    /**
     * Enter a parse tree produced by the `selectSingle`
     * labeled alternative in `RelationalSqlParser.selectItem`.
     * @param ctx the parse tree
     */
    enterSelectSingle?: (ctx: SelectSingleContext) => void;
    /**
     * Exit a parse tree produced by the `selectSingle`
     * labeled alternative in `RelationalSqlParser.selectItem`.
     * @param ctx the parse tree
     */
    exitSelectSingle?: (ctx: SelectSingleContext) => void;
    /**
     * Enter a parse tree produced by the `selectAll`
     * labeled alternative in `RelationalSqlParser.selectItem`.
     * @param ctx the parse tree
     */
    enterSelectAll?: (ctx: SelectAllContext) => void;
    /**
     * Exit a parse tree produced by the `selectAll`
     * labeled alternative in `RelationalSqlParser.selectItem`.
     * @param ctx the parse tree
     */
    exitSelectAll?: (ctx: SelectAllContext) => void;
    /**
     * Enter a parse tree produced by the `relationDefault`
     * labeled alternative in `RelationalSqlParser.relation`.
     * @param ctx the parse tree
     */
    enterRelationDefault?: (ctx: RelationDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `relationDefault`
     * labeled alternative in `RelationalSqlParser.relation`.
     * @param ctx the parse tree
     */
    exitRelationDefault?: (ctx: RelationDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `patternRecognitionRelation`
     * labeled alternative in `RelationalSqlParser.relation`.
     * @param ctx the parse tree
     */
    enterPatternRecognitionRelation?: (ctx: PatternRecognitionRelationContext) => void;
    /**
     * Exit a parse tree produced by the `patternRecognitionRelation`
     * labeled alternative in `RelationalSqlParser.relation`.
     * @param ctx the parse tree
     */
    exitPatternRecognitionRelation?: (ctx: PatternRecognitionRelationContext) => void;
    /**
     * Enter a parse tree produced by the `joinRelation`
     * labeled alternative in `RelationalSqlParser.relation`.
     * @param ctx the parse tree
     */
    enterJoinRelation?: (ctx: JoinRelationContext) => void;
    /**
     * Exit a parse tree produced by the `joinRelation`
     * labeled alternative in `RelationalSqlParser.relation`.
     * @param ctx the parse tree
     */
    exitJoinRelation?: (ctx: JoinRelationContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.joinType`.
     * @param ctx the parse tree
     */
    enterJoinType?: (ctx: JoinTypeContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.joinType`.
     * @param ctx the parse tree
     */
    exitJoinType?: (ctx: JoinTypeContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.joinCriteria`.
     * @param ctx the parse tree
     */
    enterJoinCriteria?: (ctx: JoinCriteriaContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.joinCriteria`.
     * @param ctx the parse tree
     */
    exitJoinCriteria?: (ctx: JoinCriteriaContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.patternRecognition`.
     * @param ctx the parse tree
     */
    enterPatternRecognition?: (ctx: PatternRecognitionContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.patternRecognition`.
     * @param ctx the parse tree
     */
    exitPatternRecognition?: (ctx: PatternRecognitionContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.measureDefinition`.
     * @param ctx the parse tree
     */
    enterMeasureDefinition?: (ctx: MeasureDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.measureDefinition`.
     * @param ctx the parse tree
     */
    exitMeasureDefinition?: (ctx: MeasureDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.rowsPerMatch`.
     * @param ctx the parse tree
     */
    enterRowsPerMatch?: (ctx: RowsPerMatchContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.rowsPerMatch`.
     * @param ctx the parse tree
     */
    exitRowsPerMatch?: (ctx: RowsPerMatchContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.emptyMatchHandling`.
     * @param ctx the parse tree
     */
    enterEmptyMatchHandling?: (ctx: EmptyMatchHandlingContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.emptyMatchHandling`.
     * @param ctx the parse tree
     */
    exitEmptyMatchHandling?: (ctx: EmptyMatchHandlingContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.skipTo`.
     * @param ctx the parse tree
     */
    enterSkipTo?: (ctx: SkipToContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.skipTo`.
     * @param ctx the parse tree
     */
    exitSkipTo?: (ctx: SkipToContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.subsetDefinition`.
     * @param ctx the parse tree
     */
    enterSubsetDefinition?: (ctx: SubsetDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.subsetDefinition`.
     * @param ctx the parse tree
     */
    exitSubsetDefinition?: (ctx: SubsetDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.variableDefinition`.
     * @param ctx the parse tree
     */
    enterVariableDefinition?: (ctx: VariableDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.variableDefinition`.
     * @param ctx the parse tree
     */
    exitVariableDefinition?: (ctx: VariableDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.aliasedRelation`.
     * @param ctx the parse tree
     */
    enterAliasedRelation?: (ctx: AliasedRelationContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.aliasedRelation`.
     * @param ctx the parse tree
     */
    exitAliasedRelation?: (ctx: AliasedRelationContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.columnAliases`.
     * @param ctx the parse tree
     */
    enterColumnAliases?: (ctx: ColumnAliasesContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.columnAliases`.
     * @param ctx the parse tree
     */
    exitColumnAliases?: (ctx: ColumnAliasesContext) => void;
    /**
     * Enter a parse tree produced by the `tableName`
     * labeled alternative in `RelationalSqlParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterTableName?: (ctx: TableNameContext) => void;
    /**
     * Exit a parse tree produced by the `tableName`
     * labeled alternative in `RelationalSqlParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitTableName?: (ctx: TableNameContext) => void;
    /**
     * Enter a parse tree produced by the `subqueryRelation`
     * labeled alternative in `RelationalSqlParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterSubqueryRelation?: (ctx: SubqueryRelationContext) => void;
    /**
     * Exit a parse tree produced by the `subqueryRelation`
     * labeled alternative in `RelationalSqlParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitSubqueryRelation?: (ctx: SubqueryRelationContext) => void;
    /**
     * Enter a parse tree produced by the `parenthesizedRelation`
     * labeled alternative in `RelationalSqlParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterParenthesizedRelation?: (ctx: ParenthesizedRelationContext) => void;
    /**
     * Exit a parse tree produced by the `parenthesizedRelation`
     * labeled alternative in `RelationalSqlParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitParenthesizedRelation?: (ctx: ParenthesizedRelationContext) => void;
    /**
     * Enter a parse tree produced by the `tableFunctionInvocationWithTableKeyWord`
     * labeled alternative in `RelationalSqlParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterTableFunctionInvocationWithTableKeyWord?: (ctx: TableFunctionInvocationWithTableKeyWordContext) => void;
    /**
     * Exit a parse tree produced by the `tableFunctionInvocationWithTableKeyWord`
     * labeled alternative in `RelationalSqlParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitTableFunctionInvocationWithTableKeyWord?: (ctx: TableFunctionInvocationWithTableKeyWordContext) => void;
    /**
     * Enter a parse tree produced by the `tableFunctionInvocation`
     * labeled alternative in `RelationalSqlParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterTableFunctionInvocation?: (ctx: TableFunctionInvocationContext) => void;
    /**
     * Exit a parse tree produced by the `tableFunctionInvocation`
     * labeled alternative in `RelationalSqlParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitTableFunctionInvocation?: (ctx: TableFunctionInvocationContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.tableFunctionCall`.
     * @param ctx the parse tree
     */
    enterTableFunctionCall?: (ctx: TableFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.tableFunctionCall`.
     * @param ctx the parse tree
     */
    exitTableFunctionCall?: (ctx: TableFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.tableFunctionArgument`.
     * @param ctx the parse tree
     */
    enterTableFunctionArgument?: (ctx: TableFunctionArgumentContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.tableFunctionArgument`.
     * @param ctx the parse tree
     */
    exitTableFunctionArgument?: (ctx: TableFunctionArgumentContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.tableArgument`.
     * @param ctx the parse tree
     */
    enterTableArgument?: (ctx: TableArgumentContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.tableArgument`.
     * @param ctx the parse tree
     */
    exitTableArgument?: (ctx: TableArgumentContext) => void;
    /**
     * Enter a parse tree produced by the `tableArgumentTableWithTableKeyWord`
     * labeled alternative in `RelationalSqlParser.tableArgumentRelation`.
     * @param ctx the parse tree
     */
    enterTableArgumentTableWithTableKeyWord?: (ctx: TableArgumentTableWithTableKeyWordContext) => void;
    /**
     * Exit a parse tree produced by the `tableArgumentTableWithTableKeyWord`
     * labeled alternative in `RelationalSqlParser.tableArgumentRelation`.
     * @param ctx the parse tree
     */
    exitTableArgumentTableWithTableKeyWord?: (ctx: TableArgumentTableWithTableKeyWordContext) => void;
    /**
     * Enter a parse tree produced by the `tableArgumentTable`
     * labeled alternative in `RelationalSqlParser.tableArgumentRelation`.
     * @param ctx the parse tree
     */
    enterTableArgumentTable?: (ctx: TableArgumentTableContext) => void;
    /**
     * Exit a parse tree produced by the `tableArgumentTable`
     * labeled alternative in `RelationalSqlParser.tableArgumentRelation`.
     * @param ctx the parse tree
     */
    exitTableArgumentTable?: (ctx: TableArgumentTableContext) => void;
    /**
     * Enter a parse tree produced by the `tableArgumentQueryWithTableKeyWord`
     * labeled alternative in `RelationalSqlParser.tableArgumentRelation`.
     * @param ctx the parse tree
     */
    enterTableArgumentQueryWithTableKeyWord?: (ctx: TableArgumentQueryWithTableKeyWordContext) => void;
    /**
     * Exit a parse tree produced by the `tableArgumentQueryWithTableKeyWord`
     * labeled alternative in `RelationalSqlParser.tableArgumentRelation`.
     * @param ctx the parse tree
     */
    exitTableArgumentQueryWithTableKeyWord?: (ctx: TableArgumentQueryWithTableKeyWordContext) => void;
    /**
     * Enter a parse tree produced by the `tableArgumentQuery`
     * labeled alternative in `RelationalSqlParser.tableArgumentRelation`.
     * @param ctx the parse tree
     */
    enterTableArgumentQuery?: (ctx: TableArgumentQueryContext) => void;
    /**
     * Exit a parse tree produced by the `tableArgumentQuery`
     * labeled alternative in `RelationalSqlParser.tableArgumentRelation`.
     * @param ctx the parse tree
     */
    exitTableArgumentQuery?: (ctx: TableArgumentQueryContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.scalarArgument`.
     * @param ctx the parse tree
     */
    enterScalarArgument?: (ctx: ScalarArgumentContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.scalarArgument`.
     * @param ctx the parse tree
     */
    exitScalarArgument?: (ctx: ScalarArgumentContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `logicalNot`
     * labeled alternative in `RelationalSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterLogicalNot?: (ctx: LogicalNotContext) => void;
    /**
     * Exit a parse tree produced by the `logicalNot`
     * labeled alternative in `RelationalSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitLogicalNot?: (ctx: LogicalNotContext) => void;
    /**
     * Enter a parse tree produced by the `predicated`
     * labeled alternative in `RelationalSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterPredicated?: (ctx: PredicatedContext) => void;
    /**
     * Exit a parse tree produced by the `predicated`
     * labeled alternative in `RelationalSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitPredicated?: (ctx: PredicatedContext) => void;
    /**
     * Enter a parse tree produced by the `or`
     * labeled alternative in `RelationalSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterOr?: (ctx: OrContext) => void;
    /**
     * Exit a parse tree produced by the `or`
     * labeled alternative in `RelationalSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitOr?: (ctx: OrContext) => void;
    /**
     * Enter a parse tree produced by the `and`
     * labeled alternative in `RelationalSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterAnd?: (ctx: AndContext) => void;
    /**
     * Exit a parse tree produced by the `and`
     * labeled alternative in `RelationalSqlParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitAnd?: (ctx: AndContext) => void;
    /**
     * Enter a parse tree produced by the `comparison`
     * labeled alternative in `RelationalSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterComparison?: (ctx: ComparisonContext) => void;
    /**
     * Exit a parse tree produced by the `comparison`
     * labeled alternative in `RelationalSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitComparison?: (ctx: ComparisonContext) => void;
    /**
     * Enter a parse tree produced by the `quantifiedComparison`
     * labeled alternative in `RelationalSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterQuantifiedComparison?: (ctx: QuantifiedComparisonContext) => void;
    /**
     * Exit a parse tree produced by the `quantifiedComparison`
     * labeled alternative in `RelationalSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitQuantifiedComparison?: (ctx: QuantifiedComparisonContext) => void;
    /**
     * Enter a parse tree produced by the `between`
     * labeled alternative in `RelationalSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterBetween?: (ctx: BetweenContext) => void;
    /**
     * Exit a parse tree produced by the `between`
     * labeled alternative in `RelationalSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitBetween?: (ctx: BetweenContext) => void;
    /**
     * Enter a parse tree produced by the `inList`
     * labeled alternative in `RelationalSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterInList?: (ctx: InListContext) => void;
    /**
     * Exit a parse tree produced by the `inList`
     * labeled alternative in `RelationalSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitInList?: (ctx: InListContext) => void;
    /**
     * Enter a parse tree produced by the `inSubquery`
     * labeled alternative in `RelationalSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterInSubquery?: (ctx: InSubqueryContext) => void;
    /**
     * Exit a parse tree produced by the `inSubquery`
     * labeled alternative in `RelationalSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitInSubquery?: (ctx: InSubqueryContext) => void;
    /**
     * Enter a parse tree produced by the `like`
     * labeled alternative in `RelationalSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterLike?: (ctx: LikeContext) => void;
    /**
     * Exit a parse tree produced by the `like`
     * labeled alternative in `RelationalSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitLike?: (ctx: LikeContext) => void;
    /**
     * Enter a parse tree produced by the `nullPredicate`
     * labeled alternative in `RelationalSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterNullPredicate?: (ctx: NullPredicateContext) => void;
    /**
     * Exit a parse tree produced by the `nullPredicate`
     * labeled alternative in `RelationalSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitNullPredicate?: (ctx: NullPredicateContext) => void;
    /**
     * Enter a parse tree produced by the `distinctFrom`
     * labeled alternative in `RelationalSqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterDistinctFrom?: (ctx: DistinctFromContext) => void;
    /**
     * Exit a parse tree produced by the `distinctFrom`
     * labeled alternative in `RelationalSqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitDistinctFrom?: (ctx: DistinctFromContext) => void;
    /**
     * Enter a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `RelationalSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `RelationalSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `concatenation`
     * labeled alternative in `RelationalSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterConcatenation?: (ctx: ConcatenationContext) => void;
    /**
     * Exit a parse tree produced by the `concatenation`
     * labeled alternative in `RelationalSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitConcatenation?: (ctx: ConcatenationContext) => void;
    /**
     * Enter a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `RelationalSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
    /**
     * Exit a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `RelationalSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
    /**
     * Enter a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `RelationalSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
    /**
     * Exit a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `RelationalSqlParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
    /**
     * Enter a parse tree produced by the `dereference`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterDereference?: (ctx: DereferenceContext) => void;
    /**
     * Exit a parse tree produced by the `dereference`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitDereference?: (ctx: DereferenceContext) => void;
    /**
     * Enter a parse tree produced by the `dateTimeExpression`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterDateTimeExpression?: (ctx: DateTimeExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `dateTimeExpression`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitDateTimeExpression?: (ctx: DateTimeExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `simpleCase`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSimpleCase?: (ctx: SimpleCaseContext) => void;
    /**
     * Exit a parse tree produced by the `simpleCase`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSimpleCase?: (ctx: SimpleCaseContext) => void;
    /**
     * Enter a parse tree produced by the `columnReference`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterColumnReference?: (ctx: ColumnReferenceContext) => void;
    /**
     * Exit a parse tree produced by the `columnReference`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitColumnReference?: (ctx: ColumnReferenceContext) => void;
    /**
     * Enter a parse tree produced by the `rowConstructor`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterRowConstructor?: (ctx: RowConstructorContext) => void;
    /**
     * Exit a parse tree produced by the `rowConstructor`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitRowConstructor?: (ctx: RowConstructorContext) => void;
    /**
     * Enter a parse tree produced by the `columns`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterColumns?: (ctx: ColumnsContext) => void;
    /**
     * Exit a parse tree produced by the `columns`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitColumns?: (ctx: ColumnsContext) => void;
    /**
     * Enter a parse tree produced by the `specialDateTimeFunction`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSpecialDateTimeFunction?: (ctx: SpecialDateTimeFunctionContext) => void;
    /**
     * Exit a parse tree produced by the `specialDateTimeFunction`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSpecialDateTimeFunction?: (ctx: SpecialDateTimeFunctionContext) => void;
    /**
     * Enter a parse tree produced by the `subqueryExpression`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `subqueryExpression`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `currentDatabase`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCurrentDatabase?: (ctx: CurrentDatabaseContext) => void;
    /**
     * Exit a parse tree produced by the `currentDatabase`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCurrentDatabase?: (ctx: CurrentDatabaseContext) => void;
    /**
     * Enter a parse tree produced by the `substring`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSubstring?: (ctx: SubstringContext) => void;
    /**
     * Exit a parse tree produced by the `substring`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSubstring?: (ctx: SubstringContext) => void;
    /**
     * Enter a parse tree produced by the `literal`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterLiteral?: (ctx: LiteralContext) => void;
    /**
     * Exit a parse tree produced by the `literal`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitLiteral?: (ctx: LiteralContext) => void;
    /**
     * Enter a parse tree produced by the `dateBinGapFill`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterDateBinGapFill?: (ctx: DateBinGapFillContext) => void;
    /**
     * Exit a parse tree produced by the `dateBinGapFill`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitDateBinGapFill?: (ctx: DateBinGapFillContext) => void;
    /**
     * Enter a parse tree produced by the `cast`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCast?: (ctx: CastContext) => void;
    /**
     * Exit a parse tree produced by the `cast`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCast?: (ctx: CastContext) => void;
    /**
     * Enter a parse tree produced by the `currentUser`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCurrentUser?: (ctx: CurrentUserContext) => void;
    /**
     * Exit a parse tree produced by the `currentUser`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCurrentUser?: (ctx: CurrentUserContext) => void;
    /**
     * Enter a parse tree produced by the `extract`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterExtract?: (ctx: ExtractContext) => void;
    /**
     * Exit a parse tree produced by the `extract`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitExtract?: (ctx: ExtractContext) => void;
    /**
     * Enter a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `trim`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterTrim?: (ctx: TrimContext) => void;
    /**
     * Exit a parse tree produced by the `trim`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitTrim?: (ctx: TrimContext) => void;
    /**
     * Enter a parse tree produced by the `functionCall`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `functionCall`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `exists`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterExists?: (ctx: ExistsContext) => void;
    /**
     * Exit a parse tree produced by the `exists`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitExists?: (ctx: ExistsContext) => void;
    /**
     * Enter a parse tree produced by the `searchedCase`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSearchedCase?: (ctx: SearchedCaseContext) => void;
    /**
     * Exit a parse tree produced by the `searchedCase`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSearchedCase?: (ctx: SearchedCaseContext) => void;
    /**
     * Enter a parse tree produced by the `dateBin`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterDateBin?: (ctx: DateBinContext) => void;
    /**
     * Exit a parse tree produced by the `dateBin`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitDateBin?: (ctx: DateBinContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.over`.
     * @param ctx the parse tree
     */
    enterOver?: (ctx: OverContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.over`.
     * @param ctx the parse tree
     */
    exitOver?: (ctx: OverContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.windowDefinition`.
     * @param ctx the parse tree
     */
    enterWindowDefinition?: (ctx: WindowDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.windowDefinition`.
     * @param ctx the parse tree
     */
    exitWindowDefinition?: (ctx: WindowDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.windowSpecification`.
     * @param ctx the parse tree
     */
    enterWindowSpecification?: (ctx: WindowSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.windowSpecification`.
     * @param ctx the parse tree
     */
    exitWindowSpecification?: (ctx: WindowSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.windowFrame`.
     * @param ctx the parse tree
     */
    enterWindowFrame?: (ctx: WindowFrameContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.windowFrame`.
     * @param ctx the parse tree
     */
    exitWindowFrame?: (ctx: WindowFrameContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.frameExtent`.
     * @param ctx the parse tree
     */
    enterFrameExtent?: (ctx: FrameExtentContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.frameExtent`.
     * @param ctx the parse tree
     */
    exitFrameExtent?: (ctx: FrameExtentContext) => void;
    /**
     * Enter a parse tree produced by the `unboundedFrame`
     * labeled alternative in `RelationalSqlParser.frameBound`.
     * @param ctx the parse tree
     */
    enterUnboundedFrame?: (ctx: UnboundedFrameContext) => void;
    /**
     * Exit a parse tree produced by the `unboundedFrame`
     * labeled alternative in `RelationalSqlParser.frameBound`.
     * @param ctx the parse tree
     */
    exitUnboundedFrame?: (ctx: UnboundedFrameContext) => void;
    /**
     * Enter a parse tree produced by the `currentRowBound`
     * labeled alternative in `RelationalSqlParser.frameBound`.
     * @param ctx the parse tree
     */
    enterCurrentRowBound?: (ctx: CurrentRowBoundContext) => void;
    /**
     * Exit a parse tree produced by the `currentRowBound`
     * labeled alternative in `RelationalSqlParser.frameBound`.
     * @param ctx the parse tree
     */
    exitCurrentRowBound?: (ctx: CurrentRowBoundContext) => void;
    /**
     * Enter a parse tree produced by the `boundedFrame`
     * labeled alternative in `RelationalSqlParser.frameBound`.
     * @param ctx the parse tree
     */
    enterBoundedFrame?: (ctx: BoundedFrameContext) => void;
    /**
     * Exit a parse tree produced by the `boundedFrame`
     * labeled alternative in `RelationalSqlParser.frameBound`.
     * @param ctx the parse tree
     */
    exitBoundedFrame?: (ctx: BoundedFrameContext) => void;
    /**
     * Enter a parse tree produced by the `nullLiteral`
     * labeled alternative in `RelationalSqlParser.literalExpression`.
     * @param ctx the parse tree
     */
    enterNullLiteral?: (ctx: NullLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `nullLiteral`
     * labeled alternative in `RelationalSqlParser.literalExpression`.
     * @param ctx the parse tree
     */
    exitNullLiteral?: (ctx: NullLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `numericLiteral`
     * labeled alternative in `RelationalSqlParser.literalExpression`.
     * @param ctx the parse tree
     */
    enterNumericLiteral?: (ctx: NumericLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `numericLiteral`
     * labeled alternative in `RelationalSqlParser.literalExpression`.
     * @param ctx the parse tree
     */
    exitNumericLiteral?: (ctx: NumericLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `booleanLiteral`
     * labeled alternative in `RelationalSqlParser.literalExpression`.
     * @param ctx the parse tree
     */
    enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `booleanLiteral`
     * labeled alternative in `RelationalSqlParser.literalExpression`.
     * @param ctx the parse tree
     */
    exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `stringLiteral`
     * labeled alternative in `RelationalSqlParser.literalExpression`.
     * @param ctx the parse tree
     */
    enterStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `stringLiteral`
     * labeled alternative in `RelationalSqlParser.literalExpression`.
     * @param ctx the parse tree
     */
    exitStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `datetimeLiteral`
     * labeled alternative in `RelationalSqlParser.literalExpression`.
     * @param ctx the parse tree
     */
    enterDatetimeLiteral?: (ctx: DatetimeLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `datetimeLiteral`
     * labeled alternative in `RelationalSqlParser.literalExpression`.
     * @param ctx the parse tree
     */
    exitDatetimeLiteral?: (ctx: DatetimeLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `binaryLiteral`
     * labeled alternative in `RelationalSqlParser.literalExpression`.
     * @param ctx the parse tree
     */
    enterBinaryLiteral?: (ctx: BinaryLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `binaryLiteral`
     * labeled alternative in `RelationalSqlParser.literalExpression`.
     * @param ctx the parse tree
     */
    exitBinaryLiteral?: (ctx: BinaryLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `parameter`
     * labeled alternative in `RelationalSqlParser.literalExpression`.
     * @param ctx the parse tree
     */
    enterParameter?: (ctx: ParameterContext) => void;
    /**
     * Exit a parse tree produced by the `parameter`
     * labeled alternative in `RelationalSqlParser.literalExpression`.
     * @param ctx the parse tree
     */
    exitParameter?: (ctx: ParameterContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.processingMode`.
     * @param ctx the parse tree
     */
    enterProcessingMode?: (ctx: ProcessingModeContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.processingMode`.
     * @param ctx the parse tree
     */
    exitProcessingMode?: (ctx: ProcessingModeContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.trimsSpecification`.
     * @param ctx the parse tree
     */
    enterTrimsSpecification?: (ctx: TrimsSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.trimsSpecification`.
     * @param ctx the parse tree
     */
    exitTrimsSpecification?: (ctx: TrimsSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.nullTreatment`.
     * @param ctx the parse tree
     */
    enterNullTreatment?: (ctx: NullTreatmentContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.nullTreatment`.
     * @param ctx the parse tree
     */
    exitNullTreatment?: (ctx: NullTreatmentContext) => void;
    /**
     * Enter a parse tree produced by the `basicStringLiteral`
     * labeled alternative in `RelationalSqlParser.string`.
     * @param ctx the parse tree
     */
    enterBasicStringLiteral?: (ctx: BasicStringLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `basicStringLiteral`
     * labeled alternative in `RelationalSqlParser.string`.
     * @param ctx the parse tree
     */
    exitBasicStringLiteral?: (ctx: BasicStringLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `unicodeStringLiteral`
     * labeled alternative in `RelationalSqlParser.string`.
     * @param ctx the parse tree
     */
    enterUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `unicodeStringLiteral`
     * labeled alternative in `RelationalSqlParser.string`.
     * @param ctx the parse tree
     */
    exitUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.identifierOrString`.
     * @param ctx the parse tree
     */
    enterIdentifierOrString?: (ctx: IdentifierOrStringContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.identifierOrString`.
     * @param ctx the parse tree
     */
    exitIdentifierOrString?: (ctx: IdentifierOrStringContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.comparisonQuantifier`.
     * @param ctx the parse tree
     */
    enterComparisonQuantifier?: (ctx: ComparisonQuantifierContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.comparisonQuantifier`.
     * @param ctx the parse tree
     */
    exitComparisonQuantifier?: (ctx: ComparisonQuantifierContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.booleanValue`.
     * @param ctx the parse tree
     */
    enterBooleanValue?: (ctx: BooleanValueContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.booleanValue`.
     * @param ctx the parse tree
     */
    exitBooleanValue?: (ctx: BooleanValueContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.interval`.
     * @param ctx the parse tree
     */
    enterInterval?: (ctx: IntervalContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.interval`.
     * @param ctx the parse tree
     */
    exitInterval?: (ctx: IntervalContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.intervalField`.
     * @param ctx the parse tree
     */
    enterIntervalField?: (ctx: IntervalFieldContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.intervalField`.
     * @param ctx the parse tree
     */
    exitIntervalField?: (ctx: IntervalFieldContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.timeDuration`.
     * @param ctx the parse tree
     */
    enterTimeDuration?: (ctx: TimeDurationContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.timeDuration`.
     * @param ctx the parse tree
     */
    exitTimeDuration?: (ctx: TimeDurationContext) => void;
    /**
     * Enter a parse tree produced by the `genericType`
     * labeled alternative in `RelationalSqlParser.type`.
     * @param ctx the parse tree
     */
    enterGenericType?: (ctx: GenericTypeContext) => void;
    /**
     * Exit a parse tree produced by the `genericType`
     * labeled alternative in `RelationalSqlParser.type`.
     * @param ctx the parse tree
     */
    exitGenericType?: (ctx: GenericTypeContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.typeParameter`.
     * @param ctx the parse tree
     */
    enterTypeParameter?: (ctx: TypeParameterContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.typeParameter`.
     * @param ctx the parse tree
     */
    exitTypeParameter?: (ctx: TypeParameterContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.whenClause`.
     * @param ctx the parse tree
     */
    enterWhenClause?: (ctx: WhenClauseContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.whenClause`.
     * @param ctx the parse tree
     */
    exitWhenClause?: (ctx: WhenClauseContext) => void;
    /**
     * Enter a parse tree produced by the `quantifiedPrimary`
     * labeled alternative in `RelationalSqlParser.rowPattern`.
     * @param ctx the parse tree
     */
    enterQuantifiedPrimary?: (ctx: QuantifiedPrimaryContext) => void;
    /**
     * Exit a parse tree produced by the `quantifiedPrimary`
     * labeled alternative in `RelationalSqlParser.rowPattern`.
     * @param ctx the parse tree
     */
    exitQuantifiedPrimary?: (ctx: QuantifiedPrimaryContext) => void;
    /**
     * Enter a parse tree produced by the `patternConcatenation`
     * labeled alternative in `RelationalSqlParser.rowPattern`.
     * @param ctx the parse tree
     */
    enterPatternConcatenation?: (ctx: PatternConcatenationContext) => void;
    /**
     * Exit a parse tree produced by the `patternConcatenation`
     * labeled alternative in `RelationalSqlParser.rowPattern`.
     * @param ctx the parse tree
     */
    exitPatternConcatenation?: (ctx: PatternConcatenationContext) => void;
    /**
     * Enter a parse tree produced by the `patternAlternation`
     * labeled alternative in `RelationalSqlParser.rowPattern`.
     * @param ctx the parse tree
     */
    enterPatternAlternation?: (ctx: PatternAlternationContext) => void;
    /**
     * Exit a parse tree produced by the `patternAlternation`
     * labeled alternative in `RelationalSqlParser.rowPattern`.
     * @param ctx the parse tree
     */
    exitPatternAlternation?: (ctx: PatternAlternationContext) => void;
    /**
     * Enter a parse tree produced by the `patternVariable`
     * labeled alternative in `RelationalSqlParser.patternPrimary`.
     * @param ctx the parse tree
     */
    enterPatternVariable?: (ctx: PatternVariableContext) => void;
    /**
     * Exit a parse tree produced by the `patternVariable`
     * labeled alternative in `RelationalSqlParser.patternPrimary`.
     * @param ctx the parse tree
     */
    exitPatternVariable?: (ctx: PatternVariableContext) => void;
    /**
     * Enter a parse tree produced by the `emptyPattern`
     * labeled alternative in `RelationalSqlParser.patternPrimary`.
     * @param ctx the parse tree
     */
    enterEmptyPattern?: (ctx: EmptyPatternContext) => void;
    /**
     * Exit a parse tree produced by the `emptyPattern`
     * labeled alternative in `RelationalSqlParser.patternPrimary`.
     * @param ctx the parse tree
     */
    exitEmptyPattern?: (ctx: EmptyPatternContext) => void;
    /**
     * Enter a parse tree produced by the `patternPermutation`
     * labeled alternative in `RelationalSqlParser.patternPrimary`.
     * @param ctx the parse tree
     */
    enterPatternPermutation?: (ctx: PatternPermutationContext) => void;
    /**
     * Exit a parse tree produced by the `patternPermutation`
     * labeled alternative in `RelationalSqlParser.patternPrimary`.
     * @param ctx the parse tree
     */
    exitPatternPermutation?: (ctx: PatternPermutationContext) => void;
    /**
     * Enter a parse tree produced by the `groupedPattern`
     * labeled alternative in `RelationalSqlParser.patternPrimary`.
     * @param ctx the parse tree
     */
    enterGroupedPattern?: (ctx: GroupedPatternContext) => void;
    /**
     * Exit a parse tree produced by the `groupedPattern`
     * labeled alternative in `RelationalSqlParser.patternPrimary`.
     * @param ctx the parse tree
     */
    exitGroupedPattern?: (ctx: GroupedPatternContext) => void;
    /**
     * Enter a parse tree produced by the `partitionStartAnchor`
     * labeled alternative in `RelationalSqlParser.patternPrimary`.
     * @param ctx the parse tree
     */
    enterPartitionStartAnchor?: (ctx: PartitionStartAnchorContext) => void;
    /**
     * Exit a parse tree produced by the `partitionStartAnchor`
     * labeled alternative in `RelationalSqlParser.patternPrimary`.
     * @param ctx the parse tree
     */
    exitPartitionStartAnchor?: (ctx: PartitionStartAnchorContext) => void;
    /**
     * Enter a parse tree produced by the `partitionEndAnchor`
     * labeled alternative in `RelationalSqlParser.patternPrimary`.
     * @param ctx the parse tree
     */
    enterPartitionEndAnchor?: (ctx: PartitionEndAnchorContext) => void;
    /**
     * Exit a parse tree produced by the `partitionEndAnchor`
     * labeled alternative in `RelationalSqlParser.patternPrimary`.
     * @param ctx the parse tree
     */
    exitPartitionEndAnchor?: (ctx: PartitionEndAnchorContext) => void;
    /**
     * Enter a parse tree produced by the `excludedPattern`
     * labeled alternative in `RelationalSqlParser.patternPrimary`.
     * @param ctx the parse tree
     */
    enterExcludedPattern?: (ctx: ExcludedPatternContext) => void;
    /**
     * Exit a parse tree produced by the `excludedPattern`
     * labeled alternative in `RelationalSqlParser.patternPrimary`.
     * @param ctx the parse tree
     */
    exitExcludedPattern?: (ctx: ExcludedPatternContext) => void;
    /**
     * Enter a parse tree produced by the `zeroOrMoreQuantifier`
     * labeled alternative in `RelationalSqlParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    enterZeroOrMoreQuantifier?: (ctx: ZeroOrMoreQuantifierContext) => void;
    /**
     * Exit a parse tree produced by the `zeroOrMoreQuantifier`
     * labeled alternative in `RelationalSqlParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    exitZeroOrMoreQuantifier?: (ctx: ZeroOrMoreQuantifierContext) => void;
    /**
     * Enter a parse tree produced by the `oneOrMoreQuantifier`
     * labeled alternative in `RelationalSqlParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    enterOneOrMoreQuantifier?: (ctx: OneOrMoreQuantifierContext) => void;
    /**
     * Exit a parse tree produced by the `oneOrMoreQuantifier`
     * labeled alternative in `RelationalSqlParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    exitOneOrMoreQuantifier?: (ctx: OneOrMoreQuantifierContext) => void;
    /**
     * Enter a parse tree produced by the `zeroOrOneQuantifier`
     * labeled alternative in `RelationalSqlParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    enterZeroOrOneQuantifier?: (ctx: ZeroOrOneQuantifierContext) => void;
    /**
     * Exit a parse tree produced by the `zeroOrOneQuantifier`
     * labeled alternative in `RelationalSqlParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    exitZeroOrOneQuantifier?: (ctx: ZeroOrOneQuantifierContext) => void;
    /**
     * Enter a parse tree produced by the `rangeQuantifier`
     * labeled alternative in `RelationalSqlParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    enterRangeQuantifier?: (ctx: RangeQuantifierContext) => void;
    /**
     * Exit a parse tree produced by the `rangeQuantifier`
     * labeled alternative in `RelationalSqlParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    exitRangeQuantifier?: (ctx: RangeQuantifierContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.updateAssignment`.
     * @param ctx the parse tree
     */
    enterUpdateAssignment?: (ctx: UpdateAssignmentContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.updateAssignment`.
     * @param ctx the parse tree
     */
    exitUpdateAssignment?: (ctx: UpdateAssignmentContext) => void;
    /**
     * Enter a parse tree produced by the `returnStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterReturnStatement?: (ctx: ReturnStatementContext) => void;
    /**
     * Exit a parse tree produced by the `returnStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitReturnStatement?: (ctx: ReturnStatementContext) => void;
    /**
     * Enter a parse tree produced by the `assignmentStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterAssignmentStatement?: (ctx: AssignmentStatementContext) => void;
    /**
     * Exit a parse tree produced by the `assignmentStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitAssignmentStatement?: (ctx: AssignmentStatementContext) => void;
    /**
     * Enter a parse tree produced by the `simpleCaseStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterSimpleCaseStatement?: (ctx: SimpleCaseStatementContext) => void;
    /**
     * Exit a parse tree produced by the `simpleCaseStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitSimpleCaseStatement?: (ctx: SimpleCaseStatementContext) => void;
    /**
     * Enter a parse tree produced by the `searchedCaseStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterSearchedCaseStatement?: (ctx: SearchedCaseStatementContext) => void;
    /**
     * Exit a parse tree produced by the `searchedCaseStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitSearchedCaseStatement?: (ctx: SearchedCaseStatementContext) => void;
    /**
     * Enter a parse tree produced by the `ifStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterIfStatement?: (ctx: IfStatementContext) => void;
    /**
     * Exit a parse tree produced by the `ifStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitIfStatement?: (ctx: IfStatementContext) => void;
    /**
     * Enter a parse tree produced by the `iterateStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterIterateStatement?: (ctx: IterateStatementContext) => void;
    /**
     * Exit a parse tree produced by the `iterateStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitIterateStatement?: (ctx: IterateStatementContext) => void;
    /**
     * Enter a parse tree produced by the `leaveStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterLeaveStatement?: (ctx: LeaveStatementContext) => void;
    /**
     * Exit a parse tree produced by the `leaveStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitLeaveStatement?: (ctx: LeaveStatementContext) => void;
    /**
     * Enter a parse tree produced by the `compoundStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterCompoundStatement?: (ctx: CompoundStatementContext) => void;
    /**
     * Exit a parse tree produced by the `compoundStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitCompoundStatement?: (ctx: CompoundStatementContext) => void;
    /**
     * Enter a parse tree produced by the `loopStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterLoopStatement?: (ctx: LoopStatementContext) => void;
    /**
     * Exit a parse tree produced by the `loopStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitLoopStatement?: (ctx: LoopStatementContext) => void;
    /**
     * Enter a parse tree produced by the `whileStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterWhileStatement?: (ctx: WhileStatementContext) => void;
    /**
     * Exit a parse tree produced by the `whileStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitWhileStatement?: (ctx: WhileStatementContext) => void;
    /**
     * Enter a parse tree produced by the `repeatStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterRepeatStatement?: (ctx: RepeatStatementContext) => void;
    /**
     * Exit a parse tree produced by the `repeatStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitRepeatStatement?: (ctx: RepeatStatementContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.caseStatementWhenClause`.
     * @param ctx the parse tree
     */
    enterCaseStatementWhenClause?: (ctx: CaseStatementWhenClauseContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.caseStatementWhenClause`.
     * @param ctx the parse tree
     */
    exitCaseStatementWhenClause?: (ctx: CaseStatementWhenClauseContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.elseIfClause`.
     * @param ctx the parse tree
     */
    enterElseIfClause?: (ctx: ElseIfClauseContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.elseIfClause`.
     * @param ctx the parse tree
     */
    exitElseIfClause?: (ctx: ElseIfClauseContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.elseClause`.
     * @param ctx the parse tree
     */
    enterElseClause?: (ctx: ElseClauseContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.elseClause`.
     * @param ctx the parse tree
     */
    exitElseClause?: (ctx: ElseClauseContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.variableDeclaration`.
     * @param ctx the parse tree
     */
    enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.variableDeclaration`.
     * @param ctx the parse tree
     */
    exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.sqlStatementList`.
     * @param ctx the parse tree
     */
    enterSqlStatementList?: (ctx: SqlStatementListContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.sqlStatementList`.
     * @param ctx the parse tree
     */
    exitSqlStatementList?: (ctx: SqlStatementListContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.privilege`.
     * @param ctx the parse tree
     */
    enterPrivilege?: (ctx: PrivilegeContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.privilege`.
     * @param ctx the parse tree
     */
    exitPrivilege?: (ctx: PrivilegeContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.qualifiedName`.
     * @param ctx the parse tree
     */
    enterQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.qualifiedName`.
     * @param ctx the parse tree
     */
    exitQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Enter a parse tree produced by the `specifiedPrincipal`
     * labeled alternative in `RelationalSqlParser.grantor`.
     * @param ctx the parse tree
     */
    enterSpecifiedPrincipal?: (ctx: SpecifiedPrincipalContext) => void;
    /**
     * Exit a parse tree produced by the `specifiedPrincipal`
     * labeled alternative in `RelationalSqlParser.grantor`.
     * @param ctx the parse tree
     */
    exitSpecifiedPrincipal?: (ctx: SpecifiedPrincipalContext) => void;
    /**
     * Enter a parse tree produced by the `currentUserGrantor`
     * labeled alternative in `RelationalSqlParser.grantor`.
     * @param ctx the parse tree
     */
    enterCurrentUserGrantor?: (ctx: CurrentUserGrantorContext) => void;
    /**
     * Exit a parse tree produced by the `currentUserGrantor`
     * labeled alternative in `RelationalSqlParser.grantor`.
     * @param ctx the parse tree
     */
    exitCurrentUserGrantor?: (ctx: CurrentUserGrantorContext) => void;
    /**
     * Enter a parse tree produced by the `currentRoleGrantor`
     * labeled alternative in `RelationalSqlParser.grantor`.
     * @param ctx the parse tree
     */
    enterCurrentRoleGrantor?: (ctx: CurrentRoleGrantorContext) => void;
    /**
     * Exit a parse tree produced by the `currentRoleGrantor`
     * labeled alternative in `RelationalSqlParser.grantor`.
     * @param ctx the parse tree
     */
    exitCurrentRoleGrantor?: (ctx: CurrentRoleGrantorContext) => void;
    /**
     * Enter a parse tree produced by the `unspecifiedPrincipal`
     * labeled alternative in `RelationalSqlParser.principal`.
     * @param ctx the parse tree
     */
    enterUnspecifiedPrincipal?: (ctx: UnspecifiedPrincipalContext) => void;
    /**
     * Exit a parse tree produced by the `unspecifiedPrincipal`
     * labeled alternative in `RelationalSqlParser.principal`.
     * @param ctx the parse tree
     */
    exitUnspecifiedPrincipal?: (ctx: UnspecifiedPrincipalContext) => void;
    /**
     * Enter a parse tree produced by the `userPrincipal`
     * labeled alternative in `RelationalSqlParser.principal`.
     * @param ctx the parse tree
     */
    enterUserPrincipal?: (ctx: UserPrincipalContext) => void;
    /**
     * Exit a parse tree produced by the `userPrincipal`
     * labeled alternative in `RelationalSqlParser.principal`.
     * @param ctx the parse tree
     */
    exitUserPrincipal?: (ctx: UserPrincipalContext) => void;
    /**
     * Enter a parse tree produced by the `rolePrincipal`
     * labeled alternative in `RelationalSqlParser.principal`.
     * @param ctx the parse tree
     */
    enterRolePrincipal?: (ctx: RolePrincipalContext) => void;
    /**
     * Exit a parse tree produced by the `rolePrincipal`
     * labeled alternative in `RelationalSqlParser.principal`.
     * @param ctx the parse tree
     */
    exitRolePrincipal?: (ctx: RolePrincipalContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.roles`.
     * @param ctx the parse tree
     */
    enterRoles?: (ctx: RolesContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.roles`.
     * @param ctx the parse tree
     */
    exitRoles?: (ctx: RolesContext) => void;
    /**
     * Enter a parse tree produced by the `unquotedIdentifier`
     * labeled alternative in `RelationalSqlParser.identifier`.
     * @param ctx the parse tree
     */
    enterUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;
    /**
     * Exit a parse tree produced by the `unquotedIdentifier`
     * labeled alternative in `RelationalSqlParser.identifier`.
     * @param ctx the parse tree
     */
    exitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;
    /**
     * Enter a parse tree produced by the `quotedIdentifier`
     * labeled alternative in `RelationalSqlParser.identifier`.
     * @param ctx the parse tree
     */
    enterQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;
    /**
     * Exit a parse tree produced by the `quotedIdentifier`
     * labeled alternative in `RelationalSqlParser.identifier`.
     * @param ctx the parse tree
     */
    exitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;
    /**
     * Enter a parse tree produced by the `backQuotedIdentifier`
     * labeled alternative in `RelationalSqlParser.identifier`.
     * @param ctx the parse tree
     */
    enterBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => void;
    /**
     * Exit a parse tree produced by the `backQuotedIdentifier`
     * labeled alternative in `RelationalSqlParser.identifier`.
     * @param ctx the parse tree
     */
    exitBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => void;
    /**
     * Enter a parse tree produced by the `decimalLiteral`
     * labeled alternative in `RelationalSqlParser.number`.
     * @param ctx the parse tree
     */
    enterDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `decimalLiteral`
     * labeled alternative in `RelationalSqlParser.number`.
     * @param ctx the parse tree
     */
    exitDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `doubleLiteral`
     * labeled alternative in `RelationalSqlParser.number`.
     * @param ctx the parse tree
     */
    enterDoubleLiteral?: (ctx: DoubleLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `doubleLiteral`
     * labeled alternative in `RelationalSqlParser.number`.
     * @param ctx the parse tree
     */
    exitDoubleLiteral?: (ctx: DoubleLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `integerLiteral`
     * labeled alternative in `RelationalSqlParser.number`.
     * @param ctx the parse tree
     */
    enterIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `integerLiteral`
     * labeled alternative in `RelationalSqlParser.number`.
     * @param ctx the parse tree
     */
    exitIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `identifierUser`
     * labeled alternative in `RelationalSqlParser.authorizationUser`.
     * @param ctx the parse tree
     */
    enterIdentifierUser?: (ctx: IdentifierUserContext) => void;
    /**
     * Exit a parse tree produced by the `identifierUser`
     * labeled alternative in `RelationalSqlParser.authorizationUser`.
     * @param ctx the parse tree
     */
    exitIdentifierUser?: (ctx: IdentifierUserContext) => void;
    /**
     * Enter a parse tree produced by the `stringUser`
     * labeled alternative in `RelationalSqlParser.authorizationUser`.
     * @param ctx the parse tree
     */
    enterStringUser?: (ctx: StringUserContext) => void;
    /**
     * Exit a parse tree produced by the `stringUser`
     * labeled alternative in `RelationalSqlParser.authorizationUser`.
     * @param ctx the parse tree
     */
    exitStringUser?: (ctx: StringUserContext) => void;
    /**
     * Enter a parse tree produced by `RelationalSqlParser.nonReserved`.
     * @param ctx the parse tree
     */
    enterNonReserved?: (ctx: NonReservedContext) => void;
    /**
     * Exit a parse tree produced by `RelationalSqlParser.nonReserved`.
     * @param ctx the parse tree
     */
    exitNonReserved?: (ctx: NonReservedContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

