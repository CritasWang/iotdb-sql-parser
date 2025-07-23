import type { IoTDBSqlParserListener } from '../../lib/iotdb-tree/IoTDBSqlParserListener';
import {
    CreateDatabaseContext,
    CreateTimeseriesContext,
    CreateFunctionContext,
    SingleStatementContext,
    FullPathContext,
    IdentifierContext,
    PrefixPathContext,
    SelectStatementContext,
    InsertStatementContext,
} from '../../lib/iotdb-tree/IoTDBSqlParser';
import { EntityCollector, StmtContextType } from '../common/entityCollector';
import { EntityContextType } from '../common/types';

export class IoTDBTreeEntityCollector extends EntityCollector implements IoTDBSqlParserListener {
    /** ====== Entity Begin */

    // 路径相关实体
    exitFullPath(ctx: FullPathContext) {
        const rootStmt = this.getRootStmt();
        if (!rootStmt) return;

        // 根据语句类型决定实体类型
        switch (rootStmt.stmtContextType) {
            case StmtContextType.SELECT_STMT:
                // 在 SELECT 语句中，fullPath 通常指向现有的时间序列
                this.pushEntity(ctx, EntityContextType.TIMESERIES);
                break;
            case StmtContextType.INSERT_STMT:
                // 在 INSERT 语句中，fullPath 指向目标时间序列
                this.pushEntity(ctx, EntityContextType.TIMESERIES);
                break;
            case StmtContextType.CREATE_TIMESERIES_STMT:
                // 在 CREATE TIMESERIES 语句中，fullPath 指向要创建的时间序列
                this.pushEntity(ctx, EntityContextType.TIMESERIES_CREATE);
                break;
            default:
                // 默认情况下视为时间序列引用
                this.pushEntity(ctx, EntityContextType.TIMESERIES);
                break;
        }
    }

    // 标识符相关
    exitIdentifier(ctx: IdentifierContext) {
        const rootStmt = this.getRootStmt();
        if (!rootStmt) return;

        // 通常标识符在数据库、函数创建等语句中使用
        switch (rootStmt.stmtContextType) {
            case StmtContextType.CREATE_DATABASE_STMT:
                this.pushEntity(ctx, EntityContextType.DATABASE_CREATE);
                break;
            case StmtContextType.CREATE_FUNCTION_STMT:
                this.pushEntity(ctx, EntityContextType.FUNCTION_CREATE);
                break;
            default:
                // 对于其他情况，标识符可能是设备名或测点名的一部分
                // 这里不处理，让具体的路径规则处理
                break;
        }
    }

    // 前缀路径相关实体（用于设备路径、数据库路径等）
    exitPrefixPath(ctx: PrefixPathContext) {
        const rootStmt = this.getRootStmt();
        if (!rootStmt) return;

        // 根据语句类型决定实体类型
        switch (rootStmt.stmtContextType) {
            case StmtContextType.CREATE_DATABASE_STMT:
                // 在 CREATE DATABASE 语句中，prefixPath 指向要创建的数据库
                this.pushEntity(ctx, EntityContextType.DATABASE_CREATE);
                break;
            case StmtContextType.SELECT_STMT:
            case StmtContextType.INSERT_STMT:
                // 在查询和插入语句中，prefixPath 通常表示设备路径
                this.pushEntity(ctx, EntityContextType.DEVICE);
                break;
            default:
                // 默认情况下视为设备路径
                this.pushEntity(ctx, EntityContextType.DEVICE);
                break;
        }
    }

    /** ===== Statement begin */

    enterSingleStatement(ctx: SingleStatementContext) {
        this.pushStmt(ctx, StmtContextType.COMMON_STMT);
    }

    exitSingleStatement(_ctx: SingleStatementContext) {
        this.popStmt();
    }

    enterCreateDatabase(ctx: CreateDatabaseContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_DATABASE_STMT);
    }

    exitCreateDatabase(_ctx: CreateDatabaseContext) {
        // prefixPath 的处理已经在 exitPrefixPath 中统一处理
        this.popStmt();
    }

    enterCreateTimeseries(ctx: CreateTimeseriesContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_TIMESERIES_STMT);
    }

    exitCreateTimeseries(_ctx: CreateTimeseriesContext) {
        // fullPath 的处理已经在 exitFullPath 中统一处理
        this.popStmt();
    }

    enterCreateFunction(ctx: CreateFunctionContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_FUNCTION_STMT);
    }

    exitCreateFunction(_ctx: CreateFunctionContext) {
        // 函数名的处理已经在 exitIdentifier 中统一处理
        this.popStmt();
    }

    enterSelectStatement(ctx: SelectStatementContext) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }

    exitSelectStatement(_ctx: SelectStatementContext) {
        this.popStmt();
    }

    enterInsertStatement(ctx: InsertStatementContext) {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    }

    exitInsertStatement(_ctx: InsertStatementContext) {
        this.popStmt();
    }
}
