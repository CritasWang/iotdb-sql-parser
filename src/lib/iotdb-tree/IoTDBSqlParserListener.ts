// Generated from dt-sql-parser/src/grammar/iotdb-tree/IoTDBSqlParser.g4 by ANTLR 4.13.1

// @ts-nocheck

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


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
 * This interface defines a complete listener for a parse tree produced by
 * `IoTDBSqlParser`.
 */
export class IoTDBSqlParserListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.program`.
     * @param ctx the parse tree
     */
    enterProgram?: (ctx: ProgramContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.program`.
     * @param ctx the parse tree
     */
    exitProgram?: (ctx: ProgramContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.statements`.
     * @param ctx the parse tree
     */
    enterStatements?: (ctx: StatementsContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.statements`.
     * @param ctx the parse tree
     */
    exitStatements?: (ctx: StatementsContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.singleStatement`.
     * @param ctx the parse tree
     */
    enterSingleStatement?: (ctx: SingleStatementContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.singleStatement`.
     * @param ctx the parse tree
     */
    exitSingleStatement?: (ctx: SingleStatementContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.statement`.
     * @param ctx the parse tree
     */
    enterStatement?: (ctx: StatementContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.statement`.
     * @param ctx the parse tree
     */
    exitStatement?: (ctx: StatementContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.ddlStatement`.
     * @param ctx the parse tree
     */
    enterDdlStatement?: (ctx: DdlStatementContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.ddlStatement`.
     * @param ctx the parse tree
     */
    exitDdlStatement?: (ctx: DdlStatementContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.dmlStatement`.
     * @param ctx the parse tree
     */
    enterDmlStatement?: (ctx: DmlStatementContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.dmlStatement`.
     * @param ctx the parse tree
     */
    exitDmlStatement?: (ctx: DmlStatementContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.dclStatement`.
     * @param ctx the parse tree
     */
    enterDclStatement?: (ctx: DclStatementContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.dclStatement`.
     * @param ctx the parse tree
     */
    exitDclStatement?: (ctx: DclStatementContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.utilityStatement`.
     * @param ctx the parse tree
     */
    enterUtilityStatement?: (ctx: UtilityStatementContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.utilityStatement`.
     * @param ctx the parse tree
     */
    exitUtilityStatement?: (ctx: UtilityStatementContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.createDatabase`.
     * @param ctx the parse tree
     */
    enterCreateDatabase?: (ctx: CreateDatabaseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.createDatabase`.
     * @param ctx the parse tree
     */
    exitCreateDatabase?: (ctx: CreateDatabaseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.databaseAttributesClause`.
     * @param ctx the parse tree
     */
    enterDatabaseAttributesClause?: (ctx: DatabaseAttributesClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.databaseAttributesClause`.
     * @param ctx the parse tree
     */
    exitDatabaseAttributesClause?: (ctx: DatabaseAttributesClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.databaseAttributeClause`.
     * @param ctx the parse tree
     */
    enterDatabaseAttributeClause?: (ctx: DatabaseAttributeClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.databaseAttributeClause`.
     * @param ctx the parse tree
     */
    exitDatabaseAttributeClause?: (ctx: DatabaseAttributeClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.databaseAttributeKey`.
     * @param ctx the parse tree
     */
    enterDatabaseAttributeKey?: (ctx: DatabaseAttributeKeyContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.databaseAttributeKey`.
     * @param ctx the parse tree
     */
    exitDatabaseAttributeKey?: (ctx: DatabaseAttributeKeyContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.dropDatabase`.
     * @param ctx the parse tree
     */
    enterDropDatabase?: (ctx: DropDatabaseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.dropDatabase`.
     * @param ctx the parse tree
     */
    exitDropDatabase?: (ctx: DropDatabaseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.dropPartition`.
     * @param ctx the parse tree
     */
    enterDropPartition?: (ctx: DropPartitionContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.dropPartition`.
     * @param ctx the parse tree
     */
    exitDropPartition?: (ctx: DropPartitionContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.alterDatabase`.
     * @param ctx the parse tree
     */
    enterAlterDatabase?: (ctx: AlterDatabaseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.alterDatabase`.
     * @param ctx the parse tree
     */
    exitAlterDatabase?: (ctx: AlterDatabaseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showDatabases`.
     * @param ctx the parse tree
     */
    enterShowDatabases?: (ctx: ShowDatabasesContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showDatabases`.
     * @param ctx the parse tree
     */
    exitShowDatabases?: (ctx: ShowDatabasesContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.countDatabases`.
     * @param ctx the parse tree
     */
    enterCountDatabases?: (ctx: CountDatabasesContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.countDatabases`.
     * @param ctx the parse tree
     */
    exitCountDatabases?: (ctx: CountDatabasesContext) => void;
    /**
     * Enter a parse tree produced by the `createAlignedTimeseries`
     * labeled alternative in `IoTDBSqlParser.createTimeseries`.
     * @param ctx the parse tree
     */
    enterCreateAlignedTimeseries?: (ctx: CreateAlignedTimeseriesContext) => void;
    /**
     * Exit a parse tree produced by the `createAlignedTimeseries`
     * labeled alternative in `IoTDBSqlParser.createTimeseries`.
     * @param ctx the parse tree
     */
    exitCreateAlignedTimeseries?: (ctx: CreateAlignedTimeseriesContext) => void;
    /**
     * Enter a parse tree produced by the `createNonAlignedTimeseries`
     * labeled alternative in `IoTDBSqlParser.createTimeseries`.
     * @param ctx the parse tree
     */
    enterCreateNonAlignedTimeseries?: (ctx: CreateNonAlignedTimeseriesContext) => void;
    /**
     * Exit a parse tree produced by the `createNonAlignedTimeseries`
     * labeled alternative in `IoTDBSqlParser.createTimeseries`.
     * @param ctx the parse tree
     */
    exitCreateNonAlignedTimeseries?: (ctx: CreateNonAlignedTimeseriesContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.alignedMeasurements`.
     * @param ctx the parse tree
     */
    enterAlignedMeasurements?: (ctx: AlignedMeasurementsContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.alignedMeasurements`.
     * @param ctx the parse tree
     */
    exitAlignedMeasurements?: (ctx: AlignedMeasurementsContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.dropTimeseries`.
     * @param ctx the parse tree
     */
    enterDropTimeseries?: (ctx: DropTimeseriesContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.dropTimeseries`.
     * @param ctx the parse tree
     */
    exitDropTimeseries?: (ctx: DropTimeseriesContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.alterTimeseries`.
     * @param ctx the parse tree
     */
    enterAlterTimeseries?: (ctx: AlterTimeseriesContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.alterTimeseries`.
     * @param ctx the parse tree
     */
    exitAlterTimeseries?: (ctx: AlterTimeseriesContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.alterClause`.
     * @param ctx the parse tree
     */
    enterAlterClause?: (ctx: AlterClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.alterClause`.
     * @param ctx the parse tree
     */
    exitAlterClause?: (ctx: AlterClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.aliasClause`.
     * @param ctx the parse tree
     */
    enterAliasClause?: (ctx: AliasClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.aliasClause`.
     * @param ctx the parse tree
     */
    exitAliasClause?: (ctx: AliasClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.timeConditionClause`.
     * @param ctx the parse tree
     */
    enterTimeConditionClause?: (ctx: TimeConditionClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.timeConditionClause`.
     * @param ctx the parse tree
     */
    exitTimeConditionClause?: (ctx: TimeConditionClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showDevices`.
     * @param ctx the parse tree
     */
    enterShowDevices?: (ctx: ShowDevicesContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showDevices`.
     * @param ctx the parse tree
     */
    exitShowDevices?: (ctx: ShowDevicesContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showTimeseries`.
     * @param ctx the parse tree
     */
    enterShowTimeseries?: (ctx: ShowTimeseriesContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showTimeseries`.
     * @param ctx the parse tree
     */
    exitShowTimeseries?: (ctx: ShowTimeseriesContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showChildPaths`.
     * @param ctx the parse tree
     */
    enterShowChildPaths?: (ctx: ShowChildPathsContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showChildPaths`.
     * @param ctx the parse tree
     */
    exitShowChildPaths?: (ctx: ShowChildPathsContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showChildNodes`.
     * @param ctx the parse tree
     */
    enterShowChildNodes?: (ctx: ShowChildNodesContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showChildNodes`.
     * @param ctx the parse tree
     */
    exitShowChildNodes?: (ctx: ShowChildNodesContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.countDevices`.
     * @param ctx the parse tree
     */
    enterCountDevices?: (ctx: CountDevicesContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.countDevices`.
     * @param ctx the parse tree
     */
    exitCountDevices?: (ctx: CountDevicesContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.countTimeseries`.
     * @param ctx the parse tree
     */
    enterCountTimeseries?: (ctx: CountTimeseriesContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.countTimeseries`.
     * @param ctx the parse tree
     */
    exitCountTimeseries?: (ctx: CountTimeseriesContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.countNodes`.
     * @param ctx the parse tree
     */
    enterCountNodes?: (ctx: CountNodesContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.countNodes`.
     * @param ctx the parse tree
     */
    exitCountNodes?: (ctx: CountNodesContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.devicesWhereClause`.
     * @param ctx the parse tree
     */
    enterDevicesWhereClause?: (ctx: DevicesWhereClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.devicesWhereClause`.
     * @param ctx the parse tree
     */
    exitDevicesWhereClause?: (ctx: DevicesWhereClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.templateEqualExpression`.
     * @param ctx the parse tree
     */
    enterTemplateEqualExpression?: (ctx: TemplateEqualExpressionContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.templateEqualExpression`.
     * @param ctx the parse tree
     */
    exitTemplateEqualExpression?: (ctx: TemplateEqualExpressionContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.deviceContainsExpression`.
     * @param ctx the parse tree
     */
    enterDeviceContainsExpression?: (ctx: DeviceContainsExpressionContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.deviceContainsExpression`.
     * @param ctx the parse tree
     */
    exitDeviceContainsExpression?: (ctx: DeviceContainsExpressionContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.timeseriesWhereClause`.
     * @param ctx the parse tree
     */
    enterTimeseriesWhereClause?: (ctx: TimeseriesWhereClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.timeseriesWhereClause`.
     * @param ctx the parse tree
     */
    exitTimeseriesWhereClause?: (ctx: TimeseriesWhereClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.timeseriesContainsExpression`.
     * @param ctx the parse tree
     */
    enterTimeseriesContainsExpression?: (ctx: TimeseriesContainsExpressionContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.timeseriesContainsExpression`.
     * @param ctx the parse tree
     */
    exitTimeseriesContainsExpression?: (ctx: TimeseriesContainsExpressionContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.columnEqualsExpression`.
     * @param ctx the parse tree
     */
    enterColumnEqualsExpression?: (ctx: ColumnEqualsExpressionContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.columnEqualsExpression`.
     * @param ctx the parse tree
     */
    exitColumnEqualsExpression?: (ctx: ColumnEqualsExpressionContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.tagEqualsExpression`.
     * @param ctx the parse tree
     */
    enterTagEqualsExpression?: (ctx: TagEqualsExpressionContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.tagEqualsExpression`.
     * @param ctx the parse tree
     */
    exitTagEqualsExpression?: (ctx: TagEqualsExpressionContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.tagContainsExpression`.
     * @param ctx the parse tree
     */
    enterTagContainsExpression?: (ctx: TagContainsExpressionContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.tagContainsExpression`.
     * @param ctx the parse tree
     */
    exitTagContainsExpression?: (ctx: TagContainsExpressionContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.createSchemaTemplate`.
     * @param ctx the parse tree
     */
    enterCreateSchemaTemplate?: (ctx: CreateSchemaTemplateContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.createSchemaTemplate`.
     * @param ctx the parse tree
     */
    exitCreateSchemaTemplate?: (ctx: CreateSchemaTemplateContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.templateMeasurementClause`.
     * @param ctx the parse tree
     */
    enterTemplateMeasurementClause?: (ctx: TemplateMeasurementClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.templateMeasurementClause`.
     * @param ctx the parse tree
     */
    exitTemplateMeasurementClause?: (ctx: TemplateMeasurementClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.createTimeseriesUsingSchemaTemplate`.
     * @param ctx the parse tree
     */
    enterCreateTimeseriesUsingSchemaTemplate?: (ctx: CreateTimeseriesUsingSchemaTemplateContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.createTimeseriesUsingSchemaTemplate`.
     * @param ctx the parse tree
     */
    exitCreateTimeseriesUsingSchemaTemplate?: (ctx: CreateTimeseriesUsingSchemaTemplateContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.dropSchemaTemplate`.
     * @param ctx the parse tree
     */
    enterDropSchemaTemplate?: (ctx: DropSchemaTemplateContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.dropSchemaTemplate`.
     * @param ctx the parse tree
     */
    exitDropSchemaTemplate?: (ctx: DropSchemaTemplateContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.dropTimeseriesOfSchemaTemplate`.
     * @param ctx the parse tree
     */
    enterDropTimeseriesOfSchemaTemplate?: (ctx: DropTimeseriesOfSchemaTemplateContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.dropTimeseriesOfSchemaTemplate`.
     * @param ctx the parse tree
     */
    exitDropTimeseriesOfSchemaTemplate?: (ctx: DropTimeseriesOfSchemaTemplateContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showSchemaTemplates`.
     * @param ctx the parse tree
     */
    enterShowSchemaTemplates?: (ctx: ShowSchemaTemplatesContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showSchemaTemplates`.
     * @param ctx the parse tree
     */
    exitShowSchemaTemplates?: (ctx: ShowSchemaTemplatesContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showNodesInSchemaTemplate`.
     * @param ctx the parse tree
     */
    enterShowNodesInSchemaTemplate?: (ctx: ShowNodesInSchemaTemplateContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showNodesInSchemaTemplate`.
     * @param ctx the parse tree
     */
    exitShowNodesInSchemaTemplate?: (ctx: ShowNodesInSchemaTemplateContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showPathsSetSchemaTemplate`.
     * @param ctx the parse tree
     */
    enterShowPathsSetSchemaTemplate?: (ctx: ShowPathsSetSchemaTemplateContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showPathsSetSchemaTemplate`.
     * @param ctx the parse tree
     */
    exitShowPathsSetSchemaTemplate?: (ctx: ShowPathsSetSchemaTemplateContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showPathsUsingSchemaTemplate`.
     * @param ctx the parse tree
     */
    enterShowPathsUsingSchemaTemplate?: (ctx: ShowPathsUsingSchemaTemplateContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showPathsUsingSchemaTemplate`.
     * @param ctx the parse tree
     */
    exitShowPathsUsingSchemaTemplate?: (ctx: ShowPathsUsingSchemaTemplateContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.setSchemaTemplate`.
     * @param ctx the parse tree
     */
    enterSetSchemaTemplate?: (ctx: SetSchemaTemplateContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.setSchemaTemplate`.
     * @param ctx the parse tree
     */
    exitSetSchemaTemplate?: (ctx: SetSchemaTemplateContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.unsetSchemaTemplate`.
     * @param ctx the parse tree
     */
    enterUnsetSchemaTemplate?: (ctx: UnsetSchemaTemplateContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.unsetSchemaTemplate`.
     * @param ctx the parse tree
     */
    exitUnsetSchemaTemplate?: (ctx: UnsetSchemaTemplateContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.alterSchemaTemplate`.
     * @param ctx the parse tree
     */
    enterAlterSchemaTemplate?: (ctx: AlterSchemaTemplateContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.alterSchemaTemplate`.
     * @param ctx the parse tree
     */
    exitAlterSchemaTemplate?: (ctx: AlterSchemaTemplateContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.setTTL`.
     * @param ctx the parse tree
     */
    enterSetTTL?: (ctx: SetTTLContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.setTTL`.
     * @param ctx the parse tree
     */
    exitSetTTL?: (ctx: SetTTLContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.unsetTTL`.
     * @param ctx the parse tree
     */
    enterUnsetTTL?: (ctx: UnsetTTLContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.unsetTTL`.
     * @param ctx the parse tree
     */
    exitUnsetTTL?: (ctx: UnsetTTLContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showTTL`.
     * @param ctx the parse tree
     */
    enterShowTTL?: (ctx: ShowTTLContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showTTL`.
     * @param ctx the parse tree
     */
    exitShowTTL?: (ctx: ShowTTLContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showAllTTL`.
     * @param ctx the parse tree
     */
    enterShowAllTTL?: (ctx: ShowAllTTLContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showAllTTL`.
     * @param ctx the parse tree
     */
    exitShowAllTTL?: (ctx: ShowAllTTLContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.createFunction`.
     * @param ctx the parse tree
     */
    enterCreateFunction?: (ctx: CreateFunctionContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.createFunction`.
     * @param ctx the parse tree
     */
    exitCreateFunction?: (ctx: CreateFunctionContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.uriClause`.
     * @param ctx the parse tree
     */
    enterUriClause?: (ctx: UriClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.uriClause`.
     * @param ctx the parse tree
     */
    exitUriClause?: (ctx: UriClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.uri`.
     * @param ctx the parse tree
     */
    enterUri?: (ctx: UriContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.uri`.
     * @param ctx the parse tree
     */
    exitUri?: (ctx: UriContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.dropFunction`.
     * @param ctx the parse tree
     */
    enterDropFunction?: (ctx: DropFunctionContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.dropFunction`.
     * @param ctx the parse tree
     */
    exitDropFunction?: (ctx: DropFunctionContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showFunctions`.
     * @param ctx the parse tree
     */
    enterShowFunctions?: (ctx: ShowFunctionsContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showFunctions`.
     * @param ctx the parse tree
     */
    exitShowFunctions?: (ctx: ShowFunctionsContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showSpaceQuota`.
     * @param ctx the parse tree
     */
    enterShowSpaceQuota?: (ctx: ShowSpaceQuotaContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showSpaceQuota`.
     * @param ctx the parse tree
     */
    exitShowSpaceQuota?: (ctx: ShowSpaceQuotaContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.setSpaceQuota`.
     * @param ctx the parse tree
     */
    enterSetSpaceQuota?: (ctx: SetSpaceQuotaContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.setSpaceQuota`.
     * @param ctx the parse tree
     */
    exitSetSpaceQuota?: (ctx: SetSpaceQuotaContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.setThrottleQuota`.
     * @param ctx the parse tree
     */
    enterSetThrottleQuota?: (ctx: SetThrottleQuotaContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.setThrottleQuota`.
     * @param ctx the parse tree
     */
    exitSetThrottleQuota?: (ctx: SetThrottleQuotaContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showThrottleQuota`.
     * @param ctx the parse tree
     */
    enterShowThrottleQuota?: (ctx: ShowThrottleQuotaContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showThrottleQuota`.
     * @param ctx the parse tree
     */
    exitShowThrottleQuota?: (ctx: ShowThrottleQuotaContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.createTrigger`.
     * @param ctx the parse tree
     */
    enterCreateTrigger?: (ctx: CreateTriggerContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.createTrigger`.
     * @param ctx the parse tree
     */
    exitCreateTrigger?: (ctx: CreateTriggerContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.triggerType`.
     * @param ctx the parse tree
     */
    enterTriggerType?: (ctx: TriggerTypeContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.triggerType`.
     * @param ctx the parse tree
     */
    exitTriggerType?: (ctx: TriggerTypeContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.triggerEventClause`.
     * @param ctx the parse tree
     */
    enterTriggerEventClause?: (ctx: TriggerEventClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.triggerEventClause`.
     * @param ctx the parse tree
     */
    exitTriggerEventClause?: (ctx: TriggerEventClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.triggerAttributeClause`.
     * @param ctx the parse tree
     */
    enterTriggerAttributeClause?: (ctx: TriggerAttributeClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.triggerAttributeClause`.
     * @param ctx the parse tree
     */
    exitTriggerAttributeClause?: (ctx: TriggerAttributeClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.triggerAttribute`.
     * @param ctx the parse tree
     */
    enterTriggerAttribute?: (ctx: TriggerAttributeContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.triggerAttribute`.
     * @param ctx the parse tree
     */
    exitTriggerAttribute?: (ctx: TriggerAttributeContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.dropTrigger`.
     * @param ctx the parse tree
     */
    enterDropTrigger?: (ctx: DropTriggerContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.dropTrigger`.
     * @param ctx the parse tree
     */
    exitDropTrigger?: (ctx: DropTriggerContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showTriggers`.
     * @param ctx the parse tree
     */
    enterShowTriggers?: (ctx: ShowTriggersContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showTriggers`.
     * @param ctx the parse tree
     */
    exitShowTriggers?: (ctx: ShowTriggersContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.startTrigger`.
     * @param ctx the parse tree
     */
    enterStartTrigger?: (ctx: StartTriggerContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.startTrigger`.
     * @param ctx the parse tree
     */
    exitStartTrigger?: (ctx: StartTriggerContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.stopTrigger`.
     * @param ctx the parse tree
     */
    enterStopTrigger?: (ctx: StopTriggerContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.stopTrigger`.
     * @param ctx the parse tree
     */
    exitStopTrigger?: (ctx: StopTriggerContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.createContinuousQuery`.
     * @param ctx the parse tree
     */
    enterCreateContinuousQuery?: (ctx: CreateContinuousQueryContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.createContinuousQuery`.
     * @param ctx the parse tree
     */
    exitCreateContinuousQuery?: (ctx: CreateContinuousQueryContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.resampleClause`.
     * @param ctx the parse tree
     */
    enterResampleClause?: (ctx: ResampleClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.resampleClause`.
     * @param ctx the parse tree
     */
    exitResampleClause?: (ctx: ResampleClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.timeoutPolicyClause`.
     * @param ctx the parse tree
     */
    enterTimeoutPolicyClause?: (ctx: TimeoutPolicyClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.timeoutPolicyClause`.
     * @param ctx the parse tree
     */
    exitTimeoutPolicyClause?: (ctx: TimeoutPolicyClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.dropContinuousQuery`.
     * @param ctx the parse tree
     */
    enterDropContinuousQuery?: (ctx: DropContinuousQueryContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.dropContinuousQuery`.
     * @param ctx the parse tree
     */
    exitDropContinuousQuery?: (ctx: DropContinuousQueryContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showContinuousQueries`.
     * @param ctx the parse tree
     */
    enterShowContinuousQueries?: (ctx: ShowContinuousQueriesContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showContinuousQueries`.
     * @param ctx the parse tree
     */
    exitShowContinuousQueries?: (ctx: ShowContinuousQueriesContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showVariables`.
     * @param ctx the parse tree
     */
    enterShowVariables?: (ctx: ShowVariablesContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showVariables`.
     * @param ctx the parse tree
     */
    exitShowVariables?: (ctx: ShowVariablesContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showCluster`.
     * @param ctx the parse tree
     */
    enterShowCluster?: (ctx: ShowClusterContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showCluster`.
     * @param ctx the parse tree
     */
    exitShowCluster?: (ctx: ShowClusterContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showClusterId`.
     * @param ctx the parse tree
     */
    enterShowClusterId?: (ctx: ShowClusterIdContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showClusterId`.
     * @param ctx the parse tree
     */
    exitShowClusterId?: (ctx: ShowClusterIdContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showRegions`.
     * @param ctx the parse tree
     */
    enterShowRegions?: (ctx: ShowRegionsContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showRegions`.
     * @param ctx the parse tree
     */
    exitShowRegions?: (ctx: ShowRegionsContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showDataNodes`.
     * @param ctx the parse tree
     */
    enterShowDataNodes?: (ctx: ShowDataNodesContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showDataNodes`.
     * @param ctx the parse tree
     */
    exitShowDataNodes?: (ctx: ShowDataNodesContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showConfigNodes`.
     * @param ctx the parse tree
     */
    enterShowConfigNodes?: (ctx: ShowConfigNodesContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showConfigNodes`.
     * @param ctx the parse tree
     */
    exitShowConfigNodes?: (ctx: ShowConfigNodesContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showAINodes`.
     * @param ctx the parse tree
     */
    enterShowAINodes?: (ctx: ShowAINodesContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showAINodes`.
     * @param ctx the parse tree
     */
    exitShowAINodes?: (ctx: ShowAINodesContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.getRegionId`.
     * @param ctx the parse tree
     */
    enterGetRegionId?: (ctx: GetRegionIdContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.getRegionId`.
     * @param ctx the parse tree
     */
    exitGetRegionId?: (ctx: GetRegionIdContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.getTimeSlotList`.
     * @param ctx the parse tree
     */
    enterGetTimeSlotList?: (ctx: GetTimeSlotListContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.getTimeSlotList`.
     * @param ctx the parse tree
     */
    exitGetTimeSlotList?: (ctx: GetTimeSlotListContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.countTimeSlotList`.
     * @param ctx the parse tree
     */
    enterCountTimeSlotList?: (ctx: CountTimeSlotListContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.countTimeSlotList`.
     * @param ctx the parse tree
     */
    exitCountTimeSlotList?: (ctx: CountTimeSlotListContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.getSeriesSlotList`.
     * @param ctx the parse tree
     */
    enterGetSeriesSlotList?: (ctx: GetSeriesSlotListContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.getSeriesSlotList`.
     * @param ctx the parse tree
     */
    exitGetSeriesSlotList?: (ctx: GetSeriesSlotListContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.migrateRegion`.
     * @param ctx the parse tree
     */
    enterMigrateRegion?: (ctx: MigrateRegionContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.migrateRegion`.
     * @param ctx the parse tree
     */
    exitMigrateRegion?: (ctx: MigrateRegionContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.reconstructRegion`.
     * @param ctx the parse tree
     */
    enterReconstructRegion?: (ctx: ReconstructRegionContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.reconstructRegion`.
     * @param ctx the parse tree
     */
    exitReconstructRegion?: (ctx: ReconstructRegionContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.extendRegion`.
     * @param ctx the parse tree
     */
    enterExtendRegion?: (ctx: ExtendRegionContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.extendRegion`.
     * @param ctx the parse tree
     */
    exitExtendRegion?: (ctx: ExtendRegionContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.removeRegion`.
     * @param ctx the parse tree
     */
    enterRemoveRegion?: (ctx: RemoveRegionContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.removeRegion`.
     * @param ctx the parse tree
     */
    exitRemoveRegion?: (ctx: RemoveRegionContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.verifyConnection`.
     * @param ctx the parse tree
     */
    enterVerifyConnection?: (ctx: VerifyConnectionContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.verifyConnection`.
     * @param ctx the parse tree
     */
    exitVerifyConnection?: (ctx: VerifyConnectionContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.removeDataNode`.
     * @param ctx the parse tree
     */
    enterRemoveDataNode?: (ctx: RemoveDataNodeContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.removeDataNode`.
     * @param ctx the parse tree
     */
    exitRemoveDataNode?: (ctx: RemoveDataNodeContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.removeConfigNode`.
     * @param ctx the parse tree
     */
    enterRemoveConfigNode?: (ctx: RemoveConfigNodeContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.removeConfigNode`.
     * @param ctx the parse tree
     */
    exitRemoveConfigNode?: (ctx: RemoveConfigNodeContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.removeAINode`.
     * @param ctx the parse tree
     */
    enterRemoveAINode?: (ctx: RemoveAINodeContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.removeAINode`.
     * @param ctx the parse tree
     */
    exitRemoveAINode?: (ctx: RemoveAINodeContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.createPipe`.
     * @param ctx the parse tree
     */
    enterCreatePipe?: (ctx: CreatePipeContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.createPipe`.
     * @param ctx the parse tree
     */
    exitCreatePipe?: (ctx: CreatePipeContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.extractorAttributesClause`.
     * @param ctx the parse tree
     */
    enterExtractorAttributesClause?: (ctx: ExtractorAttributesClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.extractorAttributesClause`.
     * @param ctx the parse tree
     */
    exitExtractorAttributesClause?: (ctx: ExtractorAttributesClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.extractorAttributeClause`.
     * @param ctx the parse tree
     */
    enterExtractorAttributeClause?: (ctx: ExtractorAttributeClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.extractorAttributeClause`.
     * @param ctx the parse tree
     */
    exitExtractorAttributeClause?: (ctx: ExtractorAttributeClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.processorAttributesClause`.
     * @param ctx the parse tree
     */
    enterProcessorAttributesClause?: (ctx: ProcessorAttributesClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.processorAttributesClause`.
     * @param ctx the parse tree
     */
    exitProcessorAttributesClause?: (ctx: ProcessorAttributesClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.processorAttributeClause`.
     * @param ctx the parse tree
     */
    enterProcessorAttributeClause?: (ctx: ProcessorAttributeClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.processorAttributeClause`.
     * @param ctx the parse tree
     */
    exitProcessorAttributeClause?: (ctx: ProcessorAttributeClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.connectorAttributesClause`.
     * @param ctx the parse tree
     */
    enterConnectorAttributesClause?: (ctx: ConnectorAttributesClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.connectorAttributesClause`.
     * @param ctx the parse tree
     */
    exitConnectorAttributesClause?: (ctx: ConnectorAttributesClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.connectorAttributesWithoutWithSinkClause`.
     * @param ctx the parse tree
     */
    enterConnectorAttributesWithoutWithSinkClause?: (ctx: ConnectorAttributesWithoutWithSinkClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.connectorAttributesWithoutWithSinkClause`.
     * @param ctx the parse tree
     */
    exitConnectorAttributesWithoutWithSinkClause?: (ctx: ConnectorAttributesWithoutWithSinkClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.connectorAttributeClause`.
     * @param ctx the parse tree
     */
    enterConnectorAttributeClause?: (ctx: ConnectorAttributeClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.connectorAttributeClause`.
     * @param ctx the parse tree
     */
    exitConnectorAttributeClause?: (ctx: ConnectorAttributeClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.alterPipe`.
     * @param ctx the parse tree
     */
    enterAlterPipe?: (ctx: AlterPipeContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.alterPipe`.
     * @param ctx the parse tree
     */
    exitAlterPipe?: (ctx: AlterPipeContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.alterExtractorAttributesClause`.
     * @param ctx the parse tree
     */
    enterAlterExtractorAttributesClause?: (ctx: AlterExtractorAttributesClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.alterExtractorAttributesClause`.
     * @param ctx the parse tree
     */
    exitAlterExtractorAttributesClause?: (ctx: AlterExtractorAttributesClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.alterProcessorAttributesClause`.
     * @param ctx the parse tree
     */
    enterAlterProcessorAttributesClause?: (ctx: AlterProcessorAttributesClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.alterProcessorAttributesClause`.
     * @param ctx the parse tree
     */
    exitAlterProcessorAttributesClause?: (ctx: AlterProcessorAttributesClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.alterConnectorAttributesClause`.
     * @param ctx the parse tree
     */
    enterAlterConnectorAttributesClause?: (ctx: AlterConnectorAttributesClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.alterConnectorAttributesClause`.
     * @param ctx the parse tree
     */
    exitAlterConnectorAttributesClause?: (ctx: AlterConnectorAttributesClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.dropPipe`.
     * @param ctx the parse tree
     */
    enterDropPipe?: (ctx: DropPipeContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.dropPipe`.
     * @param ctx the parse tree
     */
    exitDropPipe?: (ctx: DropPipeContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.startPipe`.
     * @param ctx the parse tree
     */
    enterStartPipe?: (ctx: StartPipeContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.startPipe`.
     * @param ctx the parse tree
     */
    exitStartPipe?: (ctx: StartPipeContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.stopPipe`.
     * @param ctx the parse tree
     */
    enterStopPipe?: (ctx: StopPipeContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.stopPipe`.
     * @param ctx the parse tree
     */
    exitStopPipe?: (ctx: StopPipeContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showPipes`.
     * @param ctx the parse tree
     */
    enterShowPipes?: (ctx: ShowPipesContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showPipes`.
     * @param ctx the parse tree
     */
    exitShowPipes?: (ctx: ShowPipesContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.createPipePlugin`.
     * @param ctx the parse tree
     */
    enterCreatePipePlugin?: (ctx: CreatePipePluginContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.createPipePlugin`.
     * @param ctx the parse tree
     */
    exitCreatePipePlugin?: (ctx: CreatePipePluginContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.dropPipePlugin`.
     * @param ctx the parse tree
     */
    enterDropPipePlugin?: (ctx: DropPipePluginContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.dropPipePlugin`.
     * @param ctx the parse tree
     */
    exitDropPipePlugin?: (ctx: DropPipePluginContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showPipePlugins`.
     * @param ctx the parse tree
     */
    enterShowPipePlugins?: (ctx: ShowPipePluginsContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showPipePlugins`.
     * @param ctx the parse tree
     */
    exitShowPipePlugins?: (ctx: ShowPipePluginsContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.createTopic`.
     * @param ctx the parse tree
     */
    enterCreateTopic?: (ctx: CreateTopicContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.createTopic`.
     * @param ctx the parse tree
     */
    exitCreateTopic?: (ctx: CreateTopicContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.topicAttributesClause`.
     * @param ctx the parse tree
     */
    enterTopicAttributesClause?: (ctx: TopicAttributesClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.topicAttributesClause`.
     * @param ctx the parse tree
     */
    exitTopicAttributesClause?: (ctx: TopicAttributesClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.topicAttributeClause`.
     * @param ctx the parse tree
     */
    enterTopicAttributeClause?: (ctx: TopicAttributeClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.topicAttributeClause`.
     * @param ctx the parse tree
     */
    exitTopicAttributeClause?: (ctx: TopicAttributeClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.dropTopic`.
     * @param ctx the parse tree
     */
    enterDropTopic?: (ctx: DropTopicContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.dropTopic`.
     * @param ctx the parse tree
     */
    exitDropTopic?: (ctx: DropTopicContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showTopics`.
     * @param ctx the parse tree
     */
    enterShowTopics?: (ctx: ShowTopicsContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showTopics`.
     * @param ctx the parse tree
     */
    exitShowTopics?: (ctx: ShowTopicsContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showSubscriptions`.
     * @param ctx the parse tree
     */
    enterShowSubscriptions?: (ctx: ShowSubscriptionsContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showSubscriptions`.
     * @param ctx the parse tree
     */
    exitShowSubscriptions?: (ctx: ShowSubscriptionsContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.dropSubscription`.
     * @param ctx the parse tree
     */
    enterDropSubscription?: (ctx: DropSubscriptionContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.dropSubscription`.
     * @param ctx the parse tree
     */
    exitDropSubscription?: (ctx: DropSubscriptionContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.createModel`.
     * @param ctx the parse tree
     */
    enterCreateModel?: (ctx: CreateModelContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.createModel`.
     * @param ctx the parse tree
     */
    exitCreateModel?: (ctx: CreateModelContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.trainingData`.
     * @param ctx the parse tree
     */
    enterTrainingData?: (ctx: TrainingDataContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.trainingData`.
     * @param ctx the parse tree
     */
    exitTrainingData?: (ctx: TrainingDataContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.dataElement`.
     * @param ctx the parse tree
     */
    enterDataElement?: (ctx: DataElementContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.dataElement`.
     * @param ctx the parse tree
     */
    exitDataElement?: (ctx: DataElementContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.pathPatternElement`.
     * @param ctx the parse tree
     */
    enterPathPatternElement?: (ctx: PathPatternElementContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.pathPatternElement`.
     * @param ctx the parse tree
     */
    exitPathPatternElement?: (ctx: PathPatternElementContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.windowFunction`.
     * @param ctx the parse tree
     */
    enterWindowFunction?: (ctx: WindowFunctionContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.windowFunction`.
     * @param ctx the parse tree
     */
    exitWindowFunction?: (ctx: WindowFunctionContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.callInference`.
     * @param ctx the parse tree
     */
    enterCallInference?: (ctx: CallInferenceContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.callInference`.
     * @param ctx the parse tree
     */
    exitCallInference?: (ctx: CallInferenceContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.activate`.
     * @param ctx the parse tree
     */
    enterActivate?: (ctx: ActivateContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.activate`.
     * @param ctx the parse tree
     */
    exitActivate?: (ctx: ActivateContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showActivation`.
     * @param ctx the parse tree
     */
    enterShowActivation?: (ctx: ShowActivationContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showActivation`.
     * @param ctx the parse tree
     */
    exitShowActivation?: (ctx: ShowActivationContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showSystemInfo`.
     * @param ctx the parse tree
     */
    enterShowSystemInfo?: (ctx: ShowSystemInfoContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showSystemInfo`.
     * @param ctx the parse tree
     */
    exitShowSystemInfo?: (ctx: ShowSystemInfoContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.hparamPair`.
     * @param ctx the parse tree
     */
    enterHparamPair?: (ctx: HparamPairContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.hparamPair`.
     * @param ctx the parse tree
     */
    exitHparamPair?: (ctx: HparamPairContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.hparamValue`.
     * @param ctx the parse tree
     */
    enterHparamValue?: (ctx: HparamValueContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.hparamValue`.
     * @param ctx the parse tree
     */
    exitHparamValue?: (ctx: HparamValueContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.hparamRange`.
     * @param ctx the parse tree
     */
    enterHparamRange?: (ctx: HparamRangeContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.hparamRange`.
     * @param ctx the parse tree
     */
    exitHparamRange?: (ctx: HparamRangeContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.hparamCandidates`.
     * @param ctx the parse tree
     */
    enterHparamCandidates?: (ctx: HparamCandidatesContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.hparamCandidates`.
     * @param ctx the parse tree
     */
    exitHparamCandidates?: (ctx: HparamCandidatesContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.dropModel`.
     * @param ctx the parse tree
     */
    enterDropModel?: (ctx: DropModelContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.dropModel`.
     * @param ctx the parse tree
     */
    exitDropModel?: (ctx: DropModelContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showModels`.
     * @param ctx the parse tree
     */
    enterShowModels?: (ctx: ShowModelsContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showModels`.
     * @param ctx the parse tree
     */
    exitShowModels?: (ctx: ShowModelsContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.createLogicalView`.
     * @param ctx the parse tree
     */
    enterCreateLogicalView?: (ctx: CreateLogicalViewContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.createLogicalView`.
     * @param ctx the parse tree
     */
    exitCreateLogicalView?: (ctx: CreateLogicalViewContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showLogicalView`.
     * @param ctx the parse tree
     */
    enterShowLogicalView?: (ctx: ShowLogicalViewContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showLogicalView`.
     * @param ctx the parse tree
     */
    exitShowLogicalView?: (ctx: ShowLogicalViewContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.dropLogicalView`.
     * @param ctx the parse tree
     */
    enterDropLogicalView?: (ctx: DropLogicalViewContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.dropLogicalView`.
     * @param ctx the parse tree
     */
    exitDropLogicalView?: (ctx: DropLogicalViewContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.renameLogicalView`.
     * @param ctx the parse tree
     */
    enterRenameLogicalView?: (ctx: RenameLogicalViewContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.renameLogicalView`.
     * @param ctx the parse tree
     */
    exitRenameLogicalView?: (ctx: RenameLogicalViewContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.alterLogicalView`.
     * @param ctx the parse tree
     */
    enterAlterLogicalView?: (ctx: AlterLogicalViewContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.alterLogicalView`.
     * @param ctx the parse tree
     */
    exitAlterLogicalView?: (ctx: AlterLogicalViewContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.viewSuffixPaths`.
     * @param ctx the parse tree
     */
    enterViewSuffixPaths?: (ctx: ViewSuffixPathsContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.viewSuffixPaths`.
     * @param ctx the parse tree
     */
    exitViewSuffixPaths?: (ctx: ViewSuffixPathsContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.viewTargetPaths`.
     * @param ctx the parse tree
     */
    enterViewTargetPaths?: (ctx: ViewTargetPathsContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.viewTargetPaths`.
     * @param ctx the parse tree
     */
    exitViewTargetPaths?: (ctx: ViewTargetPathsContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.viewSourcePaths`.
     * @param ctx the parse tree
     */
    enterViewSourcePaths?: (ctx: ViewSourcePathsContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.viewSourcePaths`.
     * @param ctx the parse tree
     */
    exitViewSourcePaths?: (ctx: ViewSourcePathsContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.createTableView`.
     * @param ctx the parse tree
     */
    enterCreateTableView?: (ctx: CreateTableViewContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.createTableView`.
     * @param ctx the parse tree
     */
    exitCreateTableView?: (ctx: CreateTableViewContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.viewColumnDefinition`.
     * @param ctx the parse tree
     */
    enterViewColumnDefinition?: (ctx: ViewColumnDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.viewColumnDefinition`.
     * @param ctx the parse tree
     */
    exitViewColumnDefinition?: (ctx: ViewColumnDefinitionContext) => void;
    /**
     * Enter a parse tree produced by the `genericType`
     * labeled alternative in `IoTDBSqlParser.type`.
     * @param ctx the parse tree
     */
    enterGenericType?: (ctx: GenericTypeContext) => void;
    /**
     * Exit a parse tree produced by the `genericType`
     * labeled alternative in `IoTDBSqlParser.type`.
     * @param ctx the parse tree
     */
    exitGenericType?: (ctx: GenericTypeContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.typeParameter`.
     * @param ctx the parse tree
     */
    enterTypeParameter?: (ctx: TypeParameterContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.typeParameter`.
     * @param ctx the parse tree
     */
    exitTypeParameter?: (ctx: TypeParameterContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.qualifiedName`.
     * @param ctx the parse tree
     */
    enterQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.qualifiedName`.
     * @param ctx the parse tree
     */
    exitQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.properties`.
     * @param ctx the parse tree
     */
    enterProperties?: (ctx: PropertiesContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.properties`.
     * @param ctx the parse tree
     */
    exitProperties?: (ctx: PropertiesContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.propertyAssignments`.
     * @param ctx the parse tree
     */
    enterPropertyAssignments?: (ctx: PropertyAssignmentsContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.propertyAssignments`.
     * @param ctx the parse tree
     */
    exitPropertyAssignments?: (ctx: PropertyAssignmentsContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.property`.
     * @param ctx the parse tree
     */
    enterProperty?: (ctx: PropertyContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.property`.
     * @param ctx the parse tree
     */
    exitProperty?: (ctx: PropertyContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.comment`.
     * @param ctx the parse tree
     */
    enterComment?: (ctx: CommentContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.comment`.
     * @param ctx the parse tree
     */
    exitComment?: (ctx: CommentContext) => void;
    /**
     * Enter a parse tree produced by the `defaultPropertyValue`
     * labeled alternative in `IoTDBSqlParser.propertyValue`.
     * @param ctx the parse tree
     */
    enterDefaultPropertyValue?: (ctx: DefaultPropertyValueContext) => void;
    /**
     * Exit a parse tree produced by the `defaultPropertyValue`
     * labeled alternative in `IoTDBSqlParser.propertyValue`.
     * @param ctx the parse tree
     */
    exitDefaultPropertyValue?: (ctx: DefaultPropertyValueContext) => void;
    /**
     * Enter a parse tree produced by the `nonDefaultPropertyValue`
     * labeled alternative in `IoTDBSqlParser.propertyValue`.
     * @param ctx the parse tree
     */
    enterNonDefaultPropertyValue?: (ctx: NonDefaultPropertyValueContext) => void;
    /**
     * Exit a parse tree produced by the `nonDefaultPropertyValue`
     * labeled alternative in `IoTDBSqlParser.propertyValue`.
     * @param ctx the parse tree
     */
    exitNonDefaultPropertyValue?: (ctx: NonDefaultPropertyValueContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.literalExpression`.
     * @param ctx the parse tree
     */
    enterLiteralExpression?: (ctx: LiteralExpressionContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.literalExpression`.
     * @param ctx the parse tree
     */
    exitLiteralExpression?: (ctx: LiteralExpressionContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.selectStatement`.
     * @param ctx the parse tree
     */
    enterSelectStatement?: (ctx: SelectStatementContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.selectStatement`.
     * @param ctx the parse tree
     */
    exitSelectStatement?: (ctx: SelectStatementContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.selectClause`.
     * @param ctx the parse tree
     */
    enterSelectClause?: (ctx: SelectClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.selectClause`.
     * @param ctx the parse tree
     */
    exitSelectClause?: (ctx: SelectClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.resultColumn`.
     * @param ctx the parse tree
     */
    enterResultColumn?: (ctx: ResultColumnContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.resultColumn`.
     * @param ctx the parse tree
     */
    exitResultColumn?: (ctx: ResultColumnContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.intoClause`.
     * @param ctx the parse tree
     */
    enterIntoClause?: (ctx: IntoClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.intoClause`.
     * @param ctx the parse tree
     */
    exitIntoClause?: (ctx: IntoClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.intoItem`.
     * @param ctx the parse tree
     */
    enterIntoItem?: (ctx: IntoItemContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.intoItem`.
     * @param ctx the parse tree
     */
    exitIntoItem?: (ctx: IntoItemContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.fromClause`.
     * @param ctx the parse tree
     */
    enterFromClause?: (ctx: FromClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.fromClause`.
     * @param ctx the parse tree
     */
    exitFromClause?: (ctx: FromClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.whereClause`.
     * @param ctx the parse tree
     */
    enterWhereClause?: (ctx: WhereClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.whereClause`.
     * @param ctx the parse tree
     */
    exitWhereClause?: (ctx: WhereClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.groupByClause`.
     * @param ctx the parse tree
     */
    enterGroupByClause?: (ctx: GroupByClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.groupByClause`.
     * @param ctx the parse tree
     */
    exitGroupByClause?: (ctx: GroupByClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.groupByAttributeClause`.
     * @param ctx the parse tree
     */
    enterGroupByAttributeClause?: (ctx: GroupByAttributeClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.groupByAttributeClause`.
     * @param ctx the parse tree
     */
    exitGroupByAttributeClause?: (ctx: GroupByAttributeClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.number`.
     * @param ctx the parse tree
     */
    enterNumber?: (ctx: NumberContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.number`.
     * @param ctx the parse tree
     */
    exitNumber?: (ctx: NumberContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.timeRange`.
     * @param ctx the parse tree
     */
    enterTimeRange?: (ctx: TimeRangeContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.timeRange`.
     * @param ctx the parse tree
     */
    exitTimeRange?: (ctx: TimeRangeContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.havingClause`.
     * @param ctx the parse tree
     */
    enterHavingClause?: (ctx: HavingClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.havingClause`.
     * @param ctx the parse tree
     */
    exitHavingClause?: (ctx: HavingClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.orderByClause`.
     * @param ctx the parse tree
     */
    enterOrderByClause?: (ctx: OrderByClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.orderByClause`.
     * @param ctx the parse tree
     */
    exitOrderByClause?: (ctx: OrderByClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.orderByAttributeClause`.
     * @param ctx the parse tree
     */
    enterOrderByAttributeClause?: (ctx: OrderByAttributeClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.orderByAttributeClause`.
     * @param ctx the parse tree
     */
    exitOrderByAttributeClause?: (ctx: OrderByAttributeClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.sortKey`.
     * @param ctx the parse tree
     */
    enterSortKey?: (ctx: SortKeyContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.sortKey`.
     * @param ctx the parse tree
     */
    exitSortKey?: (ctx: SortKeyContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.fillClause`.
     * @param ctx the parse tree
     */
    enterFillClause?: (ctx: FillClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.fillClause`.
     * @param ctx the parse tree
     */
    exitFillClause?: (ctx: FillClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.paginationClause`.
     * @param ctx the parse tree
     */
    enterPaginationClause?: (ctx: PaginationClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.paginationClause`.
     * @param ctx the parse tree
     */
    exitPaginationClause?: (ctx: PaginationClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.rowPaginationClause`.
     * @param ctx the parse tree
     */
    enterRowPaginationClause?: (ctx: RowPaginationClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.rowPaginationClause`.
     * @param ctx the parse tree
     */
    exitRowPaginationClause?: (ctx: RowPaginationClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.seriesPaginationClause`.
     * @param ctx the parse tree
     */
    enterSeriesPaginationClause?: (ctx: SeriesPaginationClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.seriesPaginationClause`.
     * @param ctx the parse tree
     */
    exitSeriesPaginationClause?: (ctx: SeriesPaginationClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.limitClause`.
     * @param ctx the parse tree
     */
    enterLimitClause?: (ctx: LimitClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.limitClause`.
     * @param ctx the parse tree
     */
    exitLimitClause?: (ctx: LimitClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.offsetClause`.
     * @param ctx the parse tree
     */
    enterOffsetClause?: (ctx: OffsetClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.offsetClause`.
     * @param ctx the parse tree
     */
    exitOffsetClause?: (ctx: OffsetClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.slimitClause`.
     * @param ctx the parse tree
     */
    enterSlimitClause?: (ctx: SlimitClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.slimitClause`.
     * @param ctx the parse tree
     */
    exitSlimitClause?: (ctx: SlimitClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.soffsetClause`.
     * @param ctx the parse tree
     */
    enterSoffsetClause?: (ctx: SoffsetClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.soffsetClause`.
     * @param ctx the parse tree
     */
    exitSoffsetClause?: (ctx: SoffsetClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.alignByClause`.
     * @param ctx the parse tree
     */
    enterAlignByClause?: (ctx: AlignByClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.alignByClause`.
     * @param ctx the parse tree
     */
    exitAlignByClause?: (ctx: AlignByClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.insertStatement`.
     * @param ctx the parse tree
     */
    enterInsertStatement?: (ctx: InsertStatementContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.insertStatement`.
     * @param ctx the parse tree
     */
    exitInsertStatement?: (ctx: InsertStatementContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.insertColumnsSpec`.
     * @param ctx the parse tree
     */
    enterInsertColumnsSpec?: (ctx: InsertColumnsSpecContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.insertColumnsSpec`.
     * @param ctx the parse tree
     */
    exitInsertColumnsSpec?: (ctx: InsertColumnsSpecContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.insertColumn`.
     * @param ctx the parse tree
     */
    enterInsertColumn?: (ctx: InsertColumnContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.insertColumn`.
     * @param ctx the parse tree
     */
    exitInsertColumn?: (ctx: InsertColumnContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.insertValuesSpec`.
     * @param ctx the parse tree
     */
    enterInsertValuesSpec?: (ctx: InsertValuesSpecContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.insertValuesSpec`.
     * @param ctx the parse tree
     */
    exitInsertValuesSpec?: (ctx: InsertValuesSpecContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.row`.
     * @param ctx the parse tree
     */
    enterRow?: (ctx: RowContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.row`.
     * @param ctx the parse tree
     */
    exitRow?: (ctx: RowContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.deleteStatement`.
     * @param ctx the parse tree
     */
    enterDeleteStatement?: (ctx: DeleteStatementContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.deleteStatement`.
     * @param ctx the parse tree
     */
    exitDeleteStatement?: (ctx: DeleteStatementContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.createUser`.
     * @param ctx the parse tree
     */
    enterCreateUser?: (ctx: CreateUserContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.createUser`.
     * @param ctx the parse tree
     */
    exitCreateUser?: (ctx: CreateUserContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.createRole`.
     * @param ctx the parse tree
     */
    enterCreateRole?: (ctx: CreateRoleContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.createRole`.
     * @param ctx the parse tree
     */
    exitCreateRole?: (ctx: CreateRoleContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.alterUser`.
     * @param ctx the parse tree
     */
    enterAlterUser?: (ctx: AlterUserContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.alterUser`.
     * @param ctx the parse tree
     */
    exitAlterUser?: (ctx: AlterUserContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.grantUser`.
     * @param ctx the parse tree
     */
    enterGrantUser?: (ctx: GrantUserContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.grantUser`.
     * @param ctx the parse tree
     */
    exitGrantUser?: (ctx: GrantUserContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.grantRole`.
     * @param ctx the parse tree
     */
    enterGrantRole?: (ctx: GrantRoleContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.grantRole`.
     * @param ctx the parse tree
     */
    exitGrantRole?: (ctx: GrantRoleContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.grantOpt`.
     * @param ctx the parse tree
     */
    enterGrantOpt?: (ctx: GrantOptContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.grantOpt`.
     * @param ctx the parse tree
     */
    exitGrantOpt?: (ctx: GrantOptContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.grantRoleToUser`.
     * @param ctx the parse tree
     */
    enterGrantRoleToUser?: (ctx: GrantRoleToUserContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.grantRoleToUser`.
     * @param ctx the parse tree
     */
    exitGrantRoleToUser?: (ctx: GrantRoleToUserContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.revokeUser`.
     * @param ctx the parse tree
     */
    enterRevokeUser?: (ctx: RevokeUserContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.revokeUser`.
     * @param ctx the parse tree
     */
    exitRevokeUser?: (ctx: RevokeUserContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.revokeRole`.
     * @param ctx the parse tree
     */
    enterRevokeRole?: (ctx: RevokeRoleContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.revokeRole`.
     * @param ctx the parse tree
     */
    exitRevokeRole?: (ctx: RevokeRoleContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.revokeRoleFromUser`.
     * @param ctx the parse tree
     */
    enterRevokeRoleFromUser?: (ctx: RevokeRoleFromUserContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.revokeRoleFromUser`.
     * @param ctx the parse tree
     */
    exitRevokeRoleFromUser?: (ctx: RevokeRoleFromUserContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.dropUser`.
     * @param ctx the parse tree
     */
    enterDropUser?: (ctx: DropUserContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.dropUser`.
     * @param ctx the parse tree
     */
    exitDropUser?: (ctx: DropUserContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.dropRole`.
     * @param ctx the parse tree
     */
    enterDropRole?: (ctx: DropRoleContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.dropRole`.
     * @param ctx the parse tree
     */
    exitDropRole?: (ctx: DropRoleContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.listUser`.
     * @param ctx the parse tree
     */
    enterListUser?: (ctx: ListUserContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.listUser`.
     * @param ctx the parse tree
     */
    exitListUser?: (ctx: ListUserContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.listRole`.
     * @param ctx the parse tree
     */
    enterListRole?: (ctx: ListRoleContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.listRole`.
     * @param ctx the parse tree
     */
    exitListRole?: (ctx: ListRoleContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.listPrivilegesUser`.
     * @param ctx the parse tree
     */
    enterListPrivilegesUser?: (ctx: ListPrivilegesUserContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.listPrivilegesUser`.
     * @param ctx the parse tree
     */
    exitListPrivilegesUser?: (ctx: ListPrivilegesUserContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.listPrivilegesRole`.
     * @param ctx the parse tree
     */
    enterListPrivilegesRole?: (ctx: ListPrivilegesRoleContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.listPrivilegesRole`.
     * @param ctx the parse tree
     */
    exitListPrivilegesRole?: (ctx: ListPrivilegesRoleContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.privileges`.
     * @param ctx the parse tree
     */
    enterPrivileges?: (ctx: PrivilegesContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.privileges`.
     * @param ctx the parse tree
     */
    exitPrivileges?: (ctx: PrivilegesContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.privilegeValue`.
     * @param ctx the parse tree
     */
    enterPrivilegeValue?: (ctx: PrivilegeValueContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.privilegeValue`.
     * @param ctx the parse tree
     */
    exitPrivilegeValue?: (ctx: PrivilegeValueContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.usernameWithRoot`.
     * @param ctx the parse tree
     */
    enterUsernameWithRoot?: (ctx: UsernameWithRootContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.usernameWithRoot`.
     * @param ctx the parse tree
     */
    exitUsernameWithRoot?: (ctx: UsernameWithRootContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.flush`.
     * @param ctx the parse tree
     */
    enterFlush?: (ctx: FlushContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.flush`.
     * @param ctx the parse tree
     */
    exitFlush?: (ctx: FlushContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.clearCache`.
     * @param ctx the parse tree
     */
    enterClearCache?: (ctx: ClearCacheContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.clearCache`.
     * @param ctx the parse tree
     */
    exitClearCache?: (ctx: ClearCacheContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.setConfiguration`.
     * @param ctx the parse tree
     */
    enterSetConfiguration?: (ctx: SetConfigurationContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.setConfiguration`.
     * @param ctx the parse tree
     */
    exitSetConfiguration?: (ctx: SetConfigurationContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.setConfigurationEntry`.
     * @param ctx the parse tree
     */
    enterSetConfigurationEntry?: (ctx: SetConfigurationEntryContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.setConfigurationEntry`.
     * @param ctx the parse tree
     */
    exitSetConfigurationEntry?: (ctx: SetConfigurationEntryContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.settle`.
     * @param ctx the parse tree
     */
    enterSettle?: (ctx: SettleContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.settle`.
     * @param ctx the parse tree
     */
    exitSettle?: (ctx: SettleContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.startRepairData`.
     * @param ctx the parse tree
     */
    enterStartRepairData?: (ctx: StartRepairDataContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.startRepairData`.
     * @param ctx the parse tree
     */
    exitStartRepairData?: (ctx: StartRepairDataContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.stopRepairData`.
     * @param ctx the parse tree
     */
    enterStopRepairData?: (ctx: StopRepairDataContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.stopRepairData`.
     * @param ctx the parse tree
     */
    exitStopRepairData?: (ctx: StopRepairDataContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.explain`.
     * @param ctx the parse tree
     */
    enterExplain?: (ctx: ExplainContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.explain`.
     * @param ctx the parse tree
     */
    exitExplain?: (ctx: ExplainContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.setSystemStatus`.
     * @param ctx the parse tree
     */
    enterSetSystemStatus?: (ctx: SetSystemStatusContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.setSystemStatus`.
     * @param ctx the parse tree
     */
    exitSetSystemStatus?: (ctx: SetSystemStatusContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showVersion`.
     * @param ctx the parse tree
     */
    enterShowVersion?: (ctx: ShowVersionContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showVersion`.
     * @param ctx the parse tree
     */
    exitShowVersion?: (ctx: ShowVersionContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showFlushInfo`.
     * @param ctx the parse tree
     */
    enterShowFlushInfo?: (ctx: ShowFlushInfoContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showFlushInfo`.
     * @param ctx the parse tree
     */
    exitShowFlushInfo?: (ctx: ShowFlushInfoContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showLockInfo`.
     * @param ctx the parse tree
     */
    enterShowLockInfo?: (ctx: ShowLockInfoContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showLockInfo`.
     * @param ctx the parse tree
     */
    exitShowLockInfo?: (ctx: ShowLockInfoContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showQueryResource`.
     * @param ctx the parse tree
     */
    enterShowQueryResource?: (ctx: ShowQueryResourceContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showQueryResource`.
     * @param ctx the parse tree
     */
    exitShowQueryResource?: (ctx: ShowQueryResourceContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showQueries`.
     * @param ctx the parse tree
     */
    enterShowQueries?: (ctx: ShowQueriesContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showQueries`.
     * @param ctx the parse tree
     */
    exitShowQueries?: (ctx: ShowQueriesContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showCurrentTimestamp`.
     * @param ctx the parse tree
     */
    enterShowCurrentTimestamp?: (ctx: ShowCurrentTimestampContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showCurrentTimestamp`.
     * @param ctx the parse tree
     */
    exitShowCurrentTimestamp?: (ctx: ShowCurrentTimestampContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.killQuery`.
     * @param ctx the parse tree
     */
    enterKillQuery?: (ctx: KillQueryContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.killQuery`.
     * @param ctx the parse tree
     */
    exitKillQuery?: (ctx: KillQueryContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.grantWatermarkEmbedding`.
     * @param ctx the parse tree
     */
    enterGrantWatermarkEmbedding?: (ctx: GrantWatermarkEmbeddingContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.grantWatermarkEmbedding`.
     * @param ctx the parse tree
     */
    exitGrantWatermarkEmbedding?: (ctx: GrantWatermarkEmbeddingContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.revokeWatermarkEmbedding`.
     * @param ctx the parse tree
     */
    enterRevokeWatermarkEmbedding?: (ctx: RevokeWatermarkEmbeddingContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.revokeWatermarkEmbedding`.
     * @param ctx the parse tree
     */
    exitRevokeWatermarkEmbedding?: (ctx: RevokeWatermarkEmbeddingContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.loadConfiguration`.
     * @param ctx the parse tree
     */
    enterLoadConfiguration?: (ctx: LoadConfigurationContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.loadConfiguration`.
     * @param ctx the parse tree
     */
    exitLoadConfiguration?: (ctx: LoadConfigurationContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.loadTimeseries`.
     * @param ctx the parse tree
     */
    enterLoadTimeseries?: (ctx: LoadTimeseriesContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.loadTimeseries`.
     * @param ctx the parse tree
     */
    exitLoadTimeseries?: (ctx: LoadTimeseriesContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.loadFile`.
     * @param ctx the parse tree
     */
    enterLoadFile?: (ctx: LoadFileContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.loadFile`.
     * @param ctx the parse tree
     */
    exitLoadFile?: (ctx: LoadFileContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.loadFileAttributeClauses`.
     * @param ctx the parse tree
     */
    enterLoadFileAttributeClauses?: (ctx: LoadFileAttributeClausesContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.loadFileAttributeClauses`.
     * @param ctx the parse tree
     */
    exitLoadFileAttributeClauses?: (ctx: LoadFileAttributeClausesContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.loadFileAttributeClause`.
     * @param ctx the parse tree
     */
    enterLoadFileAttributeClause?: (ctx: LoadFileAttributeClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.loadFileAttributeClause`.
     * @param ctx the parse tree
     */
    exitLoadFileAttributeClause?: (ctx: LoadFileAttributeClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.loadFileWithAttributeClauses`.
     * @param ctx the parse tree
     */
    enterLoadFileWithAttributeClauses?: (ctx: LoadFileWithAttributeClausesContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.loadFileWithAttributeClauses`.
     * @param ctx the parse tree
     */
    exitLoadFileWithAttributeClauses?: (ctx: LoadFileWithAttributeClausesContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.loadFileWithAttributeClause`.
     * @param ctx the parse tree
     */
    enterLoadFileWithAttributeClause?: (ctx: LoadFileWithAttributeClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.loadFileWithAttributeClause`.
     * @param ctx the parse tree
     */
    exitLoadFileWithAttributeClause?: (ctx: LoadFileWithAttributeClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.removeFile`.
     * @param ctx the parse tree
     */
    enterRemoveFile?: (ctx: RemoveFileContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.removeFile`.
     * @param ctx the parse tree
     */
    exitRemoveFile?: (ctx: RemoveFileContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.unloadFile`.
     * @param ctx the parse tree
     */
    enterUnloadFile?: (ctx: UnloadFileContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.unloadFile`.
     * @param ctx the parse tree
     */
    exitUnloadFile?: (ctx: UnloadFileContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.setSqlDialect`.
     * @param ctx the parse tree
     */
    enterSetSqlDialect?: (ctx: SetSqlDialectContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.setSqlDialect`.
     * @param ctx the parse tree
     */
    exitSetSqlDialect?: (ctx: SetSqlDialectContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showCurrentSqlDialect`.
     * @param ctx the parse tree
     */
    enterShowCurrentSqlDialect?: (ctx: ShowCurrentSqlDialectContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showCurrentSqlDialect`.
     * @param ctx the parse tree
     */
    exitShowCurrentSqlDialect?: (ctx: ShowCurrentSqlDialectContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.showCurrentUser`.
     * @param ctx the parse tree
     */
    enterShowCurrentUser?: (ctx: ShowCurrentUserContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.showCurrentUser`.
     * @param ctx the parse tree
     */
    exitShowCurrentUser?: (ctx: ShowCurrentUserContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.syncAttributeClauses`.
     * @param ctx the parse tree
     */
    enterSyncAttributeClauses?: (ctx: SyncAttributeClausesContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.syncAttributeClauses`.
     * @param ctx the parse tree
     */
    exitSyncAttributeClauses?: (ctx: SyncAttributeClausesContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.fullPath`.
     * @param ctx the parse tree
     */
    enterFullPath?: (ctx: FullPathContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.fullPath`.
     * @param ctx the parse tree
     */
    exitFullPath?: (ctx: FullPathContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.fullPathInExpression`.
     * @param ctx the parse tree
     */
    enterFullPathInExpression?: (ctx: FullPathInExpressionContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.fullPathInExpression`.
     * @param ctx the parse tree
     */
    exitFullPathInExpression?: (ctx: FullPathInExpressionContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.prefixPath`.
     * @param ctx the parse tree
     */
    enterPrefixPath?: (ctx: PrefixPathContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.prefixPath`.
     * @param ctx the parse tree
     */
    exitPrefixPath?: (ctx: PrefixPathContext) => void;
    /**
     * Enter a parse tree produced by the `fullPathInIntoPath`
     * labeled alternative in `IoTDBSqlParser.intoPath`.
     * @param ctx the parse tree
     */
    enterFullPathInIntoPath?: (ctx: FullPathInIntoPathContext) => void;
    /**
     * Exit a parse tree produced by the `fullPathInIntoPath`
     * labeled alternative in `IoTDBSqlParser.intoPath`.
     * @param ctx the parse tree
     */
    exitFullPathInIntoPath?: (ctx: FullPathInIntoPathContext) => void;
    /**
     * Enter a parse tree produced by the `suffixPathInIntoPath`
     * labeled alternative in `IoTDBSqlParser.intoPath`.
     * @param ctx the parse tree
     */
    enterSuffixPathInIntoPath?: (ctx: SuffixPathInIntoPathContext) => void;
    /**
     * Exit a parse tree produced by the `suffixPathInIntoPath`
     * labeled alternative in `IoTDBSqlParser.intoPath`.
     * @param ctx the parse tree
     */
    exitSuffixPathInIntoPath?: (ctx: SuffixPathInIntoPathContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.nodeName`.
     * @param ctx the parse tree
     */
    enterNodeName?: (ctx: NodeNameContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.nodeName`.
     * @param ctx the parse tree
     */
    exitNodeName?: (ctx: NodeNameContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.nodeNameWithoutWildcard`.
     * @param ctx the parse tree
     */
    enterNodeNameWithoutWildcard?: (ctx: NodeNameWithoutWildcardContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.nodeNameWithoutWildcard`.
     * @param ctx the parse tree
     */
    exitNodeNameWithoutWildcard?: (ctx: NodeNameWithoutWildcardContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.nodeNameSlice`.
     * @param ctx the parse tree
     */
    enterNodeNameSlice?: (ctx: NodeNameSliceContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.nodeNameSlice`.
     * @param ctx the parse tree
     */
    exitNodeNameSlice?: (ctx: NodeNameSliceContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.nodeNameInIntoPath`.
     * @param ctx the parse tree
     */
    enterNodeNameInIntoPath?: (ctx: NodeNameInIntoPathContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.nodeNameInIntoPath`.
     * @param ctx the parse tree
     */
    exitNodeNameInIntoPath?: (ctx: NodeNameInIntoPathContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.wildcard`.
     * @param ctx the parse tree
     */
    enterWildcard?: (ctx: WildcardContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.wildcard`.
     * @param ctx the parse tree
     */
    exitWildcard?: (ctx: WildcardContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.constant`.
     * @param ctx the parse tree
     */
    enterConstant?: (ctx: ConstantContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.constant`.
     * @param ctx the parse tree
     */
    exitConstant?: (ctx: ConstantContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.datetimeLiteral`.
     * @param ctx the parse tree
     */
    enterDatetimeLiteral?: (ctx: DatetimeLiteralContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.datetimeLiteral`.
     * @param ctx the parse tree
     */
    exitDatetimeLiteral?: (ctx: DatetimeLiteralContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.realLiteral`.
     * @param ctx the parse tree
     */
    enterRealLiteral?: (ctx: RealLiteralContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.realLiteral`.
     * @param ctx the parse tree
     */
    exitRealLiteral?: (ctx: RealLiteralContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.timeValue`.
     * @param ctx the parse tree
     */
    enterTimeValue?: (ctx: TimeValueContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.timeValue`.
     * @param ctx the parse tree
     */
    exitTimeValue?: (ctx: TimeValueContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.dateExpression`.
     * @param ctx the parse tree
     */
    enterDateExpression?: (ctx: DateExpressionContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.dateExpression`.
     * @param ctx the parse tree
     */
    exitDateExpression?: (ctx: DateExpressionContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.caseWhenThenExpression`.
     * @param ctx the parse tree
     */
    enterCaseWhenThenExpression?: (ctx: CaseWhenThenExpressionContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.caseWhenThenExpression`.
     * @param ctx the parse tree
     */
    exitCaseWhenThenExpression?: (ctx: CaseWhenThenExpressionContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.whenThenExpression`.
     * @param ctx the parse tree
     */
    enterWhenThenExpression?: (ctx: WhenThenExpressionContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.whenThenExpression`.
     * @param ctx the parse tree
     */
    exitWhenThenExpression?: (ctx: WhenThenExpressionContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.functionName`.
     * @param ctx the parse tree
     */
    enterFunctionName?: (ctx: FunctionNameContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.functionName`.
     * @param ctx the parse tree
     */
    exitFunctionName?: (ctx: FunctionNameContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.scalarFunctionExpression`.
     * @param ctx the parse tree
     */
    enterScalarFunctionExpression?: (ctx: ScalarFunctionExpressionContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.scalarFunctionExpression`.
     * @param ctx the parse tree
     */
    exitScalarFunctionExpression?: (ctx: ScalarFunctionExpressionContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.operator_eq`.
     * @param ctx the parse tree
     */
    enterOperator_eq?: (ctx: Operator_eqContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.operator_eq`.
     * @param ctx the parse tree
     */
    exitOperator_eq?: (ctx: Operator_eqContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.operator_and`.
     * @param ctx the parse tree
     */
    enterOperator_and?: (ctx: Operator_andContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.operator_and`.
     * @param ctx the parse tree
     */
    exitOperator_and?: (ctx: Operator_andContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.operator_or`.
     * @param ctx the parse tree
     */
    enterOperator_or?: (ctx: Operator_orContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.operator_or`.
     * @param ctx the parse tree
     */
    exitOperator_or?: (ctx: Operator_orContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.operator_not`.
     * @param ctx the parse tree
     */
    enterOperator_not?: (ctx: Operator_notContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.operator_not`.
     * @param ctx the parse tree
     */
    exitOperator_not?: (ctx: Operator_notContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.operator_contains`.
     * @param ctx the parse tree
     */
    enterOperator_contains?: (ctx: Operator_containsContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.operator_contains`.
     * @param ctx the parse tree
     */
    exitOperator_contains?: (ctx: Operator_containsContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.operator_between`.
     * @param ctx the parse tree
     */
    enterOperator_between?: (ctx: Operator_betweenContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.operator_between`.
     * @param ctx the parse tree
     */
    exitOperator_between?: (ctx: Operator_betweenContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.operator_is`.
     * @param ctx the parse tree
     */
    enterOperator_is?: (ctx: Operator_isContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.operator_is`.
     * @param ctx the parse tree
     */
    exitOperator_is?: (ctx: Operator_isContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.operator_in`.
     * @param ctx the parse tree
     */
    enterOperator_in?: (ctx: Operator_inContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.operator_in`.
     * @param ctx the parse tree
     */
    exitOperator_in?: (ctx: Operator_inContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.null_literal`.
     * @param ctx the parse tree
     */
    enterNull_literal?: (ctx: Null_literalContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.null_literal`.
     * @param ctx the parse tree
     */
    exitNull_literal?: (ctx: Null_literalContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.nan_literal`.
     * @param ctx the parse tree
     */
    enterNan_literal?: (ctx: Nan_literalContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.nan_literal`.
     * @param ctx the parse tree
     */
    exitNan_literal?: (ctx: Nan_literalContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.boolean_literal`.
     * @param ctx the parse tree
     */
    enterBoolean_literal?: (ctx: Boolean_literalContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.boolean_literal`.
     * @param ctx the parse tree
     */
    exitBoolean_literal?: (ctx: Boolean_literalContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.attributeClauses`.
     * @param ctx the parse tree
     */
    enterAttributeClauses?: (ctx: AttributeClausesContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.attributeClauses`.
     * @param ctx the parse tree
     */
    exitAttributeClauses?: (ctx: AttributeClausesContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.aliasNodeName`.
     * @param ctx the parse tree
     */
    enterAliasNodeName?: (ctx: AliasNodeNameContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.aliasNodeName`.
     * @param ctx the parse tree
     */
    exitAliasNodeName?: (ctx: AliasNodeNameContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.tagClause`.
     * @param ctx the parse tree
     */
    enterTagClause?: (ctx: TagClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.tagClause`.
     * @param ctx the parse tree
     */
    exitTagClause?: (ctx: TagClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.attributeClause`.
     * @param ctx the parse tree
     */
    enterAttributeClause?: (ctx: AttributeClauseContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.attributeClause`.
     * @param ctx the parse tree
     */
    exitAttributeClause?: (ctx: AttributeClauseContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.attributePair`.
     * @param ctx the parse tree
     */
    enterAttributePair?: (ctx: AttributePairContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.attributePair`.
     * @param ctx the parse tree
     */
    exitAttributePair?: (ctx: AttributePairContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.attributeKey`.
     * @param ctx the parse tree
     */
    enterAttributeKey?: (ctx: AttributeKeyContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.attributeKey`.
     * @param ctx the parse tree
     */
    exitAttributeKey?: (ctx: AttributeKeyContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.attributeValue`.
     * @param ctx the parse tree
     */
    enterAttributeValue?: (ctx: AttributeValueContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.attributeValue`.
     * @param ctx the parse tree
     */
    exitAttributeValue?: (ctx: AttributeValueContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.alias`.
     * @param ctx the parse tree
     */
    enterAlias?: (ctx: AliasContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.alias`.
     * @param ctx the parse tree
     */
    exitAlias?: (ctx: AliasContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.subStringExpression`.
     * @param ctx the parse tree
     */
    enterSubStringExpression?: (ctx: SubStringExpressionContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.subStringExpression`.
     * @param ctx the parse tree
     */
    exitSubStringExpression?: (ctx: SubStringExpressionContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.signedIntegerLiteral`.
     * @param ctx the parse tree
     */
    enterSignedIntegerLiteral?: (ctx: SignedIntegerLiteralContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.signedIntegerLiteral`.
     * @param ctx the parse tree
     */
    exitSignedIntegerLiteral?: (ctx: SignedIntegerLiteralContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.identifier`.
     * @param ctx the parse tree
     */
    enterIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.identifier`.
     * @param ctx the parse tree
     */
    exitIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Enter a parse tree produced by `IoTDBSqlParser.keyWords`.
     * @param ctx the parse tree
     */
    enterKeyWords?: (ctx: KeyWordsContext) => void;
    /**
     * Exit a parse tree produced by `IoTDBSqlParser.keyWords`.
     * @param ctx the parse tree
     */
    exitKeyWords?: (ctx: KeyWordsContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

