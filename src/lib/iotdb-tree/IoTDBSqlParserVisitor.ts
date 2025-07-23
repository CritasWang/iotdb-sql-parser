// Generated from dt-sql-parser/src/grammar/iotdb-tree/IoTDBSqlParser.g4 by ANTLR 4.13.1

// @ts-nocheck

import { AbstractParseTreeVisitor } from "antlr4ng";


import { SQLParserBase } from '../SQLParserBase';


import { ProgramContext } from "./IoTDBSqlParser.js";
import { StatementsContext } from "./IoTDBSqlParser.js";
import { SingleStatementContext } from "./IoTDBSqlParser.js";
import { StatementContext } from "./IoTDBSqlParser.js";
import { DdlStatementContext } from "./IoTDBSqlParser.js";
import { DmlStatementContext } from "./IoTDBSqlParser.js";
import { DclStatementContext } from "./IoTDBSqlParser.js";
import { UtilityStatementContext } from "./IoTDBSqlParser.js";
import { CreateDatabaseContext } from "./IoTDBSqlParser.js";
import { DatabaseAttributesClauseContext } from "./IoTDBSqlParser.js";
import { DatabaseAttributeClauseContext } from "./IoTDBSqlParser.js";
import { DatabaseAttributeKeyContext } from "./IoTDBSqlParser.js";
import { DropDatabaseContext } from "./IoTDBSqlParser.js";
import { DropPartitionContext } from "./IoTDBSqlParser.js";
import { AlterDatabaseContext } from "./IoTDBSqlParser.js";
import { ShowDatabasesContext } from "./IoTDBSqlParser.js";
import { CountDatabasesContext } from "./IoTDBSqlParser.js";
import { CreateAlignedTimeseriesContext } from "./IoTDBSqlParser.js";
import { CreateNonAlignedTimeseriesContext } from "./IoTDBSqlParser.js";
import { AlignedMeasurementsContext } from "./IoTDBSqlParser.js";
import { DropTimeseriesContext } from "./IoTDBSqlParser.js";
import { AlterTimeseriesContext } from "./IoTDBSqlParser.js";
import { AlterClauseContext } from "./IoTDBSqlParser.js";
import { AliasClauseContext } from "./IoTDBSqlParser.js";
import { TimeConditionClauseContext } from "./IoTDBSqlParser.js";
import { ShowDevicesContext } from "./IoTDBSqlParser.js";
import { ShowTimeseriesContext } from "./IoTDBSqlParser.js";
import { ShowChildPathsContext } from "./IoTDBSqlParser.js";
import { ShowChildNodesContext } from "./IoTDBSqlParser.js";
import { CountDevicesContext } from "./IoTDBSqlParser.js";
import { CountTimeseriesContext } from "./IoTDBSqlParser.js";
import { CountNodesContext } from "./IoTDBSqlParser.js";
import { DevicesWhereClauseContext } from "./IoTDBSqlParser.js";
import { TemplateEqualExpressionContext } from "./IoTDBSqlParser.js";
import { DeviceContainsExpressionContext } from "./IoTDBSqlParser.js";
import { TimeseriesWhereClauseContext } from "./IoTDBSqlParser.js";
import { TimeseriesContainsExpressionContext } from "./IoTDBSqlParser.js";
import { ColumnEqualsExpressionContext } from "./IoTDBSqlParser.js";
import { TagEqualsExpressionContext } from "./IoTDBSqlParser.js";
import { TagContainsExpressionContext } from "./IoTDBSqlParser.js";
import { CreateSchemaTemplateContext } from "./IoTDBSqlParser.js";
import { TemplateMeasurementClauseContext } from "./IoTDBSqlParser.js";
import { CreateTimeseriesUsingSchemaTemplateContext } from "./IoTDBSqlParser.js";
import { DropSchemaTemplateContext } from "./IoTDBSqlParser.js";
import { DropTimeseriesOfSchemaTemplateContext } from "./IoTDBSqlParser.js";
import { ShowSchemaTemplatesContext } from "./IoTDBSqlParser.js";
import { ShowNodesInSchemaTemplateContext } from "./IoTDBSqlParser.js";
import { ShowPathsSetSchemaTemplateContext } from "./IoTDBSqlParser.js";
import { ShowPathsUsingSchemaTemplateContext } from "./IoTDBSqlParser.js";
import { SetSchemaTemplateContext } from "./IoTDBSqlParser.js";
import { UnsetSchemaTemplateContext } from "./IoTDBSqlParser.js";
import { AlterSchemaTemplateContext } from "./IoTDBSqlParser.js";
import { SetTTLContext } from "./IoTDBSqlParser.js";
import { UnsetTTLContext } from "./IoTDBSqlParser.js";
import { ShowTTLContext } from "./IoTDBSqlParser.js";
import { ShowAllTTLContext } from "./IoTDBSqlParser.js";
import { CreateFunctionContext } from "./IoTDBSqlParser.js";
import { UriClauseContext } from "./IoTDBSqlParser.js";
import { UriContext } from "./IoTDBSqlParser.js";
import { DropFunctionContext } from "./IoTDBSqlParser.js";
import { ShowFunctionsContext } from "./IoTDBSqlParser.js";
import { ShowSpaceQuotaContext } from "./IoTDBSqlParser.js";
import { SetSpaceQuotaContext } from "./IoTDBSqlParser.js";
import { SetThrottleQuotaContext } from "./IoTDBSqlParser.js";
import { ShowThrottleQuotaContext } from "./IoTDBSqlParser.js";
import { CreateTriggerContext } from "./IoTDBSqlParser.js";
import { TriggerTypeContext } from "./IoTDBSqlParser.js";
import { TriggerEventClauseContext } from "./IoTDBSqlParser.js";
import { TriggerAttributeClauseContext } from "./IoTDBSqlParser.js";
import { TriggerAttributeContext } from "./IoTDBSqlParser.js";
import { DropTriggerContext } from "./IoTDBSqlParser.js";
import { ShowTriggersContext } from "./IoTDBSqlParser.js";
import { StartTriggerContext } from "./IoTDBSqlParser.js";
import { StopTriggerContext } from "./IoTDBSqlParser.js";
import { CreateContinuousQueryContext } from "./IoTDBSqlParser.js";
import { ResampleClauseContext } from "./IoTDBSqlParser.js";
import { TimeoutPolicyClauseContext } from "./IoTDBSqlParser.js";
import { DropContinuousQueryContext } from "./IoTDBSqlParser.js";
import { ShowContinuousQueriesContext } from "./IoTDBSqlParser.js";
import { ShowVariablesContext } from "./IoTDBSqlParser.js";
import { ShowClusterContext } from "./IoTDBSqlParser.js";
import { ShowClusterIdContext } from "./IoTDBSqlParser.js";
import { ShowRegionsContext } from "./IoTDBSqlParser.js";
import { ShowDataNodesContext } from "./IoTDBSqlParser.js";
import { ShowConfigNodesContext } from "./IoTDBSqlParser.js";
import { ShowAINodesContext } from "./IoTDBSqlParser.js";
import { GetRegionIdContext } from "./IoTDBSqlParser.js";
import { GetTimeSlotListContext } from "./IoTDBSqlParser.js";
import { CountTimeSlotListContext } from "./IoTDBSqlParser.js";
import { GetSeriesSlotListContext } from "./IoTDBSqlParser.js";
import { MigrateRegionContext } from "./IoTDBSqlParser.js";
import { ReconstructRegionContext } from "./IoTDBSqlParser.js";
import { ExtendRegionContext } from "./IoTDBSqlParser.js";
import { RemoveRegionContext } from "./IoTDBSqlParser.js";
import { VerifyConnectionContext } from "./IoTDBSqlParser.js";
import { RemoveDataNodeContext } from "./IoTDBSqlParser.js";
import { RemoveConfigNodeContext } from "./IoTDBSqlParser.js";
import { RemoveAINodeContext } from "./IoTDBSqlParser.js";
import { CreatePipeContext } from "./IoTDBSqlParser.js";
import { ExtractorAttributesClauseContext } from "./IoTDBSqlParser.js";
import { ExtractorAttributeClauseContext } from "./IoTDBSqlParser.js";
import { ProcessorAttributesClauseContext } from "./IoTDBSqlParser.js";
import { ProcessorAttributeClauseContext } from "./IoTDBSqlParser.js";
import { ConnectorAttributesClauseContext } from "./IoTDBSqlParser.js";
import { ConnectorAttributesWithoutWithSinkClauseContext } from "./IoTDBSqlParser.js";
import { ConnectorAttributeClauseContext } from "./IoTDBSqlParser.js";
import { AlterPipeContext } from "./IoTDBSqlParser.js";
import { AlterExtractorAttributesClauseContext } from "./IoTDBSqlParser.js";
import { AlterProcessorAttributesClauseContext } from "./IoTDBSqlParser.js";
import { AlterConnectorAttributesClauseContext } from "./IoTDBSqlParser.js";
import { DropPipeContext } from "./IoTDBSqlParser.js";
import { StartPipeContext } from "./IoTDBSqlParser.js";
import { StopPipeContext } from "./IoTDBSqlParser.js";
import { ShowPipesContext } from "./IoTDBSqlParser.js";
import { CreatePipePluginContext } from "./IoTDBSqlParser.js";
import { DropPipePluginContext } from "./IoTDBSqlParser.js";
import { ShowPipePluginsContext } from "./IoTDBSqlParser.js";
import { CreateTopicContext } from "./IoTDBSqlParser.js";
import { TopicAttributesClauseContext } from "./IoTDBSqlParser.js";
import { TopicAttributeClauseContext } from "./IoTDBSqlParser.js";
import { DropTopicContext } from "./IoTDBSqlParser.js";
import { ShowTopicsContext } from "./IoTDBSqlParser.js";
import { ShowSubscriptionsContext } from "./IoTDBSqlParser.js";
import { DropSubscriptionContext } from "./IoTDBSqlParser.js";
import { CreateModelContext } from "./IoTDBSqlParser.js";
import { TrainingDataContext } from "./IoTDBSqlParser.js";
import { DataElementContext } from "./IoTDBSqlParser.js";
import { PathPatternElementContext } from "./IoTDBSqlParser.js";
import { WindowFunctionContext } from "./IoTDBSqlParser.js";
import { CallInferenceContext } from "./IoTDBSqlParser.js";
import { ActivateContext } from "./IoTDBSqlParser.js";
import { ShowActivationContext } from "./IoTDBSqlParser.js";
import { ShowSystemInfoContext } from "./IoTDBSqlParser.js";
import { HparamPairContext } from "./IoTDBSqlParser.js";
import { HparamValueContext } from "./IoTDBSqlParser.js";
import { HparamRangeContext } from "./IoTDBSqlParser.js";
import { HparamCandidatesContext } from "./IoTDBSqlParser.js";
import { DropModelContext } from "./IoTDBSqlParser.js";
import { ShowModelsContext } from "./IoTDBSqlParser.js";
import { CreateLogicalViewContext } from "./IoTDBSqlParser.js";
import { ShowLogicalViewContext } from "./IoTDBSqlParser.js";
import { DropLogicalViewContext } from "./IoTDBSqlParser.js";
import { RenameLogicalViewContext } from "./IoTDBSqlParser.js";
import { AlterLogicalViewContext } from "./IoTDBSqlParser.js";
import { ViewSuffixPathsContext } from "./IoTDBSqlParser.js";
import { ViewTargetPathsContext } from "./IoTDBSqlParser.js";
import { ViewSourcePathsContext } from "./IoTDBSqlParser.js";
import { CreateTableViewContext } from "./IoTDBSqlParser.js";
import { ViewColumnDefinitionContext } from "./IoTDBSqlParser.js";
import { GenericTypeContext } from "./IoTDBSqlParser.js";
import { TypeParameterContext } from "./IoTDBSqlParser.js";
import { QualifiedNameContext } from "./IoTDBSqlParser.js";
import { PropertiesContext } from "./IoTDBSqlParser.js";
import { PropertyAssignmentsContext } from "./IoTDBSqlParser.js";
import { PropertyContext } from "./IoTDBSqlParser.js";
import { CommentContext } from "./IoTDBSqlParser.js";
import { DefaultPropertyValueContext } from "./IoTDBSqlParser.js";
import { NonDefaultPropertyValueContext } from "./IoTDBSqlParser.js";
import { LiteralExpressionContext } from "./IoTDBSqlParser.js";
import { SelectStatementContext } from "./IoTDBSqlParser.js";
import { SelectClauseContext } from "./IoTDBSqlParser.js";
import { ResultColumnContext } from "./IoTDBSqlParser.js";
import { IntoClauseContext } from "./IoTDBSqlParser.js";
import { IntoItemContext } from "./IoTDBSqlParser.js";
import { FromClauseContext } from "./IoTDBSqlParser.js";
import { WhereClauseContext } from "./IoTDBSqlParser.js";
import { GroupByClauseContext } from "./IoTDBSqlParser.js";
import { GroupByAttributeClauseContext } from "./IoTDBSqlParser.js";
import { NumberContext } from "./IoTDBSqlParser.js";
import { TimeRangeContext } from "./IoTDBSqlParser.js";
import { HavingClauseContext } from "./IoTDBSqlParser.js";
import { OrderByClauseContext } from "./IoTDBSqlParser.js";
import { OrderByAttributeClauseContext } from "./IoTDBSqlParser.js";
import { SortKeyContext } from "./IoTDBSqlParser.js";
import { FillClauseContext } from "./IoTDBSqlParser.js";
import { PaginationClauseContext } from "./IoTDBSqlParser.js";
import { RowPaginationClauseContext } from "./IoTDBSqlParser.js";
import { SeriesPaginationClauseContext } from "./IoTDBSqlParser.js";
import { LimitClauseContext } from "./IoTDBSqlParser.js";
import { OffsetClauseContext } from "./IoTDBSqlParser.js";
import { SlimitClauseContext } from "./IoTDBSqlParser.js";
import { SoffsetClauseContext } from "./IoTDBSqlParser.js";
import { AlignByClauseContext } from "./IoTDBSqlParser.js";
import { InsertStatementContext } from "./IoTDBSqlParser.js";
import { InsertColumnsSpecContext } from "./IoTDBSqlParser.js";
import { InsertColumnContext } from "./IoTDBSqlParser.js";
import { InsertValuesSpecContext } from "./IoTDBSqlParser.js";
import { RowContext } from "./IoTDBSqlParser.js";
import { DeleteStatementContext } from "./IoTDBSqlParser.js";
import { CreateUserContext } from "./IoTDBSqlParser.js";
import { CreateRoleContext } from "./IoTDBSqlParser.js";
import { AlterUserContext } from "./IoTDBSqlParser.js";
import { GrantUserContext } from "./IoTDBSqlParser.js";
import { GrantRoleContext } from "./IoTDBSqlParser.js";
import { GrantOptContext } from "./IoTDBSqlParser.js";
import { GrantRoleToUserContext } from "./IoTDBSqlParser.js";
import { RevokeUserContext } from "./IoTDBSqlParser.js";
import { RevokeRoleContext } from "./IoTDBSqlParser.js";
import { RevokeRoleFromUserContext } from "./IoTDBSqlParser.js";
import { DropUserContext } from "./IoTDBSqlParser.js";
import { DropRoleContext } from "./IoTDBSqlParser.js";
import { ListUserContext } from "./IoTDBSqlParser.js";
import { ListRoleContext } from "./IoTDBSqlParser.js";
import { ListPrivilegesUserContext } from "./IoTDBSqlParser.js";
import { ListPrivilegesRoleContext } from "./IoTDBSqlParser.js";
import { PrivilegesContext } from "./IoTDBSqlParser.js";
import { PrivilegeValueContext } from "./IoTDBSqlParser.js";
import { UsernameWithRootContext } from "./IoTDBSqlParser.js";
import { FlushContext } from "./IoTDBSqlParser.js";
import { ClearCacheContext } from "./IoTDBSqlParser.js";
import { SetConfigurationContext } from "./IoTDBSqlParser.js";
import { SetConfigurationEntryContext } from "./IoTDBSqlParser.js";
import { SettleContext } from "./IoTDBSqlParser.js";
import { StartRepairDataContext } from "./IoTDBSqlParser.js";
import { StopRepairDataContext } from "./IoTDBSqlParser.js";
import { ExplainContext } from "./IoTDBSqlParser.js";
import { SetSystemStatusContext } from "./IoTDBSqlParser.js";
import { ShowVersionContext } from "./IoTDBSqlParser.js";
import { ShowFlushInfoContext } from "./IoTDBSqlParser.js";
import { ShowLockInfoContext } from "./IoTDBSqlParser.js";
import { ShowQueryResourceContext } from "./IoTDBSqlParser.js";
import { ShowQueriesContext } from "./IoTDBSqlParser.js";
import { ShowCurrentTimestampContext } from "./IoTDBSqlParser.js";
import { KillQueryContext } from "./IoTDBSqlParser.js";
import { GrantWatermarkEmbeddingContext } from "./IoTDBSqlParser.js";
import { RevokeWatermarkEmbeddingContext } from "./IoTDBSqlParser.js";
import { LoadConfigurationContext } from "./IoTDBSqlParser.js";
import { LoadTimeseriesContext } from "./IoTDBSqlParser.js";
import { LoadFileContext } from "./IoTDBSqlParser.js";
import { LoadFileAttributeClausesContext } from "./IoTDBSqlParser.js";
import { LoadFileAttributeClauseContext } from "./IoTDBSqlParser.js";
import { LoadFileWithAttributeClausesContext } from "./IoTDBSqlParser.js";
import { LoadFileWithAttributeClauseContext } from "./IoTDBSqlParser.js";
import { RemoveFileContext } from "./IoTDBSqlParser.js";
import { UnloadFileContext } from "./IoTDBSqlParser.js";
import { SetSqlDialectContext } from "./IoTDBSqlParser.js";
import { ShowCurrentSqlDialectContext } from "./IoTDBSqlParser.js";
import { ShowCurrentUserContext } from "./IoTDBSqlParser.js";
import { SyncAttributeClausesContext } from "./IoTDBSqlParser.js";
import { FullPathContext } from "./IoTDBSqlParser.js";
import { FullPathInExpressionContext } from "./IoTDBSqlParser.js";
import { PrefixPathContext } from "./IoTDBSqlParser.js";
import { FullPathInIntoPathContext } from "./IoTDBSqlParser.js";
import { SuffixPathInIntoPathContext } from "./IoTDBSqlParser.js";
import { NodeNameContext } from "./IoTDBSqlParser.js";
import { NodeNameWithoutWildcardContext } from "./IoTDBSqlParser.js";
import { NodeNameSliceContext } from "./IoTDBSqlParser.js";
import { NodeNameInIntoPathContext } from "./IoTDBSqlParser.js";
import { WildcardContext } from "./IoTDBSqlParser.js";
import { ConstantContext } from "./IoTDBSqlParser.js";
import { DatetimeLiteralContext } from "./IoTDBSqlParser.js";
import { RealLiteralContext } from "./IoTDBSqlParser.js";
import { TimeValueContext } from "./IoTDBSqlParser.js";
import { DateExpressionContext } from "./IoTDBSqlParser.js";
import { ExpressionContext } from "./IoTDBSqlParser.js";
import { CaseWhenThenExpressionContext } from "./IoTDBSqlParser.js";
import { WhenThenExpressionContext } from "./IoTDBSqlParser.js";
import { FunctionNameContext } from "./IoTDBSqlParser.js";
import { ScalarFunctionExpressionContext } from "./IoTDBSqlParser.js";
import { Operator_eqContext } from "./IoTDBSqlParser.js";
import { Operator_andContext } from "./IoTDBSqlParser.js";
import { Operator_orContext } from "./IoTDBSqlParser.js";
import { Operator_notContext } from "./IoTDBSqlParser.js";
import { Operator_containsContext } from "./IoTDBSqlParser.js";
import { Operator_betweenContext } from "./IoTDBSqlParser.js";
import { Operator_isContext } from "./IoTDBSqlParser.js";
import { Operator_inContext } from "./IoTDBSqlParser.js";
import { Null_literalContext } from "./IoTDBSqlParser.js";
import { Nan_literalContext } from "./IoTDBSqlParser.js";
import { Boolean_literalContext } from "./IoTDBSqlParser.js";
import { AttributeClausesContext } from "./IoTDBSqlParser.js";
import { AliasNodeNameContext } from "./IoTDBSqlParser.js";
import { TagClauseContext } from "./IoTDBSqlParser.js";
import { AttributeClauseContext } from "./IoTDBSqlParser.js";
import { AttributePairContext } from "./IoTDBSqlParser.js";
import { AttributeKeyContext } from "./IoTDBSqlParser.js";
import { AttributeValueContext } from "./IoTDBSqlParser.js";
import { AliasContext } from "./IoTDBSqlParser.js";
import { SubStringExpressionContext } from "./IoTDBSqlParser.js";
import { SignedIntegerLiteralContext } from "./IoTDBSqlParser.js";
import { IdentifierContext } from "./IoTDBSqlParser.js";
import { KeyWordsContext } from "./IoTDBSqlParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `IoTDBSqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class IoTDBSqlParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.statements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatements?: (ctx: StatementsContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.singleStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleStatement?: (ctx: SingleStatementContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.ddlStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDdlStatement?: (ctx: DdlStatementContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.dmlStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDmlStatement?: (ctx: DmlStatementContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.dclStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDclStatement?: (ctx: DclStatementContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.utilityStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUtilityStatement?: (ctx: UtilityStatementContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.createDatabase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateDatabase?: (ctx: CreateDatabaseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.databaseAttributesClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabaseAttributesClause?: (ctx: DatabaseAttributesClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.databaseAttributeClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabaseAttributeClause?: (ctx: DatabaseAttributeClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.databaseAttributeKey`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabaseAttributeKey?: (ctx: DatabaseAttributeKeyContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.dropDatabase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropDatabase?: (ctx: DropDatabaseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.dropPartition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropPartition?: (ctx: DropPartitionContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.alterDatabase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterDatabase?: (ctx: AlterDatabaseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showDatabases`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowDatabases?: (ctx: ShowDatabasesContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.countDatabases`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCountDatabases?: (ctx: CountDatabasesContext) => Result;
    /**
     * Visit a parse tree produced by the `createAlignedTimeseries`
     * labeled alternative in `IoTDBSqlParser.createTimeseries`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateAlignedTimeseries?: (ctx: CreateAlignedTimeseriesContext) => Result;
    /**
     * Visit a parse tree produced by the `createNonAlignedTimeseries`
     * labeled alternative in `IoTDBSqlParser.createTimeseries`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateNonAlignedTimeseries?: (ctx: CreateNonAlignedTimeseriesContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.alignedMeasurements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlignedMeasurements?: (ctx: AlignedMeasurementsContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.dropTimeseries`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropTimeseries?: (ctx: DropTimeseriesContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.alterTimeseries`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTimeseries?: (ctx: AlterTimeseriesContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.alterClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterClause?: (ctx: AlterClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.aliasClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAliasClause?: (ctx: AliasClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.timeConditionClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimeConditionClause?: (ctx: TimeConditionClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showDevices`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowDevices?: (ctx: ShowDevicesContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showTimeseries`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTimeseries?: (ctx: ShowTimeseriesContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showChildPaths`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowChildPaths?: (ctx: ShowChildPathsContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showChildNodes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowChildNodes?: (ctx: ShowChildNodesContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.countDevices`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCountDevices?: (ctx: CountDevicesContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.countTimeseries`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCountTimeseries?: (ctx: CountTimeseriesContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.countNodes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCountNodes?: (ctx: CountNodesContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.devicesWhereClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDevicesWhereClause?: (ctx: DevicesWhereClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.templateEqualExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTemplateEqualExpression?: (ctx: TemplateEqualExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.deviceContainsExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeviceContainsExpression?: (ctx: DeviceContainsExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.timeseriesWhereClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimeseriesWhereClause?: (ctx: TimeseriesWhereClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.timeseriesContainsExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimeseriesContainsExpression?: (ctx: TimeseriesContainsExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.columnEqualsExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnEqualsExpression?: (ctx: ColumnEqualsExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.tagEqualsExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTagEqualsExpression?: (ctx: TagEqualsExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.tagContainsExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTagContainsExpression?: (ctx: TagContainsExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.createSchemaTemplate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateSchemaTemplate?: (ctx: CreateSchemaTemplateContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.templateMeasurementClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTemplateMeasurementClause?: (ctx: TemplateMeasurementClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.createTimeseriesUsingSchemaTemplate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTimeseriesUsingSchemaTemplate?: (ctx: CreateTimeseriesUsingSchemaTemplateContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.dropSchemaTemplate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropSchemaTemplate?: (ctx: DropSchemaTemplateContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.dropTimeseriesOfSchemaTemplate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropTimeseriesOfSchemaTemplate?: (ctx: DropTimeseriesOfSchemaTemplateContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showSchemaTemplates`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowSchemaTemplates?: (ctx: ShowSchemaTemplatesContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showNodesInSchemaTemplate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowNodesInSchemaTemplate?: (ctx: ShowNodesInSchemaTemplateContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showPathsSetSchemaTemplate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowPathsSetSchemaTemplate?: (ctx: ShowPathsSetSchemaTemplateContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showPathsUsingSchemaTemplate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowPathsUsingSchemaTemplate?: (ctx: ShowPathsUsingSchemaTemplateContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.setSchemaTemplate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetSchemaTemplate?: (ctx: SetSchemaTemplateContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.unsetSchemaTemplate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnsetSchemaTemplate?: (ctx: UnsetSchemaTemplateContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.alterSchemaTemplate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterSchemaTemplate?: (ctx: AlterSchemaTemplateContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.setTTL`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTTL?: (ctx: SetTTLContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.unsetTTL`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnsetTTL?: (ctx: UnsetTTLContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showTTL`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTTL?: (ctx: ShowTTLContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showAllTTL`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowAllTTL?: (ctx: ShowAllTTLContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.createFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateFunction?: (ctx: CreateFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.uriClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUriClause?: (ctx: UriClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.uri`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUri?: (ctx: UriContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.dropFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropFunction?: (ctx: DropFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showFunctions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowFunctions?: (ctx: ShowFunctionsContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showSpaceQuota`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowSpaceQuota?: (ctx: ShowSpaceQuotaContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.setSpaceQuota`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetSpaceQuota?: (ctx: SetSpaceQuotaContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.setThrottleQuota`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetThrottleQuota?: (ctx: SetThrottleQuotaContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showThrottleQuota`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowThrottleQuota?: (ctx: ShowThrottleQuotaContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.createTrigger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTrigger?: (ctx: CreateTriggerContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.triggerType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerType?: (ctx: TriggerTypeContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.triggerEventClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerEventClause?: (ctx: TriggerEventClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.triggerAttributeClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerAttributeClause?: (ctx: TriggerAttributeClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.triggerAttribute`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerAttribute?: (ctx: TriggerAttributeContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.dropTrigger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropTrigger?: (ctx: DropTriggerContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showTriggers`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTriggers?: (ctx: ShowTriggersContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.startTrigger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStartTrigger?: (ctx: StartTriggerContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.stopTrigger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStopTrigger?: (ctx: StopTriggerContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.createContinuousQuery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateContinuousQuery?: (ctx: CreateContinuousQueryContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.resampleClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResampleClause?: (ctx: ResampleClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.timeoutPolicyClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimeoutPolicyClause?: (ctx: TimeoutPolicyClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.dropContinuousQuery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropContinuousQuery?: (ctx: DropContinuousQueryContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showContinuousQueries`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowContinuousQueries?: (ctx: ShowContinuousQueriesContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showVariables`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowVariables?: (ctx: ShowVariablesContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showCluster`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCluster?: (ctx: ShowClusterContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showClusterId`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowClusterId?: (ctx: ShowClusterIdContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showRegions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowRegions?: (ctx: ShowRegionsContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showDataNodes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowDataNodes?: (ctx: ShowDataNodesContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showConfigNodes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowConfigNodes?: (ctx: ShowConfigNodesContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showAINodes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowAINodes?: (ctx: ShowAINodesContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.getRegionId`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGetRegionId?: (ctx: GetRegionIdContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.getTimeSlotList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGetTimeSlotList?: (ctx: GetTimeSlotListContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.countTimeSlotList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCountTimeSlotList?: (ctx: CountTimeSlotListContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.getSeriesSlotList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGetSeriesSlotList?: (ctx: GetSeriesSlotListContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.migrateRegion`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMigrateRegion?: (ctx: MigrateRegionContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.reconstructRegion`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReconstructRegion?: (ctx: ReconstructRegionContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.extendRegion`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtendRegion?: (ctx: ExtendRegionContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.removeRegion`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemoveRegion?: (ctx: RemoveRegionContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.verifyConnection`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVerifyConnection?: (ctx: VerifyConnectionContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.removeDataNode`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemoveDataNode?: (ctx: RemoveDataNodeContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.removeConfigNode`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemoveConfigNode?: (ctx: RemoveConfigNodeContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.removeAINode`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemoveAINode?: (ctx: RemoveAINodeContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.createPipe`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatePipe?: (ctx: CreatePipeContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.extractorAttributesClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtractorAttributesClause?: (ctx: ExtractorAttributesClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.extractorAttributeClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtractorAttributeClause?: (ctx: ExtractorAttributeClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.processorAttributesClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcessorAttributesClause?: (ctx: ProcessorAttributesClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.processorAttributeClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcessorAttributeClause?: (ctx: ProcessorAttributeClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.connectorAttributesClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConnectorAttributesClause?: (ctx: ConnectorAttributesClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.connectorAttributesWithoutWithSinkClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConnectorAttributesWithoutWithSinkClause?: (ctx: ConnectorAttributesWithoutWithSinkClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.connectorAttributeClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConnectorAttributeClause?: (ctx: ConnectorAttributeClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.alterPipe`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterPipe?: (ctx: AlterPipeContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.alterExtractorAttributesClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterExtractorAttributesClause?: (ctx: AlterExtractorAttributesClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.alterProcessorAttributesClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterProcessorAttributesClause?: (ctx: AlterProcessorAttributesClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.alterConnectorAttributesClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterConnectorAttributesClause?: (ctx: AlterConnectorAttributesClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.dropPipe`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropPipe?: (ctx: DropPipeContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.startPipe`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStartPipe?: (ctx: StartPipeContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.stopPipe`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStopPipe?: (ctx: StopPipeContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showPipes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowPipes?: (ctx: ShowPipesContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.createPipePlugin`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatePipePlugin?: (ctx: CreatePipePluginContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.dropPipePlugin`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropPipePlugin?: (ctx: DropPipePluginContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showPipePlugins`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowPipePlugins?: (ctx: ShowPipePluginsContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.createTopic`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTopic?: (ctx: CreateTopicContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.topicAttributesClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTopicAttributesClause?: (ctx: TopicAttributesClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.topicAttributeClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTopicAttributeClause?: (ctx: TopicAttributeClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.dropTopic`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropTopic?: (ctx: DropTopicContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showTopics`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTopics?: (ctx: ShowTopicsContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showSubscriptions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowSubscriptions?: (ctx: ShowSubscriptionsContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.dropSubscription`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropSubscription?: (ctx: DropSubscriptionContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.createModel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateModel?: (ctx: CreateModelContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.trainingData`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrainingData?: (ctx: TrainingDataContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.dataElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDataElement?: (ctx: DataElementContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.pathPatternElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPathPatternElement?: (ctx: PathPatternElementContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.windowFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowFunction?: (ctx: WindowFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.callInference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCallInference?: (ctx: CallInferenceContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.activate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitActivate?: (ctx: ActivateContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showActivation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowActivation?: (ctx: ShowActivationContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showSystemInfo`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowSystemInfo?: (ctx: ShowSystemInfoContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.hparamPair`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHparamPair?: (ctx: HparamPairContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.hparamValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHparamValue?: (ctx: HparamValueContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.hparamRange`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHparamRange?: (ctx: HparamRangeContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.hparamCandidates`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHparamCandidates?: (ctx: HparamCandidatesContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.dropModel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropModel?: (ctx: DropModelContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showModels`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowModels?: (ctx: ShowModelsContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.createLogicalView`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateLogicalView?: (ctx: CreateLogicalViewContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showLogicalView`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowLogicalView?: (ctx: ShowLogicalViewContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.dropLogicalView`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropLogicalView?: (ctx: DropLogicalViewContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.renameLogicalView`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameLogicalView?: (ctx: RenameLogicalViewContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.alterLogicalView`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterLogicalView?: (ctx: AlterLogicalViewContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.viewSuffixPaths`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewSuffixPaths?: (ctx: ViewSuffixPathsContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.viewTargetPaths`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewTargetPaths?: (ctx: ViewTargetPathsContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.viewSourcePaths`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewSourcePaths?: (ctx: ViewSourcePathsContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.createTableView`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTableView?: (ctx: CreateTableViewContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.viewColumnDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewColumnDefinition?: (ctx: ViewColumnDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by the `genericType`
     * labeled alternative in `IoTDBSqlParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenericType?: (ctx: GenericTypeContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.typeParameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeParameter?: (ctx: TypeParameterContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.qualifiedName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedName?: (ctx: QualifiedNameContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.properties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProperties?: (ctx: PropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.propertyAssignments`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyAssignments?: (ctx: PropertyAssignmentsContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProperty?: (ctx: PropertyContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.comment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComment?: (ctx: CommentContext) => Result;
    /**
     * Visit a parse tree produced by the `defaultPropertyValue`
     * labeled alternative in `IoTDBSqlParser.propertyValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefaultPropertyValue?: (ctx: DefaultPropertyValueContext) => Result;
    /**
     * Visit a parse tree produced by the `nonDefaultPropertyValue`
     * labeled alternative in `IoTDBSqlParser.propertyValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonDefaultPropertyValue?: (ctx: NonDefaultPropertyValueContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.literalExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteralExpression?: (ctx: LiteralExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.selectStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectStatement?: (ctx: SelectStatementContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.selectClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectClause?: (ctx: SelectClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.resultColumn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResultColumn?: (ctx: ResultColumnContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.intoClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntoClause?: (ctx: IntoClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.intoItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntoItem?: (ctx: IntoItemContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.fromClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromClause?: (ctx: FromClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.whereClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhereClause?: (ctx: WhereClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.groupByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupByClause?: (ctx: GroupByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.groupByAttributeClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupByAttributeClause?: (ctx: GroupByAttributeClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.number`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumber?: (ctx: NumberContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.timeRange`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimeRange?: (ctx: TimeRangeContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.havingClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHavingClause?: (ctx: HavingClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.orderByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderByClause?: (ctx: OrderByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.orderByAttributeClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderByAttributeClause?: (ctx: OrderByAttributeClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.sortKey`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSortKey?: (ctx: SortKeyContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.fillClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFillClause?: (ctx: FillClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.paginationClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPaginationClause?: (ctx: PaginationClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.rowPaginationClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowPaginationClause?: (ctx: RowPaginationClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.seriesPaginationClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSeriesPaginationClause?: (ctx: SeriesPaginationClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.limitClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLimitClause?: (ctx: LimitClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.offsetClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOffsetClause?: (ctx: OffsetClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.slimitClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSlimitClause?: (ctx: SlimitClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.soffsetClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSoffsetClause?: (ctx: SoffsetClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.alignByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlignByClause?: (ctx: AlignByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.insertStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertStatement?: (ctx: InsertStatementContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.insertColumnsSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertColumnsSpec?: (ctx: InsertColumnsSpecContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.insertColumn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertColumn?: (ctx: InsertColumnContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.insertValuesSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertValuesSpec?: (ctx: InsertValuesSpecContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.row`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRow?: (ctx: RowContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.deleteStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeleteStatement?: (ctx: DeleteStatementContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.createUser`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateUser?: (ctx: CreateUserContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.createRole`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateRole?: (ctx: CreateRoleContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.alterUser`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterUser?: (ctx: AlterUserContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.grantUser`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrantUser?: (ctx: GrantUserContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.grantRole`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrantRole?: (ctx: GrantRoleContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.grantOpt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrantOpt?: (ctx: GrantOptContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.grantRoleToUser`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrantRoleToUser?: (ctx: GrantRoleToUserContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.revokeUser`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRevokeUser?: (ctx: RevokeUserContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.revokeRole`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRevokeRole?: (ctx: RevokeRoleContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.revokeRoleFromUser`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRevokeRoleFromUser?: (ctx: RevokeRoleFromUserContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.dropUser`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropUser?: (ctx: DropUserContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.dropRole`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropRole?: (ctx: DropRoleContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.listUser`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListUser?: (ctx: ListUserContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.listRole`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListRole?: (ctx: ListRoleContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.listPrivilegesUser`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListPrivilegesUser?: (ctx: ListPrivilegesUserContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.listPrivilegesRole`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListPrivilegesRole?: (ctx: ListPrivilegesRoleContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.privileges`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrivileges?: (ctx: PrivilegesContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.privilegeValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrivilegeValue?: (ctx: PrivilegeValueContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.usernameWithRoot`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsernameWithRoot?: (ctx: UsernameWithRootContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.flush`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFlush?: (ctx: FlushContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.clearCache`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClearCache?: (ctx: ClearCacheContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.setConfiguration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetConfiguration?: (ctx: SetConfigurationContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.setConfigurationEntry`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetConfigurationEntry?: (ctx: SetConfigurationEntryContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.settle`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSettle?: (ctx: SettleContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.startRepairData`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStartRepairData?: (ctx: StartRepairDataContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.stopRepairData`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStopRepairData?: (ctx: StopRepairDataContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.explain`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplain?: (ctx: ExplainContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.setSystemStatus`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetSystemStatus?: (ctx: SetSystemStatusContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showVersion`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowVersion?: (ctx: ShowVersionContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showFlushInfo`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowFlushInfo?: (ctx: ShowFlushInfoContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showLockInfo`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowLockInfo?: (ctx: ShowLockInfoContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showQueryResource`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowQueryResource?: (ctx: ShowQueryResourceContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showQueries`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowQueries?: (ctx: ShowQueriesContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showCurrentTimestamp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCurrentTimestamp?: (ctx: ShowCurrentTimestampContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.killQuery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKillQuery?: (ctx: KillQueryContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.grantWatermarkEmbedding`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrantWatermarkEmbedding?: (ctx: GrantWatermarkEmbeddingContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.revokeWatermarkEmbedding`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRevokeWatermarkEmbedding?: (ctx: RevokeWatermarkEmbeddingContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.loadConfiguration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoadConfiguration?: (ctx: LoadConfigurationContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.loadTimeseries`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoadTimeseries?: (ctx: LoadTimeseriesContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.loadFile`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoadFile?: (ctx: LoadFileContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.loadFileAttributeClauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoadFileAttributeClauses?: (ctx: LoadFileAttributeClausesContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.loadFileAttributeClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoadFileAttributeClause?: (ctx: LoadFileAttributeClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.loadFileWithAttributeClauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoadFileWithAttributeClauses?: (ctx: LoadFileWithAttributeClausesContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.loadFileWithAttributeClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoadFileWithAttributeClause?: (ctx: LoadFileWithAttributeClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.removeFile`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemoveFile?: (ctx: RemoveFileContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.unloadFile`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnloadFile?: (ctx: UnloadFileContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.setSqlDialect`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetSqlDialect?: (ctx: SetSqlDialectContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showCurrentSqlDialect`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCurrentSqlDialect?: (ctx: ShowCurrentSqlDialectContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.showCurrentUser`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCurrentUser?: (ctx: ShowCurrentUserContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.syncAttributeClauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSyncAttributeClauses?: (ctx: SyncAttributeClausesContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.fullPath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFullPath?: (ctx: FullPathContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.fullPathInExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFullPathInExpression?: (ctx: FullPathInExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.prefixPath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrefixPath?: (ctx: PrefixPathContext) => Result;
    /**
     * Visit a parse tree produced by the `fullPathInIntoPath`
     * labeled alternative in `IoTDBSqlParser.intoPath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFullPathInIntoPath?: (ctx: FullPathInIntoPathContext) => Result;
    /**
     * Visit a parse tree produced by the `suffixPathInIntoPath`
     * labeled alternative in `IoTDBSqlParser.intoPath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSuffixPathInIntoPath?: (ctx: SuffixPathInIntoPathContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.nodeName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNodeName?: (ctx: NodeNameContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.nodeNameWithoutWildcard`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNodeNameWithoutWildcard?: (ctx: NodeNameWithoutWildcardContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.nodeNameSlice`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNodeNameSlice?: (ctx: NodeNameSliceContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.nodeNameInIntoPath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNodeNameInIntoPath?: (ctx: NodeNameInIntoPathContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.wildcard`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWildcard?: (ctx: WildcardContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstant?: (ctx: ConstantContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.datetimeLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatetimeLiteral?: (ctx: DatetimeLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.realLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRealLiteral?: (ctx: RealLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.timeValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimeValue?: (ctx: TimeValueContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.dateExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDateExpression?: (ctx: DateExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.caseWhenThenExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCaseWhenThenExpression?: (ctx: CaseWhenThenExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.whenThenExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhenThenExpression?: (ctx: WhenThenExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.functionName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionName?: (ctx: FunctionNameContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.scalarFunctionExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitScalarFunctionExpression?: (ctx: ScalarFunctionExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.operator_eq`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperator_eq?: (ctx: Operator_eqContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.operator_and`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperator_and?: (ctx: Operator_andContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.operator_or`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperator_or?: (ctx: Operator_orContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.operator_not`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperator_not?: (ctx: Operator_notContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.operator_contains`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperator_contains?: (ctx: Operator_containsContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.operator_between`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperator_between?: (ctx: Operator_betweenContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.operator_is`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperator_is?: (ctx: Operator_isContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.operator_in`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperator_in?: (ctx: Operator_inContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.null_literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNull_literal?: (ctx: Null_literalContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.nan_literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNan_literal?: (ctx: Nan_literalContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.boolean_literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBoolean_literal?: (ctx: Boolean_literalContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.attributeClauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttributeClauses?: (ctx: AttributeClausesContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.aliasNodeName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAliasNodeName?: (ctx: AliasNodeNameContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.tagClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTagClause?: (ctx: TagClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.attributeClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttributeClause?: (ctx: AttributeClauseContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.attributePair`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttributePair?: (ctx: AttributePairContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.attributeKey`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttributeKey?: (ctx: AttributeKeyContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.attributeValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttributeValue?: (ctx: AttributeValueContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.alias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlias?: (ctx: AliasContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.subStringExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubStringExpression?: (ctx: SubStringExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.signedIntegerLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSignedIntegerLiteral?: (ctx: SignedIntegerLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier?: (ctx: IdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `IoTDBSqlParser.keyWords`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKeyWords?: (ctx: KeyWordsContext) => Result;
}

