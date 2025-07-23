import type { RelationalSqlListener } from '../../lib/iotdb-table/RelationalSqlListener';
import {
    AliasedRelationContext,
    CreateDbStatementContext,
    ColumnDefinitionContext,
    CreateViewStatementContext,
    CreateTableStatementContext,
    InsertStatementContext,
    QueryStatementContext,
    SingleStatementContext,
    ViewColumnDefinitionContext,
    QualifiedNameContext,
    CreateFunctionStatementContext,
} from '../../lib/iotdb-table/RelationalSqlParser';
import { AttrName, EntityCollector, StmtContextType } from '../common/entityCollector';
import { EntityContextType } from '../common/types';

export class IoTDBTableEntityCollector extends EntityCollector implements RelationalSqlListener {
    /** ====== Entity Begin */

    // 数据库相关实体
    exitCreateDbStatement(ctx: CreateDbStatementContext) {
        // 在 CREATE DATABASE 语句中收集数据库名称
        const databaseName = ctx.identifier();
        if (databaseName) {
            this.pushEntity(databaseName, EntityContextType.DATABASE_CREATE);
        }
    }

    // 表相关实体 - 使用 qualifiedName 规则
    exitQualifiedName(ctx: QualifiedNameContext) {
        const rootStmt = this.getRootStmt();
        if (!rootStmt) return;

        // 根据语句类型决定实体类型
        switch (rootStmt.stmtContextType) {
            case StmtContextType.CREATE_TABLE_STMT:
                this.pushEntity(ctx, EntityContextType.TABLE_CREATE, [
                    {
                        attrName: AttrName.comment,
                        endContextList: [CreateTableStatementContext.name],
                    },
                ]);
                break;
            case StmtContextType.CREATE_VIEW_STMT:
                this.pushEntity(ctx, EntityContextType.VIEW_CREATE, [
                    {
                        attrName: AttrName.comment,
                        endContextList: [CreateViewStatementContext.name],
                    },
                ]);
                break;
            case StmtContextType.SELECT_STMT:
                // 在 SELECT 语句中，qualifiedName 通常指向现有的表或视图
                const needCollectAttr = true;
                this.pushEntity(
                    ctx,
                    EntityContextType.TABLE,
                    needCollectAttr
                        ? [
                              {
                                  attrName: AttrName.alias,
                                  endContextList: [AliasedRelationContext.name],
                              },
                          ]
                        : undefined
                );
                break;
            case StmtContextType.INSERT_STMT:
                this.pushEntity(ctx, EntityContextType.TABLE);
                break;
            default:
                // 默认情况下视为表引用
                this.pushEntity(ctx, EntityContextType.TABLE);
                break;
        }
    }

    // 列定义相关
    exitColumnDefinition(ctx: ColumnDefinitionContext) {
        this.pushEntity(ctx, EntityContextType.COLUMN_CREATE, [
            {
                attrName: AttrName.colType,
                endContextList: [ColumnDefinitionContext.name],
            },
            {
                attrName: AttrName.comment,
                endContextList: [ColumnDefinitionContext.name],
            },
        ]);
    }

    exitViewColumnDefinition(ctx: ViewColumnDefinitionContext) {
        this.pushEntity(ctx, EntityContextType.COLUMN_CREATE, [
            {
                attrName: AttrName.colType,
                endContextList: [ViewColumnDefinitionContext.name],
            },
            {
                attrName: AttrName.comment,
                endContextList: [ViewColumnDefinitionContext.name],
            },
        ]);
    }

    // 函数相关
    exitCreateFunctionStatement(ctx: CreateFunctionStatementContext) {
        // 收集函数名称
        const functionName = ctx.identifier();
        if (functionName) {
            this.pushEntity(functionName, EntityContextType.FUNCTION_CREATE);
        }
    }

    /** ===== Statement begin */

    enterSingleStatement(ctx: SingleStatementContext) {
        this.pushStmt(ctx, StmtContextType.COMMON_STMT);
    }

    exitSingleStatement(_ctx: SingleStatementContext) {
        this.popStmt();
    }

    enterCreateTableStatement(ctx: CreateTableStatementContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }

    exitCreateTableStatement(_ctx: CreateTableStatementContext) {
        this.popStmt();
    }

    enterCreateViewStatement(ctx: CreateViewStatementContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
    }

    exitCreateViewStatement(_ctx: CreateViewStatementContext) {
        this.popStmt();
    }

    enterQueryStatement(ctx: QueryStatementContext) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }

    exitQueryStatement(_ctx: QueryStatementContext) {
        this.popStmt();
    }

    enterInsertStatement(ctx: InsertStatementContext) {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    }

    exitInsertStatement(_ctx: InsertStatementContext) {
        this.popStmt();
    }
}
