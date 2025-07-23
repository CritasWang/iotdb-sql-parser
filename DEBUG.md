# 测试调试指南

本文档介绍如何在 `iotdb-sql-parser` 项目中调试测试。

## 调试方式

### 1. 使用 VS Code 调试（推荐）

#### 前置条件
确保您使用的是 VS Code 编辑器，并且已经安装了项目依赖：
```bash
pnpm install
```

#### 调试配置
项目已经预配置了多种调试选项，可以在 VS Code 的调试面板中选择：

1. **Debug Jest Tests**: 调试所有测试
2. **Debug Current Jest Test**: 调试当前文件中的特定测试
3. **Debug Jest Test File**: 调试当前打开的测试文件
4. **Debug IoTDB Tree Listener Test**: 专门调试 IoTDB Tree Listener 测试
5. **Debug with pnpm (Alternative)**: 使用 pnpm 的备选调试方式

#### 使用步骤
1. 在测试文件中设置断点
2. 按 `F5` 或在调试面板中选择调试配置
3. 选择对应的调试选项
4. 调试器会在断点处停止，您可以检查变量、调用堆栈等

#### 常见问题修复
如果遇到类似这样的错误：
```
SyntaxError: missing ) after argument list
```
这是因为 VS Code 试图直接执行 shell 脚本。我们已经修复了调试配置，现在使用 `jest.js` 而不是 shell 脚本。

### 2. 命令行调试

#### 调试所有测试
```bash
pnpm test:debug
```

#### 调试特定测试文件
```bash
pnpm test:debug -- test/parser/iotdb-tree/listener.test.ts
```

#### 调试特定测试用例
```bash
pnpm test:debug -- --testNamePattern="Listener enterFullPath"
```

### 3. 监视模式调试

在开发过程中，可以使用监视模式来自动重新运行测试：
```bash
pnpm test:watch
```

### 4. 浏览器调试

如果您喜欢在浏览器中调试：

1. 运行调试命令：
```bash
pnpm test:debug
```

2. 打开 Chrome 浏览器，访问 `chrome://inspect`

3. 点击 "Open dedicated DevTools for Node"

4. 设置断点并开始调试

## 调试技巧

### 1. 添加调试信息
在测试中添加 `console.log` 来输出调试信息：

```typescript
test('Listener enterFullPath', async () => {
    class MyListener extends IoTDBSqlParserListener {
        result = '';
        enterFullPath = (ctx): void => {
            console.log('Context text:', ctx.getText()); // 调试输出
            this.result = ctx.getText();
        };
    }
    const listener = new MyListener();
    
    iotdbTree.listen(listener, parseTree);
    console.log('Final result:', listener.result); // 调试输出
    expect(listener.result).toBe(expectPath);
});
```

### 2. 使用 Jest 调试工具
```typescript
// 在测试中使用 Jest 的调试功能
test('Debug example', () => {
    const result = someFunction();
    
    // 打印结果用于调试
    console.log('Result:', JSON.stringify(result, null, 2));
    
    // 或者使用 Jest 的快照功能来查看数据结构
    expect(result).toMatchSnapshot();
});
```

### 3. 断点调试
在代码中添加 `debugger` 语句：

```typescript
test('Listener enterFullPath', async () => {
    class MyListener extends IoTDBSqlParserListener {
        result = '';
        enterFullPath = (ctx): void => {
            debugger; // 调试器会在这里停止
            this.result = ctx.getText();
        };
    }
    // ...
});
```

### 4. 测试隔离
运行单个测试用例来减少干扰：

```bash
# 只运行包含 "enterFullPath" 的测试
pnpm test:single -- --testNamePattern="enterFullPath"

# 只运行特定文件
pnpm test:single -- test/parser/iotdb-tree/listener.test.ts
```

## 常见问题解决

### 1. 调试器无法连接
- 确保没有其他 Node.js 调试进程在运行
- 检查端口 9229 是否被占用
- 重启 VS Code

### 2. 断点不生效
- 确保 TypeScript 源码映射正确
- 检查 `tsconfig.json` 中的 `sourceMap` 选项
- 确保断点设置在可执行的代码行上

### 3. 测试超时
在调试模式下，Jest 可能会超时。可以增加超时时间：

```typescript
test('Long running test', async () => {
    // 增加超时时间到 30 秒
    jest.setTimeout(30000);
    
    // 您的测试代码
}, 30000);
```

### 4. 环境变量问题
确保调试时使用正确的环境变量：

```json
{
    "env": {
        "NODE_OPTIONS": "--max_old_space_size=4096",
        "NODE_ENV": "test"
    }
}
```

## 调试特定组件

### 调试 Listener
```typescript
test('Debug listener behavior', () => {
    class DebugListener extends IoTDBSqlParserListener {
        enterEveryRule = (ctx) => {
            console.log(`Entering: ${ctx.constructor.name}`);
        };
        
        exitEveryRule = (ctx) => {
            console.log(`Exiting: ${ctx.constructor.name}`);
        };
    }
    
    const listener = new DebugListener();
    iotdbTree.listen(listener, parseTree);
});
```

### 调试 Parser 树
```typescript
test('Debug parse tree', () => {
    const parseTree = iotdbTree.parse(sql);
    
    // 输出解析树结构
    console.log('Parse tree:', parseTree.toStringTree());
    
    // 或者使用 visitor 遍历树
    class DebugVisitor extends IoTDBSqlParserVisitor<void> {
        visitChildren(node) {
            console.log(`Visiting: ${node.constructor.name}, Text: ${node.getText()}`);
            return super.visitChildren(node);
        }
    }
    
    const visitor = new DebugVisitor();
    visitor.visit(parseTree);
});
```

## 性能调试

### 1. 测试执行时间
```bash
# 显示详细的测试执行时间
pnpm test -- --verbose
```

### 2. 内存使用分析
```bash
# 使用更大的内存限制并监控
NODE_OPTIONS="--max_old_space_size=8192 --trace-gc" pnpm test
```

希望这个指南能帮助您有效地调试测试！
