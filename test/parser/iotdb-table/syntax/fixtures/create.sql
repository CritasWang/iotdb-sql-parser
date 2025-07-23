-- Basic CREATE TABLE statements for IoTDB
CREATE TABLE users (
    time TIMESTAMP TIME,
    region STRING TAG,
    user_id STRING TAG,
    name STRING ATTRIBUTE COMMENT 'user name',
    email STRING ATTRIBUTE COMMENT 'user email',
    age INT32 FIELD COMMENT 'user age',
    status BOOLEAN FIELD COMMENT 'user status'
) COMMENT 'users table' WITH (TTL=31536000000);

CREATE TABLE IF NOT EXISTS products (
    time TIMESTAMP TIME,
    category STRING TAG COMMENT 'product category',
    product_id STRING TAG COMMENT 'product identifier', 
    name STRING ATTRIBUTE COMMENT 'product name',
    description STRING ATTRIBUTE COMMENT 'product description',
    price FLOAT FIELD COMMENT 'product price',
    stock INT32 FIELD COMMENT 'stock quantity',
    is_active BOOLEAN FIELD COMMENT 'product active status'
) COMMENT 'products table' WITH (TTL=DEFAULT);

-- CREATE TABLE with minimal columns
CREATE TABLE orders (
    region STRING TAG,
    order_id STRING TAG,
    user_id STRING ATTRIBUTE COMMENT 'user identifier',
    total DOUBLE FIELD COMMENT 'order total amount',
    status STRING FIELD COMMENT 'order status'
) COMMENT 'orders table';

-- CREATE TABLE with Chinese column names
CREATE TABLE "设备数据" (
    time TIMESTAMP TIME,
    "区域" STRING TAG COMMENT '设备区域',
    "设备ID" STRING TAG COMMENT '设备标识',
    "型号" STRING ATTRIBUTE COMMENT '设备型号',
    "温度" FLOAT FIELD COMMENT '温度传感器数据',
    "湿度" FLOAT FIELD COMMENT '湿度传感器数据',
    "状态" BOOLEAN FIELD COMMENT '设备运行状态'
) COMMENT '设备监控表' WITH (TTL=2592000000);

-- Simple CREATE TABLE without explicit time column
CREATE TABLE sensors (
    plant_id STRING TAG,
    device_id STRING TAG,
    model STRING ATTRIBUTE,
    temperature FLOAT FIELD,
    humidity DOUBLE FIELD
);
