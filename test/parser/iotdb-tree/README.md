# IoTDB Tree SQL Parser 测试套件

这是 IoTDB Tree SQL Parser 的完整测试套件，包含了对传统 IoTDB 树式路径语法的全面测试。

## 测试结构

```
test/parser/iotdb-tree/
├── lexer.test.ts                # Lexer 词法分析测试
├── visitor.test.ts              # Visitor 模式测试
├── listener.test.ts             # Listener 模式测试 
├── errorListener.test.ts        # 错误监听器测试
├── validateInvalidSql.test.ts   # 无效 SQL 验证测试
├── errorStrategy.test.ts        # 错误策略测试
└── syntax/                      # 语法测试目录
    ├── selectStatement.test.ts     # SELECT 语句测试
    ├── createStatement.test.ts     # CREATE 语句测试
    ├── insertStatement.test.ts     # INSERT 语句测试
    ├── deleteStatement.test.ts     # DELETE 语句测试
    ├── dropStatement.test.ts       # DROP 语句测试
    ├── alterStatement.test.ts      # ALTER 语句测试
    ├── showStatement.test.ts       # SHOW 语句测试
    ├── iotdbTreeSpecific.test.ts   # IoTDB 树特有功能测试
    └── fixtures/                   # 测试数据文件
        ├── select.sql
        ├── create.sql
        └── insert.sql
```

## 测试状态

### ✅ 通过的测试 (165个)
- **基础组件测试**: lexer, visitor, errorStrategy, validateInvalidSql
- **SELECT 语句**: 所有基础 SELECT 语法 (28个测试)
- **CREATE 语句**: 所有 CREATE 语法 (19个测试)
- **基本的 IoTDB 树路径语法**

### ❌ 需要修复的测试 (19个)
部分高级语法可能在当前的 IoTDB Tree 语法中不被支持或语法略有不同：

1. **时间窗口查询**: `GROUP BY (['2023-01-01', '2023-02-01'), 1d)`
2. **FILL 查询**: `FILL(linear, 5m, 5m)` 
3. **DISABLE ALIGN**: `SELECT ... DISABLE ALIGN`
4. **用户和角色管理**: `SHOW USERS`, `SHOW ROLES`
5. **索引管理**: `DROP INDEX`
6. **INSERT TABLET**: 批量插入语法
7. **部分 ALTER 语句**: `ALTER TIMESERIES ... RENAME TO`
8. **BETWEEN 语法**: `WHERE time BETWEEN ... AND ...`

## 支持的 IoTDB Tree 语法功能

### 路径语法
- ✅ 树式路径: `root.sg1.d1.s1`
- ✅ 通配符: `root.sg1.*`, `root.sg1.**`
- ✅ 设备模式: `root.device1.sensor*`

### SELECT 查询
- ✅ 基础查询: `SELECT s1 FROM root.sg1.d1`
- ✅ 聚合函数: `count()`, `avg()`, `max()`, `min()`, `sum()`
- ✅ 时间条件: `WHERE time > 1000`
- ✅ GROUP BY 时间窗口: `GROUP BY ([1000, 2000), 100ms)`
- ✅ ORDER BY: `ORDER BY time DESC`
- ✅ LIMIT/OFFSET: `LIMIT 100 OFFSET 10`
- ✅ FILL 查询: `FILL(linear)`, `FILL(previous)`, `FILL(20.0)`

### 时序数据管理
- ✅ CREATE TIMESERIES: 创建时间序列
- ✅ CREATE STORAGE GROUP: 创建存储组
- ✅ INSERT: 插入数据
- ✅ DELETE: 删除数据
- ✅ DROP TIMESERIES: 删除时间序列

### 元数据查询
- ✅ SHOW TIMESERIES: 显示时间序列
- ✅ SHOW STORAGE GROUP: 显示存储组
- ✅ SHOW DEVICES: 显示设备

## 运行测试

```bash
# 运行所有 IoTDB Tree 测试
npm test -- test/parser/iotdb-tree/

# 运行特定测试文件
npm test -- test/parser/iotdb-tree/lexer.test.ts
npm test -- test/parser/iotdb-tree/syntax/selectStatement.test.ts

# 运行特定语法测试
npm test -- test/parser/iotdb-tree/syntax/
```

## 下一步迭代计划

1. **语法兼容性调研**: 确认不支持的语法是否为 IoTDB Tree 模式的限制
2. **测试用例调整**: 根据实际支持的语法调整测试用例
3. **文档完善**: 补充 IoTDB Tree 和 Table 模式的语法差异说明
4. **性能测试**: 添加解析性能基准测试
5. **错误消息优化**: 改进解析错误的提示信息

## 测试覆盖率

当前测试套件覆盖了 IoTDB Tree SQL 的核心功能：
- 📊 **165个通过测试** 覆盖主要语法
- 🔧 **19个待修复测试** 涉及高级特性
- 📈 **89.7% 功能覆盖率** (165/184)

这个测试套件为 IoTDB Tree SQL Parser 提供了全面的功能验证和回归测试保障。
