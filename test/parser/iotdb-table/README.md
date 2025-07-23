# IoTDB Table 测试用例

## 概述

本文档描述了为 IoTDB Table SQL 解析器创建的测试用例结构，参考了 Trino 解析器的测试模式。

## 测试目录结构

```
test/parser/iotdb-table/
├── lexer.test.ts                    # 词法分析器测试
├── visitor.test.ts                  # 访问者模式测试
├── listener.test.ts                 # 监听器模式测试
├── errorListener.test.ts            # 错误监听器测试
├── errorStrategy.test.ts            # 错误恢复策略测试
├── validateInvalidSql.test.ts       # 无效SQL验证测试
└── syntax/                          # 语法测试目录
    ├── selectStatement.test.ts      # SELECT语句测试
    ├── insertStatement.test.ts      # INSERT语句测试
    ├── updateStatement.test.ts      # UPDATE语句测试
    ├── deleteStatement.test.ts      # DELETE语句测试
    ├── createStatement.test.ts      # CREATE语句测试
    ├── dropStatement.test.ts        # DROP语句测试
    ├── alterStatement.test.ts       # ALTER语句测试
    ├── showStatement.test.ts        # SHOW语句测试
    ├── iotdbSpecific.test.ts        # IoTDB特有功能测试
    └── fixtures/                    # 测试用SQL文件
        ├── select.sql
        ├── insert.sql
        └── create.sql
```

## 测试用例类型

### 1. 核心解析器测试

- **lexer.test.ts**: 测试词法分析器的token解析能力
- **visitor.test.ts**: 测试访问者模式的AST遍历功能
- **listener.test.ts**: 测试监听器模式的事件处理
- **errorListener.test.ts**: 测试错误处理和报告机制
- **errorStrategy.test.ts**: 测试错误恢复策略
- **validateInvalidSql.test.ts**: 测试无效SQL的验证

### 2. SQL语法测试

#### SELECT 语句测试
- 基础SELECT查询
- 聚合函数查询
- 子查询
- 时间范围查询（IoTDB特色）

#### INSERT 语句测试
- VALUES插入
- SELECT插入
- 时间戳插入（IoTDB特色）

#### UPDATE 语句测试
- 基础UPDATE操作
- 带子查询的UPDATE

#### DELETE 语句测试
- 基础DELETE操作
- 带子查询的DELETE

#### CREATE 语句测试
- CREATE TABLE
- CREATE DATABASE

#### DROP 语句测试
- DROP TABLE
- DROP DATABASE

#### ALTER 语句测试
- 列操作
- 表重命名

#### SHOW 语句测试
- SHOW TABLES
- SHOW DATABASES
- DESCRIBE

#### IoTDB 特有功能测试
- 时序数据查询
- 聚合查询
- 基础CRUD操作

## 设计原则

1. **参考Trino结构**: 保持与项目中Trino测试用例相同的结构和命名约定
2. **适配IoTDB语法**: 针对IoTDB Table的实际语法支持进行调整
3. **渐进式测试**: 从基础语法到复杂查询，层层递进
4. **错误处理**: 确保错误情况得到正确处理
5. **实用性**: 测试用例反映真实使用场景

## 运行测试

```bash
# 运行所有IoTDB Table测试
npm test -- test/parser/iotdb-table/

# 运行特定测试
npm test -- test/parser/iotdb-table/lexer.test.ts

# 运行语法测试
npm test -- test/parser/iotdb-table/syntax/
```

## 测试状态

- ✅ 核心解析器测试 (lexer, visitor, errorListener, validateInvalidSql)
- ✅ SELECT语句测试
- ✅ 基础CRUD操作测试
- ⚠️ 高级语法特性（部分支持，根据IoTDB Table实际语法能力）

## 注意事项

1. IoTDB Table解析器的语法支持与标准SQL有所不同
2. 某些高级SQL特性（如复杂的JOIN、存储过程等）可能不被支持
3. 测试用例已经针对IoTDB Table的实际能力进行了调整
4. 建议在添加新的测试用例时，先验证语法是否被IoTDB Table支持

## 扩展建议

1. 添加更多IoTDB特有的时序数据处理功能测试
2. 增加性能测试用例
3. 添加集成测试
4. 增加更多边界条件测试
