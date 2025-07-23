// Generated from dt-sql-parser/src/grammar/iotdb-table/RelationalSql.g4 by ANTLR 4.13.1

// @ts-nocheck

import { AbstractParseTreeVisitor } from "antlr4ng";


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RelationalSqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class RelationalSqlVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `RelationalSqlParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.statements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatements?: (ctx: StatementsContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.singleStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleStatement?: (ctx: SingleStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.standaloneExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStandaloneExpression?: (ctx: StandaloneExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.standaloneType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStandaloneType?: (ctx: StandaloneTypeContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.standaloneRowPattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStandaloneRowPattern?: (ctx: StandaloneRowPatternContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.useDatabaseStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUseDatabaseStatement?: (ctx: UseDatabaseStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.showDatabasesStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowDatabasesStatement?: (ctx: ShowDatabasesStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.createDbStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateDbStatement?: (ctx: CreateDbStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.alterDbStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterDbStatement?: (ctx: AlterDbStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.dropDbStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropDbStatement?: (ctx: DropDbStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.createTableStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTableStatement?: (ctx: CreateTableStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.charsetDesc`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCharsetDesc?: (ctx: CharsetDescContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.columnDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnDefinition?: (ctx: ColumnDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.charsetName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCharsetName?: (ctx: CharsetNameContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.comment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComment?: (ctx: CommentContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.dropTableStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropTableStatement?: (ctx: DropTableStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.showTableStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTableStatement?: (ctx: ShowTableStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.descTableStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescTableStatement?: (ctx: DescTableStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `renameTable`
     * labeled alternative in `RelationalSqlParser.alterTableStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameTable?: (ctx: RenameTableContext) => Result;
    /**
     * Visit a parse tree produced by the `addColumn`
     * labeled alternative in `RelationalSqlParser.alterTableStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddColumn?: (ctx: AddColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `renameColumn`
     * labeled alternative in `RelationalSqlParser.alterTableStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameColumn?: (ctx: RenameColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `dropColumn`
     * labeled alternative in `RelationalSqlParser.alterTableStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropColumn?: (ctx: DropColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `setTableProperties`
     * labeled alternative in `RelationalSqlParser.alterTableStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTableProperties?: (ctx: SetTablePropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `commentTable`
     * labeled alternative in `RelationalSqlParser.commentStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommentTable?: (ctx: CommentTableContext) => Result;
    /**
     * Visit a parse tree produced by the `commentView`
     * labeled alternative in `RelationalSqlParser.commentStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommentView?: (ctx: CommentViewContext) => Result;
    /**
     * Visit a parse tree produced by the `commentColumn`
     * labeled alternative in `RelationalSqlParser.commentStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommentColumn?: (ctx: CommentColumnContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.showCreateTableStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCreateTableStatement?: (ctx: ShowCreateTableStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.createViewStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateViewStatement?: (ctx: CreateViewStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.viewColumnDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewColumnDefinition?: (ctx: ViewColumnDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by the `renameTableView`
     * labeled alternative in `RelationalSqlParser.alterViewStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameTableView?: (ctx: RenameTableViewContext) => Result;
    /**
     * Visit a parse tree produced by the `addViewColumn`
     * labeled alternative in `RelationalSqlParser.alterViewStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddViewColumn?: (ctx: AddViewColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `renameViewColumn`
     * labeled alternative in `RelationalSqlParser.alterViewStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameViewColumn?: (ctx: RenameViewColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `dropViewColumn`
     * labeled alternative in `RelationalSqlParser.alterViewStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropViewColumn?: (ctx: DropViewColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `setTableViewProperties`
     * labeled alternative in `RelationalSqlParser.alterViewStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTableViewProperties?: (ctx: SetTableViewPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.dropViewStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropViewStatement?: (ctx: DropViewStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.showCreateViewStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCreateViewStatement?: (ctx: ShowCreateViewStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.prefixPath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrefixPath?: (ctx: PrefixPathContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.nodeName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNodeName?: (ctx: NodeNameContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.nodeNameWithoutWildcard`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNodeNameWithoutWildcard?: (ctx: NodeNameWithoutWildcardContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.wildcard`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWildcard?: (ctx: WildcardContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.createIndexStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateIndexStatement?: (ctx: CreateIndexStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.identifierList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierList?: (ctx: IdentifierListContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.dropIndexStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropIndexStatement?: (ctx: DropIndexStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.showIndexStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowIndexStatement?: (ctx: ShowIndexStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.insertStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertStatement?: (ctx: InsertStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.deleteStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeleteStatement?: (ctx: DeleteStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.updateStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdateStatement?: (ctx: UpdateStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.deleteDeviceStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeleteDeviceStatement?: (ctx: DeleteDeviceStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.createFunctionStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateFunctionStatement?: (ctx: CreateFunctionStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.uriClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUriClause?: (ctx: UriClauseContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.dropFunctionStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropFunctionStatement?: (ctx: DropFunctionStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.showFunctionsStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowFunctionsStatement?: (ctx: ShowFunctionsStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.loadTsFileStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoadTsFileStatement?: (ctx: LoadTsFileStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.loadFileWithAttributesClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoadFileWithAttributesClause?: (ctx: LoadFileWithAttributesClauseContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.loadFileWithAttributeClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoadFileWithAttributeClause?: (ctx: LoadFileWithAttributeClauseContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.createPipeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatePipeStatement?: (ctx: CreatePipeStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.extractorAttributesClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtractorAttributesClause?: (ctx: ExtractorAttributesClauseContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.extractorAttributeClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtractorAttributeClause?: (ctx: ExtractorAttributeClauseContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.processorAttributesClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcessorAttributesClause?: (ctx: ProcessorAttributesClauseContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.processorAttributeClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcessorAttributeClause?: (ctx: ProcessorAttributeClauseContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.connectorAttributesClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConnectorAttributesClause?: (ctx: ConnectorAttributesClauseContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.connectorAttributesWithoutWithSinkClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConnectorAttributesWithoutWithSinkClause?: (ctx: ConnectorAttributesWithoutWithSinkClauseContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.connectorAttributeClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConnectorAttributeClause?: (ctx: ConnectorAttributeClauseContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.alterPipeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterPipeStatement?: (ctx: AlterPipeStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.alterExtractorAttributesClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterExtractorAttributesClause?: (ctx: AlterExtractorAttributesClauseContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.alterProcessorAttributesClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterProcessorAttributesClause?: (ctx: AlterProcessorAttributesClauseContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.alterConnectorAttributesClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterConnectorAttributesClause?: (ctx: AlterConnectorAttributesClauseContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.dropPipeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropPipeStatement?: (ctx: DropPipeStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.startPipeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStartPipeStatement?: (ctx: StartPipeStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.stopPipeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStopPipeStatement?: (ctx: StopPipeStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.showPipesStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowPipesStatement?: (ctx: ShowPipesStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.createPipePluginStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatePipePluginStatement?: (ctx: CreatePipePluginStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.dropPipePluginStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropPipePluginStatement?: (ctx: DropPipePluginStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.showPipePluginsStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowPipePluginsStatement?: (ctx: ShowPipePluginsStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.createTopicStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTopicStatement?: (ctx: CreateTopicStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.topicAttributesClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTopicAttributesClause?: (ctx: TopicAttributesClauseContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.topicAttributeClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTopicAttributeClause?: (ctx: TopicAttributeClauseContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.dropTopicStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropTopicStatement?: (ctx: DropTopicStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.showTopicsStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTopicsStatement?: (ctx: ShowTopicsStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.showSubscriptionsStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowSubscriptionsStatement?: (ctx: ShowSubscriptionsStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.dropSubscriptionStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropSubscriptionStatement?: (ctx: DropSubscriptionStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.showDevicesStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowDevicesStatement?: (ctx: ShowDevicesStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.countDevicesStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCountDevicesStatement?: (ctx: CountDevicesStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.showClusterStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowClusterStatement?: (ctx: ShowClusterStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.showRegionsStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowRegionsStatement?: (ctx: ShowRegionsStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.showDataNodesStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowDataNodesStatement?: (ctx: ShowDataNodesStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.showConfigNodesStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowConfigNodesStatement?: (ctx: ShowConfigNodesStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.showAINodesStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowAINodesStatement?: (ctx: ShowAINodesStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.showClusterIdStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowClusterIdStatement?: (ctx: ShowClusterIdStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.showRegionIdStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowRegionIdStatement?: (ctx: ShowRegionIdStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.showTimeSlotListStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTimeSlotListStatement?: (ctx: ShowTimeSlotListStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.countTimeSlotListStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCountTimeSlotListStatement?: (ctx: CountTimeSlotListStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.showSeriesSlotListStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowSeriesSlotListStatement?: (ctx: ShowSeriesSlotListStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.migrateRegionStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMigrateRegionStatement?: (ctx: MigrateRegionStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.reconstructRegionStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReconstructRegionStatement?: (ctx: ReconstructRegionStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.extendRegionStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtendRegionStatement?: (ctx: ExtendRegionStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.removeRegionStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemoveRegionStatement?: (ctx: RemoveRegionStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.removeDataNodeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemoveDataNodeStatement?: (ctx: RemoveDataNodeStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.showSystemInfo`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowSystemInfo?: (ctx: ShowSystemInfoContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.activate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitActivate?: (ctx: ActivateContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.showActivation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowActivation?: (ctx: ShowActivationContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.removeConfigNodeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemoveConfigNodeStatement?: (ctx: RemoveConfigNodeStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.removeAINodeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemoveAINodeStatement?: (ctx: RemoveAINodeStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.showVariablesStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowVariablesStatement?: (ctx: ShowVariablesStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.flushStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFlushStatement?: (ctx: FlushStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.clearCacheStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClearCacheStatement?: (ctx: ClearCacheStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.startRepairDataStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStartRepairDataStatement?: (ctx: StartRepairDataStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.stopRepairDataStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStopRepairDataStatement?: (ctx: StopRepairDataStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.setSystemStatusStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetSystemStatusStatement?: (ctx: SetSystemStatusStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.showVersionStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowVersionStatement?: (ctx: ShowVersionStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.showQueriesStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowQueriesStatement?: (ctx: ShowQueriesStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.killQueryStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKillQueryStatement?: (ctx: KillQueryStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.loadConfigurationStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoadConfigurationStatement?: (ctx: LoadConfigurationStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.setConfigurationStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetConfigurationStatement?: (ctx: SetConfigurationStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.clearCacheOptions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClearCacheOptions?: (ctx: ClearCacheOptionsContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.localOrClusterMode`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocalOrClusterMode?: (ctx: LocalOrClusterModeContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.showCurrentSqlDialectStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCurrentSqlDialectStatement?: (ctx: ShowCurrentSqlDialectStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.setSqlDialectStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetSqlDialectStatement?: (ctx: SetSqlDialectStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.showCurrentUserStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCurrentUserStatement?: (ctx: ShowCurrentUserStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.showCurrentDatabaseStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCurrentDatabaseStatement?: (ctx: ShowCurrentDatabaseStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.showCurrentTimestampStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCurrentTimestampStatement?: (ctx: ShowCurrentTimestampStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.createUserStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateUserStatement?: (ctx: CreateUserStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.createRoleStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateRoleStatement?: (ctx: CreateRoleStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.dropUserStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropUserStatement?: (ctx: DropUserStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.dropRoleStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropRoleStatement?: (ctx: DropRoleStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.alterUserStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterUserStatement?: (ctx: AlterUserStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.grantUserRoleStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrantUserRoleStatement?: (ctx: GrantUserRoleStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.revokeUserRoleStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRevokeUserRoleStatement?: (ctx: RevokeUserRoleStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.grantStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrantStatement?: (ctx: GrantStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.listUserPrivilegeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListUserPrivilegeStatement?: (ctx: ListUserPrivilegeStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.listRolePrivilegeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListRolePrivilegeStatement?: (ctx: ListRolePrivilegeStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.listUserStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListUserStatement?: (ctx: ListUserStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.listRoleStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListRoleStatement?: (ctx: ListRoleStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.revokeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRevokeStatement?: (ctx: RevokeStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.privilegeObjectScope`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrivilegeObjectScope?: (ctx: PrivilegeObjectScopeContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.systemPrivileges`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSystemPrivileges?: (ctx: SystemPrivilegesContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.objectPrivileges`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectPrivileges?: (ctx: ObjectPrivilegesContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.objectScope`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectScope?: (ctx: ObjectScopeContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.systemPrivilege`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSystemPrivilege?: (ctx: SystemPrivilegeContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.objectPrivilege`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectPrivilege?: (ctx: ObjectPrivilegeContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.objectType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectType?: (ctx: ObjectTypeContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.holderType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHolderType?: (ctx: HolderTypeContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.grantOpt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrantOpt?: (ctx: GrantOptContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.revokeGrantOpt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRevokeGrantOpt?: (ctx: RevokeGrantOptContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.createModelStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateModelStatement?: (ctx: CreateModelStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.hparamPair`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHparamPair?: (ctx: HparamPairContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.dropModelStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropModelStatement?: (ctx: DropModelStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.showModelsStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowModelsStatement?: (ctx: ShowModelsStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `statementDefault`
     * labeled alternative in `RelationalSqlParser.queryStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatementDefault?: (ctx: StatementDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `explain`
     * labeled alternative in `RelationalSqlParser.queryStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplain?: (ctx: ExplainContext) => Result;
    /**
     * Visit a parse tree produced by the `explainAnalyze`
     * labeled alternative in `RelationalSqlParser.queryStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplainAnalyze?: (ctx: ExplainAnalyzeContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.query`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuery?: (ctx: QueryContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.with`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWith?: (ctx: WithContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProperties?: (ctx: PropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.propertyAssignments`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyAssignments?: (ctx: PropertyAssignmentsContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProperty?: (ctx: PropertyContext) => Result;
    /**
     * Visit a parse tree produced by the `defaultPropertyValue`
     * labeled alternative in `RelationalSqlParser.propertyValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefaultPropertyValue?: (ctx: DefaultPropertyValueContext) => Result;
    /**
     * Visit a parse tree produced by the `nonDefaultPropertyValue`
     * labeled alternative in `RelationalSqlParser.propertyValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonDefaultPropertyValue?: (ctx: NonDefaultPropertyValueContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.queryNoWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryNoWith?: (ctx: QueryNoWithContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.fillClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFillClause?: (ctx: FillClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `linearFill`
     * labeled alternative in `RelationalSqlParser.fillMethod`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLinearFill?: (ctx: LinearFillContext) => Result;
    /**
     * Visit a parse tree produced by the `previousFill`
     * labeled alternative in `RelationalSqlParser.fillMethod`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPreviousFill?: (ctx: PreviousFillContext) => Result;
    /**
     * Visit a parse tree produced by the `valueFill`
     * labeled alternative in `RelationalSqlParser.fillMethod`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueFill?: (ctx: ValueFillContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.timeColumnClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimeColumnClause?: (ctx: TimeColumnClauseContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.fillGroupClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFillGroupClause?: (ctx: FillGroupClauseContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.timeBoundClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimeBoundClause?: (ctx: TimeBoundClauseContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.limitOffsetClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLimitOffsetClause?: (ctx: LimitOffsetClauseContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.limitRowCount`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLimitRowCount?: (ctx: LimitRowCountContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.rowCount`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowCount?: (ctx: RowCountContext) => Result;
    /**
     * Visit a parse tree produced by the `queryTermDefault`
     * labeled alternative in `RelationalSqlParser.queryTerm`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryTermDefault?: (ctx: QueryTermDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `setOperation`
     * labeled alternative in `RelationalSqlParser.queryTerm`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetOperation?: (ctx: SetOperationContext) => Result;
    /**
     * Visit a parse tree produced by the `queryPrimaryDefault`
     * labeled alternative in `RelationalSqlParser.queryPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `table`
     * labeled alternative in `RelationalSqlParser.queryPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable?: (ctx: TableContext) => Result;
    /**
     * Visit a parse tree produced by the `inlineTable`
     * labeled alternative in `RelationalSqlParser.queryPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInlineTable?: (ctx: InlineTableContext) => Result;
    /**
     * Visit a parse tree produced by the `subquery`
     * labeled alternative in `RelationalSqlParser.queryPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubquery?: (ctx: SubqueryContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.sortItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSortItem?: (ctx: SortItemContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.querySpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuerySpecification?: (ctx: QuerySpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.groupBy`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupBy?: (ctx: GroupByContext) => Result;
    /**
     * Visit a parse tree produced by the `singleGroupingSet`
     * labeled alternative in `RelationalSqlParser.groupingElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleGroupingSet?: (ctx: SingleGroupingSetContext) => Result;
    /**
     * Visit a parse tree produced by the `rollup`
     * labeled alternative in `RelationalSqlParser.groupingElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRollup?: (ctx: RollupContext) => Result;
    /**
     * Visit a parse tree produced by the `cube`
     * labeled alternative in `RelationalSqlParser.groupingElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCube?: (ctx: CubeContext) => Result;
    /**
     * Visit a parse tree produced by the `multipleGroupingSets`
     * labeled alternative in `RelationalSqlParser.groupingElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipleGroupingSets?: (ctx: MultipleGroupingSetsContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.timeValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimeValue?: (ctx: TimeValueContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.dateExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDateExpression?: (ctx: DateExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.datetime`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatetime?: (ctx: DatetimeContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.keepExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKeepExpression?: (ctx: KeepExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.groupingSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingSet?: (ctx: GroupingSetContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.namedQuery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedQuery?: (ctx: NamedQueryContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.setQuantifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetQuantifier?: (ctx: SetQuantifierContext) => Result;
    /**
     * Visit a parse tree produced by the `selectSingle`
     * labeled alternative in `RelationalSqlParser.selectItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectSingle?: (ctx: SelectSingleContext) => Result;
    /**
     * Visit a parse tree produced by the `selectAll`
     * labeled alternative in `RelationalSqlParser.selectItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectAll?: (ctx: SelectAllContext) => Result;
    /**
     * Visit a parse tree produced by the `relationDefault`
     * labeled alternative in `RelationalSqlParser.relation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelationDefault?: (ctx: RelationDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `patternRecognitionRelation`
     * labeled alternative in `RelationalSqlParser.relation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPatternRecognitionRelation?: (ctx: PatternRecognitionRelationContext) => Result;
    /**
     * Visit a parse tree produced by the `joinRelation`
     * labeled alternative in `RelationalSqlParser.relation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinRelation?: (ctx: JoinRelationContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.joinType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinType?: (ctx: JoinTypeContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.joinCriteria`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinCriteria?: (ctx: JoinCriteriaContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.patternRecognition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPatternRecognition?: (ctx: PatternRecognitionContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.measureDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMeasureDefinition?: (ctx: MeasureDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.rowsPerMatch`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowsPerMatch?: (ctx: RowsPerMatchContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.emptyMatchHandling`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEmptyMatchHandling?: (ctx: EmptyMatchHandlingContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.skipTo`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSkipTo?: (ctx: SkipToContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.subsetDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubsetDefinition?: (ctx: SubsetDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.variableDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableDefinition?: (ctx: VariableDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.aliasedRelation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAliasedRelation?: (ctx: AliasedRelationContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.columnAliases`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnAliases?: (ctx: ColumnAliasesContext) => Result;
    /**
     * Visit a parse tree produced by the `tableName`
     * labeled alternative in `RelationalSqlParser.relationPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableName?: (ctx: TableNameContext) => Result;
    /**
     * Visit a parse tree produced by the `subqueryRelation`
     * labeled alternative in `RelationalSqlParser.relationPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubqueryRelation?: (ctx: SubqueryRelationContext) => Result;
    /**
     * Visit a parse tree produced by the `parenthesizedRelation`
     * labeled alternative in `RelationalSqlParser.relationPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParenthesizedRelation?: (ctx: ParenthesizedRelationContext) => Result;
    /**
     * Visit a parse tree produced by the `tableFunctionInvocationWithTableKeyWord`
     * labeled alternative in `RelationalSqlParser.relationPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableFunctionInvocationWithTableKeyWord?: (ctx: TableFunctionInvocationWithTableKeyWordContext) => Result;
    /**
     * Visit a parse tree produced by the `tableFunctionInvocation`
     * labeled alternative in `RelationalSqlParser.relationPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableFunctionInvocation?: (ctx: TableFunctionInvocationContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.tableFunctionCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableFunctionCall?: (ctx: TableFunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.tableFunctionArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableFunctionArgument?: (ctx: TableFunctionArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.tableArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableArgument?: (ctx: TableArgumentContext) => Result;
    /**
     * Visit a parse tree produced by the `tableArgumentTableWithTableKeyWord`
     * labeled alternative in `RelationalSqlParser.tableArgumentRelation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableArgumentTableWithTableKeyWord?: (ctx: TableArgumentTableWithTableKeyWordContext) => Result;
    /**
     * Visit a parse tree produced by the `tableArgumentTable`
     * labeled alternative in `RelationalSqlParser.tableArgumentRelation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableArgumentTable?: (ctx: TableArgumentTableContext) => Result;
    /**
     * Visit a parse tree produced by the `tableArgumentQueryWithTableKeyWord`
     * labeled alternative in `RelationalSqlParser.tableArgumentRelation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableArgumentQueryWithTableKeyWord?: (ctx: TableArgumentQueryWithTableKeyWordContext) => Result;
    /**
     * Visit a parse tree produced by the `tableArgumentQuery`
     * labeled alternative in `RelationalSqlParser.tableArgumentRelation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableArgumentQuery?: (ctx: TableArgumentQueryContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.scalarArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitScalarArgument?: (ctx: ScalarArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `logicalNot`
     * labeled alternative in `RelationalSqlParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalNot?: (ctx: LogicalNotContext) => Result;
    /**
     * Visit a parse tree produced by the `predicated`
     * labeled alternative in `RelationalSqlParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicated?: (ctx: PredicatedContext) => Result;
    /**
     * Visit a parse tree produced by the `or`
     * labeled alternative in `RelationalSqlParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOr?: (ctx: OrContext) => Result;
    /**
     * Visit a parse tree produced by the `and`
     * labeled alternative in `RelationalSqlParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnd?: (ctx: AndContext) => Result;
    /**
     * Visit a parse tree produced by the `comparison`
     * labeled alternative in `RelationalSqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparison?: (ctx: ComparisonContext) => Result;
    /**
     * Visit a parse tree produced by the `quantifiedComparison`
     * labeled alternative in `RelationalSqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuantifiedComparison?: (ctx: QuantifiedComparisonContext) => Result;
    /**
     * Visit a parse tree produced by the `between`
     * labeled alternative in `RelationalSqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBetween?: (ctx: BetweenContext) => Result;
    /**
     * Visit a parse tree produced by the `inList`
     * labeled alternative in `RelationalSqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInList?: (ctx: InListContext) => Result;
    /**
     * Visit a parse tree produced by the `inSubquery`
     * labeled alternative in `RelationalSqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInSubquery?: (ctx: InSubqueryContext) => Result;
    /**
     * Visit a parse tree produced by the `like`
     * labeled alternative in `RelationalSqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLike?: (ctx: LikeContext) => Result;
    /**
     * Visit a parse tree produced by the `nullPredicate`
     * labeled alternative in `RelationalSqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNullPredicate?: (ctx: NullPredicateContext) => Result;
    /**
     * Visit a parse tree produced by the `distinctFrom`
     * labeled alternative in `RelationalSqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDistinctFrom?: (ctx: DistinctFromContext) => Result;
    /**
     * Visit a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `RelationalSqlParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `concatenation`
     * labeled alternative in `RelationalSqlParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConcatenation?: (ctx: ConcatenationContext) => Result;
    /**
     * Visit a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `RelationalSqlParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => Result;
    /**
     * Visit a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `RelationalSqlParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => Result;
    /**
     * Visit a parse tree produced by the `dereference`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDereference?: (ctx: DereferenceContext) => Result;
    /**
     * Visit a parse tree produced by the `dateTimeExpression`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDateTimeExpression?: (ctx: DateTimeExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `simpleCase`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleCase?: (ctx: SimpleCaseContext) => Result;
    /**
     * Visit a parse tree produced by the `columnReference`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnReference?: (ctx: ColumnReferenceContext) => Result;
    /**
     * Visit a parse tree produced by the `rowConstructor`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowConstructor?: (ctx: RowConstructorContext) => Result;
    /**
     * Visit a parse tree produced by the `columns`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumns?: (ctx: ColumnsContext) => Result;
    /**
     * Visit a parse tree produced by the `specialDateTimeFunction`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSpecialDateTimeFunction?: (ctx: SpecialDateTimeFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `subqueryExpression`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubqueryExpression?: (ctx: SubqueryExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `currentDatabase`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCurrentDatabase?: (ctx: CurrentDatabaseContext) => Result;
    /**
     * Visit a parse tree produced by the `substring`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubstring?: (ctx: SubstringContext) => Result;
    /**
     * Visit a parse tree produced by the `literal`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteral?: (ctx: LiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `dateBinGapFill`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDateBinGapFill?: (ctx: DateBinGapFillContext) => Result;
    /**
     * Visit a parse tree produced by the `cast`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCast?: (ctx: CastContext) => Result;
    /**
     * Visit a parse tree produced by the `currentUser`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCurrentUser?: (ctx: CurrentUserContext) => Result;
    /**
     * Visit a parse tree produced by the `extract`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtract?: (ctx: ExtractContext) => Result;
    /**
     * Visit a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `trim`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrim?: (ctx: TrimContext) => Result;
    /**
     * Visit a parse tree produced by the `functionCall`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionCall?: (ctx: FunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `exists`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExists?: (ctx: ExistsContext) => Result;
    /**
     * Visit a parse tree produced by the `searchedCase`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSearchedCase?: (ctx: SearchedCaseContext) => Result;
    /**
     * Visit a parse tree produced by the `dateBin`
     * labeled alternative in `RelationalSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDateBin?: (ctx: DateBinContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.over`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOver?: (ctx: OverContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.windowDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowDefinition?: (ctx: WindowDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.windowSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowSpecification?: (ctx: WindowSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.windowFrame`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowFrame?: (ctx: WindowFrameContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.frameExtent`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrameExtent?: (ctx: FrameExtentContext) => Result;
    /**
     * Visit a parse tree produced by the `unboundedFrame`
     * labeled alternative in `RelationalSqlParser.frameBound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnboundedFrame?: (ctx: UnboundedFrameContext) => Result;
    /**
     * Visit a parse tree produced by the `currentRowBound`
     * labeled alternative in `RelationalSqlParser.frameBound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCurrentRowBound?: (ctx: CurrentRowBoundContext) => Result;
    /**
     * Visit a parse tree produced by the `boundedFrame`
     * labeled alternative in `RelationalSqlParser.frameBound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBoundedFrame?: (ctx: BoundedFrameContext) => Result;
    /**
     * Visit a parse tree produced by the `nullLiteral`
     * labeled alternative in `RelationalSqlParser.literalExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNullLiteral?: (ctx: NullLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `numericLiteral`
     * labeled alternative in `RelationalSqlParser.literalExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumericLiteral?: (ctx: NumericLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `booleanLiteral`
     * labeled alternative in `RelationalSqlParser.literalExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `stringLiteral`
     * labeled alternative in `RelationalSqlParser.literalExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringLiteral?: (ctx: StringLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `datetimeLiteral`
     * labeled alternative in `RelationalSqlParser.literalExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatetimeLiteral?: (ctx: DatetimeLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `binaryLiteral`
     * labeled alternative in `RelationalSqlParser.literalExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBinaryLiteral?: (ctx: BinaryLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `parameter`
     * labeled alternative in `RelationalSqlParser.literalExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameter?: (ctx: ParameterContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.processingMode`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcessingMode?: (ctx: ProcessingModeContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.trimsSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrimsSpecification?: (ctx: TrimsSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.nullTreatment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNullTreatment?: (ctx: NullTreatmentContext) => Result;
    /**
     * Visit a parse tree produced by the `basicStringLiteral`
     * labeled alternative in `RelationalSqlParser.string`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBasicStringLiteral?: (ctx: BasicStringLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `unicodeStringLiteral`
     * labeled alternative in `RelationalSqlParser.string`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.identifierOrString`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierOrString?: (ctx: IdentifierOrStringContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.comparisonOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.comparisonQuantifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparisonQuantifier?: (ctx: ComparisonQuantifierContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.booleanValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanValue?: (ctx: BooleanValueContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.interval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterval?: (ctx: IntervalContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.intervalField`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntervalField?: (ctx: IntervalFieldContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.timeDuration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimeDuration?: (ctx: TimeDurationContext) => Result;
    /**
     * Visit a parse tree produced by the `genericType`
     * labeled alternative in `RelationalSqlParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenericType?: (ctx: GenericTypeContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.typeParameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeParameter?: (ctx: TypeParameterContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.whenClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhenClause?: (ctx: WhenClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `quantifiedPrimary`
     * labeled alternative in `RelationalSqlParser.rowPattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuantifiedPrimary?: (ctx: QuantifiedPrimaryContext) => Result;
    /**
     * Visit a parse tree produced by the `patternConcatenation`
     * labeled alternative in `RelationalSqlParser.rowPattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPatternConcatenation?: (ctx: PatternConcatenationContext) => Result;
    /**
     * Visit a parse tree produced by the `patternAlternation`
     * labeled alternative in `RelationalSqlParser.rowPattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPatternAlternation?: (ctx: PatternAlternationContext) => Result;
    /**
     * Visit a parse tree produced by the `patternVariable`
     * labeled alternative in `RelationalSqlParser.patternPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPatternVariable?: (ctx: PatternVariableContext) => Result;
    /**
     * Visit a parse tree produced by the `emptyPattern`
     * labeled alternative in `RelationalSqlParser.patternPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEmptyPattern?: (ctx: EmptyPatternContext) => Result;
    /**
     * Visit a parse tree produced by the `patternPermutation`
     * labeled alternative in `RelationalSqlParser.patternPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPatternPermutation?: (ctx: PatternPermutationContext) => Result;
    /**
     * Visit a parse tree produced by the `groupedPattern`
     * labeled alternative in `RelationalSqlParser.patternPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupedPattern?: (ctx: GroupedPatternContext) => Result;
    /**
     * Visit a parse tree produced by the `partitionStartAnchor`
     * labeled alternative in `RelationalSqlParser.patternPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionStartAnchor?: (ctx: PartitionStartAnchorContext) => Result;
    /**
     * Visit a parse tree produced by the `partitionEndAnchor`
     * labeled alternative in `RelationalSqlParser.patternPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionEndAnchor?: (ctx: PartitionEndAnchorContext) => Result;
    /**
     * Visit a parse tree produced by the `excludedPattern`
     * labeled alternative in `RelationalSqlParser.patternPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExcludedPattern?: (ctx: ExcludedPatternContext) => Result;
    /**
     * Visit a parse tree produced by the `zeroOrMoreQuantifier`
     * labeled alternative in `RelationalSqlParser.patternQuantifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitZeroOrMoreQuantifier?: (ctx: ZeroOrMoreQuantifierContext) => Result;
    /**
     * Visit a parse tree produced by the `oneOrMoreQuantifier`
     * labeled alternative in `RelationalSqlParser.patternQuantifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOneOrMoreQuantifier?: (ctx: OneOrMoreQuantifierContext) => Result;
    /**
     * Visit a parse tree produced by the `zeroOrOneQuantifier`
     * labeled alternative in `RelationalSqlParser.patternQuantifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitZeroOrOneQuantifier?: (ctx: ZeroOrOneQuantifierContext) => Result;
    /**
     * Visit a parse tree produced by the `rangeQuantifier`
     * labeled alternative in `RelationalSqlParser.patternQuantifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRangeQuantifier?: (ctx: RangeQuantifierContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.updateAssignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdateAssignment?: (ctx: UpdateAssignmentContext) => Result;
    /**
     * Visit a parse tree produced by the `returnStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnStatement?: (ctx: ReturnStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `assignmentStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignmentStatement?: (ctx: AssignmentStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `simpleCaseStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleCaseStatement?: (ctx: SimpleCaseStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `searchedCaseStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSearchedCaseStatement?: (ctx: SearchedCaseStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `ifStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfStatement?: (ctx: IfStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `iterateStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIterateStatement?: (ctx: IterateStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `leaveStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLeaveStatement?: (ctx: LeaveStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `compoundStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompoundStatement?: (ctx: CompoundStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `loopStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoopStatement?: (ctx: LoopStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `whileStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhileStatement?: (ctx: WhileStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `repeatStatement`
     * labeled alternative in `RelationalSqlParser.controlStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRepeatStatement?: (ctx: RepeatStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.caseStatementWhenClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCaseStatementWhenClause?: (ctx: CaseStatementWhenClauseContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.elseIfClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElseIfClause?: (ctx: ElseIfClauseContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.elseClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElseClause?: (ctx: ElseClauseContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.variableDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.sqlStatementList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSqlStatementList?: (ctx: SqlStatementListContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.privilege`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrivilege?: (ctx: PrivilegeContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.qualifiedName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedName?: (ctx: QualifiedNameContext) => Result;
    /**
     * Visit a parse tree produced by the `specifiedPrincipal`
     * labeled alternative in `RelationalSqlParser.grantor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSpecifiedPrincipal?: (ctx: SpecifiedPrincipalContext) => Result;
    /**
     * Visit a parse tree produced by the `currentUserGrantor`
     * labeled alternative in `RelationalSqlParser.grantor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCurrentUserGrantor?: (ctx: CurrentUserGrantorContext) => Result;
    /**
     * Visit a parse tree produced by the `currentRoleGrantor`
     * labeled alternative in `RelationalSqlParser.grantor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCurrentRoleGrantor?: (ctx: CurrentRoleGrantorContext) => Result;
    /**
     * Visit a parse tree produced by the `unspecifiedPrincipal`
     * labeled alternative in `RelationalSqlParser.principal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnspecifiedPrincipal?: (ctx: UnspecifiedPrincipalContext) => Result;
    /**
     * Visit a parse tree produced by the `userPrincipal`
     * labeled alternative in `RelationalSqlParser.principal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUserPrincipal?: (ctx: UserPrincipalContext) => Result;
    /**
     * Visit a parse tree produced by the `rolePrincipal`
     * labeled alternative in `RelationalSqlParser.principal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRolePrincipal?: (ctx: RolePrincipalContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.roles`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoles?: (ctx: RolesContext) => Result;
    /**
     * Visit a parse tree produced by the `unquotedIdentifier`
     * labeled alternative in `RelationalSqlParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by the `quotedIdentifier`
     * labeled alternative in `RelationalSqlParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by the `backQuotedIdentifier`
     * labeled alternative in `RelationalSqlParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by the `decimalLiteral`
     * labeled alternative in `RelationalSqlParser.number`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecimalLiteral?: (ctx: DecimalLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `doubleLiteral`
     * labeled alternative in `RelationalSqlParser.number`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDoubleLiteral?: (ctx: DoubleLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `integerLiteral`
     * labeled alternative in `RelationalSqlParser.number`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntegerLiteral?: (ctx: IntegerLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `identifierUser`
     * labeled alternative in `RelationalSqlParser.authorizationUser`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierUser?: (ctx: IdentifierUserContext) => Result;
    /**
     * Visit a parse tree produced by the `stringUser`
     * labeled alternative in `RelationalSqlParser.authorizationUser`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringUser?: (ctx: StringUserContext) => Result;
    /**
     * Visit a parse tree produced by `RelationalSqlParser.nonReserved`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonReserved?: (ctx: NonReservedContext) => Result;
}

